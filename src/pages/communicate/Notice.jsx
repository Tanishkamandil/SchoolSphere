import React, { useState } from "react";

const Notice = () => {

  const [search, setSearch] = useState("");

  const notices = [
    {
      id: 1,
      title: "Holiday Notice",
      message: "School will remain closed tomorrow.",
      date: "26 May 2026",
      audience: "All Students",
    },
    {
      id: 2,
      title: "Exam Notice",
      message: "Unit test will start from Monday.",
      date: "25 May 2026",
      audience: "Class 10",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="bg-white rounded-xl shadow-md p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          <h1 className="text-2xl font-semibold">
            Notice Board
          </h1>

          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
            + Add Notice
          </button>

        </div>

        {/* Form */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          {/* Left */}
          <div className="space-y-4">

            <input
              type="text"
              placeholder="Notice Title"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />

            <select className="w-full border border-gray-300 rounded-lg px-4 py-2">

              <option>Select Audience</option>
              <option>All Students</option>
              <option>Teachers</option>
              <option>Parents</option>
              <option>Class 10</option>
              <option>Class 12</option>

            </select>

            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />

          </div>

          {/* Right */}
          <div>

            <textarea
              rows="7"
              placeholder="Write notice message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <div className="flex justify-end mt-4">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
                Publish Notice
              </button>

            </div>

          </div>

        </div>

        {/* Search */}
        <div className="mb-5">

          <input
            type="text"
            placeholder="Search notices..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-80"
          />

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-gray-100 text-left">

                <th className="p-3">Title</th>
                <th className="p-3">Message</th>
                <th className="p-3">Audience</th>
                <th className="p-3">Date</th>
                <th className="p-3 text-center">Action</th>

              </tr>
            </thead>

            <tbody>

              {notices.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-3">{item.title}</td>
                  <td className="p-3">{item.message}</td>
                  <td className="p-3">{item.audience}</td>
                  <td className="p-3">{item.date}</td>

                  <td className="p-3 text-center space-x-2">

                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      Edit
                    </button>

                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
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

export default Notice;