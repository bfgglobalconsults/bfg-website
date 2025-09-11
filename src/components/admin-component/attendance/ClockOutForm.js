"use client";
import React, { useState, useEffect } from 'react';
import { FiClock, FiUser, FiMapPin, FiCalendar } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const ClockOutForm = ({ employees, selectedEmployee, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    user_id: '',
    name: '',
    unit: '',
    work_mode: 'Office',
    reason: '',
    clock_out_time: new Date().toISOString().slice(0, 16) // YYYY-MM-DDTHH:MM format
  });
  const [loading, setLoading] = useState(false);
  const [selectedEmployeeData, setSelectedEmployeeData] = useState(null);
  const [clockedInEmployees, setClockedInEmployees] = useState([]);

  useEffect(() => {
    if (selectedEmployee) {
      setSelectedEmployeeData(selectedEmployee);
      setFormData(prev => ({
        ...prev,
        user_id: selectedEmployee._id,
        name: selectedEmployee.fullName,
        unit: selectedEmployee.department || '',
        work_mode: 'Office'
      }));
    }
  }, [selectedEmployee]);

  // Fetch employees who are currently clocked in
  useEffect(() => {
    const fetchClockedInEmployees = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/attendance/records`);
        const today = new Date().toISOString().split('T')[0];
        
        // Filter employees who have clocked in today but haven't clocked out
        const clockedIn = response.data.data?.filter(record => {
          const recordDate = new Date(record.clock_in_time).toISOString().split('T')[0];
          return recordDate === today && !record.clock_out_time;
        }) || [];

        setClockedInEmployees(clockedIn);
      } catch (error) {
        console.error('Error fetching clocked-in employees:', error);
      }
    };

    fetchClockedInEmployees();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmployeeSelect = (employee) => {
    setSelectedEmployeeData(employee);
    setFormData(prev => ({
      ...prev,
      user_id: employee.user_id,
      name: employee.name,
      unit: employee.unit,
      work_mode: employee.work_mode || 'Office'
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.user_id || !formData.name) {
      toast.error('Please select an employee');
      return;
    }

    if (!formData.clock_out_time) {
      toast.error('Please select clock-out time');
      return;
    }

    setLoading(true);
    try {
      const payload = {
        user_id: formData.user_id,
        name: formData.name,
        unit: formData.unit,
        work_mode: formData.work_mode,
        reason: formData.reason,
        clock_out_time: new Date(formData.clock_out_time).toISOString()
      };

      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/attendance/clock-out`, payload);
      console.log('Clock-out response:', response.data);
      onSuccess();
    } catch (error) {
      console.error('Error clocking out employee:', error);
      
      // Handle specific error cases
      if (error.response?.status === 403) {
        toast.error('Access denied: You do not have permission to perform this action');
      } else if (error.response?.status === 401) {
        toast.error('Authentication failed: Please log in again');
      } else if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to clock out employee. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Employee Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <FiUser className="inline w-4 h-4 mr-2" />
          Select Employee (Currently Clocked In)
        </label>
        {selectedEmployeeData ? (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-blue-800">{selectedEmployeeData.name}</p>
                <p className="text-sm text-blue-600">{selectedEmployeeData.unit} • Clocked in at {new Date(selectedEmployeeData.clock_in_time).toLocaleTimeString()}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedEmployeeData(null);
                  setFormData(prev => ({ ...prev, user_id: '', name: '', unit: '' }));
                }}
                className="text-blue-600 hover:text-blue-800"
              >
                Change
              </button>
            </div>
          </div>
        ) : (
          <select
            name="employee"
            value={formData.user_id}
            onChange={(e) => {
              const employee = clockedInEmployees.find(emp => emp.user_id === e.target.value);
              if (employee) handleEmployeeSelect(employee);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select a clocked-in employee...</option>
            {clockedInEmployees.length === 0 ? (
              <option value="" disabled>No employees are currently clocked in</option>
            ) : (
              clockedInEmployees.map((employee) => (
                <option key={employee.user_id} value={employee.user_id}>
                  {employee.name} - {employee.unit} (Clocked in: {new Date(employee.clock_in_time).toLocaleTimeString()})
                </option>
              ))
            )}
          </select>
        )}
      </div>

      {/* Clock Out Time */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <FiClock className="inline w-4 h-4 mr-2" />
          Clock Out Time
        </label>
        <input
          type="datetime-local"
          name="clock_out_time"
          value={formData.clock_out_time}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      {/* Work Mode */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <FiMapPin className="inline w-4 h-4 mr-2" />
          Work Mode
        </label>
        <select
          name="work_mode"
          value={formData.work_mode}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="Office">Office</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      {/* Reason (Optional) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <FiCalendar className="inline w-4 h-4 mr-2" />
          Reason (Optional)
        </label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleInputChange}
          placeholder="Enter reason for clock-out (e.g., completed daily tasks, early departure for appointment)"
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading || clockedInEmployees.length === 0}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Clocking Out...</span>
            </>
          ) : (
            <>
              <FiClock className="w-4 h-4" />
              <span>Clock Out</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ClockOutForm;
