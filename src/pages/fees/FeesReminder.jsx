import React, { useState } from "react";

const FeesReminder = () => {
  const [formData, setFormData] = useState({
    className: "",
    section: "",
    reminderType: "",
    reminderTime: "",
    daysBefore: "",
    message: "",
    action: "",
  });

  const [reminders, setReminders] = useState([
    {
      id: 1,
      className: "Class 10",
      section: "A",
      reminderType: "SMS",
      reminderTime: "09:00 AM",
      daysBefore: "5",
      action: "Auto Send",
      message: "Your fee due date is near.",
    },
    {
      id: 2,
      className: "Class 12",
      section: "B",
      reminderType: "Email",
      reminderTime: "07:00 PM",
      daysBefore: "3",
      action: "Manual Send",
      message: "Please pay your pending fees.",
    },
  ]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReminder = {
      id: reminders.length + 1,
      ...formData,
    };

    setReminders([...reminders, newReminder]);

    setFormData({
      className: "",
      section: "",
      reminderType: "",
      reminderTime: "",
      daysBefore: "",
      message: "",
      action: "",
    });
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Add Reminder Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">
            Fees Reminder
          </h2>

          <form onSubmit={handleSubmit}>

            {/* Class */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Class *
              </label>

              <select
                name="className"
                value={formData.className}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              >
                <option value="">Select Class</option>
                <option>Class 1</option>
                <option>Class 2</option>
                <option>Class 5</option>
                <option>Class 10</option>
                <option>Class 12</option>
              </select>
            </div>

            {/* Section */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Section *
              </label>

              <select
                name="section"
                value={formData.section}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              >
                <option value="">Select Section</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>

            {/* Reminder Type */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Reminder Type *
              </label>

              <select
                name="reminderType"
                value={formData.reminderType}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              >
                <option value="">Select Type</option>
                <option>SMS</option>
                <option>Email</option>
                <option>WhatsApp</option>
              </select>
            </div>

            {/* Reminder Time */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Reminder Time *
              </label>

              <input
                type="time"
                name="reminderTime"
                value={formData.reminderTime}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Days Before */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Days Before Due Date *
              </label>

              <input
                type="number"
                name="daysBefore"
                value={formData.daysBefore}
                onChange={handleChange}
                placeholder="Enter days"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Action */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Action *
              </label>

              <select
                name="action"
                value={formData.action}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              >
                <option value="">Select Action</option>
                <option>Auto Send</option>
                <option>Manual Send</option>
                <option>Schedule Send</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Reminder Message *
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Enter reminder message"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            >
              Save Reminder
            </button>
          </form>
        </div>

        {/* Reminder List */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold">
              Reminder List
            </h2>

            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-2"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">

              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3">Class</th>
                  <th className="border p-3">Section</th>
                  <th className="border p-3">Type</th>
                  <th className="border p-3">Reminder Time</th>
                  <th className="border p-3">Days</th>
                  <th className="border p-3">Action</th>
                  <th className="border p-3">Message</th>
                  <th className="border p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {reminders.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50"
                  >
                    <td className="border p-3">
                      {item.className}
                    </td>

                    <td className="border p-3">
                      {item.section}
                    </td>

                    <td className="border p-3">
                      {item.reminderType}
                    </td>

                    <td className="border p-3">
                      {item.reminderTime}
                    </td>

                    <td className="border p-3">
                      {item.daysBefore}
                    </td>

                    <td className="border p-3">
                      {item.action}
                    </td>

                    <td className="border p-3">
                      {item.message}
                    </td>

                    <td className="border p-3 text-center space-x-2">
                      <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                        Edit
                      </button>

                      <button
                        onClick={() => deleteReminder(item.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
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
    </div>
  );
};

export default FeesReminder;