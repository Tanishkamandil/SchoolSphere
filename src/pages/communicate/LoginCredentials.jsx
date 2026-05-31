import React, { useState } from "react";

const LoginCredential = () => {

  const [userType, setUserType] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [section, setSection] = useState("");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="bg-white rounded-xl shadow-md p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">
            Login Credential
          </h1>

          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
            Generate Credential
          </button>
        </div>

        {/* Form */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">

          {/* User Type */}
          <div>
            <label className="block mb-2 font-medium">
              User Type
            </label>

            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">Select</option>
              <option>Student</option>
              <option>Teacher</option>
              <option>Admin</option>
              <option>Parent</option>
            </select>
          </div>

          {/* Class */}
          <div>
            <label className="block mb-2 font-medium">
              Class
            </label>

            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">Select Class</option>

              <option>Nursery</option>
              <option>LKG</option>
              <option>UKG</option>

              {[...Array(12)].map((_, i) => (
                <option key={i}>
                  Class {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Section */}
          <div>
            <label className="block mb-2 font-medium">
              Section
            </label>

            <select
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">Select Section</option>

              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>

        </div>

        {/* Search */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Search user..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-80"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-gray-100 text-left">

                <th className="p-3">Name</th>
                <th className="p-3">User Type</th>
                <th className="p-3">Username</th>
                <th className="p-3">Password</th>
                <th className="p-3">Class</th>
                <th className="p-3">Section</th>
                <th className="p-3 text-center">Action</th>

              </tr>
            </thead>

            <tbody>

              <tr className="border-b">

                <td className="p-3">Rahul Sharma</td>
                <td className="p-3">Student</td>
                <td className="p-3">rahul123</td>
                <td className="p-3">••••••••</td>
                <td className="p-3">Class 10</td>
                <td className="p-3">A</td>

                <td className="p-3 text-center">

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded">
                    Send
                  </button>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
};

export default LoginCredential;