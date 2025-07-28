"use client";
import React, { useState, useEffect } from 'react';
import { FiCalendar, FiCheckCircle, FiClock, FiXCircle, FiFilter, FiSearch, FiPlus, FiEye } from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { CldImage, CldUploadButton } from 'next-cloudinary';

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

const LeaveDetailsModal = ({ isOpen, onClose, leaveData, userData, isAdmin, handleStatusChange }) => {
  if (!isOpen || !leaveData) return null;

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Leave Request Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FiXCircle size={24} />
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Leave Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Leave Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Leave Type</p>
                <p className="font-medium">{leaveData.leave_type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-medium">{leaveData.leave_duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Start Date</p>
                <p className="font-medium">{formatDate(leaveData.start_date)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">End Date</p>
                <p className="font-medium">{formatDate(leaveData.end_date)}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-600">Description</p>
                <p className="font-medium">{leaveData.description}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <LeaveStatusBadge status={leaveData.status} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Created</p>
                <p className="font-medium">{formatDateTime(leaveData.createdAt)}</p>
              </div>
            </div>
          </div>

          {/* User Information */}
          {userData && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Employee Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Full Name</p>
                  <p className="font-medium">{userData.fullName || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{userData.email || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">{userData.phoneNumber || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Department</p>
                  <p className="font-medium">{userData.department || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Job Title</p>
                  <p className="font-medium">{userData.jobTitle || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Employee ID</p>
                  <p className="font-medium">{userData.employeeID || 'N/A'}</p>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Close
            </button>
            {isAdmin && leaveData.status === 'Pending' && (
              <>
                <button 
                  onClick={() => handleStatusChange(leaveData._id, 'Approved')} 
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Approve
                </button>
                <button 
                  onClick={() => handleStatusChange(leaveData._id, 'Rejected')} 
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Reject
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const LeaveApplicationForm = ({ isOpen, onClose, onSubmit }) => {
  const [imageId, setImageId] = useState("");
    const [employees, setEmployees] = useState([]); 

    const [imageView, setImageView] = useState("");
  const [formData, setFormData] = useState({
    employee_id: '',
    leave_type: '',
    leave_duration: '',
    start_date: '',
    end_date: '',
    description: '',
    attachment: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/leaves/apply`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      
      console.log('Leave application submitted:', response.data);
      
      // Show success toast with response data
      toast.success(
        `Leave application submitted successfully! 
        Type: ${response.data.data.leave_type}
        Duration: ${response.data.data.leave_duration}
        Status: ${response.data.data.status}`,
        {
          duration: 5000,
          style: {
            background: '#10B981',
            color: '#fff',
          },
        }
      );
      
      onSubmit(response.data);
      setFormData({
        employee_id: '',
        leave_type: '',
        leave_duration: '',
        start_date: '',
        end_date: '',
        description: '',
        attachment: ''
      });
      onClose();
    } catch (error) {
      console.error('Error submitting leave application:', error);
      toast.error('Failed to submit leave application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

   useEffect(() => {
      if (isOpen) {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/employee/getEmployees`)
          .then(res => setEmployees(res.data.data || []))
          .catch(() => setEmployees([]));
      }
     
    }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Apply for Leave</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FiXCircle size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
           <div>
            <label className="block mb-1 font-medium">Employee *</label>
            <select
              name="employee_id"
              value={formData.employee_id}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select Employee</option>
              
              {employees.map(emp => (
                <option key={emp._id} value={emp._id}>
                  {emp.fullName} 
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Leave Type
            </label>
            <select
              name="leave_type"
              value={formData.leave_type}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select leave type</option>
              <option value="Annual">Annual Leave</option>
              <option value="Sick">Sick Leave</option>
              <option value="Personal">Personal Leave</option>
              <option value="Maternity">Maternity Leave</option>
              <option value="Paternity">Paternity Leave</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Leave Duration
            </label>
            <input
              type="text"
              name="leave_duration"
              value={formData.leave_duration}
              onChange={handleChange}
              placeholder="e.g., 10 days"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Reason for leave..."
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <CldUploadButton
              onSuccess={(result) => {
                setImageId(result.info.url);
                setImageView(result.info.public_id);
                setFormData((prev) => ({ ...prev, attachment: result.info.url }));
                console.log("Image uploaded:", result.info);
              }}
              uploadPreset="blog-image"
            />
            {imageView && (
              <CldImage
                width="500"
                height="500"
                src={imageView}
                sizes="100vw"
                alt="Blog Image"
              />
            )}
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const LeaveManagementPage = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [loadingUser, setLoadingUser] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // Check if user is admin or super_admin
  const isAdmin = userRole === 'admin' || userRole === 'super_admin';

  // Fetch user role on component mount
  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        // You can get user role from your auth context or API
        // For now, we'll check if there's a user in localStorage or context
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        setUserRole(user.role || 'user');
      } catch (error) {
        console.error('Error fetching user role:', error);
        setUserRole('user');
      }
    };
    fetchUserRole();
  }, []);

  // Fetch leaves from API
  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        setLoading(true);
        let endpoint = '/api/v1/leaves/my-leaves';
        if (userRole === 'admin' || userRole === 'super_admin') {
          endpoint = '/api/v1/leaves/all';
        }
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`,
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
        setLeaveRequests(response.data.data || []);
      } catch (error) {
        console.error('Error fetching leaves:', error);
        toast.error('Failed to fetch leave requests');
      } finally {
        setLoading(false);
      }
    };
    fetchLeaves();
  }, [userRole]);

  // Fetch user details
  const fetchUserDetails = async (userId) => {
    try {
      setLoadingUser(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/current-user/${userId}`,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      
      console.log('Fetched user:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching user details:', error);
      toast.error('Failed to fetch user details');
      return null;
    } finally {
      setLoadingUser(false);
    }
  };

  const handleViewLeave = async (leave) => {
    setSelectedLeave(leave);
    setShowDetailsModal(true);
    
    // Fetch user details if we have a user_id
    if (leave.user_id) {
      const userData = await fetchUserDetails(leave.user_id);
      setSelectedUser(userData);
    }
  };

  // Update leave status (approve/reject)
  const handleStatusChange = async (leaveId, newStatus) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/leaves/${leaveId}/status`,
        { status: newStatus },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      
      console.log('Status updated:', response.data);
      toast.success(`Leave request ${newStatus.toLowerCase()} successfully`);
      
      // Update the local state
      setLeaveRequests(leaveRequests.map(req => 
        req._id === leaveId ? { ...req, status: newStatus } : req
      ));
      
      // Update selected leave if it's the same one
      if (selectedLeave && selectedLeave._id === leaveId) {
        setSelectedLeave({ ...selectedLeave, status: newStatus });
      }
      
    } catch (error) {
      console.error('Error updating leave status:', error);
      toast.error(`Failed to ${newStatus.toLowerCase()} leave request`);
    }
  };

  const handleLeaveSubmit = (newLeave) => {
    // Refresh the leaves list after successful submission
    const fetchLeaves = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/leaves/my-leaves`,
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
        setLeaveRequests(response.data.data || []);
      } catch (error) {
        console.error('Error refreshing leaves:', error);
      }
    };
    fetchLeaves();
  };

  const filteredRequests = leaveRequests
    .filter(req => filter === 'All' || req.status === filter)
    .filter(req => req.leave_type?.toLowerCase().includes(searchTerm.toLowerCase()));

  const pendingCount = leaveRequests.filter(req => req.status === 'Pending').length;
  const approvedCount = leaveRequests.filter(req => req.status === 'Approved').length;

  // Format date helper function
  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading leave requests...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Leave Management</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 transition"
        >
          <FiPlus />
          <span>Apply for Leave</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<FiClock size={24} className="text-yellow-600"/>} title="Pending Requests" value={pendingCount} color="bg-yellow-100" />
        <StatCard icon={<FiCheckCircle size={24} className="text-green-600"/>} title="Approved This Month" value={approvedCount} color="bg-green-100" />
        <StatCard icon={<FiXCircle size={24} className="text-red-600"/>} title="Rejected This Month" value={leaveRequests.filter(r => r.status === 'Rejected').length} color="bg-red-100" />
        <StatCard icon={<FiCalendar size={24} className="text-blue-600"/>} title="Total Leave Requests" value={leaveRequests.length} color="bg-blue-100" />
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
                placeholder="Search by leave type..."
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
                <th className="p-4 font-semibold text-sm text-gray-600">Leave Type</th>
                <th className="p-4 font-semibold text-sm text-gray-600">Duration</th>
                <th className="p-4 font-semibold text-sm text-gray-600">Dates</th>
                <th className="p-4 font-semibold text-sm text-gray-600">Description</th>
                <th className="p-4 font-semibold text-sm text-gray-600">Status</th>
                <th className="p-4 font-semibold text-sm text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredRequests.map(request => (
                <tr key={request._id}>
                  <td className="p-4">
                    <p className="font-semibold text-gray-800">{request.leave_type}</p>
                  </td>
                  <td className="p-4 text-gray-700">{request.leave_duration}</td>
                  <td className="p-4 text-gray-700">
                    {formatDate(request.start_date)} to {formatDate(request.end_date)}
                  </td>
                  <td className="p-4 text-gray-700 max-w-xs truncate">{request.description}</td>
                  <td className="p-4"><LeaveStatusBadge status={request.status} /></td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleViewLeave(request)}
                        className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-50 transition"
                        title="View Details"
                      >
                        <FiEye size={16} />
                      </button>
                      {isAdmin && request.status === 'Pending' && (
                        <>
                          <button 
                            onClick={() => handleStatusChange(request._id, 'Approved')} 
                            className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
                          >
                            Approve
                          </button>
                          <button 
                            onClick={() => handleStatusChange(request._id, 'Rejected')} 
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredRequests.length === 0 && (
          <div className="text-center p-8 text-gray-500">
            {loading ? 'Loading leave requests...' : 'No leave requests found.'}
          </div>
        )}
      </div>

      {/* Leave Application Form Modal */}
      <LeaveApplicationForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleLeaveSubmit}
      />

      {/* Leave Details Modal */}
      <LeaveDetailsModal
        isOpen={showDetailsModal}
        onClose={() => {
          setShowDetailsModal(false);
          setSelectedLeave(null);
          setSelectedUser(null);
        }}
        leaveData={selectedLeave}
        userData={selectedUser}
        isAdmin={isAdmin}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default LeaveManagementPage;