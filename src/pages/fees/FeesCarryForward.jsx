import React, { useState } from "react";

const FeesCarryForward = () => {
  const [formData, setFormData] = useState({
    className: "",
    section: "",
    month: "",
    year: "",
    carryAmount: "",
    note: "",
  });

  const [carryList, setCarryList] = useState([
    {
      id: 1,
      className: "10th",
      section: "A",
      month: "May",
      year: "2026",
      carryAmount: "₹2500",
      note: "Pending tuition fee",
      status: "Pending",
    },
    {
      id: 2,
      className: "9th",
      section: "B",
      month: "April",
      year: "2026",
      carryAmount: "₹1800",
      note: "Transport fee due",
      status: "Forwarded",
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

    const newCarry = {
      id: carryList.length + 1,
      className: formData.className,
      section: formData.section,
      month: formData.month,
      year: formData.year,
      carryAmount: `₹${formData.carryAmount}`,
      note: formData.note,
      status: "Forwarded",
    };

    setCarryList([...carryList, newCarry]);

    setFormData({
      className: "",
      section: "",
      month: "",
      year: "",
      carryAmount: "",
      note: "",
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Form Section */}
        <div className="bg-white shadow rounded-lg p-6">

          <h2 className="text-2xl font-bold mb-6 text-gray-700">
            Fees Carry Forward
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Class */}
            <div>
              <label className="block mb-1 font-medium">
                Class
              </label>

              <select
                name="className"
                value={formData.className}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                required
              >
                <option value="">Select Class</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
              </select>
            </div>

            {/* Section */}
            <div>
              <label className="block mb-1 font-medium">
                Section
              </label>

              <select
                name="section"
                value={formData.section}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                required
              >
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>

            {/* Month */}
            <div>
              <label className="block mb-1 font-medium">
                Month
              </label>

              <select
                name="month"
                value={formData.month}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                required
              >
                <option value="">Select Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>

            {/* Year */}
            <div>
              <label className="block mb-1 font-medium">
                Year
              </label>

              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="Enter Year"
                className="w-full border rounded-lg px-4 py-2"
                required
              />
            </div>

            {/* Carry Amount */}
            <div>
              <label className="block mb-1 font-medium">
                Carry Forward Amount
              </label>

              <input
                type="number"
                name="carryAmount"
                value={formData.carryAmount}
                onChange={handleChange}
                placeholder="Enter Amount"
                className="w-full border rounded-lg px-4 py-2"
                required
              />
            </div>

            {/* Note */}
            <div>
              <label className="block mb-1 font-medium">
                Note
              </label>

              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                rows="4"
                placeholder="Write Note..."
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold"
            >
              Carry Forward Fees
            </button>

          </form>
        </div>

        {/* Table Section */}
        <div className="lg:col-span-2 bg-white shadow rounded-lg p-6 overflow-x-auto">

          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold text-gray-700">
              Carry Forward List
            </h2>

            <input
              type="text"
              placeholder="Search..."
              className="border px-4 py-2 rounded-lg"
            />
          </div>

          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border p-3">#</th>
                <th className="border p-3">Class</th>
                <th className="border p-3">Section</th>
                <th className="border p-3">Month</th>
                <th className="border p-3">Year</th>
                <th className="border p-3">Amount</th>
                <th className="border p-3">Note</th>
                <th className="border p-3">Status</th>
                <th className="border p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {carryList.map((item, index) => (
                <tr
                  key={item.id}
                  className="text-center hover:bg-gray-50"
                >
                  <td className="border p-3">
                    {index + 1}
                  </td>

                  <td className="border p-3">
                    {item.className}
                  </td>

                  <td className="border p-3">
                    {item.section}
                  </td>

                  <td className="border p-3">
                    {item.month}
                  </td>

                  <td className="border p-3">
                    {item.year}
                  </td>

                  <td className="border p-3">
                    {item.carryAmount}
                  </td>

                  <td className="border p-3">
                    {item.note}
                  </td>

                  <td className="border p-3">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                      {item.status}
                    </span>
                  </td>

                  <td className="border p-3 space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                      Edit
                    </button>

                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
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
  );
};

export default FeesCarryForward;