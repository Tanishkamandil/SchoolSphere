// // src/pages/examination/ExamGroup.jsx
// import React, { useState } from "react";
// import DesignAdmitCard from "./DesignAdmitCard";
// import DesignMarksheet from "./DesignMarksheet";

// const ExamGroup = () => {
//   const [view, setView] = useState("admit");

//   return (
//     <div className="p-4 bg-light min-vh-100">
//       <div className="row">

//         {/* LEFT SIDE MENU (like admin panel feature switch) */}
//         <div className="col-md-3">
//           <div className="card shadow-sm border-0">
//             <div className="card-body">

//               <h5 className="mb-3">Exam Group</h5>

//               <button
//                 className={`btn w-100 mb-2 ${view === "admit" ? "btn-primary" : "btn-outline-primary"}`}
//                 onClick={() => setView("admit")}
//               >
//                 Admit Card Design
//               </button>

//               <button
//                 className={`btn w-100 ${view === "marksheet" ? "btn-success" : "btn-outline-success"}`}
//                 onClick={() => setView("marksheet")}
//               >
//                 Marksheet Design
//               </button>

//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE CONTENT (FULL FEATURE AREA) */}
//         <div className="col-md-9">

//           <div className="card shadow-sm border-0">
//             <div className="card-body">

//               {view === "admit" && (
//                 <div>
//                   {/* Admit Card full feature UI */}
//                   <DesignAdmitCard />
//                 </div>
//               )}

//               {view === "marksheet" && (
//                 <div>
//                   {/* Marksheet full feature UI */}
//                   <DesignMarksheet />
//                 </div>
//               )}

//             </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default ExamGroup;








// src/pages/examination/ExamGroup.jsx

import React, { useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Search,
  FileText,
  Printer,
} from "lucide-react";

const ExamGroup = () => {
  const [examGroups, setExamGroups] = useState([
    {
      id: 1,
      name: "Annual Exam",
      exams: 1,
      type: "General Purpose (Pass/Fail)",
    },
    {
      id: 2,
      name: "Half Yearly Exam",
      exams: 2,
      type: "General Purpose (Pass/Fail)",
    },
    {
      id: 3,
      name: "Quarterly Exam",
      exams: 4,
      type: "General Purpose (Pass/Fail)",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (!formData.name || !formData.type) {
      alert("Please fill required fields");
      return;
    }

    const newData = {
      id: examGroups.length + 1,
      name: formData.name,
      exams: 0,
      type: formData.type,
    };

    setExamGroups([...examGroups, newData]);

    setFormData({
      name: "",
      type: "",
      description: "",
    });
  };

  const handleDelete = (id) => {
    setExamGroups(examGroups.filter((item) => item.id !== id));
  };

  return (
    <div className="p-5 bg-[#f4f6f9] min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left Form */}
        <div className="bg-white rounded shadow-sm border">
          <div className="border-b px-5 py-4">
            <h2 className="text-[28px] font-semibold text-gray-700">
              Add Exam Group
            </h2>
          </div>

          <div className="p-5 space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Exam Type */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Exam Type <span className="text-red-500">*</span>
              </label>

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select</option>
                <option value="General Purpose (Pass/Fail)">
                  General Purpose (Pass/Fail)
                </option>

                <option value="Percentage Based">
                  Percentage Based
                </option>

                <option value="Grade Based">Grade Based</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Description
              </label>

              <textarea
                rows="5"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border rounded px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded font-semibold"
              >
                Save
              </button>
            </div>
          </div>
        </div>

        {/* Right Table */}
        <div className="bg-white rounded shadow-sm border">
          <div className="border-b px-5 py-4 flex justify-between items-center">
            <h2 className="text-[28px] font-semibold text-gray-700">
              Exam Group List
            </h2>

            <div className="flex items-center gap-2">
              <button className="border p-2 rounded hover:bg-gray-100">
                <FileText size={18} />
              </button>

              <button className="border p-2 rounded hover:bg-gray-100">
                <Printer size={18} />
              </button>
            </div>
          </div>

          <div className="p-5">
            {/* Search */}
            <div className="relative mb-5">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border rounded px-4 py-3 pr-10 outline-none"
              />

              <Search
                size={18}
                className="absolute right-3 top-4 text-gray-500"
              />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left py-3 px-3">Name</th>
                    <th className="text-left py-3 px-3">No Of Exams</th>
                    <th className="text-left py-3 px-3">Exam Type</th>
                    <th className="text-center py-3 px-3">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {examGroups.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="py-3 px-3">{item.name}</td>

                      <td className="py-3 px-3">{item.exams}</td>

                      <td className="py-3 px-3">{item.type}</td>

                      <td className="py-3 px-3">
                        <div className="flex justify-center gap-3">
                          <button className="text-green-600 hover:text-green-800">
                            <Plus size={18} />
                          </button>

                          <button className="text-blue-600 hover:text-blue-800">
                            <Pencil size={18} />
                          </button>

                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              Records: 1 to {examGroups.length} of {examGroups.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamGroup;