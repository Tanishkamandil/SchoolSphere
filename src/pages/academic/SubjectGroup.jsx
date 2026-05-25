import { useState } from "react";

const classList = [
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
];

const sectionList = ["A", "B", "C", "D"];

const subjectOptions = [
  "Hindi",
  "English",
  "Mathematics",
  "Science",
  "Social Science",
  "Environment",
  "Computer",
];

export default function SubjectGroup() {
  const [formData, setFormData] = useState({
    name: "",
    className: "",
    section: "",
    subjects: [],
    description: "",
  });

  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Science Group",
      className: "8",
      section: "A",
      subjects: ["Science", "Computer"],
    },
  ]);

  // Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Checkbox Subject
  const handleSubjectChange = (subject) => {
    if (formData.subjects.includes(subject)) {
      setFormData({
        ...formData,
        subjects: formData.subjects.filter(
          (item) => item !== subject
        ),
      });
    } else {
      setFormData({
        ...formData,
        subjects: [...formData.subjects, subject],
      });
    }
  };

  // Save
  const handleSave = () => {
    if (
      !formData.name ||
      !formData.className ||
      !formData.section ||
      formData.subjects.length === 0
    ) {
      alert("Please fill all required fields");
      return;
    }

    const newGroup = {
      id: Date.now(),
      ...formData,
    };

    setGroups([...groups, newGroup]);

    setFormData({
      name: "",
      className: "",
      section: "",
      subjects: [],
      description: "",
    });
  };

  // Delete
  const handleDelete = (id) => {
    setGroups(groups.filter((item) => item.id !== id));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">

      {/* LEFT SIDE */}
      <div className="bg-white rounded shadow border">

        <div className="border-b px-5 py-4">
          <h2 className="text-2xl font-semibold">
            Add Subject Group
          </h2>
        </div>

        <div className="p-5 space-y-5">

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">
              Name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Class */}
          <div>
            <label className="block mb-2 font-medium">
              Class <span className="text-red-500">*</span>
            </label>

            <select
              name="className"
              value={formData.className}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>

              {classList.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>

          {/* Section */}
          <div>
            <label className="block mb-2 font-medium">
              Sections <span className="text-red-500">*</span>
            </label>

            <select
              name="section"
              value={formData.section}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>

              {sectionList.map((sec) => (
                <option key={sec} value={sec}>
                  {sec}
                </option>
              ))}
            </select>
          </div>

          {/* Subjects */}
          <div>
            <label className="block mb-2 font-medium">
              Subject <span className="text-red-500">*</span>
            </label>

            <div className="space-y-2">

              {subjectOptions.map((subject) => (
                <label
                  key={subject}
                  className="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    checked={formData.subjects.includes(
                      subject
                    )}
                    onChange={() =>
                      handleSubjectChange(subject)
                    }
                  />

                  {subject}
                </label>
              ))}

            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded"
            >
              Save
            </button>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white rounded shadow border overflow-hidden">

        <div className="border-b px-5 py-4">
          <h2 className="text-2xl font-semibold">
            Subject Group List
          </h2>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="text-left p-3 border-b">
                  Name
                </th>

                <th className="text-left p-3 border-b">
                  Class (Section)
                </th>

                <th className="text-left p-3 border-b">
                  Subject
                </th>

                <th className="text-left p-3 border-b">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {groups.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center p-5 text-gray-500"
                  >
                    No Subject Groups Found
                  </td>
                </tr>
              ) : (
                groups.map((group) => (
                  <tr
                    key={group.id}
                    className="hover:bg-gray-50"
                  >

                    <td className="p-3 border-b">
                      {group.name}
                    </td>

                    <td className="p-3 border-b">
                      {group.className} ({group.section})
                    </td>

                    <td className="p-3 border-b">
                      {group.subjects.join(", ")}
                    </td>

                    <td className="p-3 border-b">
                      <button
                        onClick={() =>
                          handleDelete(group.id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))
              )}

            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}