import React, { useState } from "react";

const AddExpenses = () => {
  const [formData, setFormData] = useState({
    expenseHead: "",
    name: "",
    invoiceNumber: "",
    date: "",
    amount: "",
    description: "",
    document: null,
  });

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Examination Fees",
      description: "No Description",
      invoice: "INV001",
      date: "27/05/2026",
      head: "Middle Class",
      amount: "$500",
    },
    {
      id: 2,
      name: "Transport Fees",
      description: "No Description",
      invoice: "INV002",
      date: "27/05/2026",
      head: "Primary",
      amount: "$700",
    },
  ]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: expenses.length + 1,
      name: formData.name,
      description: formData.description || "No Description",
      invoice: formData.invoiceNumber,
      date: formData.date,
      head: formData.expenseHead,
      amount: `$${formData.amount}`,
    };

    setExpenses([...expenses, newExpense]);

    setFormData({
      expenseHead: "",
      name: "",
      invoiceNumber: "",
      date: "",
      amount: "",
      description: "",
      document: null,
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Add Expense Form */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Add Expense
          </h2>

          <form onSubmit={handleSubmit}>

            {/* Expense Head */}
            <div className="mb-4">
              <label className="block font-medium mb-2">
                Expense Head *
              </label>

              <select
                name="expenseHead"
                value={formData.expenseHead}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              >
                <option value="">Select</option>
                <option value="Primary">Primary</option>
                <option value="Middle Class">Middle Class</option>
                <option value="High School">High School</option>
              </select>
            </div>

            {/* Name */}
            <div className="mb-4">
              <label className="block font-medium mb-2">
                Name *
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter expense name"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Invoice */}
            <div className="mb-4">
              <label className="block font-medium mb-2">
                Invoice Number
              </label>

              <input
                type="text"
                name="invoiceNumber"
                value={formData.invoiceNumber}
                onChange={handleChange}
                placeholder="Invoice Number"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Date */}
            <div className="mb-4">
              <label className="block font-medium mb-2">
                Date *
              </label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Amount */}
            <div className="mb-4">
              <label className="block font-medium mb-2">
                Amount ($) *
              </label>

              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* File Upload */}
            <div className="mb-4">
              <label className="block font-medium mb-2">
                Attach Document
              </label>

              <input
                type="file"
                name="document"
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
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
                placeholder="Write description..."
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded"
              >
                Save
              </button>
            </div>

          </form>
        </div>

        {/* Expense List */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-semibold">
              Expense List
            </h2>

            <input
              type="text"
              placeholder="Search..."
              className="border px-3 py-2 rounded"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">

              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Name</th>
                  <th className="border p-3 text-left">
                    Description
                  </th>
                  <th className="border p-3 text-left">
                    Invoice
                  </th>
                  <th className="border p-3 text-left">Date</th>
                  <th className="border p-3 text-left">
                    Expense Head
                  </th>
                  <th className="border p-3 text-left">
                    Amount
                  </th>
                  <th className="border p-3 text-center">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {expenses.map((expense) => (
                  <tr
                    key={expense.id}
                    className="hover:bg-gray-50"
                  >
                    <td className="border p-3">
                      {expense.name}
                    </td>

                    <td className="border p-3">
                      {expense.description}
                    </td>

                    <td className="border p-3">
                      {expense.invoice}
                    </td>

                    <td className="border p-3">
                      {expense.date}
                    </td>

                    <td className="border p-3">
                      {expense.head}
                    </td>

                    <td className="border p-3">
                      {expense.amount}
                    </td>

                    <td className="border p-3 text-center space-x-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded">
                        Edit
                      </button>

                      <button className="bg-red-500 text-white px-3 py-1 rounded">
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

export default AddExpenses;