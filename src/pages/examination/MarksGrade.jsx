import { useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Percent,
  Award,
} from "lucide-react";

const MarksGrade = () => {
  const [grades, setGrades] = useState([
    {
      id: 1,
      gradeName: "A+",
      percentFrom: 91,
      percentUpto: 100,
      gradePoint: 10,
      remark: "Outstanding",
    },
    {
      id: 2,
      gradeName: "A",
      percentFrom: 81,
      percentUpto: 90,
      gradePoint: 9,
      remark: "Excellent",
    },
  ]);

  const [formData, setFormData] = useState({
    gradeName: "",
    percentFrom: "",
    percentUpto: "",
    gradePoint: "",
    remark: "",
  });

  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setGrades(
        grades.map((item) =>
          item.id === editId ? { ...formData, id: editId } : item
        )
      );
      setEditId(null);
    } else {
      setGrades([
        ...grades,
        {
          id: Date.now(),
          ...formData,
        },
      ]);
    }

    setFormData({
      gradeName: "",
      percentFrom: "",
      percentUpto: "",
      gradePoint: "",
      remark: "",
    });
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    setGrades(grades.filter((item) => item.id !== id));
  };

  const filteredData = grades.filter((item) =>
    item.gradeName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Marks Grade
          </h1>
          <p className="text-slate-500 mt-1">
            Manage Exam Grade System
          </p>
        </div>

        <div className="bg-blue-500 text-white px-5 py-3 rounded-2xl shadow-lg flex items-center gap-2">
          <Award size={20} />
          Grade Management
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Form */}
        <div className="bg-white rounded-3xl shadow-md p-6">
          <div className="flex items-center gap-2 mb-5">
            <Plus className="text-blue-500" />
            <h2 className="text-xl font-bold text-slate-700">
              {editId ? "Edit Grade" : "Add Grade"}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-600">
                Grade Name
              </label>

              <input
                type="text"
                name="gradeName"
                value={formData.gradeName}
                onChange={handleChange}
                placeholder="Enter Grade"
                className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-slate-600">
                  Percent From
                </label>

                <input
                  type="number"
                  name="percentFrom"
                  value={formData.percentFrom}
                  onChange={handleChange}
                  placeholder="0"
                  className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-600">
                  Percent Upto
                </label>

                <input
                  type="number"
                  name="percentUpto"
                  value={formData.percentUpto}
                  onChange={handleChange}
                  placeholder="100"
                  className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-600">
                Grade Point
              </label>

              <input
                type="number"
                name="gradePoint"
                value={formData.gradePoint}
                onChange={handleChange}
                placeholder="Enter Grade Point"
                className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-600">
                Remark
              </label>

              <textarea
                name="remark"
                value={formData.remark}
                onChange={handleChange}
                rows="4"
                placeholder="Enter Remark"
                className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-2xl font-semibold shadow-md transition-all"
            >
              {editId ? "Update Grade" : "Save Grade"}
            </button>
          </form>
        </div>

        {/* Table */}
        <div className="xl:col-span-2 bg-white rounded-3xl shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
            <h2 className="text-xl font-bold text-slate-700">
              Grade List
            </h2>

            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search Grade..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="p-4 text-left rounded-l-2xl">
                    Grade
                  </th>

                  <th className="p-4 text-left">
                    Percentage
                  </th>

                  <th className="p-4 text-left">
                    Grade Point
                  </th>

                  <th className="p-4 text-left">
                    Remark
                  </th>

                  <th className="p-4 text-center rounded-r-2xl">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-200 hover:bg-slate-50 transition-all"
                  >
                    <td className="p-4 font-semibold text-slate-700">
                      {item.gradeName}
                    </td>

                    <td className="p-4 text-slate-600">
                      <div className="flex items-center gap-1">
                        <Percent size={16} />
                        {item.percentFrom}% - {item.percentUpto}%
                      </div>
                    </td>

                    <td className="p-4 text-slate-600">
                      {item.gradePoint}
                    </td>

                    <td className="p-4 text-slate-600">
                      {item.remark}
                    </td>

                    <td className="p-4">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          onClick={() => handleEdit(item)}
                          className="bg-yellow-100 text-yellow-600 p-2 rounded-xl hover:scale-105 transition-all"
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-red-100 text-red-600 p-2 rounded-xl hover:scale-105 transition-all"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredData.length === 0 && (
              <div className="text-center py-10 text-slate-400">
                No Grades Found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarksGrade;