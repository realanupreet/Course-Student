import React from 'react'
import ReportElement from "../Components/ReportElement";
import SideBarCourse from "../Components/SidebarCourses";
import NavSubCustom from "../Components/NavSubCustom";
const AdminPanelBoilerplate = ({ children, page, route, sidebar=true, subtitle }) => {
    return (
        <>
            <main className="md:my-4 flex h-auto justify-center font-['Poppins']">
                <div className="w-auto h-auto  md:block">
                    <SideBarCourse title="Admin Panel" guy="yes" sidebar={sidebar} />
                </div>
                <div className="md:w-9/12 mx-2 h-auto box-border md:block">
                    <NavSubCustom subtitle={subtitle} page={page} route={route} />
                    { children }

                </div>
            </main>
        </>
    )
}

export default AdminPanelBoilerplate