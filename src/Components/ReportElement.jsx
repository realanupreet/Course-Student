import React from "react";
import ReportInputElement from "./ReportInputElement";

const ReportElement = (
  { reports }
) => {
  return (
    <>{ reports.map((report, index) => (
      <div className="m-4">
        <div className="
          bg-slate-green 
          text-white  
          flex
          items-center
          rounded-md
          p-4"
        >
          <h2>{ report.t }</h2>
        </div>


        <h3 className="p-3 font-medium">Select Criteria</h3>

        <div className="border-slate-green border-3 rounded-xl p-4 ">
          <div className="flex flex-col xl:flex-row 2xl:flex-row mx-2 mt-2 mb-6 justify-around ">
            <ReportInputElement inputs={ report.d } />
            {/* <h1>Hello</h1> */ }

          </div>

          <div className="flex m-2 justify-end w-full">
            <button className="bg-slate-green rounded-lg py-2 px-3 border-black border-2">
              Search
            </button>
          </div>
        </div>
      </div>)) }
    </>
  );
};

export default ReportElement;
