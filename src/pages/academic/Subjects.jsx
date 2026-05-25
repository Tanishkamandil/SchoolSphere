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
];

export default function SubjectGroup() {
  const [groups, setGroups] = useState([]);

  const [formData, setFormData] = useState({
    className: "",
    groupName: "",
    subjects: [],
  });

  const [subjectInput, setSubjectInput] = useState({
    name: "",
    code: "",
    type: "Theory",
  });

  // Main form change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Subject input change
  const handleSubjectInput = (e) => {
    setSubjectInput({
      ...subjectInput,
      [e.target.name]: e.target.value,
    });
  };

  // Add subject
  const handleAddSubject = () => {
    if (
      !subjectInput.name ||
      !subjectInput.code ||
      !subjectInput.type
    ) {
      alert("Please fill subject details");
      return;
    }

    const newSubject = {
      id: Date.now(),
      name: subjectInput.name,
      code: subjectInput.code,
      type: subjectInput.type,
    };

    setFormData({
      ...formData,
      subjects: [...formData.subjects, newSubject],
    });

    setSubjectInput({
      name: "",
      code: "",
      type: "Theory",
    });
  };

  // Delete subject
  const handleDeleteSubject = (id) => {
    setFormData({
      ...formData,
      subjects: formData.subjects.filter(
        (subject) => subject.id !== id
      ),
    });
  };

  // Save group
  const handleAddGroup = () => {
    if (
      !formData.className ||
      !formData.groupName ||
      formData.subjects.length === 0
    ) {
      alert("Please fill all fields");
      return;
    }

    const newGroup = {
      id: Date.now(),
      ...formData,
    };

    setGroups([...groups, newGroup]);

    setFormData({
      className: "",
      groupName: "",
      subjects: [],
    });
  };

  // Delete group
  const handleDeleteGroup = (id) => {
    setGroups(groups.filter((group) => group.id !== id));
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md space-y-6">

      {/* Heading */}
      <h2 className="text-2xl font-semibold text-gray-800">
        Subject Groups
      </h2>

      {/* Class + Group */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <select
          name="className"
          value={formData.className}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Class</option>

          {classes.map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="groupName"
          placeholder="Group Name"
          value={formData.groupName}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Subject Add Form */}
      <div className="border rounded-xl p-4 space-y-4 bg-gray-50">

        <h3 className="text-lg font-medium text-gray-700">
          Add Subject
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* Subject Name */}
          <input
            type="text"
            name="name"
            placeholder="Subject Name"
            value={subjectInput.name}
            onChange={handleSubjectInput}
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Subject Code */}
          <input
            type="text"
            name="code"
            placeholder="Subject Code"
            value={subjectInput.code}
            onChange={handleSubjectInput}
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Subject Type */}
          <select
            name="type"
            value={subjectInput.type}
            onChange={handleSubjectInput}
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Theory">Theory</option>
            <option value="Practical">Practical</option>
          </select>

          {/* Add Button */}
          <button
            onClick={handleAddSubject}
            className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-4"
          >
            Add Subject
          </button>

        </div>

        {/* Subject Preview */}
        <div className="overflow-x-auto">

          <table className="w-full border-collapse mt-4">

            <thead>
              <tr className="bg-gray-200">

                <th className="border p-2 text-left">
                  Subject
                </th>

                <th className="border p-2 text-left">
                  Code
                </th>

                <th className="border p-2 text-left">
                  Type
                </th>

                <th className="border p-2 text-left">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>

              {formData.subjects.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="border p-3 text-center text-gray-500"
                  >
                    No Subjects Added
                  </td>
                </tr>
              ) : (
                formData.subjects.map((subject) => (
                  <tr key={subject.id}>

                    <td className="border p-2">
                      {subject.name}
                    </td>

                    <td className="border p-2">
                      {subject.code}
                    </td>

                    <td className="border p-2">
                      {subject.type}
                    </td>

                    <td className="border p-2">
                      <button
                        onClick={() =>
                          handleDeleteSubject(subject.id)
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

      {/* Save Group */}
      <button
        onClick={handleAddGroup}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        Save Subject Group
      </button>

      {/* Saved Groups */}
      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-gray-100">

              <th className="border p-3 text-left">
                Class
              </th>

              <th className="border p-3 text-left">
                Group Name
              </th>

              <th className="border p-3 text-left">
                Subjects
              </th>

              <th className="border p-3 text-left">
                Action
              </th>

            </tr>
          </thead>

          <tbody>

            {groups.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="border p-4 text-center text-gray-500"
                >
                  No Groups Added
                </td>
              </tr>
            ) : (
              groups.map((group) => (
                <tr key={group.id}>

                  <td className="border p-3">
                    {group.className}
                  </td>

                  <td className="border p-3">
                    {group.groupName}
                  </td>

                  <td className="border p-3">

                    <div className="space-y-1">

                      {group.subjects.map((subject) => (
                        <div
                          key={subject.id}
                          className="border rounded px-2 py-1 bg-gray-50"
                        >
                          <span className="font-medium">
                            {subject.name}
                          </span>

                          {" "}({subject.code}) -{" "}

                          <span className="text-blue-600">
                            {subject.type}
                          </span>
                        </div>
                      ))}

                    </div>

                  </td>

                  <td className="border p-3">
                    <button
                      onClick={() =>
                        handleDeleteGroup(group.id)
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
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
  );
}