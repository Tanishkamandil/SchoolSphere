// src/pages/examination/ExamResult.jsx

import React, { useState } from "react";
import {
  Search,
  Eye,
  Download,
  Printer,
} from "lucide-react";

const ExamResult = () => {
  const [filters, setFilters] = useState({
    examGroup: "",
    exam: "",
    session: "",
    className: "",
    section: "",
  });

  const [students] = useState([
    {
      id: 1,
      roll: "101",
      name: "Rahul Sharma",
      class: "10",
      section: "A",
      result: "Pass",
      percentage: "89%",
    },
    {
      id: 2,
      roll: "102",
      name: "Priya Singh",
      class: "10",
      section: "A",
      result: "Pass",
      percentage: "92%",
    },
    {
      id: 3,
      roll: "103",
      name: "Aman Verma",
      class: "10",
      section: "B",
      result: "Fail",
      percentage: "32%",
    },
  ]);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    alert("Result Searched Successfully");
  };

  return (
    <div className="p-5 bg-[#f4f6f9] min-h-screen">
      {/* Top Filter Card */}
      <div className="bg-white border rounded shadow-sm">
        <div className="border-b px-5 py-4">
          <h2 className="text-[28px] font-semibold text-gray-700">
            Exam Result
          </h2>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Exam Group */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Exam Group <span className="text-red-500">*</span>
              </label>

              <select
                name="examGroup"
                value={filters.examGroup}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select</option>
                <option value="Annual Exam">Annual Exam</option>
                <option value="Half Yearly Exam">
                  Half Yearly Exam
                </option>
                <option value="Quarterly Exam">
                  Quarterly Exam
                </option>
              </select>
            </div>

            {/* Exam */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Exam <span className="text-red-500">*</span>
              </label>

              <select
                name="exam"
                value={filters.exam}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select</option>
                <option value="Math Test">Math Test</option>
                <option value="Science Test">Science Test</option>
                <option value="Final Test">Final Test</option>
              </select>
            </div>

            {/* Session */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Session <span className="text-red-500">*</span>
              </label>

              <select
                name="session"
                value={filters.session}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select</option>
                <option value="2025-26">2025-26</option>
                <option value="2026-27">2026-27</option>
              </select>
            </div>

            {/* Class */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Class <span className="text-red-500">*</span>
              </label>

              <select
                name="className"
                value={filters.className}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
              </select>
            </div>

            {/* Section */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Section <span className="text-red-500">*</span>
              </label>

              <select
                name="section"
                value={filters.section}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold flex items-center justify-center gap-2"
              >
                <Search size={18} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Result Table */}
      <div className="bg-white border rounded shadow-sm mt-6">
        <div className="border-b px-5 py-4 flex justify-between items-center">
          <h2 className="text-[26px] font-semibold text-gray-700">
            Student Result List
          </h2>

          <div className="flex gap-2">
            <button className="border p-2 rounded hover:bg-gray-100">
              <Printer size={18} />
            </button>

            <button className="border p-2 rounded hover:bg-gray-100">
              <Download size={18} />
            </button>
          </div>
        </div>

        <div className="p-5 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left py-3 px-3">Roll No</th>
                <th className="text-left py-3 px-3">Student Name</th>
                <th className="text-left py-3 px-3">Class</th>
                <th className="text-left py-3 px-3">Section</th>
                <th className="text-left py-3 px-3">Percentage</th>
                <th className="text-left py-3 px-3">Result</th>
                <th className="text-center py-3 px-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="py-3 px-3">{student.roll}</td>

                  <td className="py-3 px-3">{student.name}</td>

                  <td className="py-3 px-3">{student.class}</td>

                  <td className="py-3 px-3">{student.section}</td>

                  <td className="py-3 px-3">
                    {student.percentage}
                  </td>

                  <td className="py-3 px-3">
                    <span
                      className={`px-3 py-1 rounded text-white text-sm ${
                        student.result === "Pass"
                          ? "bg-green-600"
                          : "bg-red-600"
                      }`}
                    >
                      {student.result}
                    </span>
                  </td>

                  <td className="py-3 px-3">
                    <div className="flex justify-center">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 text-sm text-gray-500">
            Showing {students.length} Students
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamResult;