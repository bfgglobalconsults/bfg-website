"use client";
import React, { useState } from 'react';
import { FiCalendar, FiCheckCircle, FiClock, FiXCircle, FiFilter, FiSearch } from 'react-icons/fi';

// Mock Data - Replace with API data
const initialLeaveRequests = [
  { id: 1, employee: { name: 'David Ukpo', department: 'Tech' }, type: 'Annual Leave', startDate: '2024-08-01', endDate: '2024-08-05', duration: 5, status: 'Pending', reason: 'Family vacation.' },
  { id: 2, employee: { name: 'Jane Smith', department: 'Human Resources' }, type: 'Sick Leave', startDate: '2024-07-22', endDate: '2024-07-22', duration: 1, status: 'Approved', reason: 'Fever and headache.' },
  { id: 3, employee: { name: 'John Doe', department: 'Marketing' }, type: 'Personal Leave', startDate: '2024-07-25', endDate: '2024-07-26', duration: 2, status: 'Rejected', reason: 'Insufficient notice provided.' },
  { id: 4, employee: { name: 'Emily White', department: 'Tech' }, type: 'Annual Leave', startDate: '2024-09-10', endDate: '2024-09-15', duration: 6, status: 'Approved', reason: 'Planned trip.' },
  { id: 5, employee: { name: 'Michael Brown', department: 'Finance' }, type: 'Paternity Leave', startDate: '2024-08-15', endDate: '2024-08-29', duration: 15, status: 'Pending', reason: 'Expecting a new child.' },
];

const StatCard = ({ icon, title, value, color }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
    <div className={`p-3 rounded-full ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const LeaveStatusBadge = ({ status }) => {
  const statusStyles = {
    Pending: 'bg-yellow-100 text-yellow-800',
    Approved: 'bg-green-100 text-green-800',
    Rejected: 'bg-red-100 text-red-800',
  };
  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}>
      {status}
    </span>
  );
};

const LeaveManagementPage = () => {
  const [leaveRequests, setLeaveRequests] = useState(initialLeaveRequests);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleStatusChange = (id, newStatus) => {
    setLeaveRequests(leaveRequests.map(req => req.id === id ? { ...req, status: newStatus } : req));
  };

  const filteredRequests = leaveRequests
    .filter(req => filter === 'All' || req.status === filter)
    .filter(req => req.employee.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const pendingCount = leaveRequests.filter(req => req.status === 'Pending').length;
  const approvedCount = leaveRequests.filter(req => req.status === 'Approved').length;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Leave Management</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<FiClock size={24} className="text-yellow-600"/>} title="Pending Requests" value={pendingCount} color="bg-yellow-100" />
        <StatCard icon={<FiCheckCircle size={24} className="text-green-600"/>} title="Approved This Month" value={approvedCount} color="bg-green-100" />
        <StatCard icon={<FiXCircle size={24} className="text-red-600"/>} title="Rejected This Month" value={leaveRequests.filter(r => r.status === 'Rejected').length} color="bg-red-100" />
        <StatCard icon={<FiCalendar size={24} className="text-blue-600"/>} title="Employees on Leave Today" value={2} color="bg-blue-100" />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <h2 className="text-xl font-semibold text-gray-700">Leave Requests</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              <input 
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <FiFilter className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              <select 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 font-semibold text-sm text-gray-600">Employee</th>
                <th className="p-4 font-semibold text-sm text-gray-600">Leave Type</th>
                <th className="p-4 font-semibold text-sm text-gray-600">Dates</th>
                <th className="p-4 font-semibold text-sm text-gray-600">Duration</th>
                <th className="p-4 font-semibold text-sm text-gray-600">Status</th>
                <th className="p-4 font-semibold text-sm text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredRequests.map(request => (
                <tr key={request.id}>
                  <td className="p-4">
                    <p className="font-semibold text-gray-800">{request.employee.name}</p>
                    <p className="text-sm text-gray-500">{request.employee.department}</p>
                  </td>
                  <td className="p-4 text-gray-700">{request.type}</td>
                  <td className="p-4 text-gray-700">{request.startDate} to {request.endDate}</td>
                  <td className="p-4 text-gray-700">{request.duration} days</td>
                  <td className="p-4"><LeaveStatusBadge status={request.status} /></td>
                  <td className="p-4">
                    {request.status === 'Pending' && (
                      <div className="flex space-x-2">
                        <button onClick={() => handleStatusChange(request.id, 'Approved')} className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition">Approve</button>
                        <button onClick={() => handleStatusChange(request.id, 'Rejected')} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">Reject</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredRequests.length === 0 && (
          <div className="text-center p-8 text-gray-500">
            No leave requests found.
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaveManagementPage;