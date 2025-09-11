import { connectToMongoDB } from "@/app/lib/db";
import TimeTracking from "@/app/models/timeTrackingModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToMongoDB();

    // Get the last 7 days
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 7);

    // Get time tracking data for the last 7 days
    const timeEntries = await TimeTracking.find({
      date: { $gte: startDate, $lte: endDate }
    });

    // Group by day and hour
    const workloadData = {};
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Initialize data structure
    days.forEach(day => {
      workloadData[day] = {};
      for (let hour = 1; hour <= 2; hour++) { // Simplified to 2 time slots
        workloadData[day][hour] = 0;
      }
    });

    // Process time entries
    timeEntries.forEach(entry => {
      const dayOfWeek = days[entry.date.getDay()];
      const hour = entry.date.getHours() < 12 ? 1 : 2; // Morning or afternoon
      
      if (workloadData[dayOfWeek] && workloadData[dayOfWeek][hour] !== undefined) {
        workloadData[dayOfWeek][hour] += entry.hoursWorked;
      }
    });

    // Convert to chart.js format
    const heatmapData = [];
    days.forEach(day => {
      for (let hour = 1; hour <= 2; hour++) {
        const value = workloadData[day][hour];
        if (value > 0) {
          heatmapData.push({
            x: day,
            y: hour,
            v: Math.min(value, 10) // Cap at 10 for better visualization
          });
        }
      }
    });

    return NextResponse.json({
      data: heatmapData,
      maxValue: Math.max(...heatmapData.map(d => d.v), 1)
    });
  } catch (error) {
    console.error('Error fetching workload heatmap:', error);
    return NextResponse.json(
      { error: 'Failed to fetch workload heatmap data' },
      { status: 500 }
    );
  }
}

