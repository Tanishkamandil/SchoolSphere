import React from "react";
import {
  Users,
  IndianRupee,
  CreditCard,
  CalendarCheck,
  BookOpen,
  UserCheck,
} from "lucide-react";

const ProgressCard = ({ title, value, total, percent, color, icon }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-wide text-gray-400 font-semibold">
            {title}
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-2 break-words">
            {value}
            <span className="text-gray-400 font-medium text-lg">/{total}</span>
          </h2>
        </div>

        <div
          className={`h-14 w-14 rounded-2xl flex items-center justify-center text-white ${color}`}
        >
          {icon}
        </div>
      </div>

      <div className="mt-5">
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${color}`}
            style={{ width: `${percent}%` }}
          />
        </div>

        <p className="text-right text-sm text-gray-500 mt-2">
          {percent.toFixed(1)}%
        </p>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-4">
        <div
          className={`h-16 w-16 rounded-2xl flex items-center justify-center text-white ${color}`}
        >
          {icon}
        </div>

        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-1">{value}</h2>
        </div>
      </div>
    </div>
  );
};

const SimpleOverviewCard = ({ title, items }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-5">{title}</h3>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">{item.label}</span>
              <span className="font-semibold text-gray-700">{item.value}</span>
            </div>

            {item.progress && (
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{ width: item.progress }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  // Data
  const totalFees = 500000;
  const paidFees = 320000;

  const convertedLeads = 120;
  const totalLeads = 180;

  const staffPresent = 42;
  const totalStaff = 50;

  const studentPresent = 720;
  const totalStudents = 800;

  const monthlyCollection = 125000;
  const monthlyExpense = 68000;

  const feePercent = (paidFees / totalFees) * 100;
  const leadPercent = (convertedLeads / totalLeads) * 100;
  const staffPercent = (staffPresent / totalStaff) * 100;
  const studentPercent = (studentPresent / totalStudents) * 100;

  return (
    <div className="min-h-screen bg-[#f5f7fb] px-6 py-4">
      {/* Progress Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <ProgressCard
          title="Fees Collection"
          value={`₹${paidFees}`}
          total={`₹${totalFees}`}
          percent={feePercent}
          color="bg-emerald-500"
          icon={<IndianRupee size={28} />}
        />

        <ProgressCard
          title="Converted Leads"
          value={convertedLeads}
          total={totalLeads}
          percent={leadPercent}
          color="bg-rose-500"
          icon={<UserCheck size={28} />}
        />

        <ProgressCard
          title="Staff Present"
          value={staffPresent}
          total={totalStaff}
          percent={staffPercent}
          color="bg-indigo-500"
          icon={<CalendarCheck size={28} />}
        />

        <ProgressCard
          title="Students Present"
          value={studentPresent}
          total={totalStudents}
          percent={studentPercent}
          color="bg-amber-500"
          icon={<Users size={28} />}
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        <StatCard
          title="Monthly Fee Collection"
          value={`₹${monthlyCollection}`}
          icon={<IndianRupee size={30} />}
          color="bg-emerald-500"
        />

        <StatCard
          title="Monthly Expenses"
          value={`₹${monthlyExpense}`}
          icon={<CreditCard size={30} />}
          color="bg-rose-500"
        />

        <StatCard
          title="Total Students"
          value={totalStudents}
          icon={<Users size={30} />}
          color="bg-sky-500"
        />
      </div>

      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">
        <SimpleOverviewCard
          title="Fees Overview"
          items={[
            {
              label: "Paid",
              value: "65%",
              progress: "65%",
              color: "bg-emerald-500",
            },
            {
              label: "Pending",
              value: "25%",
              progress: "25%",
              color: "bg-yellow-500",
            },
            {
              label: "Unpaid",
              value: "10%",
              progress: "10%",
              color: "bg-red-500",
            },
          ]}
        />

        <SimpleOverviewCard
          title="Enquiry Overview"
          items={[
            { label: "Active", value: "45" },
            { label: "Won", value: "30" },
            { label: "Lost", value: "10" },
            { label: "Dead", value: "5" },
          ]}
        />

        <SimpleOverviewCard
          title="Library Overview"
          items={[
            { label: "Books Issued", value: "320" },
            { label: "Returned", value: "280" },
            { label: "Available", value: "1200" },
            { label: "Due Return", value: "40" },
          ]}
        />

        <SimpleOverviewCard
          title="Today Attendance"
          items={[
            { label: "Present", value: "720" },
            { label: "Absent", value: "50" },
            { label: "Late", value: "20" },
            { label: "Half Day", value: "10" },
          ]}
        />
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mt-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
            <BookOpen size={24} />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              School Events Calendar
            </h3>

            <p className="text-sm text-gray-500">
              Upcoming school activities and events
            </p>
          </div>
        </div>

        <div className="h-72 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400">
          Calendar Component Here
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
