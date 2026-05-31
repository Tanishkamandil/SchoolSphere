import { useState } from "react";
import {
  Search,
  Printer,
  Download,
  Eye,
  IdCard,
} from "lucide-react";

const PrintAdmitCard = () => {
  const [students] = useState([
    {
      id: 1,
      rollNo: "101",
      name: "Rahul Sharma",
      class: "10th",
      section: "A",
      exam: "Half Yearly Exam",
      admitNo: "ADM001",
    },
    {
      id: 2,
      rollNo: "102",
      name: "Priya Singh",
      class: "10th",
      section: "B",
      exam: "Half Yearly Exam",
      admitNo: "ADM002",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.rollNo.includes(search)
  );

  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Print Admit Card
          </h1>

          <p className="text-slate-500 mt-1">
            Print & Download Student Admit Cards
          </p>
        </div>

        <div className="bg-blue-500 text-white px-5 py-3 rounded-2xl shadow-lg flex items-center gap-2">
          <IdCard size={20} />
          Admit Management
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div>
            <label className="text-sm font-semibold text-slate-600">
              Exam Group
            </label>

            <select className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
              <option>Half Yearly Exam</option>
              <option>Final Exam</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-600">
              Class
            </label>

            <select className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
              <option>10th</option>
              <option>11th</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-600">
              Section
            </label>

            <select className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
              <option>A</option>
              <option>B</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-600">
              Search Student
            </label>

            <div className="relative mt-2">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-slate-300 rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-md p-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-700">
              <th className="p-4 text-left rounded-l-2xl">
                Admit No
              </th>

              <th className="p-4 text-left">
                Roll No
              </th>

              <th className="p-4 text-left">
                Student Name
              </th>

              <th className="p-4 text-left">
                Class
              </th>

              <th className="p-4 text-left">
                Section
              </th>

              <th className="p-4 text-left">
                Exam
              </th>

              <th className="p-4 text-center rounded-r-2xl">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => (
              <tr
                key={student.id}
                className="border-b border-slate-200 hover:bg-slate-50 transition-all"
              >
                <td className="p-4 font-semibold text-slate-700">
                  {student.admitNo}
                </td>

                <td className="p-4 text-slate-600">
                  {student.rollNo}
                </td>

                <td className="p-4 text-slate-600">
                  {student.name}
                </td>

                <td className="p-4 text-slate-600">
                  {student.class}
                </td>

                <td className="p-4 text-slate-600">
                  {student.section}
                </td>

                <td className="p-4 text-slate-600">
                  {student.exam}
                </td>

                <td className="p-4">
                  <div className="flex items-center justify-center gap-3">
                    <button className="bg-blue-100 text-blue-600 p-2 rounded-xl hover:scale-105 transition-all">
                      <Eye size={18} />
                    </button>

                    <button className="bg-green-100 text-green-600 p-2 rounded-xl hover:scale-105 transition-all">
                      <Printer size={18} />
                    </button>

                    <button className="bg-purple-100 text-purple-600 p-2 rounded-xl hover:scale-105 transition-all">
                      <Download size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredStudents.length === 0 && (
          <div className="text-center py-10 text-slate-400">
            No Students Found
          </div>
        )}
      </div>
    </div>
  );
};

export default PrintAdmitCard;