import React, { useEffect } from "react";
import ReportElement from "../Components/ReportElement";
import AdminPanelBoilerplate from "./AdminPanelBoilerplate";

// make a component called Report
const StudentReport = () => {

  const reports = [
    {
      t: "Student Attendance Report",
      d: ["Select Class *", "Select Section *", "July", "2023"]
    },
    {
      t: "Student Transport Report",
      d: ["Class *", "Section *", "Route *", "Vehicle *"]
    },
    {
      t: "Student Homework Report",
      d: ["Class *", "Section *", "Subject *"]
    },
    {
      t: "Student Guardians Report",
      d: ["Class *", "Section *"]
    },
    {
      t: "Class Routine Report",
      d: ["Class *", "Section *"]
    },
    {
      t: "Previous Record Report",
      d: ["Academic Year *", "Class *"]
    }
  ]

  return (
    <>

      <AdminPanelBoilerplate page="Admin Panel" route="Report"  >
        <ReportElement reports={ reports } />
      </AdminPanelBoilerplate>


    </>
  );
};

export default StudentReport;
