import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Search,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  Users,
  IndianRupee,
  Wallet,
  Receipt,
  ClipboardList,
  CalendarCheck,
  Monitor,
  GraduationCap,
  BookOpen,
  Briefcase,
  MessageCircle,
} from "lucide-react";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    frontOffice: false,
    studentInfo: false,
    feesCollection: false,
    income: false,
    expenses: false,
    examinations: false,
    attendance: false,
    onlineExam: false,
    academics: false,
    lessonPlan: false,
    humanResource: false,
    communicate: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const menuClass = ({ isActive }) =>
    `flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
      isActive
        ? "bg-blue-500 text-white shadow-md"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  const subMenuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
      isActive
        ? "bg-blue-500 text-white"
        : "text-slate-400 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <aside className="w-[290px] h-screen bg-[#0f172a] fixed left-0 top-0 flex flex-col shadow-2xl z-50">
      {/* Top Logo */}
      <div className="px-5 py-4 border-b border-slate-800">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            S
          </div>

          <div>
            <h1 className="text-[28px] font-bold text-blue-400 leading-none">
              SchoolSphere
            </h1>

            <p className="text-slate-400 text-sm mt-1">
              Smart School Management
            </p>
          </div>
        </NavLink>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-slate-800">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search By Student Name"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto px-3 py-4 sidebar-scroll">
        <ul className="space-y-2">
          {/* Dashboard */}
          <li>
            <NavLink to="/" className={menuClass}>
              <div className="flex items-center gap-3">
                <LayoutDashboard size={20} />
                <span className="font-medium">Dashboard</span>
              </div>
            </NavLink>
          </li>

          {/* Front Office */}
          <li>
            <button
              onClick={() => toggleMenu("frontOffice")}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
            >
              <div className="flex items-center gap-3">
                <Briefcase size={20} />
                <span className="font-medium">Front Office</span>
              </div>

              {openMenus.frontOffice ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>

            {openMenus.frontOffice && (
              <ul className="ml-5 mt-2 border-l border-slate-700 pl-3 space-y-2">
                <li>
                  <NavLink to="/visitor-book" className={subMenuClass}>
                    Visitor Book
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/phone-call-log" className={subMenuClass}>
                    Phone Call Log
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/postal-dispatch" className={subMenuClass}>
                    Postal Dispatch
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/postal-dispatch" className={subMenuClass}>
                    Postal Receive
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/postal-dispatch" className={subMenuClass}>
                    Complain
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/postal-dispatch" className={subMenuClass}>
                    Setup Front Office
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Student Information */}
          <li>
            <button
              onClick={() => toggleMenu("studentInfo")}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
            >
              <div className="flex items-center gap-3">
                <Users size={20} />
                <span className="font-medium">Student Information</span>
              </div>

              {openMenus.studentInfo ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>

            {openMenus.studentInfo && (
              <ul className="ml-5 mt-2 border-l border-slate-700 pl-3 space-y-2">
                <li>
                  <NavLink to="/student-details" className={subMenuClass}>
                    Student Details
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/admission" className={subMenuClass}>
                    Admission
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Online Admission
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Disabled Students
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Multi Class Students
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Bulk Delete
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Student Categories
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Student House
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Disable Reason
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Fees Collection */}
          <li>
            <button
              onClick={() => toggleMenu("feesCollection")}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
            >
              <div className="flex items-center gap-3">
                <Receipt size={20} />
                <span className="font-medium">Fees Collection</span>
              </div>

              {openMenus.feesCollection ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>

            {openMenus.feesCollection && (
              <ul className="ml-5 mt-2 border-l border-slate-700 pl-3 space-y-2">
                <li>
                  <NavLink to="/collect-fees" className={subMenuClass}>
                    Collect Fees
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/search-fees-payment" className={subMenuClass}>
                    Offline Bank Payments
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/fees-master" className={subMenuClass}>
                    Search Fees Payments
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/fees-master" className={subMenuClass}>
                    Search Due Fees
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/fees-master" className={subMenuClass}>
                    Fees Master
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/fees-master" className={subMenuClass}>
                    Fees Group
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/fees-master" className={subMenuClass}>
                    Fees Type
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/fees-master" className={subMenuClass}>
                    Fees Discount
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/fees-master" className={subMenuClass}>
                    Fees Carry Forward
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/fees-master" className={subMenuClass}>
                    Fees Reminder
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Income */}
          <li>
            <button
              onClick={() => toggleMenu("income")}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
            >
              <div className="flex items-center gap-3">
                <IndianRupee size={20} />
                <span className="font-medium">Income</span>
              </div>

              {openMenus.income ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>

            {openMenus.income && (
              <ul className="ml-5 mt-2 border-l border-slate-700 pl-3 space-y-2">
                <li>
                  <NavLink to="/student-details" className={subMenuClass}>
                    Add Income
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/admission" className={subMenuClass}>
                    Search Income
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Income Head
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Expenses */}
          <li>
            <button
              onClick={() => toggleMenu("expenses")}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
            >
              <div className="flex items-center gap-3">
                <Wallet size={20} />
                <span className="font-medium">Expenses</span>
              </div>

              {openMenus.expenses ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>

            {openMenus.expenses && (
              <ul className="ml-5 mt-2 border-l border-slate-700 pl-3 space-y-2">
                <li>
                  <NavLink to="/student-details" className={subMenuClass}>
                    Add Expense
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/admission" className={subMenuClass}>
                    Search Expense
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Expense Head
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Examinations */}
          <li>
            <button
              onClick={() => toggleMenu("examinations")}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
            >
              <div className="flex items-center gap-3">
                <ClipboardList size={20} />
                <span className="font-medium">Examinations</span>
              </div>

              {openMenus.examinations ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>

            {openMenus.examinations && (
              <ul className="ml-5 mt-2 border-l border-slate-700 pl-3 space-y-2">
                <li>
                  <NavLink to="/student-details" className={subMenuClass}>
                    Exam Group
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/admission" className={subMenuClass}>
                    Exam Schedule
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Examination Result
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Design Admit Card
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Print Admit Card
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Design Marksheet
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Marks Grade
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Marks Division
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Attendance */}
          <li>
            <button
              onClick={() => toggleMenu("attendance")}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
            >
              <div className="flex items-center gap-3">
                <CalendarCheck size={20} />
                <span className="font-medium">Attendance</span>
              </div>

              {openMenus.attendance ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>

            {openMenus.attendance && (
              <ul className="ml-5 mt-2 border-l border-slate-700 pl-3 space-y-2">
                <li>
                  <NavLink to="/student-attendance" className={subMenuClass}>
                    Student Attendance
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-attendance" className={subMenuClass}>
                    Approval Leave
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/attendance-by-date" className={subMenuClass}>
                    Attendance By Date
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Online Examinations */}
          <li>
            <button
              onClick={() => toggleMenu("onlineExam")}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
            >
              <div className="flex items-center gap-3">
                <Monitor size={20} />
                <span className="font-medium">Online Examinations</span>
              </div>

              {openMenus.onlineExam ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>

            {openMenus.onlineExam && (
              <ul className="ml-5 mt-2 border-l border-slate-700 pl-3 space-y-2">
                <li>
                  <NavLink to="/student-attendance" className={subMenuClass}>
                    Online Exam
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-attendance" className={subMenuClass}>
                    Question Bank
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Academics */}
          <li>
            <button
              onClick={() => toggleMenu("academics")}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
            >
              <div className="flex items-center gap-3">
                <GraduationCap size={20} />
                <span className="font-medium">Academics</span>
              </div>

              {openMenus.academics ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>

            {openMenus.academics && (
              <ul className="ml-5 mt-2 border-l border-slate-700 pl-3 space-y-2">
                <li>
                  <NavLink to="/class-timetable" className={subMenuClass}>
                    Class Time Table
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/teachers-timetable" className={subMenuClass}>
                    Teachers Time Table
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/assign-class-teachers" className={subMenuClass}>
                    Assign Class Teachers
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/promote-students" className={subMenuClass}>
                    Promote Students
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/subject-group" className={subMenuClass}>
                    Subject Group
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/subjects" className={subMenuClass}>
                    Subjects
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/classes" className={subMenuClass}>
                    Class
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/sections" className={subMenuClass}>
                    Sections
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Lesson Plan */}
          <li>
            <button
              onClick={() => toggleMenu("lessonPlan")}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
            >
              <div className="flex items-center gap-3">
                <BookOpen size={20} />
                <span className="font-medium">Lesson Plan</span>
              </div>

              {openMenus.lessonPlan ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>

            {openMenus.lessonPlan && (
              <ul className="ml-5 mt-2 border-l border-slate-700 pl-3 space-y-2">
                <li>
                  <NavLink to="/student-attendance" className={subMenuClass}>
                    Copy Old Lesson
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-attendance" className={subMenuClass}>
                    Manage Lesson Plan
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-attendance" className={subMenuClass}>
                    Manage Syllabus Status
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-attendance" className={subMenuClass}>
                    Lesson
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-attendance" className={subMenuClass}>
                    Topic
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Communicate */}
          <li>
            <button
              onClick={() => toggleMenu("communicate")}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
            >
              <div className="flex items-center gap-3">
                <MessageCircle size={20} />
                <span className="font-medium">Communicate</span>
              </div>

              {openMenus.communicate ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>

            {openMenus.communicate && (
              <ul className="ml-5 mt-2 border-l border-slate-700 pl-3 space-y-2">
                <li>
                  <NavLink to="/student-details" className={subMenuClass}>
                    Notice Board
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/admission" className={subMenuClass}>
                    Send Email
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Send SMS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Email/ SMS Log
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Schedule Email/ SMS Log
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Login Credential Send
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    Email Template
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student-promote" className={subMenuClass}>
                    SMS Template
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Footer Profile */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 bg-slate-800 rounded-2xl p-3">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-lg font-bold text-white">
            A
          </div>

          <div>
            <h3 className="text-white font-semibold">Admin</h3>
            <p className="text-xs text-slate-400">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
