import React from "react";
import ReportElement from "../Components/ReportElement";
import AdminPanelBoilerplate from "./AdminPanelBoilerplate";
// make a component called Report
const StaffReport = () => {

  const reports = [
    {
      t: "Staff Attendance Report",
      d: ["Select Role *", "Select Month *", "Select Year *"]
    },
    {
      t: "Staff Payroll Report",
      d: ["Select Role *", "Select Month *", "Select Year *"]
    }
  ]

  return (
    <>

      <AdminPanelBoilerplate page="Admin Panel" route="Report">
        <ReportElement reports={ reports } />
      </AdminPanelBoilerplate>


    </>
  );
};

export default StaffReport;
