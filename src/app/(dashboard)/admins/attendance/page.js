"use client";
import React, { useState, useEffect } from 'react';
import { FiClock, FiUser, FiCalendar, FiCheckCircle, FiXCircle, FiFilter, FiSearch, FiPlus, FiEye } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import ClockInForm from "@/components/admin-component/attendance/ClockInForm";
import ClockOutForm from "@/components/admin-component/attendance/ClockOutForm";
import AttendanceTable from "@/components/admin-component/attendance/AttendanceTable";
import DebugUserInfo from "@/components/admin-component/DebugUserInfo";
import { isAdmin, getUserRole, logUserInfo } from "@/utils/roleUtils";

const StatCard = ({ icon, title, value, color, subtitle }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
    <div className={`p-3 rounded-full ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
      {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
    </div>
  </div>
);

const AttendanceStatusBadge = ({ status }) => {
  const statusConfig = {
    'Present': { color: 'bg-green-100 text-green-800', icon: <FiCheckCircle className="w-4 h-4" /> },
    'Late': { color: 'bg-yellow-100 text-yellow-800', icon: <FiClock className="w-4 h-4" /> },
    'Absent': { color: 'bg-red-100 text-red-800', icon: <FiXCircle className="w-4 h-4" /> },
    'Half Day': { color: 'bg-blue-100 text-blue-800', icon: <FiClock className="w-4 h-4" /> }
  };

  const config = statusConfig[status] || statusConfig['Absent'];

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
      {config.icon}
      {status}
    </span>
  );
};

const AttendanceManagementPage = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showClockInForm, setShowClockInForm] = useState(false);
  const [showClockOutForm, setShowClockOutForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('today');
  const [statusFilter, setStatusFilter] = useState('all');
  const [userRole, setUserRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  // Fetch attendance records
  const fetchAttendanceRecords = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/attendance/records`);
      setAttendanceRecords(response.data.data || []);
    } catch (error) {
      console.error('Error fetching attendance records:', error);
      
      // Handle specific error cases
      if (error.response?.status === 403) {
        toast.error('Access denied: You do not have permission to view attendance records');
      } else if (error.response?.status === 401) {
        toast.error('Authentication failed: Please log in again');
      } else if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to fetch attendance records');
      }
      setAttendanceRecords([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch employees
  const fetchEmployees = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/employee/getEmployees`);
      setEmployees(response.data.data || []);
    } catch (error) {
      console.error('Error fetching employees:', error);
      
      // Handle specific error cases
      if (error.response?.status === 403) {
        toast.error('Access denied: You do not have permission to view employees');
      } else if (error.response?.status === 401) {
        toast.error('Authentication failed: Please log in again');
      } else if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to fetch employees');
      }
      setEmployees([]);
    }
  };

  // Check if user has admin permissions
  const userIsAdmin = isAdmin(userRole);

  // Fetch user role on component mount
  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        setRoleLoading(true);
        
        // Log user info for debugging
        const userInfo = logUserInfo();
        setUserRole(userInfo.role);
        
        console.log('Current user role:', userInfo.role);
        console.log('Is admin:', userInfo.isAdmin);
      } catch (error) {
        console.error('Error fetching user role:', error);
        setUserRole('user');
      } finally {
        setRoleLoading(false);
      }
    };
    fetchUserRole();
  }, []);

  useEffect(() => {
    if (!roleLoading && userIsAdmin) {
      fetchAttendanceRecords();
      fetchEmployees();
    }
  }, [roleLoading, userIsAdmin]);

  // Calculate statistics
  const today = new Date().toISOString().split('T')[0];
  const todayRecords = attendanceRecords.filter(record => 
    record.date === today || new Date(record.clock_in_time).toISOString().split('T')[0] === today
  );

  const presentCount = todayRecords.filter(record => record.status === 'Present').length;
  const lateCount = todayRecords.filter(record => record.status === 'Late').length;
  const absentCount = employees.length - todayRecords.length;
  const totalEmployees = employees.length;

  // Filter records based on search and filters
  const filteredRecords = attendanceRecords.filter(record => {
    const matchesSearch = record.employee_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.employee_id?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDate = dateFilter === 'all' || 
                       (dateFilter === 'today' && (record.date === today || new Date(record.clock_in_time).toISOString().split('T')[0] === today)) ||
                       (dateFilter === 'week' && new Date(record.clock_in_time) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) ||
                       (dateFilter === 'month' && new Date(record.clock_in_time) >= new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));
    
    const matchesStatus = statusFilter === 'all' || record.status === statusFilter;

    return matchesSearch && matchesDate && matchesStatus;
  });

  const handleClockIn = (employee) => {
    setSelectedEmployee(employee);
    setShowClockInForm(true);
  };

  const handleClockOut = (employee) => {
    setSelectedEmployee(employee);
    setShowClockOutForm(true);
  };

  const handleClockInSuccess = () => {
    setShowClockInForm(false);
    setSelectedEmployee(null);
    fetchAttendanceRecords();
    toast.success('Employee clocked in successfully');
  };

  const handleClockOutSuccess = () => {
    setShowClockOutForm(false);
    setSelectedEmployee(null);
    fetchAttendanceRecords();
    toast.success('Employee clocked out successfully');
  };

  // Show loading state
  if (roleLoading || loading) {
    return (
      <div className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">
            {roleLoading ? 'Checking permissions...' : 'Loading attendance data...'}
          </p>
        </div>
      </div>
    );
  }

  // Show access denied if user is not admin
  if (!userIsAdmin) {
    return (
      <div className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <FiXCircle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600 mb-4">
            You don&apos;t have permission to access the attendance management system.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Your current role: <span className="font-semibold">{userRole}</span><br/>
            Required role: <span className="font-semibold">admin, super_admin, or superadmin</span>
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Attendance Management</h1>
        <div className="flex gap-3">
          <button
            onClick={() => setShowClockInForm(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 transition"
          >
            <FiClock />
            <span>Clock In Employee</span>
          </button>
          <button
            onClick={() => setShowClockOutForm(true)}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 transition"
          >
            <FiClock />
            <span>Clock Out Employee</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={<FiCheckCircle size={24} className="text-green-600"/>} 
          title="Present Today" 
          value={presentCount} 
          color="bg-green-100"
          subtitle={`${totalEmployees} total employees`}
        />
        <StatCard 
          icon={<FiClock size={24} className="text-yellow-600"/>} 
          title="Late Today" 
          value={lateCount} 
          color="bg-yellow-100"
          subtitle="Arrived after 9:00 AM"
        />
        <StatCard 
          icon={<FiXCircle size={24} className="text-red-600"/>} 
          title="Absent Today" 
          value={absentCount} 
          color="bg-red-100"
          subtitle="No clock-in record"
        />
        <StatCard 
          icon={<FiUser size={24} className="text-blue-600"/>} 
          title="Total Employees" 
          value={totalEmployees} 
          color="bg-blue-100"
          subtitle="Active employees"
        />
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="all">All Time</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="Present">Present</option>
              <option value="Late">Late</option>
              <option value="Absent">Absent</option>
              <option value="Half Day">Half Day</option>
            </select>
          </div>
          <div className="text-sm text-gray-500">
            Showing {filteredRecords.length} of {attendanceRecords.length} records
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <AttendanceTable 
          records={filteredRecords}
          employees={employees}
          onClockIn={handleClockIn}
          onClockOut={handleClockOut}
          onRefresh={fetchAttendanceRecords}
        />
      </div>

      {/* Clock In Modal */}
      <Transition appear show={showClockInForm}>
        <Dialog as="div" className="relative z-10" onClose={() => setShowClockInForm(false)}>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900 my-4"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Clock In Employee</span>
                      <button onClick={() => setShowClockInForm(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                          <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                        </svg>
                      </button>
                    </div>
                  </Dialog.Title>
                  <div>
                    <ClockInForm 
                      employees={employees}
                      selectedEmployee={selectedEmployee}
                      onSuccess={handleClockInSuccess}
                      onCancel={() => setShowClockInForm(false)}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Clock Out Modal */}
      <Transition appear show={showClockOutForm}>
        <Dialog as="div" className="relative z-10" onClose={() => setShowClockOutForm(false)}>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900 my-4"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Clock Out Employee</span>
                      <button onClick={() => setShowClockOutForm(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                          <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                        </svg>
                      </button>
                    </div>
                  </Dialog.Title>
                  <div>
                    <ClockOutForm 
                      employees={employees}
                      selectedEmployee={selectedEmployee}
                      onSuccess={handleClockOutSuccess}
                      onCancel={() => setShowClockOutForm(false)}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      
      {/* Debug component - remove this after fixing the role issue */}
      <DebugUserInfo />
    </div>
  );
};

export default AttendanceManagementPage;
