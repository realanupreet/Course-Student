import React from 'react'
import AdminPanelBoilerplate from './AdminPanelBoilerplate'
import downa from "../images/report/downa.svg"
const SettingsAcademicYear = () => {
    const columns = ["Year", "Title", "Starting Date", "Ending Date", "Action"];
    const data = [
        {},
        {},
        {},
        {},
        {},
        {}
    ];
    return (
        <>
            <AdminPanelBoilerplate page="Settings" route="General Settings">
                <div className="flex flex-col items-center">
                    <div className="py-4 border-1 border-black rounded-3xl w-full md:w-7/12 flex items-center flex-col my-5">
                        <h1 className='h4 text-center font-bold mb-3'>Academic Year List</h1>
                        <div className="flex w-full justify-around">
                        { columns.map((item, index) => (
                            <>
                                <div className="inline">
                                    <span className="px-2">{ item }</span>
                                    <img src={ downa } className=' inline' />
                                </div>

                            </>

                        )) }</div>
                        { data.map((item, index) => (
                            <div className="h-12 border-b border-black w-full text-center"></div>
                        )) }
                    </div>
                    <div className="p-4 border-1 border-black rounded-3xl w-full md:w-7/12 flex items-center flex-col">
                        <h1 className='h4 text-center font-bold'>Add Academic Year</h1>
                        <div className="grid grid-cols-2 gap-12 p-4  ">
                            <div className="col-span-1">
                                <label htmlFor="textbox1" className="block font-medium text-gray-700 ">Year *</label>
                                <input id="textbox1" type="text" className="mt-1 p-2 border rounded-full w-full border-1 border-black " />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="textbox2" className="block font-medium text-gray-700">Year Title *</label>
                                <input id="textbox2" type="text" className="mt-1 p-2 border rounded-full w-full border-1 border-black " />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="textbox2" className="block font-medium text-gray-700">Starting Date *</label>
                                <input id="textbox2" type="text" className="mt-1 p-2 border rounded-full w-full border-1 border-black" />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="textbox2" className="block font-medium text-gray-700">Ending Date *</label>
                                <input id="textbox2" type="text" className="mt-1 p-2  rounded-full w-full border-1 border-black " />
                            </div>
                            {/* Add more grid items here */ }
                        </div>
                        <button className='bg-slate-green rounded-lg p-3 border-black border-2 w-2/12  '>Save</button>
                    </div>
                </div>
            </AdminPanelBoilerplate>
        </>
    )
}

export default SettingsAcademicYear