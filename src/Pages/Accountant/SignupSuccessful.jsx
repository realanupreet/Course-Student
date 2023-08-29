import React from 'react'
import SignupImg from "../../images/accountant/Signup.svg"
const Layout = ({ children, img }) => {
    return (
        <>
            <div className="bg-slate-green p-6 flex flex-col items-center">
                <div className="top-stuff text-xl font-semibold p-2 text-white">
                    Register Edfling as a
                </div>
                <button className='p-2 rounded-lg bg-white text-slate-green font-bold'>
                    Accountant
                </button>
                <div className="bg-white rounded-3xl px-6 flex flex-col items-center justify-around w-full mt-3 py-12">
                    <div className="content">
                        <h1 className='my-4 text-4xl font-extrabold'>Registration as Accountant was
                            successful</h1>

                        { children }

                    </div>
                    <div className="image-container">
                        <img src={ img } alt="" />
                    </div>


                </div>
            </div>
        </>
    )
}


const SignupSuccessful = () => {
    const style = "flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2 bg-white border border-slate-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50 w-72 my-2 mx-auto"
    return (
        <>
            <Layout img={ SignupImg }>

                {/* <div>Signup</div> */ }


                <button className="flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2  border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50 w-72 bg-slate-green mx-auto">
                    <span className="text-white font-medium">Start Exploring</span>
                </button>


            </Layout>
        </>
    )
}

export default SignupSuccessful