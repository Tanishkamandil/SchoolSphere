import React, { useState } from "react";

const ApplyLeave = () => {
  const [leaveData, setLeaveData] = useState({
    employeeName: "",
    employeeId: "",
    department: "",
    leaveType: "",
    fromDate: "",
    toDate: "",
    contact: "",
    reason: "",
  });

  const [leaveList, setLeaveList] = useState([]);

  const handleChange = (e) => {
    setLeaveData({
      ...leaveData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateDays = () => {
    if (leaveData.fromDate && leaveData.toDate) {
      const from = new Date(leaveData.fromDate);
      const to = new Date(leaveData.toDate);

      const diff =
        (to - from) / (1000 * 60 * 60 * 24) + 1;

      return diff > 0 ? diff : 0;
    }
    return 0;
  };

  const handleSubmit = () => {
    if (
      !leaveData.employeeName ||
      !leaveData.employeeId ||
      !leaveData.leaveType ||
      !leaveData.fromDate ||
      !leaveData.toDate
    ) {
      alert("Please fill all required fields");
      return;
    }

    const newLeave = {
      id: Date.now(),
      ...leaveData,
      totalDays: calculateDays(),
      status: "Pending",
    };

    setLeaveList([...leaveList, newLeave]);

    setLeaveData({
      employeeName: "",
      employeeId: "",
      department: "",
      leaveType: "",
      fromDate: "",
      toDate: "",
      contact: "",
      reason: "",
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Apply Leave
        </h1>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">

        <h2 className="text-lg font-semibold mb-4">
          Leave Application Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <input
            type="text"
            name="employeeName"
            placeholder="Employee Name"
            value={leaveData.employeeName}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            value={leaveData.employeeId}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={leaveData.department}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <select
            name="leaveType"
            value={leaveData.leaveType}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Select Leave Type</option>
            <option>Casual Leave</option>
            <option>Sick Leave</option>
            <option>Paid Leave</option>
            <option>Emergency Leave</option>
          </select>

          <input
            type="date"
            name="fromDate"
            value={leaveData.fromDate}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="date"
            name="toDate"
            value={leaveData.toDate}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={leaveData.contact}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            readOnly
            value={calculateDays()}
            placeholder="Total Days"
            className="border p-2 rounded bg-gray-100"
          />
        </div>

        <textarea
          name="reason"
          value={leaveData.reason}
          onChange={handleChange}
          rows="4"
          placeholder="Reason for Leave"
          className="border p-2 rounded w-full mt-4"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-5 py-2 rounded mt-4"
        >
          Apply Leave
        </button>
      </div>

      {/* Leave History */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">

        <div className="p-4 border-b">
          <h2 className="font-semibold">
            Leave Applications
          </h2>
        </div>

        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Employee</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Leave Type</th>
              <th className="p-3 text-left">From</th>
              <th className="p-3 text-left">To</th>
              <th className="p-3 text-left">Days</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {leaveList.length > 0 ? (
              leaveList.map((leave) => (
                <tr
                  key={leave.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-3">
                    {leave.employeeName}
                  </td>

                  <td className="p-3">
                    {leave.department}
                  </td>

                  <td className="p-3">
                    {leave.leaveType}
                  </td>

                  <td className="p-3">
                    {leave.fromDate}
                  </td>

                  <td className="p-3">
                    {leave.toDate}
                  </td>

                  <td className="p-3">
                    {leave.totalDays}
                  </td>

                  <td className="p-3">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                      {leave.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center p-6 text-gray-500"
                >
                  No Leave Applications Found
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default ApplyLeave;