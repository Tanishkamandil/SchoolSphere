import React, { useState } from "react";

const FeesType = () => {
  const [formData, setFormData] = useState({
    feesType: "",
    feesCode: "",
    description: "",
  });

  const [feesTypes, setFeesTypes] = useState([
    {
      id: 1,
      feesType: "Tuition Fees",
      feesCode: "TF001",
      description: "Monthly tuition fee",
    },
    {
      id: 2,
      feesType: "Transport Fees",
      feesCode: "TR002",
      description: "School transport charges",
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

    const newFeesType = {
      id: feesTypes.length + 1,
      ...formData,
    };

    setFeesTypes([...feesTypes, newFeesType]);

    setFormData({
      feesType: "",
      feesCode: "",
      description: "",
    });
  };

  const handleDelete = (id) => {
    setFeesTypes(feesTypes.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Add Fees Type */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">
            Add Fees Type
          </h2>

          <form onSubmit={handleSubmit}>

            {/* Fees Type */}
            <div className="mb-4">
              <label className="block font-medium mb-2">
                Fees Type *
              </label>

              <input
                type="text"
                name="feesType"
                value={formData.feesType}
                onChange={handleChange}
                placeholder="Enter fees type"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Fees Code */}
            <div className="mb-4">
              <label className="block font-medium mb-2">
                Fees Code *
              </label>

              <input
                type="text"
                name="feesCode"
                value={formData.feesCode}
                onChange={handleChange}
                placeholder="Enter fees code"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block font-medium mb-2">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Enter description"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            >
              Save Fees Type
            </button>
          </form>
        </div>

        {/* Fees Type List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold">
              Fees Type List
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
                  <th className="border p-3">Fees Type</th>
                  <th className="border p-3">Fees Code</th>
                  <th className="border p-3">Description</th>
                  <th className="border p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {feesTypes.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50"
                  >
                    <td className="border p-3">
                      {item.feesType}
                    </td>

                    <td className="border p-3">
                      {item.feesCode}
                    </td>

                    <td className="border p-3">
                      {item.description}
                    </td>

                    <td className="border p-3 text-center space-x-2">

                      <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
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

export default FeesType;