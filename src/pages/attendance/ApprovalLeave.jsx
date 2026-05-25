import { useState } from "react";
import {
  Search,
  Plus,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function ApprovalLeave() {
  const [selectedClass, setSelectedClass] =
    useState("");

  const [selectedSection, setSelectedSection] =
    useState("");

  const [searchText, setSearchText] =
    useState("");

  const [leaveData, setLeaveData] = useState([
    {
      id: 1,
      studentName: "Rahul Sharma",
      className: "10",
      section: "A",
      applyDate: "2026-05-20",
      fromDate: "2026-05-22",
      toDate: "2026-05-24",
      status: "Pending",
      approvedBy: "-",
    },

    {
      id: 2,
      studentName: "Priya Verma",
      className: "9",
      section: "B",
      applyDate: "2026-05-18",
      fromDate: "2026-05-19",
      toDate: "2026-05-20",
      status: "Approved",
      approvedBy: "Admin",
    },

    {
      id: 3,
      studentName: "Aman Khan",
      className: "8",
      section: "C",
      applyDate: "2026-05-15",
      fromDate: "2026-05-16",
      toDate: "2026-05-17",
      status: "Rejected",
      approvedBy: "Principal",
    },
  ]);

  const handleApprove = (id) => {
    const updated = leaveData.map((item) =>
      item.id === id
        ? {
            ...item,
            status: "Approved",
            approvedBy: "Admin",
          }
        : item
    );

    setLeaveData(updated);
  };

  const handleReject = (id) => {
    const updated = leaveData.map((item) =>
      item.id === id
        ? {
            ...item,
            status: "Rejected",
            approvedBy: "Admin",
          }
        : item
    );

    setLeaveData(updated);
  };

  const filteredData = leaveData.filter(
    (item) =>
      (selectedClass === "" ||
        item.className === selectedClass) &&
      (selectedSection === "" ||
        item.section === selectedSection) &&
      item.studentName
        .toLowerCase()
        .includes(searchText.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow border">

        {/* HEADER */}
        <div className="p-5 border-b">
          <h2 className="text-2xl font-semibold">
            Approve Leave
          </h2>
        </div>

        {/* FILTERS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 border-b">

          {/* CLASS */}
          <div>
            <label className="block mb-2 font-medium">
              Class
            </label>

            <select
              value={selectedClass}
              onChange={(e) =>
                setSelectedClass(e.target.value)
              }
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select</option>
              <option value="LKG">LKG</option>
  <option value="UKG">UKG</option>

              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          {/* SECTION */}
          <div>
            <label className="block mb-2 font-medium">
              Section
            </label>

            <select
              value={selectedSection}
              onChange={(e) =>
                setSelectedSection(e.target.value)
              }
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select</option>

              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>

          {/* SEARCH */}
          <div>
            <label className="block mb-2 font-medium">
              Search Student
            </label>

            <input
              type="text"
              placeholder="Search By Name"
              value={searchText}
              onChange={(e) =>
                setSearchText(e.target.value)
              }
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex items-end gap-3">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2">
              <Search size={18} />
              Search
            </button>

            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg flex items-center gap-2">
              <Plus size={18} />
              Add
            </button>

          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>

                <th className="p-3 text-left border-b">
                  Student Name
                </th>

                <th className="p-3 text-left border-b">
                  Class
                </th>

                <th className="p-3 text-left border-b">
                  Section
                </th>

                <th className="p-3 text-left border-b">
                  Apply Date
                </th>

                <th className="p-3 text-left border-b">
                  From Date
                </th>

                <th className="p-3 text-left border-b">
                  To Date
                </th>

                <th className="p-3 text-left border-b">
                  Status
                </th>

                <th className="p-3 text-left border-b">
                  Approved By
                </th>

                <th className="p-3 text-center border-b">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>

              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50"
                  >

                    <td className="p-3 border-b">
                      {item.studentName}
                    </td>

                    <td className="p-3 border-b">
                      {item.className}
                    </td>

                    <td className="p-3 border-b">
                      {item.section}
                    </td>

                    <td className="p-3 border-b">
                      {item.applyDate}
                    </td>

                    <td className="p-3 border-b">
                      {item.fromDate}
                    </td>

                    <td className="p-3 border-b">
                      {item.toDate}
                    </td>

                    <td className="p-3 border-b">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium
                        ${
                          item.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : item.status === "Rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="p-3 border-b">
                      {item.approvedBy}
                    </td>

                    <td className="p-3 border-b">
                      <div className="flex justify-center gap-2">

                        <button
                          onClick={() =>
                            handleApprove(item.id)
                          }
                          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
                        >
                          <CheckCircle size={18} />
                        </button>

                        <button
                          onClick={() =>
                            handleReject(item.id)
                          }
                          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                        >
                          <XCircle size={18} />
                        </button>

                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="9"
                    className="text-center py-10 text-gray-500"
                  >
                    No Leave Records Found
                  </td>
                </tr>
              )}

            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}