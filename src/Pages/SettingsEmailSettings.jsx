import React from 'react'
import AdminPanelBoilerplate from './AdminPanelBoilerplate'
import Input from '../Components/Input'
import line from '../images/report/line.svg'
import circle from '../images/report/circle.svg'

const SettingsEmailSettings = () => {
  const inputs = [
    "From Name *",
    "From mail *",
    "Mail Driver *",
    "Mail Host *",
    "Mail Port *",
    "Mail Username *",
    "Mail Password *",
    "Mail Encryption *"
  ]
  return (
    <AdminPanelBoilerplate page="Settings" route="General Settings" sidebar={ false }>
      <div className="p-4 border-1 border-black rounded-2xl bg-slate-green  my-3 mx-5 
      
      flex justify-around text-white text-sm md:text-xl">
        <div >
          <input type="radio" name="sc" id="sc" value="Service Charge" className='mx-2 w-4 h-4' />
          <label for="sc" className='font-medium' >Service Charge</label>
        </div>
        <div >
          <input type="radio" name="sc" id="sc" value="Service Charge" className='mx-2 w-4 h-4 ' />
          <label for="sc" className='font-medium' >Service Charge</label>
        </div>
      </div>
      <div className="p-1 md:p-5 pt-1  mb-3 mx-2">
        <div className="flex justify-center my-3">
          <img src={ line } className="inline w-full" />
          <img src={ circle } className="inline px-2" />
          <img src={ line } className="inline w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4  ">
          <Input inputs={ inputs } />
          {/* Add more grid items here */ }
        </div>
        <div className="flex justify-center my-4"><button className='bg-slate-green rounded-full  px-4 py-1 text-white  '>Update</button></div>
      </div>
    </AdminPanelBoilerplate>
  )
}

export default SettingsEmailSettings