# Analytics Overview Dashboard - Real Data Integration

This document describes the analytics overview dashboard that has been refined to use real data from a MongoDB database.

## Overview

The analytics dashboard now displays real-time data including:

- Total Revenue with month-over-month comparison
- Project counts and status tracking
- Time tracking and workload analysis
- Client metrics and growth
- Project progress visualization
- Daily task management

## Database Models

### Project Model (`src/app/models/projectModel.js`)

- **Fields**: title, description, projectManager, client, startDate, dueDate, status, progress, budget, actualCost, timeSpent, estimatedHours, priority, category
- **Status Options**: Completed, Ongoing, Delayed, Pending
- **Categories**: Web Development, Mobile App, Design, Consulting, Other

### Client Model (`src/app/models/clientModel.js`)

- **Fields**: name, email, company, phone, address, industry, status, totalRevenue, totalProjects, lastProjectDate, notes
- **Status Options**: Active, Inactive, Prospect

### Time Tracking Model (`src/app/models/timeTrackingModel.js`)

- **Fields**: projectId, employeeId, employeeName, date, hoursWorked, description, task, billable, hourlyRate
- **Purpose**: Track time spent on projects by employees

### Revenue Model (`src/app/models/revenueModel.js`)

- **Fields**: projectId, clientId, amount, currency, type, status, dueDate, paidDate, description, invoiceNumber, paymentMethod
- **Types**: Invoice, Payment, Refund, Expense
- **Status Options**: Pending, Paid, Overdue, Cancelled

## API Endpoints

### Analytics Overview (`/api/analytics/overview`)

- **Method**: GET
- **Returns**: Comprehensive analytics data including totals, comparisons, and project status breakdown
- **Data Includes**:
  - Total revenue with percentage change
  - Project counts with growth metrics
  - Time tracking totals
  - Client counts
  - Project status distribution
  - Recent projects list

### Daily Projects (`/api/analytics/daily-projects`)

- **Method**: GET
- **Returns**: Today's projects and tasks
- **Data Includes**:
  - Projects due today or recently updated
  - Time tracking entries for today
  - Task completion status
  - Project priorities

### Workload Heatmap (`/api/analytics/workload-heatmap`)

- **Method**: GET
- **Returns**: Workload distribution over the last 7 days
- **Data Includes**:
  - Time entries grouped by day and time slot
  - Workload intensity visualization
  - Maximum value for scaling

### Seed Data (`/api/analytics/seed-data`)

- **Method**: POST
- **Purpose**: Populate database with sample data for testing
- **Creates**: Sample clients, projects, time entries, and revenue records

## Components Updated

### Dashboard Cards

All dashboard cards now fetch real data:

- **TotalRevenueCard**: Shows actual revenue with currency formatting and trend indicators
- **ProjectsCard**: Displays project counts with growth percentages
- **TimeCard**: Shows time tracking totals with comparisons
- **ClientCard**: Displays active client counts with growth metrics

### Charts and Visualizations

- **PieChartProjects**: Shows real project status distribution
- **HeatmapProjects**: Displays actual workload patterns
- **ProjectSummary**: Lists real projects with current status and progress

### Daily Projects

- **DailyProject**: Shows today's tasks and projects with real data
- Includes filtering by status (All, In-Progress, Completed)
- Displays actual project names and completion status

## Features Added

### Loading States

- All components show skeleton loading animations while fetching data
- Smooth transitions between loading and loaded states
- Consistent loading UI across all components

### Error Handling

- Graceful fallback to sample data if API calls fail
- Error logging for debugging
- User-friendly error states

### Real-time Data

- Dynamic data fetching on component mount
- Currency formatting for revenue display
- Date formatting for project due dates
- Percentage calculations for progress tracking

## Usage

### Seeding Sample Data

To populate the database with sample data for testing:

```bash
curl -X POST http://localhost:3000/api/analytics/seed-data
```

### Viewing Analytics

Navigate to the admin dashboard at `/admin` to view the analytics overview with real data.

## Data Flow

1. **Database**: MongoDB stores all analytics data
2. **API Layer**: RESTful endpoints provide data access
3. **Service Layer**: `analyticsService.js` handles API communication
4. **Components**: React components fetch and display data
5. **UI**: Real-time updates with loading states and error handling

## Future Enhancements

- Real-time data updates using WebSockets
- Data export functionality
- Advanced filtering and date range selection
- Performance metrics and caching
- User authentication and role-based access
- Data visualization improvements

## Dependencies

- **Database**: MongoDB with Mongoose ODM
- **Charts**: Chart.js with react-chartjs-2
- **Styling**: Tailwind CSS
- **Framework**: Next.js 13+ with App Router
- **State Management**: React hooks (useState, useEffect)

## Environment Setup

Ensure the following environment variables are set:

- `MONGODB_URI`: MongoDB connection string
- `NEXT_PUBLIC_BASE_URL`: Base URL for API calls

The analytics dashboard is now fully integrated with real data and provides a comprehensive view of business metrics and project performance.

