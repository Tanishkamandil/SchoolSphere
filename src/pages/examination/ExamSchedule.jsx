// src/pages/examination/ExamSchedule.jsx

import React, { useState } from "react";
import {
  CalendarDays,
  Plus,
  Pencil,
  Trash2,
  Printer,
  Download,
} from "lucide-react";

const ExamSchedule = () => {
  const [formData, setFormData] = useState({
    examGroup: "",
    exam: "",
    session: "",
    className: "",
    section: "",
    subject: "",
    examDate: "",
    startTime: "",
    endTime: "",
    roomNo: "",
    maxMarks: "",
    minMarks: "",
  });

  const [scheduleList, setScheduleList] = useState([
    {
      id: 1,
      subject: "Mathematics",
      date: "2026-05-10",
      start: "09:00 AM",
      end: "12:00 PM",
      room: "101",
      max: "100",
      min: "33",
    },

    {
      id: 2,
      subject: "Science",
      date: "2026-05-12",
      start: "10:00 AM",
      end: "01:00 PM",
      room: "102",
      max: "100",
      min: "33",
    },
  ]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const newSchedule = {
      id: scheduleList.length + 1,
      subject: formData.subject,
      date: formData.examDate,
      start: formData.startTime,
      end: formData.endTime,
      room: formData.roomNo,
      max: formData.maxMarks,
      min: formData.minMarks,
    };

    setScheduleList([...scheduleList, newSchedule]);

    alert("Exam Schedule Added Successfully");

    setFormData({
      examGroup: "",
      exam: "",
      session: "",
      className: "",
      section: "",
      subject: "",
      examDate: "",
      startTime: "",
      endTime: "",
      roomNo: "",
      maxMarks: "",
      minMarks: "",
    });
  };

  const handleDelete = (id) => {
    setScheduleList(scheduleList.filter((item) => item.id !== id));
  };

  return (
    <div className="p-5 bg-[#f4f6f9] min-h-screen">
      {/* Top Form */}
      <div className="bg-white border rounded shadow-sm">
        <div className="border-b px-5 py-4">
          <h2 className="text-[28px] font-semibold text-gray-700 flex items-center gap-2">
            <CalendarDays size={30} />
            Exam Schedule
          </h2>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Exam Group */}
            <div>
              <label className="block mb-2 font-semibold">
                Exam Group
              </label>

              <select
                name="examGroup"
                value={formData.examGroup}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3"
              >
                <option value="">Select</option>
                <option value="Quarterly Exam">
                  Quarterly Exam
                </option>
                <option value="Half Yearly Exam">
                  Half Yearly Exam
                </option>
                <option value="Annual Exam">
                  Annual Exam
                </option>
              </select>
            </div>

            {/* Exam */}
            <div>
              <label className="block mb-2 font-semibold">
                Exam
              </label>

              <select
                name="exam"
                value={formData.exam}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3"
              >
                <option value="">Select</option>
                <option value="Math Test">Math Test</option>
                <option value="Science Test">
                  Science Test
                </option>
                <option value="Final Test">Final Test</option>
              </select>
            </div>

            {/* Session */}
            <div>
              <label className="block mb-2 font-semibold">
                Session
              </label>

              <select
                name="session"
                value={formData.session}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3"
              >
                <option value="">Select</option>
                <option value="2025-26">2025-26</option>
                <option value="2026-27">2026-27</option>
              </select>
            </div>

            {/* Class */}
            <div>
              <label className="block mb-2 font-semibold">
                Class
              </label>

              <select
                name="className"
                value={formData.className}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3"
              >
                <option value="">Select</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
              </select>
            </div>

            {/* Section */}
            <div>
              <label className="block mb-2 font-semibold">
                Section
              </label>

              <select
                name="section"
                value={formData.section}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3"
              >
                <option value="">Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-2 font-semibold">
                Subject
              </label>

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3"
              >
                <option value="">Select Subject</option>
                <option value="Mathematics">
                  Mathematics
                </option>
                <option value="Science">Science</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Computer">Computer</option>
              </select>
            </div>

            {/* Exam Date */}
            <div>
              <label className="block mb-2 font-semibold">
                Exam Date
              </label>

              <input
                type="date"
                name="examDate"
                value={formData.examDate}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3"
              />
            </div>

            {/* Start Time */}
            <div>
              <label className="block mb-2 font-semibold">
                Start Time
              </label>

              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3"
              />
            </div>

            {/* End Time */}
            <div>
              <label className="block mb-2 font-semibold">
                End Time
              </label>

              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3"
              />
            </div>

            {/* Room Number */}
            <div>
              <label className="block mb-2 font-semibold">
                Room No
              </label>

              <input
                type="text"
                name="roomNo"
                value={formData.roomNo}
                onChange={handleChange}
                placeholder="Enter Room No"
                className="w-full border rounded px-4 py-3"
              />
            </div>

            {/* Max Marks */}
            <div>
              <label className="block mb-2 font-semibold">
                Max Marks
              </label>

              <input
                type="number"
                name="maxMarks"
                value={formData.maxMarks}
                onChange={handleChange}
                placeholder="100"
                className="w-full border rounded px-4 py-3"
              />
            </div>

            {/* Min Marks */}
            <div>
              <label className="block mb-2 font-semibold">
                Min Marks
              </label>

              <input
                type="number"
                name="minMarks"
                value={formData.minMarks}
                onChange={handleChange}
                placeholder="33"
                className="w-full border rounded px-4 py-3"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold flex items-center gap-2"
            >
              <Plus size={18} />
              Save Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="bg-white border rounded shadow-sm mt-6">
        <div className="border-b px-5 py-4 flex justify-between items-center">
          <h2 className="text-[26px] font-semibold">
            Exam Schedule List
          </h2>

          <div className="flex gap-2">
            <button className="border p-2 rounded">
              <Printer size={18} />
            </button>

            <button className="border p-2 rounded">
              <Download size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto p-5">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left px-3 py-3">Subject</th>
                <th className="text-left px-3 py-3">Date</th>
                <th className="text-left px-3 py-3">
                  Start Time
                </th>
                <th className="text-left px-3 py-3">
                  End Time
                </th>
                <th className="text-left px-3 py-3">
                  Room No
                </th>
                <th className="text-left px-3 py-3">
                  Max Marks
                </th>
                <th className="text-left px-3 py-3">
                  Min Marks
                </th>
                <th className="text-center px-3 py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {scheduleList.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-3 py-3">
                    {item.subject}
                  </td>

                  <td className="px-3 py-3">{item.date}</td>

                  <td className="px-3 py-3">
                    {item.start}
                  </td>

                  <td className="px-3 py-3">{item.end}</td>

                  <td className="px-3 py-3">{item.room}</td>

                  <td className="px-3 py-3">{item.max}</td>

                  <td className="px-3 py-3">{item.min}</td>

                  <td className="px-3 py-3">
                    <div className="flex justify-center gap-3">
                      <button className="text-blue-600">
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(item.id)
                        }
                        className="text-red-600"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
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

export default ExamSchedule;