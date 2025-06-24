"use client";
import React, { useState } from "react";
import { FiArrowDown, FiArrowUp, FiClock, FiCheckCircle, FiSearch, FiFilter, FiEye, FiPlus } from "react-icons/fi";

// Mock Data - Replace with API data
const initialTransactions = [
  { id: 1, user: "Jane Doe", type: "Inflow", amount: 5000, date: "2024-07-01", status: "Completed", description: "Client payment" },
  { id: 2, user: "John Smith", type: "Outflow", amount: 1200, date: "2024-07-02", status: "Pending", description: "Office supplies" },
  { id: 3, user: "Emily White", type: "Inflow", amount: 3000, date: "2024-07-03", status: "Completed", description: "Consulting fee" },
  { id: 4, user: "Michael Brown", type: "Outflow", amount: 800, date: "2024-07-04", status: "Rejected", description: "Travel reimbursement" },
  { id: 5, user: "David Green", type: "Inflow", amount: 2000, date: "2024-07-05", status: "Completed", description: "Project bonus" },
  { id: 6, user: "Sarah Lee", type: "Outflow", amount: 1500, date: "2024-07-06", status: "Pending", description: "Team lunch" },
];

const StatCard = ({ icon, title, value, color }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
    <div className={`p-3 rounded-full ${color}`}>{icon}</div>
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

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

const TransactionManagementPage = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleStatusChange = (id, newStatus) => {
    setTransactions(transactions.map(txn => txn.id === id ? { ...txn, status: newStatus } : txn));
  };

  const filteredTransactions = transactions
    .filter(txn => filter === "All" || txn.status === filter)
    .filter(txn =>
      txn.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.description.toLowerCase().includes(searchTerm.toLowerCase())
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
        <button className="flex items-center bg-[#E26015] hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition space-x-2">
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
              placeholder="Search by user, type, or description..."
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
              <th className="p-4 font-semibold text-sm text-gray-600">User</th>
              <th className="p-4 font-semibold text-sm text-gray-600">Type</th>
              <th className="p-4 font-semibold text-sm text-gray-600">Amount</th>
              <th className="p-4 font-semibold text-sm text-gray-600">Description</th>
              <th className="p-4 font-semibold text-sm text-gray-600">Status</th>
              <th className="p-4 font-semibold text-sm text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredTransactions.map(txn => (
              <tr key={txn.id}>
                <td className="p-4">{txn.date}</td>
                <td className="p-4">{txn.user}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${txn.type === "Inflow" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {txn.type}
                  </span>
                </td>
                <td className="p-4 font-semibold">₦{txn.amount.toLocaleString()}</td>
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
                    {txn.status === "Pending" && (
                      <>
                        <button
                          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
                          onClick={() => handleStatusChange(txn.id, "Completed")}
                        >
                          Approve
                        </button>
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                          onClick={() => handleStatusChange(txn.id, "Rejected")}
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
              <div><span className="font-semibold">User:</span> {selectedTransaction.user}</div>
              <div><span className="font-semibold">Type:</span> {selectedTransaction.type}</div>
              <div><span className="font-semibold">Amount:</span> ₦{selectedTransaction.amount.toLocaleString()}</div>
              <div><span className="font-semibold">Date:</span> {selectedTransaction.date}</div>
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
    </div>
  );
};

export default TransactionManagementPage;