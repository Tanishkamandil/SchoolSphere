
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

export default function Sections() {
  const [sections, setSections] = useState([
    {
      id: 1,
      className: "1",
      sectionName: "A",
      capacity: 40,
    },
  ]);

  const [formData, setFormData] = useState({
    className: "",
    sectionName: "",
    capacity: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSection = () => {
    if (
      !formData.className ||
      !formData.sectionName ||
      !formData.capacity
    ) {
      alert("Please fill all fields");
      return;
    }

    const newSection = {
      id: Date.now(),
      className: formData.className,
      sectionName: formData.sectionName,
      capacity: formData.capacity,
    };

    setSections([...sections, newSection]);

    setFormData({
      className: "",
      sectionName: "",
      capacity: "",
    });
  };

  const handleDelete = (id) => {
    const filtered = sections.filter((item) => item.id !== id);
    setSections(filtered);
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md space-y-6">

      {/* Heading */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Manage Sections
        </h2>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Class */}
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

        {/* Section */}
        <input
          type="text"
          name="sectionName"
          placeholder="Section Name"
          value={formData.sectionName}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Capacity */}
        <input
          type="number"
          name="capacity"
          placeholder="Capacity"
          value={formData.capacity}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Button */}
      <button
        onClick={handleAddSection}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        Add Section
      </button>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-gray-100 text-left">

              <th className="p-3 border">Class</th>
              <th className="p-3 border">Section</th>
              <th className="p-3 border">Capacity</th>
              <th className="p-3 border">Action</th>

            </tr>
          </thead>

          <tbody>
            {sections.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">

                <td className="p-3 border">{item.className}</td>

                <td className="p-3 border">{item.sectionName}</td>

                <td className="p-3 border">{item.capacity}</td>

                <td className="p-3 border">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
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
  );
}