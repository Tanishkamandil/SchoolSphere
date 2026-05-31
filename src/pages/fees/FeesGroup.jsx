import React, { useState } from "react";

const FeesGroup = () => {
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Monthly Fees",
      description: "Monthly tuition fees group",
      totalFees: 5000,
      status: "Active",
    },
    {
      id: 2,
      name: "Transport Fees",
      description: "Transport related fees",
      totalFees: 2500,
      status: "Active",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    totalFees: "",
    status: "Active",
  });

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGroup = {
      id: groups.length + 1,
      ...formData,
    };

    setGroups([...groups, newGroup]);

    setFormData({
      name: "",
      description: "",
      totalFees: "",
      status: "Active",
    });
  };

  const handleDelete = (id) => {
    setGroups(groups.filter((group) => group.id !== id));
  };

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Add Fees Group */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-6">
            Add Fees Group
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block font-medium mb-2">
                Group Name *
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter fees group name"
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Total Fees *
              </label>

              <input
                type="number"
                name="totalFees"
                value={formData.totalFees}
                onChange={handleChange}
                placeholder="Enter total amount"
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-2">
                Description
              </label>

              <textarea
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write description..."
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
            >
              Save Group
            </button>

          </form>
        </div>

        {/* Fees Group List */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              Fees Group List
            </h2>

            <input
              type="text"
              placeholder="Search group..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-lg px-3 py-2"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">

              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3">Group Name</th>
                  <th className="border p-3">Description</th>
                  <th className="border p-3">Total Fees</th>
                  <th className="border p-3">Status</th>
                  <th className="border p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredGroups.map((group) => (
                  <tr
                    key={group.id}
                    className="hover:bg-gray-50"
                  >
                    <td className="border p-3">
                      {group.name}
                    </td>

                    <td className="border p-3">
                      {group.description}
                    </td>

                    <td className="border p-3">
                      ₹{group.totalFees}
                    </td>

                    <td className="border p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          group.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {group.status}
                      </span>
                    </td>

                    <td className="border p-3 space-x-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded">
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(group.id)}
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

export default FeesGroup;