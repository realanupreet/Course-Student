import React from "react";
import FooterContent from "./FooterContent";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="bg-gray-400/50 shadow-inner w-full h-full font-poppins flex flex-col justify-center space-y-12 ">
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="flex items-center ">
          <svg
            width="68"
            height="43"
            viewBox="0 0 68 43"
            className="h-11 hover:cursor-pointer "
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.636695 11.3304L34.7232 0L67.1388 11.3304C68.1223 12.4779 68.0514 13.1205 67.1388 14.268L33.5536 26.8573L0.636695 14.268C-0.100874 13.0838 -0.316754 12.4384 0.636695 11.3304Z"
              fill="#215D4F"
            />
            <path
              d="M7.77408 16.9617L9.89439 17.6685L9.64495 34.655C10.6421 35.7845 11.0022 36.4465 11.3079 37.6738V41.6988C8.83424 42.7589 7.77408 42.4055 5.65376 41.6988V37.6737C6.04043 36.549 6.22252 35.924 7.31676 34.655L7.77408 16.9617Z"
              fill="#CB8461"
            />
            <path
              d="M16.2556 22.6169L33.5715 29.6847L51.5942 22.9703C54.0149 25.6228 54.8935 29.218 54.1738 33.4177C43.2477 34.5229 40.2381 37.249 33.9572 42.4066C25.6281 35.5245 21.2144 33.9185 13.6097 33.4177C13.0209 29.9548 14.0312 25.7851 16.2556 22.6169Z"
              fill="#CB8461"
            />
            <path
              d="M7.77492 16.962L28.4529 9.5144L29.9252 10.6615L9.89522 17.6688L7.77492 16.962Z"
              fill="#CB8461"
            />
            <ellipse
              cx="29.6841"
              cy="9.54092"
              rx="2.12032"
              ry="1.76693"
              fill="#CB8461"
            />
          </svg>
          <span className="text-teal-800 font-medium">Edfling Courses</span>
        </div>
        <p className="text-xs ml-20 -mt-3 opacity-50 success">
          Success is here!!!
        </p>
      </div>
      <div className="flex sm:flex-row sm:flex-wrap flex-col gap-y-5 sm:gap-x-12 px-3  text-center  justify-center items-center">
        <FooterContent
          content={ [
            "About",
            "Overview",
            "Courses",
            "Tutorials",
            "Pricing Plans",
            "Releases",
          ] }
        />
        <div className="w-[3px] h-[70px] sm:h-[100px] h-3/5 bg-gray-400/75 rounded-xl "></div>
        <FooterContent
          content={ [
            "Company",
            "About us",
            "Careers",
            "Press",
            "Media kits",
            "Contact Us",
          ] }
        />
        <div className="w-[3px] h-[80px] sm:h-[100px] h-3/5 bg-gray-400/75 rounded-xl "></div>
        <FooterContent
          content={ [
            "Resources",
            "Blogs",
            "Newsletter",
            "Events",
            "Help-Center",
            "Tutorials",
          ] }
        />
        <div className="w-[3px] h-[80px] sm:h-[100px] h-3/5 bg-gray-400/75 rounded-xl "></div>
        <FooterContent
          content={ [
            "Social",
            "Twitter",
            "LinkedIn",
            "Facebook",
            "Discord",
            "Instagram",
          ] }
        />
        <div className="w-[3px] h-[80px] sm:h-[100px] h-3/5 bg-gray-400/75 rounded-xl "></div>
        <FooterContent
          content={ [
            "Legal",
            "Terms",
            "Privacy",
            "Cookies",
            "Liceses",
            "Contact",
          ] }
        />
      </div>
      <Socials />
    </div>
  );
};

export default Footer;
