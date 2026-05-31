import React, { useState } from "react";

const ExpenseHead = () => {
  const [expenseHead, setExpenseHead] = useState("");
  const [description, setDescription] = useState("");

  const [heads, setHeads] = useState([
    {
      id: 1,
      expenseHead: "Transport Fees",
      description: "Transport Related Expense",
    },
    {
      id: 2,
      expenseHead: "Electricity Bill",
      description: "Monthly Electricity Expense",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHead = {
      id: heads.length + 1,
      expenseHead,
      description,
    };

    setHeads([...heads, newHead]);

    setExpenseHead("");
    setDescription("");
  };

  const handleDelete = (id) => {
    setHeads(heads.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Add Expense Head */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6">
            Add Expense Head
          </h2>

          <form onSubmit={handleSubmit}>

            {/* Expense Head */}
            <div className="mb-4">
              <label className="block font-medium mb-2">
                Expense Head *
              </label>

              <input
                type="text"
                value={expenseHead}
                onChange={(e) =>
                  setExpenseHead(e.target.value)
                }
                placeholder="Enter Expense Head"
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
                rows="4"
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
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

        {/* Expense Head List */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-semibold">
              Expense Head List
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
                  <th className="border p-3 text-left">
                    Expense Head
                  </th>

                  <th className="border p-3 text-left">
                    Description
                  </th>

                  <th className="border p-3 text-center">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {heads.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50"
                  >
                    <td className="border p-3">
                      {item.expenseHead}
                    </td>

                    <td className="border p-3">
                      {item.description}
                    </td>

                    <td className="border p-3 text-center space-x-2">

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

export default ExpenseHead;