import React from 'react'
import UpdatePasswordImg from "../../images/accountant/Updatepassword.svg"
// import { CgGoogle } from 'react-icons/cg'

import Loginaccountant from "../../images/accountant/Loginaccountant.svg"
const Layout = ({ children, img }) => {
    return (
        <>
            <div className="bg-slate-green p-6 flex flex-col items-center">
                <div className="top-stuff text-xl font-semibold p-2 text-white">
                    Login Edfling as a
                </div>
                <button className='p-2 rounded-lg bg-white text-slate-green font-bold'>
                    Accountant
                </button>
                <div className="bg-white rounded-3xl px-6 flex justify-around w-full mt-3 py-12">
                    <div className="image-container">
                        <img src={ img } alt="" />
                    </div>
                    <div className="content">
                        { children }

                    </div>

                </div>
            </div>
        </>
    )
}


const UpdatePassword = () => {
    const style = "flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2 bg-white border border-slate-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50 w-72 my-3 mx-auto "
    return (
        <>
            <Layout img={ UpdatePasswordImg }>

                {/* <div>UpdatePassword</div> */ }

                <img src={ Loginaccountant } className='mx-auto my-3'></img>

                <div className="w-72 border border-1 border-black my-6"></div>

                <p className='text-slate-green mx-auto text-2xl text-center'>Reset Password</p>

                <input type="text" className={ style } placeholder='Enter your email' />
                <input type="text" className={ style } placeholder='New Password' />
                <input type="text" className={ style } placeholder='Confirm Password' />



                <button className="flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2  border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50 w-72 bg-slate-green mx-auto my-3">
                    <span className="text-white font-medium">UpdatePassword</span>
                </button>

            </Layout>
        </>
    )
}

export default UpdatePassword