import React from 'react'
import ReportElement from "../Components/ReportElement";
import SideBarCourse from "../Components/SidebarCourses";
import NavSubCustom from "../Components/NavSubCustom";
import SidebarCollapsable from '../Components/SideBarCollapsable';
const AdminPanelBoilerplate = ({ children, page, route, sidebar = true, subtitle }) => {

    return (
        <>
            <main className=" md:my-4 flex h-auto justify-center font-['Poppins'] overflow-hidden	">

                <div className="hidden lg:block w-auto h-auto  md:block">
                    <SidebarCollapsable />
                    <SideBarCourse title="Admin Panel" guy="yes" sidebar={ sidebar } />
                </div>

                <div className="w-full mx-2 h-auto box-border md:block">
                    <NavSubCustom subtitle={ subtitle } page={ page } route={ route } />
                    { children }

                </div>
            </main>
        </>
    )
}

export default AdminPanelBoilerplate