import React from "react";

const EmailSmsLog = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <div className="bg-white rounded-lg shadow-md p-5">
        
        <h1 className="text-2xl font-semibold mb-6">
          Email / SMS Log
        </h1>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-4 py-2 w-72"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Title</th>
                <th className="p-3">Description</th>
                <th className="p-3">Date</th>
                <th className="p-3">Email</th>
                <th className="p-3">SMS</th>
                <th className="p-3">Group</th>
                <th className="p-3">Individual</th>
                <th className="p-3">Class</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-16 text-gray-400"
                >
                  No data available in table
                </td>
              </tr>
            </tbody>

          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
          
          <button className="text-green-600 font-medium">
            ← Add new record or search with different criteria.
          </button>

          <div>
            Records: 0 to 0 of 0
          </div>

        </div>

      </div>
    </div>
  );
};

export default EmailSmsLog;