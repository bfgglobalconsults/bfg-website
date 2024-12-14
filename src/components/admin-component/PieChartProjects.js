"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Completed Projects', 'Ongoing Projects', 'Pending Approval'],
  datasets: [
    {
      data: [45, 10, 5],
      backgroundColor: ['#013220', '#ff8c00', '#FFFF00'],
    },
  ],
};

const PieChartProjects = () => (
  <div className="flex justify-center items-center">
    <Pie data={data} />
  </div>
);

export default PieChartProjects;
