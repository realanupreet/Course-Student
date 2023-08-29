// import React from 'react'
// import ReportElement from "../Components/ReportElement";
// import SideBarCourse from "../Components/SidebarCourses";
// import NavSubCustom from "../Components/NavSubCustom";
// import SidebarCollapsable from '../Components/SideBarCollapsable';
// const AdminPanelBoilerplate = ({ children, page, route, sidebar = true, subtitle }) => {
//     return (
//         <>
//             <main className=" md:my-4 flex h-auto justify-center font-['Poppins'] overflow-hidden	">

//                 <div className="hidden lg:block w-auto h-auto  md:block">
//                     <SidebarCollapsable />
//                     <SideBarCourse title="Admin Panel" guy="yes" sidebar={ sidebar } />
//                 </div>

//                 <div className="w-full mx-2 h-auto box-border md:block">
//                     <NavSubCustom subtitle={ subtitle } page={ page } route={ route } />
//                     { children }

//                 </div>
//             </main>
//         </>
//     )
// }

// export default AdminPanelBoilerplate

import React from 'react'
import ReportElement from "../Components/ReportElement";
import SideBarCourse from "../Components/SidebarCourses";
import NavSubCustom from "../Components/NavSubCustom";
import SidebarCollapsable from '../Components/SideBarCollapsable';


// import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "../Components/Sidebar-Teacher";
import Nav from "../Components/Nav-Teacher";
// import Chats from "../components/TeacherSide/Chats";
// import Enrollment from "../components/TeacherSide/Enrollment";
// import GroupChat from "../components/TeacherSide/GroupChat";
// import CreateAssignment from "../components/TeacherSide/CreateAssignment";
// import Assignment from "../components/TeacherSide/Assignment";
// import Quiz from "../components/TeacherSide/Quiz";
// import CreateQuiz from "../components/TeacherSide/CreateQuiz";
// import Analytics from "../components/TeacherSide/Analytics";
// import UpdateCoursePage from "../components/TeacherSide/UpdateCoursePage";
// import LogOut from "../components/TeacherSide/Logout";
// import { connect } from "react-redux";

const AdminPanelBoilerplate = ({ children, isSidebarOpen }) => {
    return (
        <div className="flex  ">
            <Sidebar isSidebarOpen={ isSidebarOpen } />
            <div className="flex flex-col md:ml-64 border w-full space-y-5 h-[100vh] overflow-y-scroll no-scrollbar">
                <div className="">
                    <Nav />
                </div>
                <div className="p-4">
                    { children }
                </div>
            </div>
        </div>
    );
};

export default AdminPanelBoilerplate