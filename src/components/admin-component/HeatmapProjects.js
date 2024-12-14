"use client"
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix';
import { Chart } from 'react-chartjs-2';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, Tooltip, Legend, MatrixController, MatrixElement);

const HeatmapProjects = () => {
  // Heatmap data (rows: days of the week, columns: hours, values: workload count)
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week
    datasets: [
      {
        label: 'Workload Heatmap',
        data: [
          { x: 'Mon', y: 1, v: 5 },
          { x: 'Mon', y: 2, v: 2 },
          { x: 'Tue', y: 1, v: 4 },
          { x: 'Tue', y: 2, v: 8 },
          { x: 'Wed', y: 1, v: 6 },
          { x: 'Thu', y: 2, v: 7 },
          { x: 'Fri', y: 1, v: 10 },
          { x: 'Sat', y: 2, v: 3 },
          { x: 'Sun', y: 1, v: 1 },
        ],
        backgroundColor: function (context) {
          const value = context.raw.v;
          const alpha = value / 10; // Scale the opacity based on value
          return `rgba(0, 123, 255, ${alpha})`;
        },
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1,
        width: ({ chart }) => (chart.chartArea || {}).width / 7 - 2, // Dynamic cell width
        height: 20, // Fixed cell height
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'category',
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        offset: true,
        grid: { display: false },
      },
      y: {
        type: 'linear',
        grid: { display: false },
        ticks: { stepSize: 1 },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw.v;
            return `Workload: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center  shadow-md p-2">
      <Chart type="matrix" data={data} options={options} />
    </div>
  );
};

export default HeatmapProjects;
