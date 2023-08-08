import React from 'react'
import AdminPanelBoilerplate from './AdminPanelBoilerplate'
import PaymentSectionInput from '../Components/PaymentSectionInput'
import line from '../images/report/line.svg'
import circle from '../images/report/circle.svg'


const SettingsPaymentSection = () => {
  const inputs = ["Gateway name",
    "Gateway Username",
    "Gateway Password",
    "Gateway Signature",
    "Gateway client id",
    "Gateway mode(sandbox or live)",
    "Gateway secret key"
  ]
  return (
    <AdminPanelBoilerplate subtitle="Payment Method Setting" page="Settings" route="General Settings" sidebar={ false }>
      <div className="p-5 border-1 border-black rounded-3xl my-3 mx-2">
        <h2 className='mx-3 my-2 font-semibold'>Select a payment gateway</h2>
        <select className='border-1 border-black p-2 w-full rounded-xl mx-2  my-3'>
          <option value="paypal">Paypal</option>
        </select>
        <div className="flex justify-center"><button className='bg-slate-green rounded-full  px-4 py-1 text-white  '>Update</button></div>
        <div className="flex justify-center my-3">
          <img src={line}  className="inline w-full" />
          <img src={circle} className="inline px-2" />
          <img src={line}  className="inline w-full" />
        </div>
        <PaymentSectionInput inputs={ inputs } />
        <input type="radio" name="sc" id="sc"  value="Service Charge" className='mx-2'/>
        <label for="sc" className='font-semibold' >Service Charge</label>
        <div className="flex justify-center"><button className='bg-slate-green rounded-full  px-4 py-1 text-white  '>Update</button></div>
      </div>
    </AdminPanelBoilerplate>
  )
}

export default SettingsPaymentSection