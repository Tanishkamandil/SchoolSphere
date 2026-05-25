import { useState } from "react";

function TeachersTimetable() {

  const teachers = [
    "Rahul Sharma",
    "Priya Verma",
    "Amit Singh",
    "Neha Gupta",
  ];

  const sections = ["A", "B", "C", "D"];

  const [teacher, setTeacher] = useState("");
  const [section, setSection] = useState("");

  const handleSearch = () => {
    alert(`Teacher: ${teacher} | Section: ${section}`);
  };

  return (
    <div className="p-6">

      {/* Heading */}

      <div className="flex items-center justify-between mb-6">

        <h1 className="text-3xl font-bold">
          Teachers Timetable
        </h1>

        <button className="bg-gray-700 text-white px-5 py-2 rounded-lg">
          + Add
        </button>

      </div>

      {/* Main Box */}

      <div className="bg-white shadow-lg rounded-xl p-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Teacher Dropdown */}

          <div>

            <label className="block mb-2 font-semibold">
              Teacher Name *
            </label>

            <select
              value={teacher}
              onChange={(e) => setTeacher(e.target.value)}
              className="w-full border p-3 rounded-lg outline-none"
            >
              <option value="">Select Teacher</option>

              {teachers.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}

            </select>

          </div>

          {/* Section Dropdown */}

          <div>

            <label className="block mb-2 font-semibold">
              Section *
            </label>

            <select
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="w-full border p-3 rounded-lg outline-none"
            >
              <option value="">Select Section</option>

              {sections.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}

            </select>

          </div>

        </div>

        {/* Search Button */}

        <div className="mt-6 flex justify-end">

          <button
            onClick={handleSearch}
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg"
          >
            Search
          </button>

        </div>

      </div>

    </div>
  );
}

export default TeachersTimetable;