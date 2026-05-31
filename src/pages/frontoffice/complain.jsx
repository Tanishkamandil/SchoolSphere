import React, { useState } from "react";

const Complaint = () => {
  const [filters, setFilters] = useState({
    category: "",
    status: "Active",
    search: "",
  });

  const [data] = useState([
    {
      id: 1,
      name: "Aman Sharma",
      category: "Transport",
      complaint: "Bus delay daily",
      date: "2026-01-10",
      status: "Active",
    },
    {
      id: 2,
      name: "Neha Verma",
      category: "Academic",
      complaint: "Teacher not available",
      date: "2026-01-08",
      status: "Resolved",
    },
    {
      id: 3,
      name: "Rahul Singh",
      category: "Hostel",
      complaint: "Water issue in room",
      date: "2026-01-05",
      status: "Pending",
    },
  ]);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredData = data.filter((item) => {
    return (
      (filters.category === "" || item.category === filters.category) &&
      (filters.status === "" || item.status === filters.status) &&
      item.name.toLowerCase().includes(filters.search.toLowerCase())
    );
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Complaint Management</h1>

        <button className="bg-red-600 text-white px-4 py-2 rounded">
          + Add Complaint
        </button>
      </div>

      {/* FILTER BOX */}
      <div className="bg-white p-4 rounded shadow mb-5">

        <h2 className="font-semibold mb-3">Select Criteria</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

          {/* Category */}
          <select
            name="category"
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Category</option>
            <option>Transport</option>
            <option>Academic</option>
            <option>Hostel</option>
            <option>Infrastructure</option>
          </select>

          {/* Status */}
          <select
            name="status"
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="Active">Active</option>
            <option>Pending</option>
            <option>Resolved</option>
          </select>

          {/* Search */}
          <input
            type="text"
            name="search"
            placeholder="Search complaint..."
            onChange={handleChange}
            className="border p-2 rounded"
          />

          {/* Search Button */}
          <button className="bg-gray-700 text-white px-4 rounded">
            Search
          </button>

        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded shadow overflow-x-auto">

        <table className="w-full border-collapse">

          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Complaint</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">

                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.category}</td>
                  <td className="border p-2">{item.complaint}</td>
                  <td className="border p-2">{item.date}</td>

                  <td className="border p-2">
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        item.status === "Resolved"
                          ? "bg-green-500"
                          : item.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

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
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-500">
                  No complaints found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default Complaint;