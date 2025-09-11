"use client"
import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import analyticsService from "@/services/analyticsService";

// Register required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartProjects = () => {
  const [chartData, setChartData] = useState({
    labels: ['Completed Projects', 'Ongoing Projects', 'Delayed Projects', 'Pending Projects'],
    datasets: [
      {
        data: [45, 10, 5, 3],
        backgroundColor: ['#013220', '#ff8c00', '#dc2626', '#6b7280'],
      },
    ],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const overview = await analyticsService.fetchOverview();
        const statusData = overview.projectStatusData;
        
        if (statusData) {
          setChartData({
            labels: ['Completed Projects', 'Ongoing Projects', 'Delayed Projects', 'Pending Projects'],
            datasets: [
              {
                data: [
                  statusData.completed || 0,
                  statusData.ongoing || 0,
                  statusData.delayed || 0,
                  statusData.pending || 0
                ],
                backgroundColor: ['#013220', '#ff8c00', '#dc2626', '#6b7280'],
              },
            ],
          });
        }
      } catch (error) {
        console.error('Error fetching pie chart data:', error);
        // Keep fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse">
          <div className="w-48 h-48 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <Pie data={chartData} />
    </div>
  );
};

export default PieChartProjects;
