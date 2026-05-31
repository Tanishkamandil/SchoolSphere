// src/pages/frontoffice/PostalReceive.jsx

import React, { useState } from "react";

const PostalReceive = () => {

  const [receiveData, setReceiveData] = useState([
    {
      id: 1,
      fromTitle: "Delhi University",
      referenceNo: "REC101",
      address: "Delhi, India",
      note: "Admission Approval Letter",
      toTitle: "ABC College",
      date: "2026-05-28",
    },
    {
      id: 2,
      fromTitle: "CBSE Board",
      referenceNo: "REC102",
      address: "Noida, India",
      note: "Exam Circular",
      toTitle: "XYZ School",
      date: "2026-05-27",
    },
  ]);

  const [formData, setFormData] = useState({
    fromTitle: "",
    referenceNo: "",
    address: "",
    note: "",
    toTitle: "",
    date: "",
  });

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {

    if (
      !formData.fromTitle ||
      !formData.referenceNo ||
      !formData.date
    ) {
      alert("Please fill required fields");
      return;
    }

    setReceiveData([
      ...receiveData,
      {
        id: receiveData.length + 1,
        ...formData,
      },
    ]);

    setFormData({
      fromTitle: "",
      referenceNo: "",
      address: "",
      note: "",
      toTitle: "",
      date: "",
    });
  };

  const filteredData = receiveData.filter((item) =>
    item.fromTitle
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-5">

        <h1 className="text-2xl font-bold">
          Postal Receive
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          + Add Receive
        </button>

      </div>

      {/* FORM */}
      <div className="bg-white p-5 rounded shadow mb-6">

        <h2 className="text-lg font-semibold mb-4">
          Add Receive Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
            type="text"
            name="fromTitle"
            placeholder="From Title"
            value={formData.fromTitle}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="referenceNo"
            placeholder="Reference No"
            value={formData.referenceNo}
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
            name="toTitle"
            placeholder="To Title"
            value={formData.toTitle}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
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
          onClick={handleAdd}
          className="bg-green-600 text-white px-5 py-2 rounded mt-4"
        >
          Save Receive
        </button>

      </div>

      {/* SEARCH */}
      <div className="bg-white p-4 rounded shadow mb-5">

        <input
          type="text"
          placeholder="Search by From Title..."
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
              <th className="border p-2">From Title</th>
              <th className="border p-2">Reference No</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">To</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Note</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50"
                >

                  <td className="border p-2">
                    {item.fromTitle}
                  </td>

                  <td className="border p-2">
                    {item.referenceNo}
                  </td>

                  <td className="border p-2">
                    {item.address}
                  </td>

                  <td className="border p-2">
                    {item.toTitle}
                  </td>

                  <td className="border p-2">
                    {item.date}
                  </td>

                  <td className="border p-2">
                    {item.note}
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
                  colSpan="7"
                  className="text-center p-5 text-gray-500"
                >
                  No Receive Data Found
                </td>
              </tr>
            )}

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default PostalReceive;