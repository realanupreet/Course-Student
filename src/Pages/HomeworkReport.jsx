
import React from 'react'
import ReportElement from "../Components/ReportElement";
import AdminPanelBoilerplate from './AdminPanelBoilerplate';

const HomeworkReport = () => {

    const reports = [
        {
            t: "Staff Homework Report",
            d: ["Class*", "section *", "Roll No *"]
        }
    ]
    const data = [
        { id: 1, s: "Java", ad: "24/01/2023", sa: "24/02/2023", tc: "8/10", hs: "Completed" },
        { id: 2, s: "Python", ad: "24/01/2023", sa: "24/02/2023", tc: "8/10", hs: "Pending" },
        { id: 3, s: "C++", ad: "24/01/2023", sa: "24/02/2023", tc: "8/10", hs: "Completed" },
        { id: 4, s: "OOPS", ad: "24/01/2023", sa: "24/02/2023", tc: "8/10", hs: "Pending" },
        { id: 5, s: "Python", ad: "24/01/2023", sa: "24/02/2023", tc: "8/10", hs: "Completed" },
        { id: 6, s: "Web Design", ad: "24/01/2023", sa: "24/02/2023", tc: "8/10", hs: "Completed" },
        { id: 7, s: "Angular", ad: "24/01/2023", sa: "24/02/2023", tc: "8/10", hs: "Pending" },
        { id: 8, s: "React", ad: "24/01/2023", sa: "24/02/2023", tc: "8/10", hs: "Completed" },
        { id: 9, s: "OOPS", ad: "24/01/2023", sa: "24/02/2023", tc: "8/10", hs: "Completed" },
    ]
    return (
        <>
            <AdminPanelBoilerplate page="Admin Panel" route="Report">
                <ReportElement reports={ reports } />
                <h2 className="h4 px-6 text-slate-green">Student Homework Report</h2>
                <div className="flex justify-center text-slate-green mt-8 ">
                    <table className='w-11/12  '>

                        <thead className='bg-slate-green text-white border border-1 rounded-3xl'>
                            <tr>
                                <th className='p-4'>Subject</th>
                                <th>Asssigned Date</th>
                                <th>Submission Date</th>
                                <th>Tasks Completed</th>
                                <th>Homework Status </th>
                            </tr>
                        </thead>
                        <tbody>
                            { data.map(item => (
                                <tr key={ item.id } className='border border-1  '>
                                    <td className='p-4'>{ item.s }</td>
                                    <td>{ item.ad }</td>
                                    <td>{ item.sa }</td>
                                    <td>
                                        <div className="flex items-center ">
                                            <div className="relative mr-24  ">
                                                <div className="h-2 inline-block rounded-full absolute top-0 left-0 w-24 h-half bg-gray-300"></div>
                                                <div className="h-2 inline-block rounded-full absolute top-1/2 left-0 w-20 h-half bg-slate-green"></div>
                                            </div>
                                            <div className="">{ item.tc }</div>
                                        </div>
                                    </td>
                                    <td>{ item.hs }</td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>

            </AdminPanelBoilerplate>
        </>
    )
}

export default HomeworkReport