// src/pages/frontoffice/VisitorBook.jsx

import React, { useState } from "react";

const VisitorBook = () => {

  const [visitors, setVisitors] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "9876543210",
      purpose: "Admission Inquiry",
      personToMeet: "Principal",
      date: "2026-05-28",
      inTime: "10:00 AM",
      outTime: "10:30 AM",
      note: "Asked about BCA admission",
    },
    {
      id: 2,
      name: "Neha Verma",
      phone: "9123456789",
      purpose: "Fee Discussion",
      personToMeet: "Accountant",
      date: "2026-05-27",
      inTime: "11:15 AM",
      outTime: "11:45 AM",
      note: "Fee structure discussion",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    purpose: "",
    personToMeet: "",
    date: "",
    inTime: "",
    outTime: "",
    note: "",
  });

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addVisitor = () => {

    if (
      !formData.name ||
      !formData.phone ||
      !formData.date
    ) {
      alert("Please fill required fields");
      return;
    }

    setVisitors([
      ...visitors,
      {
        id: visitors.length + 1,
        ...formData,
      },
    ]);

    setFormData({
      name: "",
      phone: "",
      purpose: "",
      personToMeet: "",
      date: "",
      inTime: "",
      outTime: "",
      note: "",
    });
  };

  const filteredVisitors = visitors.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-5">

        <h1 className="text-2xl font-bold">
          Visitor Book
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          + Add Visitor
        </button>

      </div>

      {/* FORM */}
      <div className="bg-white p-5 rounded shadow mb-6">

        <h2 className="text-lg font-semibold mb-4">
          Add Visitor Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
            type="text"
            name="name"
            placeholder="Visitor Name"
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

          <input
            type="text"
            name="purpose"
            placeholder="Purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="personToMeet"
            placeholder="Person To Meet"
            value={formData.personToMeet}
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
            name="inTime"
            placeholder="In Time"
            value={formData.inTime}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="outTime"
            placeholder="Out Time"
            value={formData.outTime}
            onChange={handleChange}
            className="border p-2 rounded"
          />

        </div>

        <textarea
          name="note"
          placeholder="Note"
          value={formData.note}
          onChange={handleChange}
          rows="4"
          className="border p-2 rounded w-full mt-4"
        ></textarea>

        <button
          onClick={addVisitor}
          className="bg-green-600 text-white px-5 py-2 rounded mt-4"
        >
          Save Visitor
        </button>

      </div>

      {/* SEARCH */}
      <div className="bg-white p-4 rounded shadow mb-5">

        <input
          type="text"
          placeholder="Search Visitor..."
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
              <th className="border p-2">Purpose</th>
              <th className="border p-2">Person To Meet</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">In Time</th>
              <th className="border p-2">Out Time</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredVisitors.length > 0 ? (
              filteredVisitors.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50"
                >

                  <td className="border p-2">
                    {item.name}
                  </td>

                  <td className="border p-2">
                    {item.phone}
                  </td>

                  <td className="border p-2">
                    {item.purpose}
                  </td>

                  <td className="border p-2">
                    {item.personToMeet}
                  </td>

                  <td className="border p-2">
                    {item.date}
                  </td>

                  <td className="border p-2">
                    {item.inTime}
                  </td>

                  <td className="border p-2">
                    {item.outTime}
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
                <td
                  colSpan="8"
                  className="text-center p-5 text-gray-500"
                >
                  No Visitor Found
                </td>
              </tr>
            )}

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default VisitorBook;