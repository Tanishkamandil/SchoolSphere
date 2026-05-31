import React, { useState } from "react";

const EmailTemplate = () => {

  const [message, setMessage] = useState("");

  const templates = [
    {
      id: 1,
      name: "Admission Confirmation",
      subject: "Admission Approved",
      type: "Email",
      date: "26 May 2026",
    },
    {
      id: 2,
      name: "Fee Reminder",
      subject: "Pending Fee Reminder",
      type: "SMS",
      date: "25 May 2026",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="bg-white rounded-xl shadow-md p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">
            Email / SMS Templates
          </h1>

          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
            + Add Template
          </button>
        </div>

        {/* Form Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          {/* Left */}
          <div className="space-y-4">

            <input
              type="text"
              placeholder="Template Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />

            <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
              <option>Email</option>
              <option>SMS</option>
            </select>

          </div>

          {/* Right */}
          <div>

            <textarea
              rows="7"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <div className="flex justify-between mt-4">

              <p className="text-sm text-gray-500">
                Characters: {message.length}
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
                Send Message
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
                <th className="p-3">Subject</th>
                <th className="p-3">Type</th>
                <th className="p-3">Created Date</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {templates.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.subject}</td>
                  <td className="p-3">{item.type}</td>
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

export default EmailTemplate;