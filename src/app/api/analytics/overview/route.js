import { connectToMongoDB } from "@/app/lib/db";
import Project from "@/app/models/projectModel";
import Client from "@/app/models/clientModel";
import TimeTracking from "@/app/models/timeTrackingModel";
import Revenue from "@/app/models/revenueModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToMongoDB();

    // Get current date for calculations
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

    // Fetch all data in parallel
    const [
      totalProjects,
      totalClients,
      totalTimeSpent,
      totalRevenue,
      lastMonthRevenue,
      lastMonthProjects,
      lastMonthTimeSpent,
      lastMonthClients,
      projectStatusCounts,
      recentProjects
    ] = await Promise.all([
      // Total counts
      Project.countDocuments(),
      Client.countDocuments({ status: 'Active' }),
      TimeTracking.aggregate([
        { $group: { _id: null, totalHours: { $sum: "$hoursWorked" } } }
      ]),
      Revenue.aggregate([
        { $match: { type: 'Payment', status: 'Paid' } },
        { $group: { _id: null, total: { $sum: "$amount" } } }
      ]),
      
      // Last month data for comparison
      Revenue.aggregate([
        { 
          $match: { 
            type: 'Payment', 
            status: 'Paid',
            paidDate: { $gte: startOfLastMonth, $lte: endOfLastMonth }
          } 
        },
        { $group: { _id: null, total: { $sum: "$amount" } } }
      ]),
      Project.countDocuments({
        createdAt: { $gte: startOfLastMonth, $lte: endOfLastMonth }
      }),
      TimeTracking.aggregate([
        { 
          $match: { 
            date: { $gte: startOfLastMonth, $lte: endOfLastMonth }
          } 
        },
        { $group: { _id: null, totalHours: { $sum: "$hoursWorked" } } }
      ]),
      Client.countDocuments({
        status: 'Active',
        createdAt: { $gte: startOfLastMonth, $lte: endOfLastMonth }
      }),

      // Project status breakdown
      Project.aggregate([
        { $group: { _id: "$status", count: { $sum: 1 } } }
      ]),

      // Recent projects for daily view
      Project.find()
        .sort({ updatedAt: -1 })
        .limit(10)
        .populate('clientId', 'name company')
    ]);

    // Calculate percentages
    const currentRevenue = totalRevenue[0]?.total || 0;
    const previousRevenue = lastMonthRevenue[0]?.total || 0;
    const revenueChange = previousRevenue > 0 
      ? ((currentRevenue - previousRevenue) / previousRevenue * 100).toFixed(1)
      : 0;

    const currentTimeSpent = totalTimeSpent[0]?.totalHours || 0;
    const previousTimeSpent = lastMonthTimeSpent[0]?.totalHours || 0;
    const timeChange = previousTimeSpent > 0 
      ? ((currentTimeSpent - previousTimeSpent) / previousTimeSpent * 100).toFixed(1)
      : 0;

    const projectChange = lastMonthProjects > 0 
      ? (((totalProjects - lastMonthProjects) / lastMonthProjects) * 100).toFixed(1)
      : 0;

    const clientChange = lastMonthClients > 0 
      ? (((totalClients - lastMonthClients) / lastMonthClients) * 100).toFixed(1)
      : 0;

    // Format project status data for pie chart
    const projectStatusData = {
      completed: projectStatusCounts.find(p => p._id === 'Completed')?.count || 0,
      ongoing: projectStatusCounts.find(p => p._id === 'Ongoing')?.count || 0,
      delayed: projectStatusCounts.find(p => p._id === 'Delayed')?.count || 0,
      pending: projectStatusCounts.find(p => p._id === 'Pending')?.count || 0,
    };

    const overview = {
      totalRevenue: {
        value: currentRevenue,
        change: revenueChange,
        changeType: revenueChange >= 0 ? 'increase' : 'decrease'
      },
      totalProjects: {
        value: totalProjects,
        change: projectChange,
        changeType: projectChange >= 0 ? 'increase' : 'decrease'
      },
      totalTimeSpent: {
        value: currentTimeSpent,
        change: timeChange,
        changeType: timeChange >= 0 ? 'increase' : 'decrease'
      },
      totalClients: {
        value: totalClients,
        change: clientChange,
        changeType: clientChange >= 0 ? 'increase' : 'decrease'
      },
      projectStatusData,
      recentProjects: recentProjects.map(project => ({
        id: project._id,
        title: project.title,
        projectManager: project.projectManager,
        client: project.client,
        dueDate: project.dueDate,
        status: project.status,
        progress: project.progress,
        category: project.category
      }))
    };

    return NextResponse.json(overview);
  } catch (error) {
    console.error('Error fetching analytics overview:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
}

