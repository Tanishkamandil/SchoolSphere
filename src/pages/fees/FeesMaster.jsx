import React, { useState } from "react";

const FeesMaster = () => {
  const [feesData, setFeesData] = useState([
    {
      id: 1,
      feesGroup: "Monthly Fees",
      feesType: "Tuition Fees",
      dueDate: "2026-06-10",
      amount: 5000,
      fineType: "Percentage",
      fineAmount: 5,
    },
    {
      id: 2,
      feesGroup: "Transport Fees",
      feesType: "Bus Fees",
      dueDate: "2026-06-15",
      amount: 2500,
      fineType: "Fixed",
      fineAmount: 100,
    },
  ]);

  const [formData, setFormData] = useState({
    feesGroup: "",
    feesType: "",
    dueDate: "",
    amount: "",
    fineType: "None",
    fineAmount: "",
    description: "",
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

    const newFee = {
      id: feesData.length + 1,
      ...formData,
    };

    setFeesData([...feesData, newFee]);

    setFormData({
      feesGroup: "",
      feesType: "",
      dueDate: "",
      amount: "",
      fineType: "None",
      fineAmount: "",
      description: "",
    });
  };

  const handleDelete = (id) => {
    setFeesData(feesData.filter((item) => item.id !== id));
  };

  const filteredData = feesData.filter((item) =>
    item.feesType.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Add Fees Master */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-6">
            Add Fees Master
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Fees Group */}
            <div>
              <label className="block font-medium mb-2">
                Fees Group *
              </label>

              <select
                name="feesGroup"
                value={formData.feesGroup}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                required
              >
                <option value="">Select Group</option>
                <option value="Monthly Fees">
                  Monthly Fees
                </option>
                <option value="Transport Fees">
                  Transport Fees
                </option>
                <option value="Hostel Fees">
                  Hostel Fees
                </option>
              </select>
            </div>

            {/* Fees Type */}
            <div>
              <label className="block font-medium mb-2">
                Fees Type *
              </label>

              <input
                type="text"
                name="feesType"
                value={formData.feesType}
                onChange={handleChange}
                placeholder="Enter fees type"
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>

            {/* Due Date */}
            <div>
              <label className="block font-medium mb-2">
                Due Date *
              </label>

              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>

            {/* Amount */}
            <div>
              <label className="block font-medium mb-2">
                Amount *
              </label>

              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>

            {/* Fine Type */}
            <div>
              <label className="block font-medium mb-2">
                Fine Type
              </label>

              <select
                name="fineType"
                value={formData.fineType}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="None">None</option>
                <option value="Percentage">
                  Percentage
                </option>
                <option value="Fixed">Fixed</option>
              </select>
            </div>

            {/* Fine Amount */}
            <div>
              <label className="block font-medium mb-2">
                Fine Amount
              </label>

              <input
                type="number"
                name="fineAmount"
                value={formData.fineAmount}
                onChange={handleChange}
                placeholder="Enter fine amount"
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            {/* Description */}
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

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
            >
              Save Fees Master
            </button>

          </form>
        </div>

        {/* Fees Master List */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              Fees Master List
            </h2>

            <input
              type="text"
              placeholder="Search fees type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-lg px-3 py-2"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">

              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3">
                    Fees Group
                  </th>
                  <th className="border p-3">
                    Fees Type
                  </th>
                  <th className="border p-3">
                    Due Date
                  </th>
                  <th className="border p-3">
                    Amount
                  </th>
                  <th className="border p-3">
                    Fine
                  </th>
                  <th className="border p-3">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredData.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50"
                  >
                    <td className="border p-3">
                      {item.feesGroup}
                    </td>

                    <td className="border p-3">
                      {item.feesType}
                    </td>

                    <td className="border p-3">
                      {item.dueDate}
                    </td>

                    <td className="border p-3">
                      ₹{item.amount}
                    </td>

                    <td className="border p-3">
                      {item.fineType} (
                      {item.fineAmount || 0})
                    </td>

                    <td className="border p-3 space-x-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded">
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(item.id)
                        }
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

export default FeesMaster;