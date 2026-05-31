// src/pages/frontoffice/PhoneCall.jsx

import React, { useState } from "react";

const PhoneCall = () => {
  const [calls, setCalls] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "9876543210",
      callType: "Incoming",
      purpose: "Admission Inquiry",
      date: "2026-05-28",
      duration: "05:20",
      followUp: "2026-05-30",
      description: "Asked about BCA admission",
    },
    {
      id: 2,
      name: "Neha Verma",
      phone: "9123456780",
      callType: "Outgoing",
      purpose: "Fee Reminder",
      date: "2026-05-27",
      duration: "02:10",
      followUp: "2026-06-01",
      description: "Fee pending reminder",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    callType: "Incoming",
    purpose: "",
    date: "",
    duration: "",
    followUp: "",
    description: "",
  });

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addCall = () => {
    if (!formData.name || !formData.phone) {
      alert("Please fill required fields");
      return;
    }

    setCalls([
      ...calls,
      {
        id: calls.length + 1,
        ...formData,
      },
    ]);

    setFormData({
      name: "",
      phone: "",
      callType: "Incoming",
      purpose: "",
      date: "",
      duration: "",
      followUp: "",
      description: "",
    });
  };

  const filteredCalls = calls.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.includes(search)
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">
          Phone Call Log
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          + Add Call
        </button>
      </div>

      {/* FORM */}
      <div className="bg-white p-5 rounded shadow mb-6">

        <h2 className="text-lg font-semibold mb-4">
          Add Phone Call
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
            type="text"
            name="name"
            placeholder="Caller Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <select
            name="callType"
            value={formData.callType}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option>Incoming</option>
            <option>Outgoing</option>
          </select>

          <input
            type="text"
            name="purpose"
            placeholder="Purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={formData.duration}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="date"
            name="followUp"
            value={formData.followUp}
            onChange={handleChange}
            className="border p-2 rounded"
          />

        </div>

        <textarea
          name="description"
          placeholder="Call Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded w-full mt-4"
          rows="3"
        ></textarea>

        <button
          onClick={addCall}
          className="bg-green-600 text-white px-5 py-2 rounded mt-4"
        >
          Save Call
        </button>

      </div>

      {/* SEARCH */}
      <div className="bg-white p-4 rounded shadow mb-5">

        <input
          type="text"
          placeholder="Search by name or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        />

      </div>

      {/* TABLE */}
      <div className="bg-white rounded shadow overflow-x-auto">

        <table className="w-full border-collapse">

          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Purpose</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Duration</th>
              <th className="border p-2">Follow Up</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredCalls.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">

                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.phone}</td>
                <td className="border p-2">{item.callType}</td>
                <td className="border p-2">{item.purpose}</td>
                <td className="border p-2">{item.date}</td>
                <td className="border p-2">{item.duration}</td>
                <td className="border p-2">{item.followUp}</td>

                <td className="border p-2 space-x-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">
                    View
                  </button>

                  <button className="bg-green-500 text-white px-2 py-1 rounded">
                    Edit
                  </button>

                  <button className="bg-red-500 text-white px-2 py-1 rounded">
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default PhoneCall;