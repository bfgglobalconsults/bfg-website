"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiArrowDown, FiArrowUp, FiClock, FiCheckCircle, FiSearch, FiFilter, FiEye, FiPlus, FiEdit2 } from "react-icons/fi";
import { useAuth } from "@/context/authContext";
import UploadImage from "@/components/UploadImage";
import { CldImage, CldUploadButton } from "next-cloudinary";

// Status badge
const StatusBadge = ({ status }) => {
  const statusStyles = {
    Completed: "bg-green-100 text-green-800",
    Pending: "bg-yellow-100 text-yellow-800",
    Rejected: "bg-red-100 text-red-800",
  };
  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}>
      {status}
    </span>
  );
};

// Transaction Modal (Add/Edit)
function TransactionModal({ isOpen, onClose, onSubmit, initialData, clients }) {
  const { user } = useAuth()
  const [employees, setEmployees] = useState([]); 
    const [department, setDepartment] = useState([]); 

  const [imageId, setImageId] = useState("");
  
   
  const [form, setForm] = useState({
    employee_id: "", 
    description: "",
    amount: "",
    status: "Pending",
    type: "inflow", 
    attachment: imageId,
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/employee/getEmployees`)
        .then(res => setEmployees(res.data.data || []))
        .catch(() => setEmployees([]));
    }
    if (initialData) setForm(initialData);
    else setForm({  client_id: user?._id, employee_id: "", description: "", amount: "", status: "Pending", type: "inflow" });
  }, [initialData, isOpen]);

  useEffect(() => {
    if (isOpen) {
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/departments/getDepartments`)
        .then(res => setDepartment(res.data.data || []))
        .catch(() => setDepartment([]));
    }
    if (initialData) setForm(initialData);
    else setForm({  client_id: user?._id, employee_id: "", department_id:"", description: "", amount: "", status: "Pending", type: "inflow" });
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (initialData && initialData._id) {
        await axios.put(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/transaction/${initialData._id}`,
          form
        );
      } else {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/transaction/addTransaction`,
          form
        );
      }
      onSubmit();
      onClose();
    } catch (err) {
      alert("Failed to save transaction.");
    }
    setSubmitting(false);
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg relative max-h-[90vh] overflow-y-auto">
        <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold mb-4">{initialData ? "Edit" : "Add"} Transaction</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Employee *</label>
            <select
              name="employee_id"
              value={form.employee_id}
              onChange={e => setForm({ ...form, employee_id: e.target.value })}
              required
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select Employee</option>
              
              {employees.map(emp => (
                <option key={emp._id} value={emp._id}>
                  {emp.fullName} ({emp.email})
                </option>
              ))}
            </select>
          </div>
           <div>
            <label className="block mb-1 font-medium">Department ID *</label>
            <select
              name="department_id"
              value={form.department_id}
              onChange={e => setForm({ ...form, department_id: e.target.value })}
              required
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select Department</option>
              
              {department.map(emp => (
                <option key={emp._id} value={emp._id}>
                  {emp.name} 
                </option>
              ))}
            </select>

          </div>
          <div style={{ margin: '1em 0' }}>
            <label style={{ marginRight: '1em' }}>Transaction Type:</label>
            <label style={{ marginRight: '1em' }}>
              <input
                type="radio"
                name="type"
                value="inflow"
                checked={form.type === "inflow"}
                onChange={e => setForm({ ...form, type: e.target.value })}
              />
              Inflow
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="outflow"
                checked={form.type === "outflow"}
                onChange={e => setForm({ ...form, type: e.target.value })}
              />
              Outflow
            </label>
          </div>
          <div>
            <label className="block mb-1 font-medium">Description *</label>
            <input
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Description"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Amount *</label>
            <input
              name="amount"
              value={form.amount}
              onChange={handleChange}
              required
              type="number"
              min="0"
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Amount"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Status *</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <div>
          <CldUploadButton
        onSuccess={(result) => {
          setImageId(result.info.public_id);
          setForm((prev) => ({ ...prev, attachment: result.info.public_id }));
          console.log("Image uploaded:", result.info);
        }}
        uploadPreset="blog-image"
            />
             {imageId && (
                    <CldImage
                      width="500"
                      height="500"
                      src={imageId}
                      sizes="100vw"
                      alt="Blog Image"
                    />
                  )}
          </div>
          
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold"
            disabled={submitting}
          >
            {submitting ? "Saving..." : initialData ? "Update" : "Add"} Transaction
          </button>
        </form>
      </div>
    </div>
  );
}

const StatCard = ({ icon, title, value, color }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
    <div className={`p-3 rounded-full ${color}`}>{icon}</div>
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const TransactionManagementPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [clients, setClients] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);

  // Fetch transactions
  const fetchTransactions = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/transaction/getTransactions`);
    setTransactions(res.data.data || []);
  };

  // Fetch clients (update endpoint if needed)
  // const fetchClients = async () => {
  //   const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/clients`);
  //   setClients(res.data.data || []);
  // };

  useEffect(() => {
    fetchTransactions();
    // fetchClients();
  }, []);

  const handleAdd = () => {
    setEditData(null);
    setShowModal(true);
  };

  const handleEdit = (txn) => {
    setEditData(txn);
    setShowModal(true);
  };

  const filteredTransactions = transactions
    .filter(txn => filter === "All" || txn.status === filter)
    .filter(txn =>
      (txn.client?.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (txn.description || "").toLowerCase().includes(searchTerm.toLowerCase())
    );

  const totalFunds = transactions
    .filter(txn => txn.status === "Completed")
    .reduce((sum, txn) => txn.type === "Inflow" ? sum + txn.amount : sum - txn.amount, 0);

  const inflow = transactions
    .filter(txn => txn.type === "Inflow" && txn.status === "Completed")
    .reduce((sum, txn) => sum + txn.amount, 0);

  const outflow = transactions
    .filter(txn => txn.type === "Outflow" && txn.status === "Completed")
    .reduce((sum, txn) => sum + txn.amount, 0);

  const pendingCount = transactions.filter(txn => txn.status === "Pending").length;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Funds & Transactions</h1>
        <button
          className="flex items-center bg-[#E26015] hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition space-x-2"
          onClick={handleAdd}
        >
          <FiPlus />
          <span>Add Transaction</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<FiCheckCircle size={24} className="text-blue-600" />} title="Total Funds" value={`₦${totalFunds.toLocaleString()}`} color="bg-blue-100" />
        <StatCard icon={<FiArrowDown size={24} className="text-green-600" />} title="Inflow" value={`₦${inflow.toLocaleString()}`} color="bg-green-100" />
        <StatCard icon={<FiArrowUp size={24} className="text-red-600" />} title="Outflow" value={`₦${outflow.toLocaleString()}`} color="bg-red-100" />
        <StatCard icon={<FiClock size={24} className="text-yellow-600" />} title="Pending Approvals" value={pendingCount} color="bg-yellow-100" />
      </div>

      {/* Table Controls */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="relative w-full md:w-1/3">
            <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by client or description..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <FiFilter className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="All">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 font-semibold text-sm text-gray-600">Date</th>
              <th className="p-4 font-semibold text-sm text-gray-600">Client</th>
              <th className="p-4 font-semibold text-sm text-gray-600">Type</th>
              <th className="p-4 font-semibold text-sm text-gray-600">Amount</th>
              <th className="p-4 font-semibold text-sm text-gray-600">Description</th>
              <th className="p-4 font-semibold text-sm text-gray-600">Status</th>
              <th className="p-4 font-semibold text-sm text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredTransactions.map(txn => (
              <tr key={txn._id}>
                <td className="p-4">{txn.date ? new Date(txn.date).toLocaleDateString() : ""}</td>
                <td className="p-4">{txn.client?.name || "N/A"}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${txn.type === "Inflow" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {txn.type}
                  </span>
                </td>
                <td className="p-4 font-semibold">₦{txn.amount?.toLocaleString()}</td>
                <td className="p-4">{txn.description}</td>
                <td className="p-4"><StatusBadge status={txn.status} /></td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <button
                      className="text-blue-600 hover:bg-blue-50 p-2 rounded-full"
                      title="View"
                      onClick={() => setSelectedTransaction(txn)}
                    >
                      <FiEye size={18} />
                    </button>
                    <button
                      className="text-yellow-600 hover:bg-yellow-50 p-2 rounded-full"
                      title="Edit"
                      onClick={() => handleEdit(txn)}
                    >
                      <FiEdit2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredTransactions.length === 0 && (
          <div className="text-center p-8 text-gray-500">
            No transactions found.
          </div>
        )}
      </div>

      {/* Transaction Details Modal */}
      {selectedTransaction && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
              onClick={() => setSelectedTransaction(null)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Transaction Details</h2>
            <div className="space-y-2">
              {/* <div><span className="font-semibold">Client:</span> {selectedTransaction.client?.name || "N/A"}</div> */}
              <div><span className="font-semibold">Type:</span> {selectedTransaction.type}</div>
              <div><span className="font-semibold">Amount:</span> ₦{selectedTransaction.amount?.toLocaleString()}</div>
              <div><span className="font-semibold">Date:</span> {selectedTransaction.date ? new Date(selectedTransaction.date).toLocaleDateString() : ""}</div>
              <div><span className="font-semibold">Status:</span> <StatusBadge status={selectedTransaction.status} /></div>
              <div><span className="font-semibold">Description:</span> {selectedTransaction.description}</div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => setSelectedTransaction(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Modal */}
      <TransactionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={fetchTransactions}
        initialData={editData}
        clients={clients}
      />
    </div>
  );
};

export default TransactionManagementPage;