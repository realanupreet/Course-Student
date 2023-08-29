import React from "react";
import "./App.css";
import Page57 from "./Pages/Page57";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Page19 from "./Pages/Page19";
import Page58 from "./Pages/Page58";
import Page59 from "./Pages/Page59";
import Page60 from "./Pages/Page60";
import Page61 from "./Pages/Page61";
import Page20 from "./Pages/Page20";
import Imac211 from './Pages/Imac211';
import Page68 from "./Pages/Page68";
import Page69 from "./Pages/Page69";
import Page26_27 from "./Pages/Page26_27";
import Page1 from "./Pages/Page1";
import Login from "./Pages/Login/index";
import Signup from "./Pages/Signup/index";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Page18 from "./Pages/Page18";
import Page4 from "./Pages/Page4";
import StudentReport from "./Pages/StudentReport";
import StaffReport from "./Pages/StaffReport";
import ExamReport from "./Pages/ExamReport";
import SettingsEmailSettings from "./Pages/SettingsEmailSettings";
import SettingsAcademicYear from "./Pages/SettingsAcademicYear";
import SettingsPaymentSection from "./Pages/SettingsPaymentSection";
import HomeworkReport from "./Pages/HomeworkReport";
import Header from "./Components/Header";
import { useState } from "react";

import { atom, useAtom } from 'jotai'
import Dashboard from "./Pages/Accountant/Dashboard";
import Fee from "./Pages/Accountant/Fee";
import AccountantSignup from "./Pages/Accountant/Signup";
import AccountantLogin from "./Pages/Accountant/Login";
import AccountantSignupsuccess from "./Pages/Accountant/SignupSuccessful";
import AccountantSendotp from "./Pages/Accountant/Sendotp";
import AccountantUpdatePass from "./Pages/Accountant/UpdatePassword";
import AccountantVerification from "./Pages/Accountant/Verification";
export const isSidebarOpenGlobal= atom(false)
export const series= atom([85,15])

function App() {


  return (
    <>
      <BrowserRouter>
      {/* <Navbar   />
       */}
<Header />
        <Routes>
          <Route path="/page57" element={<Page57 />} />
          <Route path="/page58" element={<Page58 />} />
          <Route path="/page59" element={<Page59 />} />
          <Route path="/page60" element={<Page60 />} />
          <Route path="/page61" element={<Page61 />} />
          <Route path="/page19" element={<Page19 />} />
          <Route path="/page20" element={<Page20 />} />
          <Route path="/Page18" element={<Page18 />} />
          <Route path='/imac211' element={<Imac211 />} />
          <Route path="/page68" element={<Page68 />} />
          <Route path="/page69" element={<Page69 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page26" element={<Page26_27 type={1}/>} />
          <Route path="/page27" element={<Page26_27 type={2}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/" element={<Page4/>} /> */}
          <Route path="/student-report" element={<StudentReport    />} />
          <Route path="/" element={<StudentReport/>} />
          <Route path="/exam-report" element={<ExamReport/>} />
          <Route path="/staff-report" element={<StaffReport/>} />
          <Route path="/settings-email-settings" element={<SettingsEmailSettings/>} />
          <Route path="/settings-academic-year" element={<SettingsAcademicYear/>} />
          <Route path="/settings-payment-section" element={ <SettingsPaymentSection /> } />
          <Route path="/homework-report" element={<HomeworkReport/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/fee" element={<Fee/>} />
          <Route path="/accountant/signup" element={<AccountantSignup/>} />
          <Route path="/accountant/login" element={<AccountantLogin/>} />
          <Route path="/accountant/success" element={<AccountantSignupsuccess/>} />
          <Route path="/accountant/sendotp" element={<AccountantSendotp/>} />
          <Route path="/accountant/updatepass" element={<AccountantUpdatePass/>} />
          <Route path="/accountant/verification" element={<AccountantVerification/>} />
          <Route path="*" element={<h1>404 Page</h1>} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
