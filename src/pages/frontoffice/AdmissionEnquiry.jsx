import React, { useState } from "react";

const AdmissionEnquiry = () => {
  const [filters, setFilters] = useState({
    className: "",
    source: "",
    fromDate: "",
    toDate: "",
    status: "Active",
    search: "",
  });

  const [data] = useState([
    {
      id: 1,
      name: "Aman Sharma",
      phone: "9876543210",
      source: "Website",
      enquiryDate: "2026-01-10",
      lastFollowUp: "2026-01-12",
      nextFollowUp: "2026-01-20",
      status: "Active",
    },
    {
      id: 2,
      name: "Neha Verma",
      phone: "9123456780",
      source: "Walk-in",
      enquiryDate: "2026-01-08",
      lastFollowUp: "2026-01-09",
      nextFollowUp: "2026-01-18",
      status: "Closed",
    },
    {
      id: 3,
      name: "Rahul Singh",
      phone: "9988776655",
      source: "Facebook",
      enquiryDate: "2026-01-05",
      lastFollowUp: "2026-01-07",
      nextFollowUp: "2026-01-15",
      status: "Active",
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
      (filters.source === "" || item.source === filters.source) &&
      (filters.status === "" || item.status === filters.status) &&
      item.name.toLowerCase().includes(filters.search.toLowerCase())
    );
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admission Enquiry</h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          + Add
        </button>
      </div>

      {/* FILTER BOX */}
      <div className="bg-white p-4 rounded shadow mb-5">

        <h2 className="font-semibold mb-3">Select Criteria</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">

          {/* Class */}
          <select
            name="className"
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Class</option>
            <option>Class 9</option>
            <option>Class 10</option>
            <option>Class 11</option>
            <option>Class 12</option>
          </select>

          {/* Source */}
          <select
            name="source"
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Source</option>
            <option>Website</option>
            <option>Walk-in</option>
            <option>Facebook</option>
            <option>Reference</option>
          </select>

          {/* From Date */}
          <input
            type="date"
            name="fromDate"
            onChange={handleChange}
            className="border p-2 rounded"
          />

          {/* To Date */}
          <input
            type="date"
            name="toDate"
            onChange={handleChange}
            className="border p-2 rounded"
          />

          {/* Status + Search Button */}
          <div className="flex gap-2">
            <select
              name="status"
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
              <option>Active</option>
              <option>Closed</option>
            </select>

            <button className="bg-gray-700 text-white px-4 rounded">
              Search
            </button>
          </div>

        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="bg-white p-3 rounded shadow mb-4">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded shadow overflow-x-auto">

        <table className="w-full border-collapse">

          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Source</th>
              <th className="border p-2">Enquiry Date</th>
              <th className="border p-2">Last Follow Up</th>
              <th className="border p-2">Next Follow Up</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">

                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.phone}</td>
                  <td className="border p-2">{item.source}</td>
                  <td className="border p-2">{item.enquiryDate}</td>
                  <td className="border p-2">{item.lastFollowUp}</td>
                  <td className="border p-2">{item.nextFollowUp}</td>

                  <td className="border p-2">
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        item.status === "Active"
                          ? "bg-green-500"
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
                <td colSpan="8" className="text-center p-6 text-gray-500">
                  No data available in table
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default AdmissionEnquiry;