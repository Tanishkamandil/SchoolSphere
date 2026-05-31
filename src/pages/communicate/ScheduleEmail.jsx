import React, { useState } from "react";

const ScheduleEmail = () => {

  const [message, setMessage] = useState("");

  const scheduledEmails = [
    {
      id: 1,
      subject: "Fee Reminder",
      recipientType: "Group",
      recipient: "Parents",
      date: "27 May 2026",
      time: "10:00 AM",
      status: "Scheduled",
    },
    {
      id: 2,
      subject: "Exam Notice",
      recipientType: "Individual",
      recipient: "Rahul Sharma",
      date: "28 May 2026",
      time: "09:30 AM",
      status: "Pending",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="bg-white rounded-xl shadow-md p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          <h1 className="text-2xl font-semibold">
            Schedule Email
          </h1>

          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
            + Schedule
          </button>

        </div>

        {/* Form */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          {/* Left */}
          <div className="space-y-4">

            {/* Subject */}
            <input
              type="text"
              placeholder="Email Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />

            {/* Recipient Type */}
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2">

              <option>Select Recipient Type</option>

              <option>Group</option>
              <option>Individual</option>

            </select>

            {/* Group / Individual */}
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2">

              <option>Select Group / Individual</option>

              <option>All Students</option>
              <option>Teachers</option>
              <option>Parents</option>
              <option>Class 10</option>
              <option>Class 12</option>

              <option>Rahul Sharma</option>
              <option>Anjali Verma</option>

            </select>

            {/* Date */}
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />

            {/* Time */}
            <input
              type="time"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />

          </div>

          {/* Right */}
          <div>

            {/* Message */}
            <textarea
              rows="10"
              placeholder="Write email message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <div className="flex justify-between mt-4">

              <p className="text-sm text-gray-500">
                Characters: {message.length}
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
                Send Later
              </button>

            </div>

          </div>

        </div>

        {/* Search */}
        <div className="mb-5">

          <input
            type="text"
            placeholder="Search scheduled emails..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-80"
          />

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-gray-100 text-left">

                <th className="p-3">Subject</th>
                <th className="p-3">Recipient Type</th>
                <th className="p-3">Recipient</th>
                <th className="p-3">Date</th>
                <th className="p-3">Time</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-center">Action</th>

              </tr>
            </thead>

            <tbody>

              {scheduledEmails.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-3">{item.subject}</td>

                  <td className="p-3">
                    {item.recipientType}
                  </td>

                  <td className="p-3">
                    {item.recipient}
                  </td>

                  <td className="p-3">{item.date}</td>

                  <td className="p-3">{item.time}</td>

                  <td className="p-3">

                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
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

export default ScheduleEmail;
