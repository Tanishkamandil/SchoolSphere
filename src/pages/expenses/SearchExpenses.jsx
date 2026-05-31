import React, { useState } from "react";

const SearchExpenses = () => {
  const [search, setSearch] = useState("");

  const expensesData = [
    {
      id: 1,
      expenseHead: "Transport",
      name: "Bus Repair",
      invoice: "INV-1001",
      date: "2026-05-27",
      amount: "$500",
      description: "Bus tyre replacement",
      status: "Paid",
    },
    {
      id: 2,
      expenseHead: "Examination",
      name: "Exam Papers",
      invoice: "INV-1002",
      date: "2026-05-26",
      amount: "$300",
      description: "Printing papers",
      status: "Pending",
    },
    {
      id: 3,
      expenseHead: "Library",
      name: "Books Purchase",
      invoice: "INV-1003",
      date: "2026-05-25",
      amount: "$700",
      description: "New books",
      status: "Paid",
    },
  ];

  const filteredExpenses = expensesData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.expenseHead.toLowerCase().includes(search.toLowerCase()) ||
    item.invoice.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="bg-white p-5 rounded-lg shadow mb-6 flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-700">
          Search Expenses
        </h1>

        <input
          type="text"
          placeholder="Search by name, head or invoice..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-96 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 border">#</th>
              <th className="p-3 border">Expense Head</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Invoice</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Amount</th>
              <th className="p-3 border">Description</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredExpenses.length > 0 ? (
              filteredExpenses.map((expense, index) => (
                <tr
                  key={expense.id}
                  className="hover:bg-gray-50 text-center"
                >
                  <td className="p-3 border">{index + 1}</td>

                  <td className="p-3 border">
                    {expense.expenseHead}
                  </td>

                  <td className="p-3 border">
                    {expense.name}
                  </td>

                  <td className="p-3 border">
                    {expense.invoice}
                  </td>

                  <td className="p-3 border">
                    {expense.date}
                  </td>

                  <td className="p-3 border">
                    {expense.amount}
                  </td>

                  <td className="p-3 border">
                    {expense.description}
                  </td>

                  <td className="p-3 border">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${
                        expense.status === "Paid"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {expense.status}
                    </span>
                  </td>

                  <td className="p-3 border space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                      Edit
                    </button>

                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="9"
                  className="p-5 text-center text-gray-500"
                >
                  No Expense Found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default SearchExpenses;