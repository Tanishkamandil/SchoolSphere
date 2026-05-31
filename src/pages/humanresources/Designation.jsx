import React, { useState } from "react";

const Designation = () => {
  const [search, setSearch] = useState("");

  const [designationData, setDesignationData] = useState({
    name: "",
    code: "",
    department: "",
    description: "",
  });

  const [designations, setDesignations] = useState([
    {
      id: 1,
      name: "Software Developer",
      code: "DEV001",
      department: "IT",
      description: "Develops software applications",
    },
    {
      id: 2,
      name: "Account Manager",
      code: "ACC001",
      department: "Accounts",
      description: "Manages financial records",
    },
  ]);

  const handleChange = (e) => {
    setDesignationData({
      ...designationData,
      [e.target.name]: e.target.value,
    });
  };

  const addDesignation = () => {
    if (
      !designationData.name ||
      !designationData.code ||
      !designationData.department
    ) {
      alert("Please fill all required fields");
      return;
    }

    setDesignations([
      ...designations,
      {
        id: Date.now(),
        ...designationData,
      },
    ]);

    setDesignationData({
      name: "",
      code: "",
      department: "",
      description: "",
    });
  };

  const deleteDesignation = (id) => {
    setDesignations(
      designations.filter((item) => item.id !== id)
    );
  };

  const filteredData = designations.filter(
    (item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.department
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Designation Management
        </h1>

        <div className="bg-white px-4 py-2 rounded shadow">
          Total: {designations.length}
        </div>
      </div>

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">

        <h2 className="text-lg font-semibold mb-4">
          Add Designation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <input
            type="text"
            name="name"
            placeholder="Designation Name"
            value={designationData.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="code"
            placeholder="Designation Code"
            value={designationData.code}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <select
            name="department"
            value={designationData.department}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">
              Select Department
            </option>
            <option value="IT">IT</option>
            <option value="Accounts">
              Accounts
            </option>
            <option value="HR">HR</option>
            <option value="Admin">Admin</option>
            <option value="Library">
              Library
            </option>
          </select>

        </div>

        <textarea
          rows="4"
          name="description"
          placeholder="Description"
          value={designationData.description}
          onChange={handleChange}
          className="border p-2 rounded w-full mt-4"
        />

        <button
          onClick={addDesignation}
          className="bg-blue-600 text-white px-5 py-2 rounded mt-4"
        >
          Add Designation
        </button>

      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <input
          type="text"
          placeholder="Search Designation..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border p-2 rounded w-full md:w-1/3"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">
                Designation
              </th>
              <th className="p-3 text-left">
                Code
              </th>
              <th className="p-3 text-left">
                Department
              </th>
              <th className="p-3 text-left">
                Description
              </th>
              <th className="p-3 text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>

            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-3">
                    {item.name}
                  </td>

                  <td className="p-3">
                    {item.code}
                  </td>

                  <td className="p-3">
                    {item.department}
                  </td>

                  <td className="p-3">
                    {item.description}
                  </td>

                  <td className="p-3 text-center">
                    <button
                      onClick={() =>
                        deleteDesignation(item.id)
                      }
                      className="bg-red-600 text-white px-3 py-1 rounded"
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
                  className="text-center p-6 text-gray-500"
                >
                  No Designation Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default Designation;