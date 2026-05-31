import React, { useState } from "react";

const SearchDue = () => {
  const [filters, setFilters] = useState({
    className: "",
    section: "",
    dueStatus: "",
    search: "",
  });

  const [students] = useState([
    {
      id: 1,
      admissionNo: "ADM001",
      studentName: "Rahul Sharma",
      className: "Class 10",
      section: "A",
      fatherName: "Rakesh Sharma",
      mobile: "9876543210",
      totalFees: 50000,
      paidFees: 35000,
      dueFees: 15000,
      dueStatus: "Pending",
    },
    {
      id: 2,
      admissionNo: "ADM002",
      studentName: "Priya Verma",
      className: "Class 12",
      section: "B",
      fatherName: "Anil Verma",
      mobile: "9876501234",
      totalFees: 60000,
      paidFees: 60000,
      dueFees: 0,
      dueStatus: "Paid",
    },
    {
      id: 3,
      admissionNo: "ADM003",
      studentName: "Aman Khan",
      className: "Class 9",
      section: "C",
      fatherName: "Salim Khan",
      mobile: "9876549999",
      totalFees: 45000,
      paidFees: 20000,
      dueFees: 25000,
      dueStatus: "Pending",
    },
  ]);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredStudents = students.filter((item) => {
    return (
      (filters.className === "" ||
        item.className === filters.className) &&

      (filters.section === "" ||
        item.section === filters.section) &&

      (filters.dueStatus === "" ||
        item.dueStatus === filters.dueStatus) &&

      item.studentName
        .toLowerCase()
        .includes(filters.search.toLowerCase())
    );
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Filter Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">

        <h2 className="text-2xl font-bold mb-6">
          Search Due Fees
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* Class */}
          <div>
            <label className="block mb-2 font-medium">
              Class
            </label>

            <select
              name="className"
              value={filters.className}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">All Classes</option>
              <option>Class 9</option>
              <option>Class 10</option>
              <option>Class 11</option>
              <option>Class 12</option>
            </select>
          </div>

          {/* Section */}
          <div>
            <label className="block mb-2 font-medium">
              Section
            </label>

            <select
              name="section"
              value={filters.section}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">All Sections</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>

          {/* Due Status */}
          <div>
            <label className="block mb-2 font-medium">
              Due Status
            </label>

            <select
              name="dueStatus"
              value={filters.dueStatus}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">All</option>
              <option>Pending</option>
              <option>Paid</option>
            </select>
          </div>

          {/* Search */}
          <div>
            <label className="block mb-2 font-medium">
              Search Student
            </label>

            <input
              type="text"
              name="search"
              value={filters.search}
              onChange={handleChange}
              placeholder="Search name..."
              className="w-full border rounded px-3 py-2"
            />
          </div>

        </div>
      </div>

      {/* Due Fees Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">

        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">
            Due Fees List
          </h2>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded">
            Print Report
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">Admission No</th>
                <th className="border p-3">Student Name</th>
                <th className="border p-3">Class</th>
                <th className="border p-3">Section</th>
                <th className="border p-3">Father Name</th>
                <th className="border p-3">Mobile</th>
                <th className="border p-3">Total Fees</th>
                <th className="border p-3">Paid Fees</th>
                <th className="border p-3">Due Fees</th>
                <th className="border p-3">Status</th>
                <th className="border p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-gray-50"
                >
                  <td className="border p-3">
                    {student.admissionNo}
                  </td>

                  <td className="border p-3">
                    {student.studentName}
                  </td>

                  <td className="border p-3">
                    {student.className}
                  </td>

                  <td className="border p-3">
                    {student.section}
                  </td>

                  <td className="border p-3">
                    {student.fatherName}
                  </td>

                  <td className="border p-3">
                    {student.mobile}
                  </td>

                  <td className="border p-3">
                    ₹{student.totalFees}
                  </td>

                  <td className="border p-3">
                    ₹{student.paidFees}
                  </td>

                  <td className="border p-3 text-red-600 font-semibold">
                    ₹{student.dueFees}
                  </td>

                  <td className="border p-3">
                    <span
                      className={`px-3 py-1 rounded text-white ${
                        student.dueStatus === "Paid"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {student.dueStatus}
                    </span>
                  </td>

                  <td className="border p-3 text-center space-x-2">

                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      View
                    </button>

                    <button className="bg-green-500 text-white px-3 py-1 rounded">
                      Collect
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default SearchDue;