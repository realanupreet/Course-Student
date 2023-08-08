import React from "react";
import Ellipse from "../images/page57-61/Ellipse217.svg";
import ContactCard from "../images/page57-61/ContactCard.svg";
import Bookmarks from "../images/page68/Bookmarks.svg";
import LeaderBoard from "../images/page57-61/LeaderBoard.svg";
import Placed from "../images/page57-61/Placed.svg";
import Doubts from "../images/page57-61/Doubts.svg";
import Events from "../images/page57-61/Events.svg";
import Notes from "../images/page57-61/Notes.svg";
import Certificate from "../images/page57-61/Certificate.svg";
import SideBarBottom1 from "../images/page57-61/SideBarBottom1.png";
import SideBarBottom2 from "../images/page57-61/SideBarBottom2.png";
import "../CSS/SideBar.css";
import guyi from "../images/report/guy.svg";

const SideBarCourse = ({title,guy, sidebar}) => {
  return (
    <>
      <div
        className="w-full h-[740px] md:h-[1500px] relative flex flex-col  items-center md:items-stretch overflow-hidden"
        style={{ background: "#215D4F" }}
      >
        {/* sidebar heading */}
        <div className={`flex pt-5 ml-[40px] ${sidebar ? '' : 'opacity-0'}`}>
          <img
            src={Ellipse}
            className="relative left-4 h-14 w-14 opacity-60"
            alt="ellipse"
          />
          <img
            src={Ellipse}
            className=" relative -left-2 w-14 h-14 opacity-60"
            alt="ellipse"
          />
          <h1 className="relative -left-20 top-3 font-medium text-2xl decoration-white">
            {!title && "My Classroom"}
            {title && title}
          </h1>
        </div>
{
  sidebar ? <>
  <ul className="pl-10 py-4 mt h-[486px]">
          <li className="flex mx-2 my-4 ">
            <img src={ContactCard} alt="Courses" />
            <h3 className="font-sans font-normal text-xl ml-3 decoration-white">
              Courses
            </h3>
          </li>
          <li className="flex mx-2 my-6 ">
            <img src={LeaderBoard} alt="LeaderBoard" />
            <h3 className="font-sans font-normal text-xl ml-3 decoration-white">
              Leaderboard
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Bookmarks} alt="pause" className="m-1" />
            <h3 className="font-sans font-normal text-xl ml-3 decoration-white">
              Book marks
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Doubts} alt="Doubts" />
            <h3 className="font-sans font-normal text-xl ml-3 decoration-white">
              Ask Doubts
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Events} alt="Events" />
            <h3 className="font-sans font-normal text-xl ml-3 decoration-white">
              Events
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Notes} alt="Notes" />
            <h3 className="font-sans font-normal text-xl ml-3 decoration-white">
              Notes
            </h3>
          </li>
          <li className="flexs mx-2 my-6">
            <img src={Certificate} alt="Certificate" />
            <h3 className="font-sans font-normal text-xl ml-3 decoration-white">
              Certificate
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Placed} alt="Placed" />
            <h3 className="font-sans font-normal text-xl ml-3 decoration-white">
              Placed Edflinger
            </h3>
          </li>
        </ul>
  
  </> : <></>
}
       
        
        
        
  
        {/* list contents */}
        

        {/* bottom image */}
        <div className="hidden md:block w-[600px] bottom-0 absolute">
          {!guy && <><img
            src={SideBarBottom1}
            className="relative -bottom-[14rem]"
            alt="design"
            width={328.2}
          />
          <img
            src={SideBarBottom2}
            className="relative bottom-0"
            alt="design2"
            width={328.2}
          /></> }
          {guy &&
          <img
            src={guyi}
            className="relative bottom-0 mb-12"
            alt="design2"
            width={328.2}
          />}
        </div>
      </div>
    </>
  );
};

export default SideBarCourse;
