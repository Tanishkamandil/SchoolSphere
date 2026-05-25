function Dashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "1,250",
    },
    {
      title: "Teachers",
      value: "85",
    },
    {
      title: "Attendance",
      value: "92%",
    },
    {
      title: "Revenue",
      value: "₹4.2L",
    },
  ];

  return (
    <div>
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">School Overview</h1>

        <p className="text-slate-500 mt-2">
          Monitor school performance and analytics
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition duration-300"
          >
            <p className="text-slate-500 text-sm">{item.title}</p>

            <h2 className="text-4xl font-bold mt-4 text-slate-800">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-96">
          <h2 className="text-xl font-bold mb-4">Analytics</h2>

          <div className="h-full flex items-center justify-center text-slate-400">
            Chart Coming Soon 📊
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold mb-4">Recent Activities</h2>

          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-2xl">
              New student admission completed
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl">
              Fee payment received
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl">
              AI generated attendance report
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
