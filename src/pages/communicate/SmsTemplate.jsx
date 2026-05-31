import React, { useState } from "react";

const SmsTemplate = () => {

  const [message, setMessage] = useState("");

  const templates = [
    {
      id: 1,
      name: "Holiday Notice",
      templateId: "SMS001",
      message: "School will remain closed tomorrow.",
      status: "Active",
    },
    {
      id: 2,
      name: "Fee Reminder",
      templateId: "SMS002",
      message: "Please submit school fees before due date.",
      status: "Active",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="bg-white rounded-xl shadow-md p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          <h1 className="text-2xl font-semibold">
            SMS Template
          </h1>

          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
            + Add Template
          </button>

        </div>

        {/* Form */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          {/* Left Side */}
          <div className="space-y-4">

            {/* Template Name */}
            <input
              type="text"
              placeholder="Template Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />

            {/* Template ID */}
            <input
              type="text"
              placeholder="Template ID"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />

            {/* Status */}
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2">

              <option>Select Status</option>

              <option>Active</option>
              <option>Inactive</option>

            </select>

          </div>

          {/* Right Side */}
          <div>

            {/* Message */}
            <textarea
              rows="8"
              placeholder="Write SMS template..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <div className="flex justify-between mt-4">

              <p className="text-sm text-gray-500">
                Character Count: {message.length}
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
                Save Template
              </button>

            </div>

          </div>

        </div>

        {/* Search */}
        <div className="mb-5">

          <input
            type="text"
            placeholder="Search templates..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-80"
          />

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-gray-100 text-left">

                <th className="p-3">Template Name</th>
                <th className="p-3">Template ID</th>
                <th className="p-3">Message</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-center">Action</th>

              </tr>
            </thead>

            <tbody>

              {templates.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-3">{item.name}</td>

                  <td className="p-3">
                    {item.templateId}
                  </td>

                  <td className="p-3">
                    {item.message}
                  </td>

                  <td className="p-3">

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {item.status}
                    </span>

                  </td>

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

export default SmsTemplate;