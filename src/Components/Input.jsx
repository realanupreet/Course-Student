import React from 'react'

const Input = ({inputs}) => {
    return (
        <>
            { 
            inputs.map((input, index) => (
                <>
                    <div className="col-span-1" key={index}>
                        <label htmlFor="textbox1" className="block font-medium text-gray-700 ">{input}</label>
                        <input id="textbox1" type="text" className="mt-1 p-2 border rounded-full w-full border-1 border-black " />
                    </div>
                </>
            ))
            }
        </>
    )
}

export default Input