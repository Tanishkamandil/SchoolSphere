// src/pages/frontoffice/SetupFrontOffice.jsx

import React, { useState } from "react";

const SetupFrontOffice = () => {

  const [purposeList, setPurposeList] = useState([
    {
      id: 1,
      purpose: "Admission Inquiry",
      description: "New admission related enquiry",
    },
    {
      id: 2,
      purpose: "Fee Inquiry",
      description: "Student fees related issue",
    },
  ]);

  const [sourceList, setSourceList] = useState([
    {
      id: 1,
      source: "Website",
      description: "Inquiry from website",
    },
    {
      id: 2,
      source: "Facebook",
      description: "Inquiry from social media",
    },
  ]);

  const [complaintTypeList, setComplaintTypeList] = useState([
    {
      id: 1,
      type: "Transport",
      description: "Bus related complaints",
    },
    {
      id: 2,
      type: "Hostel",
      description: "Hostel facility issues",
    },
  ]);

  const [newPurpose, setNewPurpose] = useState({
    purpose: "",
    description: "",
  });

  const [newSource, setNewSource] = useState({
    source: "",
    description: "",
  });

  const [newComplaintType, setNewComplaintType] =
    useState({
      type: "",
      description: "",
    });

  // ADD PURPOSE
  const addPurpose = () => {

    if (!newPurpose.purpose) {
      alert("Enter purpose");
      return;
    }

    setPurposeList([
      ...purposeList,
      {
        id: purposeList.length + 1,
        ...newPurpose,
      },
    ]);

    setNewPurpose({
      purpose: "",
      description: "",
    });
  };

  // ADD SOURCE
  const addSource = () => {

    if (!newSource.source) {
      alert("Enter source");
      return;
    }

    setSourceList([
      ...sourceList,
      {
        id: sourceList.length + 1,
        ...newSource,
      },
    ]);

    setNewSource({
      source: "",
      description: "",
    });
  };

  // ADD COMPLAINT TYPE
  const addComplaintType = () => {

    if (!newComplaintType.type) {
      alert("Enter complaint type");
      return;
    }

    setComplaintTypeList([
      ...complaintTypeList,
      {
        id: complaintTypeList.length + 1,
        ...newComplaintType,
      },
    ]);

    setNewComplaintType({
      type: "",
      description: "",
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* PAGE TITLE */}
      <h1 className="text-2xl font-bold mb-6">
        Front Office Setup
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* PURPOSE */}
        <div className="bg-white rounded shadow p-5">

          <h2 className="text-lg font-semibold mb-4">
            Purpose Setup
          </h2>

          <input
            type="text"
            placeholder="Purpose"
            value={newPurpose.purpose}
            onChange={(e) =>
              setNewPurpose({
                ...newPurpose,
                purpose: e.target.value,
              })
            }
            className="border p-2 rounded w-full mb-3"
          />

          <textarea
            placeholder="Description"
            value={newPurpose.description}
            onChange={(e) =>
              setNewPurpose({
                ...newPurpose,
                description: e.target.value,
              })
            }
            className="border p-2 rounded w-full mb-3"
            rows="3"
          ></textarea>

          <button
            onClick={addPurpose}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Add Purpose
          </button>

          {/* TABLE */}
          <div className="mt-5 overflow-x-auto">

            <table className="w-full border-collapse">

              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">
                    Purpose
                  </th>
                  <th className="border p-2">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {purposeList.map((item) => (
                  <tr key={item.id}>
                    <td className="border p-2">
                      {item.purpose}
                    </td>

                    <td className="border p-2 space-x-2">

                      <button className="bg-green-500 text-white px-2 py-1 rounded">
                        Edit
                      </button>

                      <button className="bg-red-500 text-white px-2 py-1 rounded">
                        Delete
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* SOURCE */}
        <div className="bg-white rounded shadow p-5">

          <h2 className="text-lg font-semibold mb-4">
            Source Setup
          </h2>

          <input
            type="text"
            placeholder="Source"
            value={newSource.source}
            onChange={(e) =>
              setNewSource({
                ...newSource,
                source: e.target.value,
              })
            }
            className="border p-2 rounded w-full mb-3"
          />

          <textarea
            placeholder="Description"
            value={newSource.description}
            onChange={(e) =>
              setNewSource({
                ...newSource,
                description: e.target.value,
              })
            }
            className="border p-2 rounded w-full mb-3"
            rows="3"
          ></textarea>

          <button
            onClick={addSource}
            className="bg-purple-600 text-white px-4 py-2 rounded w-full"
          >
            Add Source
          </button>

          {/* TABLE */}
          <div className="mt-5 overflow-x-auto">

            <table className="w-full border-collapse">

              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">
                    Source
                  </th>
                  <th className="border p-2">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {sourceList.map((item) => (
                  <tr key={item.id}>
                    <td className="border p-2">
                      {item.source}
                    </td>

                    <td className="border p-2 space-x-2">

                      <button className="bg-green-500 text-white px-2 py-1 rounded">
                        Edit
                      </button>

                      <button className="bg-red-500 text-white px-2 py-1 rounded">
                        Delete
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* COMPLAINT TYPE */}
        <div className="bg-white rounded shadow p-5">

          <h2 className="text-lg font-semibold mb-4">
            Complaint Type Setup
          </h2>

          <input
            type="text"
            placeholder="Complaint Type"
            value={newComplaintType.type}
            onChange={(e) =>
              setNewComplaintType({
                ...newComplaintType,
                type: e.target.value,
              })
            }
            className="border p-2 rounded w-full mb-3"
          />

          <textarea
            placeholder="Description"
            value={newComplaintType.description}
            onChange={(e) =>
              setNewComplaintType({
                ...newComplaintType,
                description: e.target.value,
              })
            }
            className="border p-2 rounded w-full mb-3"
            rows="3"
          ></textarea>

          <button
            onClick={addComplaintType}
            className="bg-red-600 text-white px-4 py-2 rounded w-full"
          >
            Add Complaint Type
          </button>

          {/* TABLE */}
          <div className="mt-5 overflow-x-auto">

            <table className="w-full border-collapse">

              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">
                    Type
                  </th>

                  <th className="border p-2">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {complaintTypeList.map((item) => (
                  <tr key={item.id}>
                    <td className="border p-2">
                      {item.type}
                    </td>

                    <td className="border p-2 space-x-2">

                      <button className="bg-green-500 text-white px-2 py-1 rounded">
                        Edit
                      </button>

                      <button className="bg-red-500 text-white px-2 py-1 rounded">
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

export default SetupFrontOffice;