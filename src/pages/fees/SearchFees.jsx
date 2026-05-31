// import React, { useState } from "react";

// const SearchFees = () => {
//   const [filters, setFilters] = useState({
//     className: "",
//     section: "",
//     status: "",
//     search: "",
//   });

//   const [data] = useState([
//     {
//       id: 1,
//       admissionNo: "ADM001",
//       name: "Aman Sharma",
//       className: "Class 10",
//       section: "A",
//       totalFees: 50000,
//       paidFees: 30000,
//       dueFees: 20000,
//       status: "Partial",
//     },
//     {
//       id: 2,
//       admissionNo: "ADM002",
//       name: "Neha Verma",
//       className: "Class 12",
//       section: "B",
//       totalFees: 60000,
//       paidFees: 60000,
//       dueFees: 0,
//       status: "Paid",
//     },
//     {
//       id: 3,
//       admissionNo: "ADM003",
//       name: "Rahul Singh",
//       className: "Class 9",
//       section: "C",
//       totalFees: 45000,
//       paidFees: 10000,
//       dueFees: 35000,
//       status: "Partial",
//     },
//   ]);

//   const handleChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const filteredData = data.filter((item) => {
//     return (
//       (filters.className === "" || item.className === filters.className) &&
//       (filters.section === "" || item.section === filters.section) &&
//       (filters.status === "" || item.status === filters.status) &&
//       item.name.toLowerCase().includes(filters.search.toLowerCase())
//     );
//   });

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">

//       {/* FILTER SECTION */}
//       <div className="bg-white p-6 rounded-lg shadow mb-6">
//         <h2 className="text-2xl font-bold mb-4">Search Fees</h2>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

//           {/* Class */}
//           <select
//             name="className"
//             onChange={handleChange}
//             className="border p-2 rounded"
//           >
//             <option value="">All Class</option>
//             <option>Class 9</option>
//             <option>Class 10</option>
//             <option>Class 11</option>
//             <option>Class 12</option>
//           </select>

//           {/* Section */}
//           <select
//             name="section"
//             onChange={handleChange}
//             className="border p-2 rounded"
//           >
//             <option value="">All Section</option>
//             <option>A</option>
//             <option>B</option>
//             <option>C</option>
//           </select>

//           {/* Status */}
//           <select
//             name="status"
//             onChange={handleChange}
//             className="border p-2 rounded"
//           >
//             <option value="">All Status</option>
//             <option>Paid</option>
//             <option>Partial</option>
//           </select>

//           {/* Search */}
//           <input
//             type="text"
//             name="search"
//             placeholder="Search student..."
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />
//         </div>
//       </div>

//       {/* TABLE */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-semibold mb-4">
//           Fees Records
//         </h2>

//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">

//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="border p-2">Adm No</th>
//                 <th className="border p-2">Student</th>
//                 <th className="border p-2">Class</th>
//                 <th className="border p-2">Section</th>
//                 <th className="border p-2">Total</th>
//                 <th className="border p-2">Paid</th>
//                 <th className="border p-2">Due</th>
//                 <th className="border p-2">Status</th>
//                 <th className="border p-2">Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredData.map((item) => (
//                 <tr key={item.id} className="hover:bg-gray-50">

//                   <td className="border p-2">{item.admissionNo}</td>
//                   <td className="border p-2">{item.name}</td>
//                   <td className="border p-2">{item.className}</td>
//                   <td className="border p-2">{item.section}</td>

//                   <td className="border p-2">₹{item.totalFees}</td>
//                   <td className="border p-2">₹{item.paidFees}</td>
//                   <td className="border p-2 text-red-600">
//                     ₹{item.dueFees}
//                   </td>

//                   <td className="border p-2">
//                     <span
//                       className={`px-2 py-1 rounded text-white ${
//                         item.status === "Paid"
//                           ? "bg-green-500"
//                           : "bg-yellow-500"
//                       }`}
//                     >
//                       {item.status}
//                     </span>
//                   </td>

//                   <td className="border p-2 space-x-2 text-center">

//                     <button className="bg-blue-500 text-white px-2 py-1 rounded">
//                       View
//                     </button>

//                     <button className="bg-green-500 text-white px-2 py-1 rounded">
//                       Collect
//                     </button>

//                     <button className="bg-purple-500 text-white px-2 py-1 rounded">
//                       Print
//                     </button>

//                   </td>

//                 </tr>
//               ))}
//             </tbody>

//           </table>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default SearchFees;








import React, { useState } from "react";

const SearchFees = () => {
  const [filters, setFilters] = useState({
    className: "",
    section: "",
    status: "",
    search: "",
    paymentId: "",
  });

  const [data] = useState([
    {
      id: 1,
      paymentId: "PAY001",
      admissionNo: "ADM001",
      name: "Aman Sharma",
      className: "Class 10",
      section: "A",
      totalFees: 50000,
      paidFees: 30000,
      dueFees: 20000,
      status: "Partial",
    },
    {
      id: 2,
      paymentId: "PAY002",
      admissionNo: "ADM002",
      name: "Neha Verma",
      className: "Class 12",
      section: "B",
      totalFees: 60000,
      paidFees: 60000,
      dueFees: 0,
      status: "Paid",
    },
    {
      id: 3,
      paymentId: "PAY003",
      admissionNo: "ADM003",
      name: "Rahul Singh",
      className: "Class 9",
      section: "C",
      totalFees: 45000,
      paidFees: 10000,
      dueFees: 35000,
      status: "Partial",
    },
  ]);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredData = data.filter((item) => {
    return (
      (filters.className === "" || item.className === filters.className) &&
      (filters.section === "" || item.section === filters.section) &&
      (filters.status === "" || item.status === filters.status) &&
      item.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      item.paymentId.toLowerCase().includes(filters.paymentId.toLowerCase())
    );
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* FILTER SECTION */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-bold mb-4">Search Fees</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

          {/* Class */}
          <select
            name="className"
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">All Class</option>
            <option>Class 9</option>
            <option>Class 10</option>
            <option>Class 11</option>
            <option>Class 12</option>
          </select>

          {/* Section */}
          <select
            name="section"
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">All Section</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>

          {/* Status */}
          <select
            name="status"
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">All Status</option>
            <option>Paid</option>
            <option>Partial</option>
          </select>

          {/* Payment ID SEARCH */}
          <input
            type="text"
            name="paymentId"
            placeholder="Search Payment ID..."
            onChange={handleChange}
            className="border p-2 rounded"
          />

          {/* Name Search */}
          <input
            type="text"
            name="search"
            placeholder="Search student..."
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">
          Fees Records
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Payment ID</th>
                <th className="border p-2">Adm No</th>
                <th className="border p-2">Student</th>
                <th className="border p-2">Class</th>
                <th className="border p-2">Section</th>
                <th className="border p-2">Total</th>
                <th className="border p-2">Paid</th>
                <th className="border p-2">Due</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">

                  <td className="border p-2">{item.paymentId}</td>
                  <td className="border p-2">{item.admissionNo}</td>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.className}</td>
                  <td className="border p-2">{item.section}</td>

                  <td className="border p-2">₹{item.totalFees}</td>
                  <td className="border p-2">₹{item.paidFees}</td>
                  <td className="border p-2 text-red-600">
                    ₹{item.dueFees}
                  </td>

                  <td className="border p-2">
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        item.status === "Paid"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="border p-2 space-x-2 text-center">

                    <button className="bg-blue-500 text-white px-2 py-1 rounded">
                      View
                    </button>

                    <button className="bg-green-500 text-white px-2 py-1 rounded">
                      Collect
                    </button>

                    <button className="bg-purple-500 text-white px-2 py-1 rounded">
                      Print
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

export default SearchFees;