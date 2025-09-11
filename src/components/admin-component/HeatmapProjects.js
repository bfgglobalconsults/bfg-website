"use client"
import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix';
import { Chart } from 'react-chartjs-2';
import analyticsService from "@/services/analyticsService";

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, Tooltip, Legend, MatrixController, MatrixElement);

const HeatmapProjects = () => {
  const [data, setData] = useState({
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
          const raw = context.raw;
          if (!raw || typeof raw.v === "undefined") {
            return "rgba(0, 123, 255, 0)"; // fallback
          }
          const value = raw.v;
          const maxValue = context.chart.config.data.datasets[0].data
            ?.reduce((max, d) => Math.max(max, d.v || 0), 0) || 10;
          const alpha = value / maxValue;
          return `rgba(0, 123, 255, ${alpha})`;
        },
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1,
        width: ({ chart }) => (chart.chartArea || {}).width / 7 - 2,
        height: 20,
      },
    ],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const heatmapData = await analyticsService.fetchWorkloadHeatmap();
        
        if (heatmapData && heatmapData.data) {
          setData({
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                label: 'Workload Heatmap',
                data: heatmapData.data,
                backgroundColor: function (context) {
                  const raw = context.raw;
                  if (!raw || typeof raw.v === "undefined") {
                    return "rgba(0, 123, 255, 0)"; // safe fallback
                  }
                  const value = raw.v;
                  const maxValue = heatmapData.maxValue || 10;
                  const alpha = value / maxValue;
                  return `rgba(0, 123, 255, ${alpha})`;
                },
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1,
                width: ({ chart }) => (chart.chartArea || {}).width / 7 - 2,
                height: 20,
              },
            ],
          });
        }
      } catch (error) {
        console.error('Error fetching heatmap data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
            const raw = tooltipItem.raw;
            if (!raw || typeof raw.v === "undefined") return "";
            return `Workload: ${raw.v}`;
          },
        },
      },
    },
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center shadow-md p-2 h-64">
        <div className="animate-pulse">
          <div className="w-64 h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center shadow-md p-2">
      <Chart type="matrix" data={data} options={options} />
    </div>
  );
};

export default HeatmapProjects;
