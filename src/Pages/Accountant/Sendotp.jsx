import React from 'react'
import SendotpIMG from "../../images/accountant/Sendotp.svg"
// import { CgGoogle } from 'react-icons/cg'
import { FcGoogle } from 'react-icons/fc'
import { IoLogoFacebook } from 'react-icons/io'
import { FaApple } from 'react-icons/fa'
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


const Sendotp = () => {
    const style = "flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2 bg-white border border-slate-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50 w-72 my-2 mx-auto"
    return (
        <>
            <Layout img={ SendotpIMG }>

                {/* <div>Signup</div> */ }

                <img src={ Loginaccountant } className='mx-auto my-3'></img>

                <input type="text" className={ style } placeholder='Enter your email address' />


                <p className='text-slate-green text-sm '>Try using other options</p>

                <button className="my-6 flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2  border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50 w-72 bg-slate-green mx-auto">
                    <span className="text-white font-medium">Send OTP</span>
                </button>
                <p className='text-center my-2'>--------------- or ---------------</p>

                <button className={ style }>
                    <FcGoogle className='text-xl' />
                    <span className="text-slate-green font-medium">Continue with Google</span>
                </button>
                <button className={ style }>
                    <IoLogoFacebook className='text-xl' />
                    <span className="text-slate-green font-medium">Continue with Facebook</span>
                </button>
                <button className={ style }>
                    <FaApple className='text-xl' />
                    <span className="text-slate-green font-medium">Continue with Apple</span>
                </button>
            </Layout>
        </>
    )
}

export default Sendotp