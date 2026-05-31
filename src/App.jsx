import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/Dashboradlayout";

// Dashboard
import Dashboard from "./pages/Dashboard";

// Academic Pages
import LoginCredentials from "./pages/communicate/LoginCredentials";
import EmailTemplate from "./pages/communicate/EmailTemplate";
import EmailSmsLog from "./pages/communicate/EmailSmsLog";
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
import Notice from "./pages/communicate/Notice";
import ApprovalLeave from "./pages/attendance/ApprovalLeave";
import StudentAttendance from "./pages/attendance/StudentAttendance";
import AttendanceByDate from "./pages/attendance/AttendanceByDate";
import ScheduleEmail from "./pages/communicate/ScheduleEmail";
import SendEmail from "./pages/communicate/SendEmail";
import SendSMS from "./pages/communicate/SendSMS";
import SmsTemplate from "./pages/communicate/SmsTemplate";

// Examination
import DesignAdmitCard from "./pages/examination/DesignAdmitCard";
import DesignMarksheet from "./pages/examination/DesignMarksheet"; // ✅ NEW
import ExamGroup from "./pages/examination/ExamGroup";
import ExamResult from "./pages/examination/ExamResult";
import ExamSchedule from "./pages/examination/ExamSchedule";
import MarksDivision from "./pages/examination/MarksDivison";
import MarksGrade from "./pages/examination/MarksGrade";
import PrintAdmitCard from "./pages/examination/PrintAdmit";
import PrintMarksheet from "./pages/examination/PrintMarksheet";
import AddExpenses from "./pages/expenses/AddExpenses";
import ExpensesHead from "./pages/expenses/ExpensesHead";
import SearchExpenses from "./pages/expenses/SearchExpenses";
import CollectFees from "./pages/fees/CollectFees";
import FeesCarryForward from "./pages/fees/FeesCarryForward";
import FeesDiscount from "./pages/fees/FeesDiscount";
import FeesGroup from "./pages/fees/FeesGroup";
import FeesMaster from "./pages/fees/FeesMaster";
import FeesReminder from "./pages/fees/FeesReminder";
import FeesType from "./pages/fees/FeesType";
import OfflineBank from "./pages/fees/OfflineBank";
import SearchDue from "./pages/fees/SearchDue";
import SearchFees from "./pages/fees/SearchFees";
import AdmissionEnquiry from "./pages/frontoffice/AdmissionEnquiry";
import Complaint from "./pages/frontoffice/complain";
import PhoneCall from "./pages/frontoffice/PhoneCall";
import PostalDispatch from "./pages/frontoffice/PostalDispatch";
import PostalReceive from "./pages/frontoffice/PostalReceive";
import SetupFrontOffice from "./pages/frontoffice/setupfc";
import VisitorBook from "./pages/frontoffice/VisitorBook";
import ApplyLeave from "./pages/humanresources/ApplyLeave";
import ApproveLeaveRequest from "./pages/humanresources/ApproveLeaveRequest";
import Department from "./pages/humanresources/Department";
import Designation from "./pages/humanresources/Designation";
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
          <Route path="/subjectgroup" element={<SubjectGroup />} />
          <Route path="/assignclassteacher" element={<AssignClassTeacher />} />
          <Route path="/promotestudents" element={<PromoteStudents />} />
          <Route path="/classtimetable" element={<ClassTimeTable />} />

          {/* Main Modules */}
          <Route path="/events" element={<Events />} />
          <Route path="/managealumni" element={<ManageAlumni />} />
          <Route path="/approvalleave" element={<ApprovalLeave />} />
          <Route path="/studentattendance" element={<StudentAttendance />} />
          <Route path="/attendancebydate" element={<AttendanceByDate />} />
          <Route path="/emailsmslog" element={<EmailSmsLog />} />
          <Route path="/emailtemplate" element={<EmailTemplate />} />
          <Route path="/logincredential" element={<LoginCredentials />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/scheduleemail" element={<ScheduleEmail />} />
          <Route path="/sendemail" element={<SendEmail />} />
          <Route path="/sendsms" element={<SendSMS />} />
          <Route path="/smstemplate" element={<SmsTemplate />} />

          {/* Examination */}
          <Route path="/designadmit" element={<DesignAdmitCard />} />
          <Route path="/designmarksheet" element={<DesignMarksheet />} /> {/* ✅ NEW ROUTE */}
          <Route path="/examgroup" element={<ExamGroup />} />
          <Route path="/exam-result" element={<ExamResult />} />
          <Route path="/examschedule" element={<ExamSchedule />}/>

<Route
  path="/marksdivision"
  element={<MarksDivision />}
/>
<Route
  path="/marksgrade"
  element={<MarksGrade />}
/>
<Route
  path="/printadmit"
  element={<PrintAdmitCard />}
/>
<Route
  path="/printmarksheet"
  element={<PrintMarksheet />}
/>
<Route
  path="/addexpense"
  element={<AddExpenses />}
/>
<Route path="/expenseshead" element={<ExpensesHead />} />
<Route path="/searchexpenses" element={<SearchExpenses />} />
<Route path="/collectfees" element={<CollectFees />} />
<Route
  path="/feescarryforward"
  element={<FeesCarryForward />}
/>
<Route
  path="/feesdiscount"
  element={<FeesDiscount />}
/>
<Route
  path="/feesgroup"
  element={<FeesGroup />}
/>
<Route
  path="/feesmaster"
  element={<FeesMaster />}
/>
<Route
  path="/feesreminder"
  element={<FeesReminder />}
/>
<Route
  path="/feestype"
  element={<FeesType />}
/>
<Route
  path="/offlinebank"
  element={<OfflineBank />}
/>
<Route
  path="/searchdue"
  element={<SearchDue />}
/>
<Route path="/searchfees" element={<SearchFees />} />
<Route
  path="/admission-enquiry"
  element={<AdmissionEnquiry />}
/>
<Route path="/complain" element={<Complaint />} />
<Route
  path="/phonecall"
  element={<PhoneCall />}
/>
<Route
  path="/postaldispatch"
  element={<PostalDispatch />}
/>
<Route
  path="/postalreceive"
  element={<PostalReceive />}
/>
<Route
  path="/setupfrontoffice"
  element={<SetupFrontOffice />}
/>
<Route
  path="/visitorbook"
  element={<VisitorBook />}
/>
<Route path="/applyleave" element={<ApplyLeave />} />
<Route
  path="/approveleaverequest"
  element={<ApproveLeaveRequest />}
/>
<Route
  path="/department"
  element={<Department />}
/>
<Route
  path="/designation"
  element={<Designation />}
/>
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;








// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DashboardLayout from "./layouts/Dashboradlayout";

// // Dashboard
// import Dashboard from "./pages/Dashboard";

// // ================= ACADEMIC =================
// import Class from "./pages/academic/Class";
// import Subjects from "./pages/academic/Subjects";
// import TeachersTimetable from "./pages/academic/TeachersTimetable";
// import Sections from "./pages/academic/Sections";
// import SubjectGroup from "./pages/academic/SubjectGroup";
// import AssignClassTeacher from "./pages/academic/AssignClassTeacher";
// import PromoteStudents from "./pages/academic/PromoteStu";
// import ClassTimeTable from "./pages/academic/ClassTimeTable";

// // ================= ALUMNI =================
// import Events from "./pages/alumni/Events";
// import ManageAlumni from "./pages/alumni/ManageAlumni";

// // ================= ATTENDANCE =================
// import ApprovalLeave from "./pages/attendance/ApprovalLeave";
// import StudentAttendance from "./pages/attendance/StudentAttendance";
// import AttendanceByDate from "./pages/attendance/AttendanceByDate";

// // ================= HOMEWORK =================
// import AddHomework from "./pages/homework/AddHomework";
// import DailyAssignment from "./pages/homework/DailyAssignment";

// // ================= CERTIFICATE =================
// import GenerateCertificate from "./pages/certificate/GenerateCertificate";
// import GenerateIdCard from "./pages/certificate/GenerateIdCard";
// import StudentCertificate from "./pages/certificate/StudentCertificate";
// import StudentIDCard from "./pages/certificate/StudentIDCard";
// import StaffIdCard from "./pages/certificate/StaffIdCard";

// // ================= EXAMINATION =================
// import ExamGroup from "./pages/examination/ExamGroup";
// import ExamResult from "./pages/examination/ExamResult";
// import ExamSchedule from "./pages/examination/ExamSchedule";
// import DesginAdmit from "./pages/examination/DesginAdmit";
// import DesignMarksheet from "./pages/examination/DesignMarksheet";
// import MarksDivision from "./pages/examination/MarksDivison";
// import MarksGrade from "./pages/examination/MarksGrade";
// import PrintAdmitCard from "./pages/examination/PrintAdmit";
// import PrintMarksheet from "./pages/examination/PrintMarksheet";

// // ================= HUMAN RESOURCE =================
// import Payroll from "./pages/humanresources/Payroll";
// import StaffAttendance from "./pages/humanresources/StaffAttendance";
// import StaffDirectory from "./pages/humanresources/StaffDirectory";
// import ApproveLeaveRequest from "./pages/humanresources/ApproveLeaveRequest";
// import LeaveType from "./pages/humanresources/LeaveType";
// import ApplyLeave from "./pages/humanresources/ApplyLeave";
// import TeachersRating from "./pages/humanresources/TeachersRating";
// import Department from "./pages/humanresources/Department";
// import Designation from "./pages/humanresources/Designation";
// import DisabledStaff from "./pages/humanresources/DisabledStaff";

// // ================= FRONT OFFICE =================
// import Complain from "./pages/frontoffice/Complain";
// import PostalDispatch from "./pages/frontoffice/PostalDispatch";
// import PostalReceive from "./pages/frontoffice/PostalReceive";
// import PhoneCallLog from "./pages/frontoffice/phonecall";
// import VisitorBook from "./pages/frontoffice/VisitorBook";
// import SetupFrontOffice from "./pages/frontoffice/setupfc";
// import AdmissionEnquiry from "./pages/frontoffice/AdmissionEnquiry";

// // ================= FEES =================
// import CollectFees from "./pages/fees/CollectFees";
// import FeesCarryForward from "./pages/fees/FeesCarryForword";
// import FeesDiscount from "./pages/fees/FeesDiscount";
// import FeesGroup from "./pages/fees/FeesGroup";
// import FeesMaster from "./pages/fees/FeesMaster";
// import FeesReminder from "./pages/fees/FeesReminder";
// import FeesType from "./pages/fees/FeesType";
// import OfflineBankPayments from "./pages/fees/OfflineBank";
// import SearchDueFees from "./pages/fees/SearchDue";
// import SearchFeesPayment from "./pages/fees/SearchFees";

// // ================= INCOME =================
// import AddIncome from "./pages/income/AddIncome";
// import IncomeHead from "./pages/income/IncomeHead";
// import SearchIncome from "./pages/income/SearchIncome";

// // ================= EXPENSE =================
// import AddExpense from "./pages/expenses/AddExpenses";
// import ExpenseHead from "./pages/expenses/ExpensesHead";
// import SearchExpense from "./pages/expenses/SearchExpenses";

// // ================= INVENTORY =================
// import AddItem from "./pages/inventory/AddItem";
// import AddItemStock from "./pages/inventory/AddItemStock";
// import IssueItem from "./pages/inventory/IssueItem";

// // ================= TRANSPORT =================
// import AssignVehicle from "./pages/transport/AssignVehicles";
// import PickupPoint from "./pages/transport/PickupPoint";
// import Rout from "./pages/transport/Routes";
// import TransportFeesMaster from "./pages/transport/FeesMaster";
// import Vehicle from "./pages/transport/Vehicles";
// import StudentTransportFees from "./pages/transport/StudentTransportFees";
// import RoutePickupPoint from "./pages/transport/RoutePickupPoint";

// // ================= DOWNLOAD CENTER =================
// import ContentType from "./pages/downloadcenter/ContentType";
// import ShareContentList from "./pages/downloadcenter/ContentShareList";
// import UploadContent from "./pages/downloadcenter/uploadshareContent";
// import VideoTutorial from "./pages/downloadcenter/VideoTutorial";

// // ================= LESSON PLAN =================
// import CopyOldLesson from "./pages/lessonplan/CopyOld";
// import Lesson from "./pages/lessonplan/Lesson";
// import ManageLessonPlan from "./pages/lessonplan/ManageLesson";
// import ManageSyllabusStatus from "./pages/lessonplan/ManageSyallbus";
// import Topic from "./pages/lessonplan/Topic";

// // ================= SYSTEM SETTINGS =================
// import GeneralSetting from "./pages/systemsetting/GeneralSetting";
// import NotificationSetting from "./pages/systemsetting/NotificationSetting";
// import SessionSetting from "./pages/systemsetting/SessionSetting";
// import SmsSetting from "./pages/systemsetting/SmsSetting";
// import EmailSetting from "./pages/systemsetting/EmailSetting";
// import PaymentMethods from "./pages/systemsetting/PaymentMethod";
// import PrintHeaderFooter from "./pages/systemsetting/PrintHeaderFooter";
// import FrontcmsSetting from "./pages/systemsetting/FrontcmsSetting";
// import BackupRestore from "./pages/systemsetting/BackupRestore";
// import Languages from "./pages/systemsetting/Languages";
// import Currency from "./pages/systemsetting/Currency";
// import Users from "./pages/systemsetting/Users";
// import Modules from "./pages/systemsetting/Modules";
// import CustomFields from "./pages/systemsetting/CustomFields";
// import CaptchaSetting from "./pages/systemsetting/CaptchaSetting";
// import SystemFields from "./pages/systemsetting/SystemFields";
// import StudentProfileUpdate from "./pages/systemsetting/StudentProfile";
// import FileTypes from "./pages/systemsetting/FileTypes";
// import SideBarMenu from "./pages/systemsetting/SideBarMenu";
// import SystemUpdate from "./pages/systemsetting/SystemUpdate";

// // ================= STUDENT INFO =================
// import StudentDetails from "./pages/studentinfo/StudentDetails";
// import StudentAdmission from "./pages/studentinfo/StudentAdmission";
// import DisableStudents from "./pages/Studentinfo/DisableStudents";
// import MultiClassStudents from "./pages/studentinfo/MulticlassStu";
// import BulkDelete from "./pages/studentinfo/BulkDelete";
// import StudentCategories from "./pages/studentinfo/StudentCategories";
// import StudentHouse from "./pages/studentinfo/StudentHouse";
// import DisableReason from "./pages/Studentinfo/DisableReason";
// import OnlineAdmission from "./pages/studentinfo/OnlineAdmission";

// // ================= LIBRARY =================
// import BookList from "./pages/library/BookList";
// import IssueReturn from "./pages/library/IssueReturn";
// import AddStaffMember from "./pages/library/AddStaffMember";
// import AddStudent from "./pages/library/AddStudent";

// // ================= HOSTEL =================
// import Hostel from "./pages/hostel/Hostel";
// import HostelRooms from "./pages/hostel/HostelRooms";
// import RoomType from "./pages/hostel/RoomType";

// // ================= COMMUNICATE =================
// import NoticeBoard from "./pages/communicate/Notice";
// import SendEmail from "./pages/communicate/SendEmail";
// import SendSMS from "./pages/communicate/SendSMS";
// import EmailSmsLog from "./pages/communicate/EmailSmsLog";
// import ScheduleEmailSMSLog from "./pages/communicate/ScheduleEmail";
// import LoginCredentialsSend from "./pages/communicate/LoginCredentials";
// import EmailTemplate from "./pages/communicate/EmailTemplate";
// import SmsTemplate from "./pages/communicate/SmsTemplate";

// // ================= FRONTCMS =================
// import Event from "./pages/frontcms/Event";
// import Gallery from "./pages/frontcms/Gallery";
// import News from "./pages/frontcms/News";
// import MediaManager from "./pages/frontcms/MediaManager";
// import Pages from "./pages/frontcms/Pages";
// import Menus from "./pages/frontcms/Menus";
// import Banner from "./pages/frontcms/Banner";

// // ================= ONLINE EXAM =================
// import OnlineExam from "./pages/onlineexamination/OnlineExam";
// import QuestionBank from "./pages/onlineexamination/QuestionBank";

// function App() {
//   return (
//     <BrowserRouter>
//       <DashboardLayout>
//         <Routes>
//           {/* Dashboard */}
//           <Route path="/" element={<Dashboard />} />
//           {/* FRONT OFFICE */}
//           <Route path="/visitor-book" element={<VisitorBook />} />
//           <Route path="/phone-call-log" element={<PhoneCallLog />} />
//           <Route path="/postal-dispatch" element={<PostalDispatch />} />
//           <Route path="/postal-receive" element={<PostalReceive />} />
//           <Route path="/complain" element={<Complain />} />
//           <Route path="/setup-front-office" element={<SetupFrontOffice />} />
//           <Route path="/admission-enquiry" element={<AdmissionEnquiry />} />
//           {/* STUDENT INFO */}
//           <Route path="/student-details" element={<StudentDetails />} />
//           <Route path="/admission" element={<StudentAdmission />} />
//           <Route path="/online-admission" element={<OnlineAdmission />} />
//           <Route path="/disabled-students" element={<DisableStudents />} />
//           <Route
//             path="/multi-class-students"
//             element={<MultiClassStudents />}
//           />
//           <Route path="/bulk-delete" element={<BulkDelete />} />
//           <Route path="/student-categories" element={<StudentCategories />} />
//           <Route path="/student-house" element={<StudentHouse />} />
//           <Route path="/disable-reason" element={<DisableReason />} />
//           {/* FEES */}
//           <Route path="/collect-fees" element={<CollectFees />} />
//           <Route
//             path="/offline-bank-payments"
//             element={<OfflineBankPayments />}
//           />
//           <Route path="/search-fees-payment" element={<SearchFeesPayment />} />
//           <Route path="/search-due-fees" element={<SearchDueFees />} />
//           <Route path="/fees-master" element={<FeesMaster />} />
//           <Route path="/fees-group" element={<FeesGroup />} />
//           <Route path="/fees-type" element={<FeesType />} />
//           <Route path="/fees-discount" element={<FeesDiscount />} />
//           <Route path="/fees-carry-forward" element={<FeesCarryForward />} />
//           <Route path="/fees-reminder" element={<FeesReminder />} />
//           {/* INCOME */}
//           <Route path="/add-income" element={<AddIncome />} />
//           <Route path="/search-income" element={<SearchIncome />} />
//           <Route path="/income-head" element={<IncomeHead />} />
//           {/* EXPENSE */}
//           <Route path="/add-expense" element={<AddExpense />} />
//           <Route path="/search-expense" element={<SearchExpense />} />
//           <Route path="/expense-head" element={<ExpenseHead />} />
//           {/* EXAMINATION */}
//           <Route path="/exam-group" element={<ExamGroup />} />
//           <Route path="/exam-schedule" element={<ExamSchedule />} />
//           <Route path="/exam-result" element={<ExamResult />} />
//           <Route path="/design-admit-card" element={<DesginAdmit />} />
//           <Route path="/print-admit-card" element={<PrintAdmitCard />} />
//           <Route path="/design-marksheet" element={<DesignMarksheet />} />
//           <Route path="/marks-grade" element={<MarksGrade />} />
//           <Route path="/marks-division" element={<MarksDivision />} />
//           <Route path="/print-marksheet" element={<PrintMarksheet />} />
//           {/* ATTENDANCE */}
//           <Route path="/student-attendance" element={<StudentAttendance />} />
//           <Route path="/approval-leave" element={<ApprovalLeave />} />
//           <Route path="/attendance-by-date" element={<AttendanceByDate />} />
//           {/* ONLINE EXAM */}
//           <Route path="/online-exam" element={<OnlineExam />} />
//           <Route path="/question-bank" element={<QuestionBank />} />
//           {/* ACADEMICS */}
//           <Route path="/class-timetable" element={<ClassTimeTable />} />
//           <Route path="/teachers-timetable" element={<TeachersTimetable />} />
//           <Route
//             path="/assign-class-teachers"
//             element={<AssignClassTeacher />}
//           />
//           <Route path="/promote-students" element={<PromoteStudents />} />
//           <Route path="/subject-group" element={<SubjectGroup />} />
//           <Route path="/subjects" element={<Subjects />} />
//           <Route path="/classes" element={<Class />} />
//           <Route path="/sections" element={<Sections />} />

//           {/* LESSON PLAN */}
//           <Route path="/copy-old-lesson" element={<CopyOldLesson />} />
//           <Route path="/manage-lesson-plan" element={<ManageLessonPlan />} />
//           <Route
//             path="/manage-syllabus-status"
//             element={<ManageSyllabusStatus />}
//           />
//           <Route path="/lesson" element={<Lesson />} />
//           <Route path="/topic" element={<Topic />} />

//           {/* COMMUNICATE */}
//           <Route path="/notice-board" element={<NoticeBoard />} />
//           <Route path="/send-email" element={<SendEmail />} />
//           <Route path="/send-sms" element={<SendSMS />} />
//           <Route path="/email-sms-log" element={<EmailSmsLog />} />
//           <Route
//             path="/schedule-email-sms-log"
//             element={<ScheduleEmailSMSLog />}
//           />
//           <Route
//             path="/login-credentials-send"
//             element={<LoginCredentialsSend />}
//           />
//           <Route path="/email-template" element={<EmailTemplate />} />
//           <Route path="/sms-template" element={<SmsTemplate />} />
//           {/* TRANSPORT */}
//           <Route
//             path="/transport-fees-master"
//             element={<TransportFeesMaster />}
//           />
//           <Route path="/pickup-point" element={<PickupPoint />} />
//           <Route path="/routes" element={<Rout />} />
//           <Route path="/vehicle" element={<Vehicle />} />
//           <Route path="/assign-vehicle" element={<AssignVehicle />} />
//           <Route
//             path="/student-transport-fees"
//             element={<StudentTransportFees />}
//           />
//           <Route path="/route-pickup" element={<RoutePickupPoint />} />
//           {/* INVENTORY */}
//           <Route path="/issue-item" element={<IssueItem />} />
//           <Route path="/add-item-stock" element={<AddItemStock />} />
//           <Route path="/add-item" element={<AddItem />} />
//           {/* DOWNLOAD CENTER */}
//           <Route path="/content-type" element={<ContentType />} />
//           <Route path="/upload-content" element={<UploadContent />} />
//           <Route path="/share-content-list" element={<ShareContentList />} />
//           <Route path="/video-tutorial" element={<VideoTutorial />} />
//           {/* HOMEWORK */}
//           <Route path="/add-homework" element={<AddHomework />} />
//           <Route path="/daily-assignment" element={<DailyAssignment />} />
//           {/* HOSTEL */}
//           <Route path="/hostel-rooms" element={<HostelRooms />} />
//           <Route path="/room-type" element={<RoomType />} />
//           <Route path="/hostel" element={<Hostel />} />
//           {/* LIBRARY */}
//           <Route path="/book-list" element={<BookList />} />
//           <Route path="/issue-return" element={<IssueReturn />} />
//           <Route path="/add-student" element={<AddStudent />} />
//           <Route path="/add-staff-member" element={<AddStaffMember />} />
//           {/* CERTIFICATE */}
//           <Route path="/student-certificate" element={<StudentCertificate />} />
//           <Route
//             path="/generate-certificate"
//             element={<GenerateCertificate />}
//           />
//           <Route path="/student-id-card" element={<StudentIDCard />} />
//           <Route path="/generate-id-card" element={<GenerateIdCard />} />
//           <Route path="/staff-id-card" element={<StaffIdCard />} />
//           {/* ALUMNI */}
//           <Route path="/manage-alumni" element={<ManageAlumni />} />
//           <Route path="/alumni-events" element={<Events />} />
//           {/* HUMAN RESOURCE */}
//           <Route path="/staff-directory" element={<StaffDirectory />} />
//           <Route path="/staff-attendance" element={<StaffAttendance />} />
//           <Route path="/payroll" element={<Payroll />} />
//           <Route
//             path="/approve-leave-request"
//             element={<ApproveLeaveRequest />}
//           />
//           <Route path="/apply-leave" element={<ApplyLeave />} />
//           <Route path="/leave-type" element={<LeaveType />} />
//           <Route path="/teachers-rating" element={<TeachersRating />} />
//           <Route path="/department" element={<Department />} />
//           <Route path="/designation" element={<Designation />} />
//           <Route path="/disabled-staff" element={<DisabledStaff />} />
//           {/* SYSTEM SETTINGS */}
//           <Route path="/general-setting" element={<GeneralSetting />} />
//           <Route path="/session-setting" element={<SessionSetting />} />
//           <Route
//             path="/notification-setting"
//             element={<NotificationSetting />}
//           />
//           <Route path="/sms-setting" element={<SmsSetting />} />
//           <Route path="/email-setting" element={<EmailSetting />} />
//           <Route path="/payment-methods" element={<PaymentMethods />} />
//           <Route path="/print-header-footer" element={<PrintHeaderFooter />} />
//           <Route path="/frontcms-setting" element={<FrontcmsSetting />} />
//           <Route path="/backup-restore" element={<BackupRestore />} />
//           <Route path="/languages" element={<Languages />} />
//           <Route path="/currency" element={<Currency />} />
//           <Route path="/users" element={<Users />} />
//           <Route path="/modules" element={<Modules />} />
//           <Route path="/custom-fields" element={<CustomFields />} />
//           <Route path="/captcha-setting" element={<CaptchaSetting />} />
//           <Route path="/system-fields" element={<SystemFields />} />
//           <Route
//             path="/student-profile-update"
//             element={<StudentProfileUpdate />}
//           />
//           <Route path="/file-types" element={<FileTypes />} />
//           <Route path="/sidebar-menu" element={<SideBarMenu />} />
//           <Route path="/system-update" element={<SystemUpdate />} />
//           {/* FRONTCMS */}
//           <Route path="/frontcms-event" element={<Event />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/media-manager" element={<MediaManager />} />
//           <Route path="/pages" element={<Pages />} />
//           <Route path="/menus" element={<Menus />} />
//           <Route path="/banner-images" element={<Banner />} />
//         </Routes>
//       </DashboardLayout>
//     </BrowserRouter>
//   );
// }

// export default App;