import React, { useState } from "react";

const CollectFees = () => {
  const [student, setStudent] = useState({
    admissionNo: "",
    rollNo: "",
    studentName: "",
    className: "",
    section: "",
    feesGroup: "",
    amount: "",
    paymentMode: "",
    date: "",
    note: "",
  });

  const [feesData, setFeesData] = useState([
    {
      id: 1,
      admissionNo: "ADM101",
      studentName: "Rahul Sharma",
      className: "10th",
      feesGroup: "Monthly Fees",
      amount: "₹2500",
      paymentMode: "Cash",
      date: "2026-05-27",
      status: "Paid",
    },
    {
      id: 2,
      admissionNo: "ADM102",
      studentName: "Ankit Kumar",
      className: "9th",
      feesGroup: "Exam Fees",
      amount: "₹1500",
      paymentMode: "Online",
      date: "2026-05-26",
      status: "Pending",
    },
  ]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFee = {
      id: feesData.length + 1,
      admissionNo: student.admissionNo,
      studentName: student.studentName,
      className: student.className,
      feesGroup: student.feesGroup,
      amount: `₹${student.amount}`,
      paymentMode: student.paymentMode,
      date: student.date,
      status: "Paid",
    };

    setFeesData([...feesData, newFee]);

    setStudent({
      admissionNo: "",
      rollNo: "",
      studentName: "",
      className: "",
      section: "",
      feesGroup: "",
      amount: "",
      paymentMode: "",
      date: "",
      note: "",
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Form */}
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow">

          <h2 className="text-2xl font-bold mb-6 text-gray-700">
            Collect Fees
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block mb-1 font-medium">
                Admission No
              </label>

              <input
                type="text"
                name="admissionNo"
                value={student.admissionNo}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Enter Admission No"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Roll No
              </label>

              <input
                type="text"
                name="rollNo"
                value={student.rollNo}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Enter Roll No"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Student Name
              </label>

              <input
                type="text"
                name="studentName"
                value={student.studentName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Student Name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Class
              </label>

              <select
                name="className"
                value={student.className}
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

            <div>
              <label className="block mb-1 font-medium">
                Section
              </label>

              <select
                name="section"
                value={student.section}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Fees Group
              </label>

              <select
                name="feesGroup"
                value={student.feesGroup}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                required
              >
                <option value="">Select Fees Group</option>
                <option value="Monthly Fees">
                  Monthly Fees
                </option>
                <option value="Exam Fees">
                  Exam Fees
                </option>
                <option value="Transport Fees">
                  Transport Fees
                </option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Amount
              </label>

              <input
                type="number"
                name="amount"
                value={student.amount}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Enter Amount"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Payment Mode
              </label>

              <select
                name="paymentMode"
                value={student.paymentMode}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                required
              >
                <option value="">Select Mode</option>
                <option value="Cash">Cash</option>
                <option value="Online">Online</option>
                <option value="Cheque">Cheque</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Date
              </label>

              <input
                type="date"
                name="date"
                value={student.date}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Note
              </label>

              <textarea
                name="note"
                value={student.note}
                onChange={handleChange}
                rows="3"
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Write Note..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
            >
              Collect Fees
            </button>

          </form>
        </div>

        {/* Table */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow overflow-x-auto">

          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold text-gray-700">
              Fees Collection List
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
                <th className="border p-3">Admission No</th>
                <th className="border p-3">Student</th>
                <th className="border p-3">Class</th>
                <th className="border p-3">Fees Group</th>
                <th className="border p-3">Amount</th>
                <th className="border p-3">Mode</th>
                <th className="border p-3">Date</th>
                <th className="border p-3">Status</th>
                <th className="border p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {feesData.map((fee, index) => (
                <tr
                  key={fee.id}
                  className="text-center hover:bg-gray-50"
                >
                  <td className="border p-3">
                    {index + 1}
                  </td>

                  <td className="border p-3">
                    {fee.admissionNo}
                  </td>

                  <td className="border p-3">
                    {fee.studentName}
                  </td>

                  <td className="border p-3">
                    {fee.className}
                  </td>

                  <td className="border p-3">
                    {fee.feesGroup}
                  </td>

                  <td className="border p-3">
                    {fee.amount}
                  </td>

                  <td className="border p-3">
                    {fee.paymentMode}
                  </td>

                  <td className="border p-3">
                    {fee.date}
                  </td>

                  <td className="border p-3">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                      {fee.status}
                    </span>
                  </td>

                  <td className="border p-3 space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                      View
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

export default CollectFees;