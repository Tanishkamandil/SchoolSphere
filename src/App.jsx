import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/Dashboradlayout";

// Dashboard
import Dashboard from "./pages/Dashboard";

// Academic Pages
import Class from "./pages/academic/Class";
import Subjects from "./pages/academic/Subjects";
import TeachersTimetable from "./pages/academic/TeachersTimetable";
import Sections from "./pages/academic/Sections";
import SubjectGroup from "./pages/academic/SubjectGroup";
import AssignClassTeacher from "./pages/academic/AssignClassTeacher";
import PromoteStudents from "./pages/academic/PromoteStu";
import ClassTimeTable from "./pages/academic/ClassTimeTable";

// Other Pages
import Events from "./pages/alumni/Events";
import ManageAlumni from "./pages/alumni/ManageAlumni";

import ApprovalLeave from "./pages/attendance/ApprovalLeave";
import StudentAttendance from "./pages/attendance/StudentAttendance";
import AttendanceByDate from "./pages/attendance/AttendanceByDate";

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          {/* Dashboard */}
          <Route path="/" element={<Dashboard />} />
          {/* Academic */}
          <Route path="/class" element={<Class />} />
          <Route path="/sections" element={<Sections />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/teacherstimetable" element={<TeachersTimetable />} />
          <Route path="/subjectgroup" element={<SubjectGroup />} />\
          <Route path="/assignclassteacher" element={<AssignClassTeacher />} />
          <Route path="/promotestudents" element={<PromoteStudents />} />
          <Route path="/classtimetable" element={<ClassTimeTable />} />
          {/* Main Modules */}
          <Route path="/events" element={<Events />} />
          <Route path="/managealumni" element={<ManageAlumni />} />
          <Route path="/approvalleave" element={<ApprovalLeave />} />
          <Route path="/studentattendance" element={<StudentAttendance />} />
          <Route path="/attendancebydate" element={<AttendanceByDate />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;
