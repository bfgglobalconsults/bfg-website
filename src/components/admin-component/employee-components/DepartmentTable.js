"use client";
import React, { useEffect, useState } from "react";
import TextTrimming from "../TextTrimmer";
import Image from "next/image";
import Avatar from "../../../../public/assets/avatar.png";
import axios from "axios";
import toast from "react-hot-toast";
import AddDepartmentForm from "../department-form/AddDepartmentForm";

const DepartmentTable = () => {
  const [departments, setDepartments] = useState([]);
  const [editingDept, setEditingDept] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/departments/getDepartments`)
      .then((res) => setDepartments(res.data.data || []))
      .catch(() => setDepartments([]));
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this department?")) return;
    setLoading(true);
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/department`);
      toast.success("Department deleted successfully");
      setDepartments((prev) => prev.filter((dept) => dept._id !== id));
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to delete department");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (dept) => {
    setEditingDept(dept);
    setShowEditModal(true);
  };

  const handleUpdate = async (updatedDept) => {
    setLoading(true);
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/departments/${updatedDept._id}`,
        updatedDept
      );
      toast.success(res.data.message || "Department updated successfully");
      setDepartments((prev) =>
        prev.map((dept) => (dept._id === updatedDept._id ? { ...dept, ...updatedDept } : dept))
      );
      setShowEditModal(false);
      setEditingDept(null);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to update department");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <h3 className="text-lg text-black font-semibold p-2">Department</h3>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">TotalEmployee</th>
              <th scope="col" className="px-6 py-3">CreatedDate</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept) => (
              <tr key={dept._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  <div className="">
                    <div className="font-semibold">{dept.name} </div>
                  </div>
                </th>
                <td className="px-6 py-4">{dept._id}</td>
                <td className="px-6 py-4">
                  <div className="font-normal text-gray-500">{dept.description || "-"}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-normal text-gray-500">{dept.employees ? dept.employees.length : 0}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-normal text-gray-500">{dept.createdAt ? new Date(dept.createdAt).toLocaleDateString() : ""}</div>
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs"
                    onClick={() => handleEdit(dept)}
                    disabled={loading}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"
                    onClick={() => handleDelete(dept._id)}
                    disabled={loading}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Edit Modal */}
      {showEditModal && editingDept && (
        <EditDepartmentModal
          department={editingDept}
          onClose={() => { setShowEditModal(false); setEditingDept(null); }}
          onUpdate={handleUpdate}
        />
      )}
    </>
  );
};

// Edit Modal Component
const EditDepartmentModal = ({ department, onClose, onUpdate }) => {
  const [form, setForm] = useState({
    _id: department._id,
    name: department.name || "",
    description: department.description || "",
    head: department.head || "",
    employees: department.employees ? department.employees.map(e => typeof e === 'string' ? e : e._id) : [],
  });
  const [allEmployees, setAllEmployees] = useState([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/employee/getEmployees`)
      .then(res => setAllEmployees(res.data.data || []))
      .catch(() => setAllEmployees([]));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmployeesChange = (e) => {
    setForm((prev) => ({
      ...prev,
      employees: Array.from(e.target.selectedOptions, option => option.value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    await onUpdate(form);
    setSaving(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Edit Department</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Description</label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Department Head</label>
            <select
              name="head"
              value={form.head}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded"
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
          <div className="mb-4">
            <label className="block mb-1">Employees</label>
            <select
              multiple
              name="employees"
              value={form.employees}
              onChange={handleEmployeesChange}
              className="w-full border px-2 py-1 rounded"
            >
              {allEmployees.map(emp => (
                <option key={emp._id} value={emp._id}>
                  {emp.fullName} ({emp.email})
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2 justify-end">
            <button type="button" className="px-4 py-2 bg-gray-300 rounded" onClick={onClose} disabled={saving}>Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded" disabled={saving}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepartmentTable;
