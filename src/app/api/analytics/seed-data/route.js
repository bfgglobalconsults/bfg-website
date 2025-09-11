import { connectToMongoDB } from "@/app/lib/db";
import Project from "@/app/models/projectModel";
import Client from "@/app/models/clientModel";
import TimeTracking from "@/app/models/timeTrackingModel";
import Revenue from "@/app/models/revenueModel";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await connectToMongoDB();

    // Clear existing data
    await Project.deleteMany({});
    await Client.deleteMany({});
    await TimeTracking.deleteMany({});
    await Revenue.deleteMany({});

    // Create sample clients
    const clients = await Client.insertMany([
      {
        name: "John Smith",
        email: "john@techcorp.com",
        company: "TechCorp Solutions",
        phone: "+1-555-0123",
        address: {
          street: "123 Tech Street",
          city: "San Francisco",
          state: "CA",
          country: "USA",
          zipCode: "94105"
        },
        industry: "Technology",
        status: "Active",
        totalRevenue: 150000,
        totalProjects: 3
      },
      {
        name: "Sarah Johnson",
        email: "sarah@fintech.com",
        company: "FinTech Innovations",
        phone: "+1-555-0456",
        address: {
          street: "456 Finance Ave",
          city: "New York",
          state: "NY",
          country: "USA",
          zipCode: "10001"
        },
        industry: "Finance",
        status: "Active",
        totalRevenue: 200000,
        totalProjects: 2
      },
      {
        name: "Michael Brown",
        email: "michael@healthcare.com",
        company: "HealthCare Plus",
        phone: "+1-555-0789",
        address: {
          street: "789 Health Blvd",
          city: "Boston",
          state: "MA",
          country: "USA",
          zipCode: "02101"
        },
        industry: "Healthcare",
        status: "Active",
        totalRevenue: 120000,
        totalProjects: 1
      }
    ]);

    // Create sample projects
    const projects = await Project.insertMany([
      {
        title: "E-commerce Platform Development",
        description: "Full-stack e-commerce platform with payment integration",
        projectManager: "James Akpan",
        client: "TechCorp Solutions",
        startDate: new Date("2024-01-15"),
        dueDate: new Date("2024-06-15"),
        status: "Ongoing",
        progress: 75,
        budget: 50000,
        actualCost: 37500,
        timeSpent: 450,
        estimatedHours: 600,
        priority: "High",
        category: "Web Development"
      },
      {
        title: "Mobile Banking App",
        description: "iOS and Android banking application",
        projectManager: "Ebuka Okoli",
        client: "FinTech Innovations",
        startDate: new Date("2024-02-01"),
        dueDate: new Date("2024-08-01"),
        status: "Ongoing",
        progress: 60,
        budget: 80000,
        actualCost: 48000,
        timeSpent: 320,
        estimatedHours: 500,
        priority: "Critical",
        category: "Mobile App"
      },
      {
        title: "Patient Management System",
        description: "Healthcare patient tracking and management system",
        projectManager: "Femi Adenrele",
        client: "HealthCare Plus",
        startDate: new Date("2024-01-01"),
        dueDate: new Date("2024-05-01"),
        status: "Completed",
        progress: 100,
        budget: 40000,
        actualCost: 38000,
        timeSpent: 280,
        estimatedHours: 300,
        priority: "Medium",
        category: "Web Development"
      },
      {
        title: "Brand Identity Design",
        description: "Complete brand identity and logo design package",
        projectManager: "Tunde Ednut",
        client: "TechCorp Solutions",
        startDate: new Date("2023-11-01"),
        dueDate: new Date("2023-12-15"),
        status: "Completed",
        progress: 100,
        budget: 15000,
        actualCost: 14500,
        timeSpent: 120,
        estimatedHours: 120,
        priority: "Low",
        category: "Design"
      },
      {
        title: "AI Chatbot Integration",
        description: "AI-powered customer service chatbot",
        projectManager: "Sadiq Abubakar",
        client: "FinTech Innovations",
        startDate: new Date("2024-03-01"),
        dueDate: new Date("2024-07-01"),
        status: "Delayed",
        progress: 30,
        budget: 35000,
        actualCost: 10500,
        timeSpent: 80,
        estimatedHours: 200,
        priority: "High",
        category: "Web Development"
      }
    ]);

    // Create sample time tracking entries
    const timeEntries = [];
    const employees = ["James Akpan", "Ebuka Okoli", "Femi Adenrele", "Tunde Ednut", "Sadiq Abubakar"];
    const tasks = ["Development", "Design", "Testing", "Documentation", "Code Review", "Bug Fixing"];

    // Generate time tracking for the last 30 days
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      
      // Skip weekends
      if (date.getDay() === 0 || date.getDay() === 6) continue;
      
      const project = projects[Math.floor(Math.random() * projects.length)];
      const employee = employees[Math.floor(Math.random() * employees.length)];
      const task = tasks[Math.floor(Math.random() * tasks.length)];
      const hours = Math.floor(Math.random() * 8) + 1; // 1-8 hours
      
      timeEntries.push({
        projectId: project._id,
        employeeId: `emp_${Math.random().toString(36).substr(2, 9)}`,
        employeeName: employee,
        date: date,
        hoursWorked: hours,
        description: `Worked on ${task} for ${project.title}`,
        task: task,
        billable: true,
        hourlyRate: 75
      });
    }

    await TimeTracking.insertMany(timeEntries);

    // Create sample revenue entries
    const revenueEntries = [];
    
    projects.forEach(project => {
      const client = clients.find(c => c.company === project.client);
      if (client) {
        // Invoice
        revenueEntries.push({
          projectId: project._id,
          clientId: client._id,
          amount: project.budget,
          currency: "NGN",
          type: "Invoice",
          status: project.status === "Completed" ? "Paid" : "Pending",
          dueDate: project.dueDate,
          paidDate: project.status === "Completed" ? new Date(project.dueDate.getTime() + 7 * 24 * 60 * 60 * 1000) : null,
          description: `Invoice for ${project.title}`,
          invoiceNumber: `INV-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`,
          paymentMethod: project.status === "Completed" ? "Bank Transfer" : null
        });
      }
    });

    await Revenue.insertMany(revenueEntries);

    return NextResponse.json({
      message: "Sample data seeded successfully",
      counts: {
        clients: clients.length,
        projects: projects.length,
        timeEntries: timeEntries.length,
        revenueEntries: revenueEntries.length
      }
    });
  } catch (error) {
    console.error('Error seeding data:', error);
    return NextResponse.json(
      { error: 'Failed to seed sample data' },
      { status: 500 }
    );
  }
}

