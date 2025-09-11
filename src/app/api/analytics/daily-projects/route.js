import { connectToMongoDB } from "@/app/lib/db";
import Project from "@/app/models/projectModel";
import TimeTracking from "@/app/models/timeTrackingModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToMongoDB();

    // Get today's date
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    // Get projects with tasks due today or recently updated
    const dailyProjects = await Project.find({
      $or: [
        { dueDate: { $gte: startOfDay, $lt: endOfDay } },
        { updatedAt: { $gte: startOfDay, $lt: endOfDay } }
      ]
    }).sort({ priority: -1, dueDate: 1 });

    // Get time tracking entries for today
    const todayTimeEntries = await TimeTracking.find({
      date: { $gte: startOfDay, $lt: endOfDay }
    }).populate('projectId', 'title status');

    // Format the data
    const formattedProjects = dailyProjects.map(project => ({
      id: project._id,
      name: project.title,
      status: project.status,
      priority: project.priority,
      progress: project.progress,
      dueDate: project.dueDate,
      projectManager: project.projectManager,
      checked: project.status === 'Completed'
    }));

    // Get tasks from time tracking
    const dailyTasks = todayTimeEntries.map(entry => ({
      id: entry._id,
      name: entry.task,
      status: entry.projectId?.status === 'Completed' ? 'Completed' : 'On going',
      checked: entry.projectId?.status === 'Completed',
      projectTitle: entry.projectId?.title || 'Unknown Project'
    }));

    // Combine and deduplicate
    const allDailyItems = [...formattedProjects, ...dailyTasks];
    const uniqueItems = allDailyItems.filter((item, index, self) => 
      index === self.findIndex(t => t.name === item.name)
    );

    return NextResponse.json({
      projects: uniqueItems,
      totalTasks: uniqueItems.length,
      completedTasks: uniqueItems.filter(item => item.status === 'Completed').length,
      inProgressTasks: uniqueItems.filter(item => item.status === 'On going').length,
      delayedTasks: uniqueItems.filter(item => item.status === 'Delayed').length
    });
  } catch (error) {
    console.error('Error fetching daily projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch daily projects data' },
      { status: 500 }
    );
  }
}

