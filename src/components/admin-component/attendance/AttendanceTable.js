"use client";
import React, { useState } from 'react';
import { FiClock, FiUser, FiEye, FiRefreshCw, FiDownload } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import Avatar from "../../../../public/assets/avatar.png";

const AttendanceTable = ({ records, employees, onClockIn, onClockOut, onRefresh }) => {
  const [sortField, setSortField] = useState('clock_in_time');
  const [sortDirection, setSortDirection] = useState('desc');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedRecords = [...records].sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];

    if (sortField === 'clock_in_time' || sortField === 'clock_out_time') {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
    }

    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const getStatus = (record) => {
    if (!record.clock_in_time) return 'Absent';
    
    const clockInTime = new Date(record.clock_in_time);
    const expectedTime = new Date(clockInTime);
    expectedTime.setHours(9, 0, 0, 0); // 9:00 AM
    
    if (clockInTime > expectedTime) {
      return 'Late';
    }
    
    if (record.clock_out_time) {
      const clockOutTime = new Date(record.clock_out_time);
      const workHours = (clockOutTime - clockInTime) / (1000 * 60 * 60);
      
      if (workHours < 4) {
        return 'Half Day';
      }
    }
    
    return 'Present';
  };

  const getWorkHours = (record) => {
    if (!record.clock_in_time || !record.clock_out_time) {
      return 'N/A';
    }
    
    const clockInTime = new Date(record.clock_in_time);
    const clockOutTime = new Date(record.clock_out_time);
    const workHours = (clockOutTime - clockInTime) / (1000 * 60 * 60);
    
    return `${workHours.toFixed(1)}h`;
  };

  const formatTime = (timeString) => {
    if (!timeString) return 'N/A';
    return new Date(timeString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (timeString) => {
    if (!timeString) return 'N/A';
    return new Date(timeString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleExport = () => {
    try {
      const csvContent = [
        ['Employee Name', 'Employee ID', 'Date', 'Clock In', 'Clock Out', 'Work Hours', 'Status', 'Work Mode', 'Reason'],
        ...sortedRecords.map(record => [
          record.name || record.employee_name || 'N/A',
          record.user_id || record.employee_id || 'N/A',
          formatDate(record.clock_in_time),
          formatTime(record.clock_in_time),
          formatTime(record.clock_out_time),
          getWorkHours(record),
          getStatus(record),
          record.work_mode || 'N/A',
          record.reason || 'N/A'
        ])
      ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `attendance-records-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      
      toast.success('Attendance records exported successfully');
    } catch (error) {
      console.error('Error exporting records:', error);
      toast.error('Failed to export attendance records');
    }
  };

  const StatusBadge = ({ status }) => {
    const statusConfig = {
      'Present': { color: 'bg-green-100 text-green-800', icon: '✓' },
      'Late': { color: 'bg-yellow-100 text-yellow-800', icon: '⏰' },
      'Absent': { color: 'bg-red-100 text-red-800', icon: '✗' },
      'Half Day': { color: 'bg-blue-100 text-blue-800', icon: '⏱' }
    };

    const config = statusConfig[status] || statusConfig['Absent'];

    return (
      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
        <span>{config.icon}</span>
        {status}
      </span>
    );
  };

  if (records.length === 0) {
    return (
      <div className="p-8 text-center">
        <FiClock className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No attendance records</h3>
        <p className="mt-1 text-sm text-gray-500">Get started by clocking in an employee.</p>
        <div className="mt-6">
          <button
            onClick={() => onClockIn()}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            <FiClock className="w-4 h-4 mr-2" />
            Clock In Employee
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      {/* Table Header with Actions */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Attendance Records</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={onRefresh}
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FiRefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </button>
            <button
              onClick={handleExport}
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FiDownload className="w-4 h-4 mr-2" />
              Export CSV
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center space-x-1">
                  <span>Employee</span>
                  {sortField === 'name' && (
                    <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
                  )}
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('clock_in_time')}
              >
                <div className="flex items-center space-x-1">
                  <span>Date</span>
                  {sortField === 'clock_in_time' && (
                    <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
                  )}
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Clock In
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Clock Out
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Work Hours
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Work Mode
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedRecords.map((record, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={Avatar}
                        width={40}
                        height={40}
                        alt="Employee avatar"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {record.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        ID: {record.user_id || record.employee_id || 'N/A'}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatDate(record.clock_in_time)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatTime(record.clock_in_time)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatTime(record.clock_out_time)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {getWorkHours(record)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={getStatus(record)} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {record.work_mode || 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    {!record.clock_in_time && (
                      <button
                        onClick={() => onClockIn(record)}
                        className="text-green-600 hover:text-green-900"
                        title="Clock In"
                      >
                        <FiClock className="w-4 h-4" />
                      </button>
                    )}
                    {record.clock_in_time && !record.clock_out_time && (
                      <button
                        onClick={() => onClockOut(record)}
                        className="text-red-600 hover:text-red-900"
                        title="Clock Out"
                      >
                        <FiClock className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => {/* View details */}}
                      className="text-blue-600 hover:text-blue-900"
                      title="View Details"
                    >
                      <FiEye className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">{records.length}</span> attendance records
          </div>
          <div className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTable;

