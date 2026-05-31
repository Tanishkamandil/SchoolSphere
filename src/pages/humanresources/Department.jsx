import React, { useState } from "react";

const Department = () => {
  const [departments, setDepartments] = useState([
    {
      id: 1,
      name: "Information Technology",
      code: "IT001",
      head: "Rahul Sharma",
      description: "Handles IT operations",
    },
  ]);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    head: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addDepartment = () => {
    if (!formData.name || !formData.code) {
      alert("Please fill required fields");
      return;
    }

    setDepartments([
      ...departments,
      {
        id: Date.now(),
        ...formData,
      },
    ]);

    setFormData({
      name: "",
      code: "",
      head: "",
      description: "",
    });
  };

  const deleteDepartment = (id) => {
    setDepartments(
      departments.filter((item) => item.id !== id)
    );
  };

  const filteredDepartments = departments.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Department Management
        </h1>
      </div>

      {/* Add Form */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">

        <h2 className="text-lg font-semibold mb-4">
          Add Department
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="text"
            name="name"
            placeholder="Department Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="code"
            placeholder="Department Code"
            value={formData.code}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="head"
            placeholder="Department Head"
            value={formData.head}
            onChange={handleChange}
            className="border p-2 rounded"
          />

        </div>

        <textarea
          name="description"
          rows="4"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded w-full mt-4"
        />

        <button
          onClick={addDepartment}
          className="bg-blue-600 text-white px-5 py-2 rounded mt-4"
        >
          Add Department
        </button>

      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <input
          type="text"
          placeholder="Search Department..."
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
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Code</th>
              <th className="p-3 text-left">Head</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredDepartments.length > 0 ? (
              filteredDepartments.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.code}</td>
                  <td className="p-3">{item.head}</td>
                  <td className="p-3">
                    {item.description}
                  </td>

                  <td className="p-3 text-center">
                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded"
                      onClick={() =>
                        deleteDepartment(item.id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-5 text-gray-500"
                >
                  No Department Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Department;