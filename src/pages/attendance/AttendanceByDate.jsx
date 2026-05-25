import { useState } from "react";
import { Search } from "lucide-react";

export default function AttendanceByDate() {
  const [selectedClass, setSelectedClass] =
    useState("");

  const [selectedSection, setSelectedSection] =
    useState("");

  const [attendanceDate, setAttendanceDate] =
    useState("");

  const [students] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      className: "10",
      section: "A",
      status: "Present",
    },

    {
      id: 2,
      name: "Priya Verma",
      className: "10",
      section: "A",
      status: "Absent",
    },

    {
      id: 3,
      name: "Aman Khan",
      className: "9",
      section: "B",
      status: "Present",
    },
  ]);

  const filteredStudents = students.filter(
    (item) =>
      (selectedClass === "" ||
        item.className === selectedClass) &&
      (selectedSection === "" ||
        item.section === selectedSection)
  );

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow border">

        {/* HEADER */}
        <div className="p-5 border-b">
          <h2 className="text-2xl font-semibold">
            Attendance By Date
          </h2>
        </div>

        {/* FILTER SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 border-b">

          {/* CLASS */}
          <div>
            <label className="block mb-2 font-medium">
              Class
            </label>

            <select
              value={selectedClass}
              onChange={(e) =>
                setSelectedClass(e.target.value)
              }
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select Class</option>
<option value="LKG">LKG</option>
  <option value="UKG">UKG</option>

              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>

            </select>
          </div>

          {/* SECTION */}
          <div>
            <label className="block mb-2 font-medium">
              Section
            </label>

            <select
              value={selectedSection}
              onChange={(e) =>
                setSelectedSection(e.target.value)
              }
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">
                Select Section
              </option>

              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>

            </select>
          </div>

          {/* DATE */}
          <div>
            <label className="block mb-2 font-medium">
              Attendance Date
            </label>

            <input
              type="date"
              value={attendanceDate}
              onChange={(e) =>
                setAttendanceDate(e.target.value)
              }
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* SEARCH BUTTON */}
          <div className="flex items-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2">
              <Search size={18} />
              Search
            </button>
          </div>

        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>

                <th className="p-3 text-left border-b">
                  Student Name
                </th>

                <th className="p-3 text-left border-b">
                  Class
                </th>

                <th className="p-3 text-left border-b">
                  Section
                </th>

                <th className="p-3 text-left border-b">
                  Attendance Date
                </th>

                <th className="p-3 text-left border-b">
                  Status
                </th>

              </tr>
            </thead>

            <tbody>

              {filteredStudents.length > 0 ? (
                filteredStudents.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50"
                  >

                    <td className="p-3 border-b">
                      {item.name}
                    </td>

                    <td className="p-3 border-b">
                      {item.className}
                    </td>

                    <td className="p-3 border-b">
                      {item.section}
                    </td>

                    <td className="p-3 border-b">
                      {attendanceDate || "Not Selected"}
                    </td>

                    <td className="p-3 border-b">

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium
                        ${
                          item.status === "Present"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-10 text-gray-500"
                  >
                    No Attendance Found
                  </td>
                </tr>
              )}

            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}