import React from "react";
import ReportElement from "../Components/ReportElement";
import AdminPanelBoilerplate from "./AdminPanelBoilerplate";
// make a component called Report
const ExamReport = () => {

    const reports = [
        {
            t: "Exam Routine Report",
            d: ["Exam*", "Class *", "Section *"]
        },
        {
            t: "Merit List Report",
            d: ["Exam*", "Class *", "Section *"]
        },
        {
            t: "Online Exam Report",
            d: ["Class *", "Section *", "Subject *"]
        },
        {
            t: "Mark Sheet Report",
            d: ["Class *", "Section *", "Exam*", "Student*"]
        },
        {
            t: "Tabulation Sheet Report",
            d: ["Class *", "Section *", "Exam*", "Student*"]
        },
        {
            t: "Progress Card Report",
            d: ["Exam*", "Class *", "Student *"]
        },
        {
            t: "Progress Card Report 100 Percent ",
            d: ["Exam*", "Class *", "Student *"]
        },
        {
            t: "Previous Record Report",
            d: ["Admission Number *", "Select Record *"]
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

export default ExamReport;
