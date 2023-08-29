import React, { useState } from 'react';
import AdminPanelBoilerplate from '../AdminPanelBoilerplate'
import PieChart from "../../Components/PieChart"
import { useAtom } from 'jotai'
import { series as sG } from '../../App'
const Fee = () => {
    const [series, setSeries] = useAtom(sG)
    // if (series == [85, 15]) {
    //     setSeries([100, 0])
    // }

    const [selectedOption, setSelectedOption] = useState(''); // Default selected option is an empty string

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        switch (event.target.value) {
            case 'paid':
                setSeries([75, 25]);
                break;
            case 'unpaid':
                setSeries([20, 80]);
                break;
            case 'installment':
                setSeries([5, 95]);
                break;
            default:
                setSeries([100, 0]); // Set default [100, 0] when no option is selected
                break;
        }
    };


    const [data, setData] = useState([
        { s: "Waldorf", cl: "Class 8", co: "Java", d: "20 Apr 2023", f: "Paid" },
        { s: "Dorota", cl: "Class 8", co: "Java", d: "20 Apr 2023", f: "Paid" },
        { s: "Daniel", cl: "Class 8", co: "Java", d: "20 Apr 2023", f: "Paid" },
        { s: "Chuck", cl: "Class 8", co: "Java", d: "20 Apr 2023", f: "Paid" },
        { s: "Blair", cl: "Class 8", co: "Java", d: "20 Apr 2023", f: "Paid" },
        { s: "Serena", cl: "Class 8", co: "Java", d: "20 Apr 2023", f: "Paid" },
        { s: "Jenny", cl: "Class 8", co: "Java", d: "20 Apr 2023", f: "Paid" },

    ])


    return (
        <>
            <AdminPanelBoilerplate >
                <h1 className='text-3xl sm:text-5xl font-bold text-slate-green'>Fee payment Information</h1>
                <div className="flex flex-col sm:flex-row justify-between">

                    <div className="">
                        <select className='p-3 bg-slate-green text-white rounded-full mt-4'
                            value={ selectedOption }
                            onChange={ handleOptionChange }>

                            <option value="">Select an option</option>
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                            <option value="installment">Fee through Installments</option>

                        </select>
                    </div>
                    <PieChart />
                </div>

                <div className="flex justify-center text-slate-green mt-8 ">
                    <table className='w-11/12  '>

                        <thead className='bg-slate-green text-white border border-1 rounded-3xl'>
                            <tr>
                                <th className='p-4'>Student</th>
                                <th>Class</th>
                                <th>Course</th>
                                <th>Date</th>
                                <th>{ selectedOption === "installment" ? "Installments Left" : "Fee" } </th>
                            </tr>
                        </thead>
                        <tbody>
                            { data.map(item => (
                                <tr key={ item.s } className='border border-1  '>
                                    <td className='p-4'>{ item.s }</td>
                                    <td>{ item.cl }</td>
                                    <td>{ item.co }</td>
                                    <td>
                                        <div className="flex items-center ">
                                            {/* <div className="relative mr-24  ">
                                                <div className="h-2 inline-block rounded-full absolute top-0 left-0 w-24 h-half bg-gray-300"></div>
                                                <div className="h-2 inline-block rounded-full absolute top-1/2 left-0 w-20 h-half bg-slate-green"></div>
                                            </div> */}
                                            <div className="">{ item.d }</div>
                                        </div>
                                    </td>
                                    <td>{ item.f }</td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </AdminPanelBoilerplate>
        </>
    )
}

export default Fee