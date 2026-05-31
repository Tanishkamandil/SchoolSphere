import React, { useState } from "react";

const FeesDiscount = () => {
  const [discounts, setDiscounts] = useState([
    {
      id: 1,
      name: "Sibling Discount",
      code: "SIB10",
      amount: "10%",
      description: "Discount for siblings",
      status: "Active",
    },
    {
      id: 2,
      name: "Scholarship",
      code: "SCH20",
      amount: "20%",
      description: "Merit based scholarship",
      status: "Active",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    amount: "",
    description: "",
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

    const newDiscount = {
      id: discounts.length + 1,
      ...formData,
    };

    setDiscounts([...discounts, newDiscount]);

    setFormData({
      name: "",
      code: "",
      amount: "",
      description: "",
      status: "Active",
    });
  };

  const handleDelete = (id) => {
    setDiscounts(discounts.filter((item) => item.id !== id));
  };

  const filteredDiscounts = discounts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Add Discount Form */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6">
            Add Fees Discount
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block mb-2 font-medium">
                Discount Name *
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter discount name"
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Discount Code *
              </label>

              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="Enter code"
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Discount Amount *
              </label>

              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="10% or 500"
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
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
              <label className="block mb-2 font-medium">
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
              Save Discount
            </button>

          </form>
        </div>

        {/* Discount List */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              Fees Discount List
            </h2>

            <input
              type="text"
              placeholder="Search discount..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-lg px-3 py-2"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">

              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3">Name</th>
                  <th className="border p-3">Code</th>
                  <th className="border p-3">Amount</th>
                  <th className="border p-3">Description</th>
                  <th className="border p-3">Status</th>
                  <th className="border p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredDiscounts.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50"
                  >
                    <td className="border p-3">
                      {item.name}
                    </td>

                    <td className="border p-3">
                      {item.code}
                    </td>

                    <td className="border p-3">
                      {item.amount}
                    </td>

                    <td className="border p-3">
                      {item.description}
                    </td>

                    <td className="border p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          item.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="border p-3 space-x-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded">
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

export default FeesDiscount;