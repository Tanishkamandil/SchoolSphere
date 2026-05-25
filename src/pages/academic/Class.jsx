import { useState } from "react";

function Class() {

  const classes = [
    "Nursery",
    "LKG",
    "UKG",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
  ];

  const sections = ["A", "B", "C", "D"];

  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  const handleSearch = () => {
    alert(
      `Searching Class: ${selectedClass} | Section: ${selectedSection}`
    );
  };

  return (
    <div className="p-6">

      {/* Top Header */}

      <div className="flex items-center justify-between mb-6">

        <h1 className="text-3xl font-bold">
          Select Criteria
        </h1>

        <button className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-lg">
          + Add
        </button>

      </div>

      {/* Form Section */}

      <div className="bg-white shadow-lg rounded-xl p-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Class Dropdown */}

          <div>

            <label className="block mb-2 font-semibold">
              Class *
            </label>

            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full border p-3 rounded-lg outline-none"
            >
              <option value="">Select</option>

              {classes.map((item, index) => (
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
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="w-full border p-3 rounded-lg outline-none"
            >
              <option value="">Select</option>

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

export default Class;