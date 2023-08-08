import React from 'react'

const ReportInputElement = ({inputs}) => {
  return (
    <>
    {inputs.map((input,index)=>(
        <input
              type="text"
              placeholder={input}
              className="border-1 border-black p-3 rounded-xl m-2"
            />
    ))}
    </>
  )
}

export default ReportInputElement