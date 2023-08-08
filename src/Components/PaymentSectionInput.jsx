import React from 'react'

const PaymentSectionInput = ({ inputs }) => {
    return (
        <>
            { inputs.map((input, index) => (
                <>
                    <h2 className='mx-3 my-2 font-semibold'>{ input }</h2>
                    <input
                        type="text"
                        className="border-1 border-black p-2 w-full rounded-xl mx-2  my-3"
                    /></>
            )) }</>
    )
}

export default PaymentSectionInput