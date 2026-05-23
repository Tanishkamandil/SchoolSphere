import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Menu, Search, Bell } from "lucide-react";

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex">
      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed top-0 left-0 z-50 h-screen transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 lg:ml-[290px] min-h-screen flex flex-col">
        {/* TOPBAR */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 px-5 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            {/* LEFT */}
            <div className="flex items-center gap-4">
              {/* MOBILE MENU BUTTON */}
              <button onClick={() => setMobileOpen(true)} className="lg:hidden">
                <Menu size={26} />
              </button>

              <div>
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

                <p className="text-sm text-gray-500">Welcome back, Admin 👋</p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              {/* SEARCH */}
              <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-4 py-2 w-[260px]">
                <Search size={18} className="text-gray-500" />

                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none ml-2 w-full text-sm"
                />
              </div>

              {/* NOTIFICATION */}
              <button className="relative w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                <Bell size={20} />

                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
              </button>

              {/* PROFILE */}
              <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold shadow-md">
                A
              </div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-5 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
