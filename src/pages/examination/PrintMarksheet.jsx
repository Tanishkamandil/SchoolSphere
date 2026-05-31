import React, { useState } from "react";

const PrintMarksheet = () => {
  const [exam, setExam] = useState("Final Exam");
  const [className, setClassName] = useState("10th");
  const [section, setSection] = useState("A");

  const students = [
    {
      id: 1,
      roll: "101",
      name: "Rahul Sharma",
      percentage: "85%",
      result: "Pass",
    },
    {
      id: 2,
      roll: "102",
      name: "Priya Verma",
      percentage: "91%",
      result: "Pass",
    },
    {
      id: 3,
      roll: "103",
      name: "Aman Kumar",
      percentage: "72%",
      result: "Pass",
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-xl p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-700">
            Print Marksheet
          </h1>

          <button
            onClick={handlePrint}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Print All
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

          <div>
            <label className="block font-semibold mb-2">
              Select Exam
            </label>

            <select
              value={exam}
              onChange={(e) => setExam(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              <option>Final Exam</option>
              <option>Half Yearly</option>
              <option>Unit Test</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Select Class
            </label>

            <select
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              <option>10th</option>
              <option>11th</option>
              <option>12th</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Select Section
            </label>

            <select
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border p-3">#</th>
                <th className="border p-3">Roll No</th>
                <th className="border p-3">Student Name</th>
                <th className="border p-3">Percentage</th>
                <th className="border p-3">Result</th>
                <th className="border p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr
                  key={student.id}
                  className="text-center hover:bg-gray-100"
                >
                  <td className="border p-3">{index + 1}</td>
                  <td className="border p-3">{student.roll}</td>
                  <td className="border p-3">{student.name}</td>
                  <td className="border p-3">
                    {student.percentage}
                  </td>
                  <td className="border p-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {student.result}
                    </span>
                  </td>

                  <td className="border p-3">
                    <button
                      onClick={handlePrint}
                      className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                    >
                      Print
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

export default PrintMarksheet;