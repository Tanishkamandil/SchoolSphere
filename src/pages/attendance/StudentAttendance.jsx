import { useState } from "react";

const classes = [
  "Nursery",
  "LKG",
  "UKG",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

const sections = ["A", "B", "C", "D"];

export default function StudentAttendance() {

  const [selectedClass, setSelectedClass] =
    useState("");

  const [selectedSection, setSelectedSection] =
    useState("");

  const [attendanceDate, setAttendanceDate] =
    useState("");

  const [students] = useState([
    {
      id: 1,
      rollNo: "01",
      name: "Rahul Sharma",
      status: "Present",
    },

    {
      id: 2,
      rollNo: "02",
      name: "Priya Verma",
      status: "Absent",
    },

    {
      id: 3,
      rollNo: "03",
      name: "Aman Singh",
      status: "Present",
    },
  ]);

  const [attendanceData, setAttendanceData] =
    useState(students);

  const handleStatusChange = (id, value) => {

    const updated =
      attendanceData.map((student) => {

        if (student.id === id) {
          return {
            ...student,
            status: value,
          };
        }

        return student;
      });

    setAttendanceData(updated);
  };

  const handleSearch = () => {

    if (
      !selectedClass ||
      !selectedSection ||
      !attendanceDate
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Attendance Loaded");
  };

  return (
    <div className="p-6">

      <div className="bg-white rounded-xl shadow border">

        {/* HEADER */}
        <div className="p-4 border-b">

          <h2 className="text-2xl font-semibold">
            Student Attendance
          </h2>

        </div>

        {/* FILTERS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border-b">

          {/* CLASS */}
          <select
            value={selectedClass}
            onChange={(e) =>
              setSelectedClass(e.target.value)
            }
            className="border rounded px-3 py-2"
          >

            <option value="">
              Select Class
            </option>

            {classes.map((cls) => (
              <option
                key={cls}
                value={cls}
              >
                {cls}
              </option>
            ))}

          </select>

          {/* SECTION */}
          <select
            value={selectedSection}
            onChange={(e) =>
              setSelectedSection(e.target.value)
            }
            className="border rounded px-3 py-2"
          >

            <option value="">
              Select Section
            </option>

            {sections.map((sec) => (
              <option
                key={sec}
                value={sec}
              >
                {sec}
              </option>
            ))}

          </select>

          {/* DATE */}
          <input
            type="date"
            value={attendanceDate}
            onChange={(e) =>
              setAttendanceDate(e.target.value)
            }
            className="border rounded px-3 py-2"
          />

          {/* SEARCH BUTTON */}
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2"
          >
            Search
          </button>

        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="p-3 border-b text-left">
                  Roll No
                </th>

                <th className="p-3 border-b text-left">
                  Student Name
                </th>

                <th className="p-3 border-b text-left">
                  Attendance
                </th>

              </tr>

            </thead>

            <tbody>

              {attendanceData.map((student) => (

                <tr key={student.id}>

                  <td className="p-3 border-b">
                    {student.rollNo}
                  </td>

                  <td className="p-3 border-b">
                    {student.name}
                  </td>

                  <td className="p-3 border-b">

                    <select
                      value={student.status}
                      onChange={(e) =>
                        handleStatusChange(
                          student.id,
                          e.target.value
                        )
                      }
                      className="border rounded px-3 py-1"
                    >

                      <option value="Present">
                        Present
                      </option>

                      <option value="Absent">
                        Absent
                      </option>

                      <option value="Late">
                        Late
                      </option>

                      <option value="Half Day">
                        Half Day
                      </option>

                    </select>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}