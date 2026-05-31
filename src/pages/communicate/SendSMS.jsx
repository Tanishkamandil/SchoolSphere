import React, { useState } from "react";

const SendSMS = () => {

  const [message, setMessage] = useState("");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="bg-white shadow-md rounded-lg p-6">

        {/* Header */}
        <h1 className="text-3xl font-semibold mb-6">
          Send SMS
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Section */}
          <div className="lg:col-span-2 space-y-5">

            {/* SMS Template */}
            <div>
              <label className="block font-medium mb-2">
                SMS Template
              </label>

              <select className="w-full border border-gray-300 rounded-md px-4 py-2">

                <option>Select</option>
                <option>Holiday Notice</option>
                <option>Exam Notice</option>
                <option>Fee Reminder</option>

              </select>
            </div>

            {/* Title */}
            <div>
              <label className="block font-medium mb-2">
                Title *
              </label>

              <input
                type="text"
                placeholder="Enter title"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>

            {/* Send Through */}
            <div>

              <label className="block font-medium mb-2">
                Send Through *
              </label>

              <div className="flex gap-6">

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  SMS
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Mobile App
                </label>

              </div>

            </div>

            {/* Template ID */}
            <div>

              <label className="block font-medium mb-2">
                Template ID
              </label>

              <input
                type="text"
                placeholder="Enter Template ID"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />

              <p className="text-sm text-gray-500 mt-1">
                This field is required only for Indian SMS Gateway
              </p>

            </div>

            {/* Message */}
            <div>

              <label className="block font-medium mb-2">
                Message *
              </label>

              <textarea
                rows="10"
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3"
              />

              <div className="text-right text-sm text-gray-500 mt-2">
                Character Count: {message.length}
              </div>

            </div>

          </div>

          {/* Right Section */}
          <div>

            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">

              {/* Tabs */}
              <div className="flex border-b mb-4 text-sm font-medium">

                <button className="px-4 py-2 border-b-2 border-orange-500 text-orange-500">
                  Group
                </button>

                <button className="px-4 py-2">
                  Individual
                </button>

                <button className="px-4 py-2">
                  Class
                </button>

                <button className="px-4 py-2">
                  Birthday
                </button>

              </div>

              {/* Message To */}
              <h2 className="font-semibold mb-4">
                Message To *
              </h2>

              <div className="space-y-3">

                <label className="flex items-center gap-3">
                  <input type="checkbox" />
                  Students
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" />
                  Guardians
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" />
                  Admin
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" />
                  Teacher
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" />
                  Accountant
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" />
                  Librarian
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" />
                  Receptionist
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" />
                  Super Admin
                </label>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-end items-center gap-6 mt-8">

          <label className="flex items-center gap-2">
            <input type="radio" name="sendtype" defaultChecked />
            Send Now
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="sendtype" />
            Schedule
          </label>

          <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-md">
            Submit
          </button>

        </div>

      </div>
    </div>
  );
};

export default SendSMS;