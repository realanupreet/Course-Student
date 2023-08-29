import React from "react";

const FooterContent = ({content}) => {
  return <div>
     <ul className="space-y-3 font-poppins text-gray-700/75">
              <li className=" text-teal-800 font-semibold text-2xl">{content[0]}</li>
              <li className="hover:cursor-pointer">{content[1]}</li>
              <li className="hover:cursor-pointer">{content[2]}</li>
              <li className="hover:cursor-pointer">{content[3]}</li>
              <li className="hover:cursor-pointer">{content[4]}</li>
              <li className="hover:cursor-pointer">{content[5]}</li>
            </ul>
  </div>;
};

export default FooterContent;
