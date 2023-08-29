import React from 'react'
import AdminPanelBoilerplate from '../AdminPanelBoilerplate'
import PieChart from '../../Components/PieChart'
import { useAtom } from 'jotai';
import { series as sG } from '../../App';
import ColumnChart from '../../Components/ColumnChart';

const Box = ({ t, n }) => {
    return (
        <><div className='p-4 bg-slate-green text-white shadow-md rounded-2xl m-3 text-xl  lg:text-2xl '>
            <h2 className='font-semibold' >{ t }</h2>
            <h3 className='opacity-50'>Total no. of { t }</h3>

            <h1 className='text-3xl '>{ n }</h1>
        </div>
        </>
    )
}



const Dashboard = () => {
    const [series, setSeries] = useAtom(sG)

    const data = {
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    }

    return (
        <>
            <AdminPanelBoilerplate>



                <div className="flex flex-col md:flex-row justify-around">

                    <Box t="Students" n={ 242 } />
                    <Box t="Teachers" n={ 104 } />
                    <Box t="Staff" n={ 20 } />
                </div>
                <div className="flex justify-center">
                    <PieChart />
                </div>
                <div className='flex justify-around mt-12' >
                    <h1 className='text-sm md:text-xl font-bold '>Performance Stat</h1>
                    <div className=" flex ">
                        <h2 className='mx-3  p-1' >Weeks</h2>
                        <h2 className='mx-3  p-1 rounded-xl bg-slate-green text-white'>Months</h2>
                        <h2 className='mx-3  p-1'>Years</h2>
                    </div>
                </div>
                <div className="flex justify-center">
                    <ColumnChart />
                </div>


            </AdminPanelBoilerplate>
        </>
    )
}

export default Dashboard