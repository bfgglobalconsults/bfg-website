import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddDepartmentForm = () => {
  const [name, setName] = useState('');
  const [head, setHead] = useState('');
  const [employees, setEmployees] = useState([]);
  const [allEmployees, setAllEmployees] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/employee/getEmployees`)
      .then(res => setAllEmployees(res.data.data || []))
      .catch(() => setAllEmployees([]));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/departments/addDepartment`, {
        name,
        head,
        employees,
      });
        toast.success(response.data.message);
      setName('');
      setHead('');
      setEmployees([]);
    } catch (error) {
            console.error("Error adding department:", error);
      
      toast.error(error?.response?.data?.message || "Failed to add department. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-full flex gap-2 mb-4">
          <div className="w-1/2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Department Name
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Department Name"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Department Head
            </label>
            <select
              value={head}
              onChange={e => setHead(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            >
              <option value="">Select Head</option>
              {allEmployees.map(emp => (
                <option key={emp._id} value={emp._id}>
                  {emp.fullName} ({emp.email})
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Employees
          </label>
          <select
            multiple
            value={employees}
            onChange={e => setEmployees(Array.from(e.target.selectedOptions, option => option.value))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            {allEmployees.map(emp => (
              <option key={emp._id} value={emp._id}>
                {emp.fullName} ({emp.email})
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-4 justify-center">
          <button type="submit" className="bg-[#E26015] hover:bg-black text-white px-6 py-2 rounded-md">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddDepartmentForm;