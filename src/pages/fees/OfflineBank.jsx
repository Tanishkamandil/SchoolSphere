import React, { useState } from "react";

const OfflineBank = () => {
  const [formData, setFormData] = useState({
    bankName: "",
    accountHolder: "",
    accountNumber: "",
    branch: "",
    ifsc: "",
    amount: "",
    paymentDate: "",
    paymentMode: "",
    transactionId: "",
    status: "",
  });

  const [bankPayments, setBankPayments] = useState([
    {
      id: 1,
      bankName: "State Bank",
      accountHolder: "Rahul Sharma",
      accountNumber: "1234567890",
      branch: "Delhi",
      ifsc: "SBIN000123",
      amount: "5000",
      paymentDate: "2026-05-27",
      paymentMode: "Cheque",
      transactionId: "TXN001",
      status: "Pending",
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

    const newPayment = {
      id: bankPayments.length + 1,
      ...formData,
    };

    setBankPayments([...bankPayments, newPayment]);

    setFormData({
      bankName: "",
      accountHolder: "",
      accountNumber: "",
      branch: "",
      ifsc: "",
      amount: "",
      paymentDate: "",
      paymentMode: "",
      transactionId: "",
      status: "",
    });
  };

  const handleDelete = (id) => {
    setBankPayments(
      bankPayments.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">
            Offline Bank Payment
          </h2>

          <form onSubmit={handleSubmit}>

            {/* Bank Name */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Bank Name *
              </label>

              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                placeholder="Enter bank name"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Account Holder */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Account Holder *
              </label>

              <input
                type="text"
                name="accountHolder"
                value={formData.accountHolder}
                onChange={handleChange}
                placeholder="Enter account holder"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Account Number */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Account Number *
              </label>

              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                placeholder="Enter account number"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Branch */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Branch *
              </label>

              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                placeholder="Enter branch"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* IFSC */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                IFSC Code *
              </label>

              <input
                type="text"
                name="ifsc"
                value={formData.ifsc}
                onChange={handleChange}
                placeholder="Enter IFSC code"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Amount */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Amount *
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

            {/* Payment Date */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Payment Date *
              </label>

              <input
                type="date"
                name="paymentDate"
                value={formData.paymentDate}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Payment Mode */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Payment Mode *
              </label>

              <select
                name="paymentMode"
                value={formData.paymentMode}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              >
                <option value="">Select</option>
                <option>Cheque</option>
                <option>NEFT</option>
                <option>RTGS</option>
                <option>Cash Deposit</option>
              </select>
            </div>

            {/* Transaction ID */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Transaction ID *
              </label>

              <input
                type="text"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleChange}
                placeholder="Enter transaction ID"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Status */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Status *
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              >
                <option value="">Select</option>
                <option>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            >
              Save Payment
            </button>

          </form>
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-lg p-6">

          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold">
              Offline Bank List
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
                  <th className="border p-3">Bank</th>
                  <th className="border p-3">Holder</th>
                  <th className="border p-3">Account No.</th>
                  <th className="border p-3">Amount</th>
                  <th className="border p-3">Mode</th>
                  <th className="border p-3">Status</th>
                  <th className="border p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {bankPayments.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50"
                  >
                    <td className="border p-3">
                      {item.bankName}
                    </td>

                    <td className="border p-3">
                      {item.accountHolder}
                    </td>

                    <td className="border p-3">
                      {item.accountNumber}
                    </td>

                    <td className="border p-3">
                      ₹{item.amount}
                    </td>

                    <td className="border p-3">
                      {item.paymentMode}
                    </td>

                    <td className="border p-3">
                      {item.status}
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

export default OfflineBank;