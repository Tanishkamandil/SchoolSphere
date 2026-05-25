import { useState } from "react";

function AssignClassTeacher() {

  const classes = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"];
  const sections = ["A", "B", "C"];

  const teachers = [
    "Gulshan Khan (STF-1234)",
    "Ravina Sharma (STF-2334)",
    "Anjali Jadon (STF-1245)",
    "Mansi Jadon (STF-3452)",
    "Vanshika Rathore (STF-1267)",
    "Reeta Sharma (STF-678)",
    "Radha Jadon (STF-17)",
  ];

  const [selectedTeachers, setSelectedTeachers] = useState([]);

  const [formData, setFormData] = useState({
    className: "",
    section: "",
  });

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTeacherSelect = (teacher) => {

    if (selectedTeachers.includes(teacher)) {

      setSelectedTeachers(
        selectedTeachers.filter((t) => t !== teacher)
      );

    } else {

      setSelectedTeachers([
        ...selectedTeachers,
        teacher,
      ]);
    }
  };

  const handleSave = () => {

    if (
      !formData.className ||
      !formData.section ||
      selectedTeachers.length === 0
    ) {
      alert("Please fill all fields");
      return;
    }

    const newRecords = selectedTeachers.map((teacher) => ({
      className: formData.className,
      section: formData.section,
      teacher,
    }));

    setRecords([...records, ...newRecords]);

    setFormData({
      className: "",
      section: "",
    });

    setSelectedTeachers([]);
  };

  return (

    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT PANEL */}

        <div className="bg-white rounded shadow p-5">

          <h2 className="text-3xl font-semibold mb-6">
            Assign Class Teacher
          </h2>

          {/* Class */}

          <div className="mb-4">

            <label className="font-semibold">
              Class
            </label>

            <select
              name="className"
              value={formData.className}
              onChange={handleChange}
              className="w-full border mt-2 p-3 rounded"
            >
              <option value="">
                Select
              </option>

              {classes.map((cls, index) => (
                <option key={index} value={cls}>
                  {cls}
                </option>
              ))}
            </select>

          </div>

          {/* Section */}

          <div className="mb-4">

            <label className="font-semibold">
              Section
            </label>

            <select
              name="section"
              value={formData.section}
              onChange={handleChange}
              className="w-full border mt-2 p-3 rounded"
            >
              <option value="">
                Select
              </option>

              {sections.map((sec, index) => (
                <option key={index} value={sec}>
                  {sec}
                </option>
              ))}
            </select>

          </div>

          {/* Teachers */}

          <div>

            <label className="font-semibold">
              Class Teacher
            </label>

            <div className="mt-3 space-y-3">

              {teachers.map((teacher, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <input
                    type="checkbox"
                    checked={selectedTeachers.includes(teacher)}
                    onChange={() =>
                      handleTeacherSelect(teacher)
                    }
                  />

                  <span>
                    {teacher}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Save Button */}

          <button
            onClick={handleSave}
            className="mt-6 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded"
          >
            Save
          </button>

        </div>

        {/* RIGHT PANEL */}

        <div className="bg-white rounded shadow p-5">

          <h2 className="text-3xl font-semibold mb-6">
            Class Teacher List
          </h2>

          <input
            type="text"
            placeholder="Search..."
            className="border p-3 rounded w-full mb-5"
          />

          <table className="w-full border">

            <thead className="bg-gray-100">

              <tr>

                <th className="border p-3">
                  Class
                </th>

                <th className="border p-3">
                  Section
                </th>

                <th className="border p-3">
                  Class Teacher
                </th>

              </tr>

            </thead>

            <tbody>

              {records.length > 0 ? (

                records.map((item, index) => (

                  <tr key={index}>

                    <td className="border p-3">
                      {item.className}
                    </td>

                    <td className="border p-3">
                      {item.section}
                    </td>

                    <td className="border p-3">
                      {item.teacher}
                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="3"
                    className="text-center p-10 text-gray-400"
                  >
                    No data available
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

export default AssignClassTeacher;