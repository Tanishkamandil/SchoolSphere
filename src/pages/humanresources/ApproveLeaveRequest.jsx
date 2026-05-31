import React, { useState } from "react";

const ApproveLeaveRequest = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      employee: "Rahul Sharma",
      department: "IT",
      leaveType: "Casual Leave",
      days: 3,
      status: "Pending",
    },
    {
      id: 2,
      employee: "Neha Verma",
      department: "Accounts",
      leaveType: "Sick Leave",
      days: 2,
      status: "Approved",
    },
    {
      id: 3,
      employee: "Amit Kumar",
      department: "HR",
      leaveType: "Emergency Leave",
      days: 1,
      status: "Rejected",
    },
  ]);

  const [search, setSearch] = useState("");

  const updateStatus = (id, status) => {
    setLeaveRequests(
      leaveRequests.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  const filteredLeaves = leaveRequests.filter((item) =>
    item.employee.toLowerCase().includes(search.toLowerCase())
  );

  const total = leaveRequests.length;
  const pending = leaveRequests.filter(
    (item) => item.status === "Pending"
  ).length;
  const approved = leaveRequests.filter(
    (item) => item.status === "Approved"
  ).length;
  const rejected = leaveRequests.filter(
    (item) => item.status === "Rejected"
  ).length;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Approve Leave Requests
        </h1>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-500">Total Requests</h3>
          <p className="text-3xl font-bold text-blue-600">
            {total}
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-500">Pending</h3>
          <p className="text-3xl font-bold text-yellow-500">
            {pending}
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-500">Approved</h3>
          <p className="text-3xl font-bold text-green-600">
            {approved}
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-500">Rejected</h3>
          <p className="text-3xl font-bold text-red-600">
            {rejected}
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-5 rounded-lg shadow mb-6">
        <input
          type="text"
          placeholder="Search Employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Employee</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Leave Type</th>
              <th className="p-3 text-left">Days</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredLeaves.length > 0 ? (
              filteredLeaves.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-3">{item.employee}</td>
                  <td className="p-3">{item.department}</td>
                  <td className="p-3">{item.leaveType}</td>
                  <td className="p-3">{item.days}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-3 text-center">
                    <button
                      onClick={() =>
                        updateStatus(item.id, "Approved")
                      }
                      className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(item.id, "Rejected")
                      }
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center p-5 text-gray-500"
                >
                  No Leave Request Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveLeaveRequest;