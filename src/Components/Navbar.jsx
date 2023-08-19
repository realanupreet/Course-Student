import React from "react";
import { useState } from "react";
import "../CSS/Navbar.css";
import logo from "../images/navbar/logo.png";
import { Menu, X } from "lucide-react";
import profile from "../images/page57-61/Ellipse 215.png";
const Navbar = () => {
  const [act, setAct] = useState("Home");

  const [isopen, setOpen] = useState("false");
  const togglenavbar = () => {
    setOpen(!isopen);
    console.log(isopen);
  };

  let login = true;

  return (
    <>
      <div className="navbar px-5 sticky top-0 w-full  items-center justify-between pt-2 z-50 flex flex-wrap bg-white shadow-md">

        <div className="flex flex-col md:hidden">
          <button onClick={ togglenavbar } className="">
            { !isopen ? <X /> : <Menu /> }
          </button>
        </div>
        {/* left portion of navbar  */ }
        <div className="left border-1  w-auto md:w-1/5 ">
          <img src={ logo } alt="logo" className="h-9 hover:cursor-pointer"></img>
        </div>

        {/* center portion of navbar  */ }
        <div className="center w-2/4 hidden md:flex">
          <ul className="nav-list flex justify-between items-center  w-full ">
            <li
              className="list-item hover:cursor-pointer opacity-50 font-normal"
              onClick={ () => {
                setAct((act) => "Home");
              } }
              style={ {
                color: act === "Home" ? "#215D4F" : "",
                opacity: act === "Home" ? "1" : "",
                fontWeight: act === "Home" ? "500" : "",
              } }
            >
              Home
            </li>
            <li
              className="list-item hover:cursor-pointer opacity-50 font-normal"
              onClick={ () => {
                setAct((act) => "Why us");
              } }
              style={ {
                color: act === "Why us" ? "#215D4F" : "",
                opacity: act === "Why us" ? "1" : "",
                fontWeight: act === "Why us" ? "500" : "",
              } }
            >
              Why us
            </li>
            <li
              className="list-item hover:cursor-pointer opacity-50 font-normal"
              onClick={ () => {
                setAct((act) => "Courses");
              } }
              style={ {
                color: act === "Courses" ? "#215D4F" : "",
                opacity: act === "Courses" ? "1" : "",
                fontWeight: act === "Courses" ? "500" : "",
              } }
            >
              Courses
            </li>
            <li
              className="list-item hover:cursor-pointer opacity-50 font-normal"
              onClick={ () => {
                setAct((act) => "Mentors");
              } }
              style={ {
                color: act === "Mentors" ? "#215D4F" : "",
                opacity: act === "Mentors" ? "1" : "",
                fontWeight: act === "Mentors" ? "500" : "",
              } }
            >
              Mentors
            </li>
            <li
              className="list-item hover:cursor-pointer opacity-50 font-normal"
              onClick={ () => {
                setAct((act) => "Contact us");
              } }
              style={ {
                color: act === "Contact us" ? "#215D4F" : "",
                opacity: act === "Contact us" ? "1" : "",
                fontWeight: act === "Contact us" ? "500" : "",
              } }
            >
              Contact us
            </li>
          </ul>
        </div>

        {/* right portion of navbar  */ }
        { !login ? (
          <div className="right w-1/5 flex  justify-end">
            <div className="h-full">
              <a className=" hover:cursor-pointer login h-full">Login</a>
            </div>
            <button className="signup py-1 px-3.5 ml-5">Sign Up</button>
          </div>
        ) : (
          <div className="right w-1/5 flex  justify-end gap-3 md:gap-7 items-center ">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                className="notification-circle"
              >
                <circle cx="6" cy="6.98535" r="6" fill="#215D4F" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="27"
                viewBox="0 0 22 27"
                fill="none"
              >
                <path
                  d="M10.6151 26.567C9.8853 26.567 9.26034 26.307 8.7402 25.7868C8.22006 25.2667 7.96043 24.6422 7.96132 23.9133H13.2689C13.2689 24.643 13.0088 25.268 12.4887 25.7881C11.9685 26.3083 11.344 26.5679 10.6151 26.567ZM0 22.5864V19.9326H2.65377V10.6444C2.65377 8.76464 3.2177 7.12239 4.34555 5.71766C5.47341 4.31293 6.89981 3.38986 8.62476 2.94845V2.01963C8.62476 1.46676 8.81849 0.9966 9.20594 0.609149C9.59339 0.221698 10.0631 0.0284153 10.6151 0.0292999C11.168 0.0292999 11.6381 0.223025 12.0256 0.610476C12.413 0.997927 12.6063 1.46764 12.6054 2.01963V2.94845C13.0256 3.03691 13.4294 3.16429 13.8169 3.33059C14.2043 3.4969 14.5524 3.69018 14.8611 3.91044C14.2198 4.68446 13.739 5.52482 13.4188 6.43153C13.0986 7.33823 12.938 8.30023 12.9371 9.31751C12.9371 11.1973 13.4515 12.8506 14.4803 14.2774C15.5091 15.7043 16.8745 16.749 18.5764 17.4115V19.9326H21.2302V22.5864H0Z"
                  fill="#215D4F"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M21.9578 0.0994263H2.43976C1.09789 0.0994263 0.0121988 1.19732 0.0121988 2.53919L0 24.497L4.87952 19.6175H21.9578C23.2997 19.6175 24.3976 18.5196 24.3976 17.1777V2.53919C24.3976 1.19732 23.2997 0.0994263 21.9578 0.0994263ZM19.5181 14.738H4.87952V12.2982H19.5181V14.738ZM19.5181 11.0783H4.87952V8.63858H19.5181V11.0783ZM19.5181 7.4187H4.87952V4.97894H19.5181V7.4187Z"
                fill="#215D4F"
              />
            </svg>
            <img src={ profile } />
          </div>
        ) }

        {/* for screen smaller than 768px */ }


        { !isopen && (
          <div className="center w-2/4 flex md:hidden basis-full">
            <ul className="nav-list flex flex-col justify-between items-center  w-full ">
              <li
                className="list-item hover:cursor-pointer opacity-50 font-normal"
                onClick={ () => {
                  setAct((act) => "Home");
                } }
                style={ {
                  color: act === "Home" ? "#215D4F" : "",
                  opacity: act === "Home" ? "1" : "",
                  fontWeight: act === "Home" ? "500" : "",
                } }
              >
                Home
              </li>
              <li
                className="list-item hover:cursor-pointer opacity-50 font-normal"
                onClick={ () => {
                  setAct((act) => "Why us");
                } }
                style={ {
                  color: act === "Why us" ? "#215D4F" : "",
                  opacity: act === "Why us" ? "1" : "",
                  fontWeight: act === "Why us" ? "500" : "",
                } }
              >
                Why us
              </li>
              <li
                className="list-item hover:cursor-pointer opacity-50 font-normal"
                onClick={ () => {
                  setAct((act) => "Courses");
                } }
                style={ {
                  color: act === "Courses" ? "#215D4F" : "",
                  opacity: act === "Courses" ? "1" : "",
                  fontWeight: act === "Courses" ? "500" : "",
                } }
              >
                Courses
              </li>
              <li
                className="list-item hover:cursor-pointer opacity-50 font-normal"
                onClick={ () => {
                  setAct((act) => "Mentors");
                } }
                style={ {
                  color: act === "Mentors" ? "#215D4F" : "",
                  opacity: act === "Mentors" ? "1" : "",
                  fontWeight: act === "Mentors" ? "500" : "",
                } }
              >
                Mentors
              </li>
              <li
                className="list-item hover:cursor-pointer opacity-50 font-normal"
                onClick={ () => {
                  setAct((act) => "Contact us");
                } }
                style={ {
                  color: act === "Contact us" ? "#215D4F" : "",
                  opacity: act === "Contact us" ? "1" : "",
                  fontWeight: act === "Contact us" ? "500" : "",
                } }
              >
                Contact us
              </li>

              { !login ? (<>
                <li className="h-full">
                  <a className=" hover:cursor-pointer login ">Login</a>
                </li>
                <li>
                  <button className="signup py-1 px-3.5 ml-0 my-1">
                    Sign Up
                  </button>
                </li> </>) : (<>
                  <button className="signup py-1 px-3.5 ml-0 my-1">
                    Logout
                  </button>
                </>)
              }
            </ul>
          </div>
        ) }
      </div>
    </>
  );
};

export default Navbar;



// import React from "react";
// import { useState } from "react";
// import "../CSS/Navbar.css";
// import logo from "../images/navbar/logo.png";
// import { Menu, X } from "lucide-react";
// import profile from "../images/Ellipse 215.png";
// import new_ from "../images/Ellipse 219.png";
// import girl from "../images/girl.png";
// import group from "../images/Group.png";


// function Navbar({ handle_isopn }) {
//   const [act, setAct] = useState("Home");


//   const [isopen, setOpen] = useState(false)
//   const togglenavbar = () => {
//     setOpen(!isopen);
//   };

//   const [login, setLogin] = useState(true);
//   function log_status() {
//     setLogin(!login);
//   }

//   const [pop_up, set_pop_up] = useState("");
//   function hadler_popup(e) {
//     set_pop_up(e);
//     console.log(pop_up)
//   }

//   const profile_ = (
//     <ul className="profile absolute right-4 top-0 text-white p-4 flex flex-col justify-between " style={ { background: "#215d4f" } }>
//       <li className="ite p-1">View Profile</li>
//       <li className="ite p-1">Setting</li>
//       <li className="ite p-1">Logout</li>
//     </ul>
//   )

//   const notification_ = (
//     <ul className="profile absolute right-4 top-0 text-white p-4 flex flex-col justify-between outline-none" style={ { background: "#215d4f" } }>
//       <li className="notifiaction_ite p-1" ><img src={ new_ } alt="new" /><span className="">We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].<span className="orange hover:cursor-pointer">View details</span></span></li>
//       <li className="notifiaction_ite p-1" ><img src={ new_ } alt="new" /><span className="">We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].<span className="orange hover:cursor-pointer">View details</span></span></li>
//       <li className="notifiaction_ite p-1" ><img src={ new_ } alt="new" /><span className="">We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].<span className="orange hover:cursor-pointer">View details</span></span></li>
//       <li className="notifiaction_ite p-1" ><img src={ new_ } alt="new" /><span className="">We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].<span className="orange hover:cursor-pointer">View details</span></span></li>


//       <li className="notifiaction_ite p-1" ><img src={ new_ } alt="new" className="invisible" /><span >We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].<span className="orange hover:cursor-pointer">View details</span></span></li>
//       <li className="notifiaction_ite p-1" ><img src={ new_ } alt="new" className="invisible" /><span >We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].<span className="orange hover:cursor-pointer">View details</span></span></li><li className="notifiaction_ite p-1" ><img src={ new_ } alt="new" className="invisible" /><span >We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].<span className="orange hover:cursor-pointer">View details</span></span></li>

//       <li className="notifiaction_ite p-1 mt-40" style={ { background: "#215d4f" } }><img src={ girl } alt="girl" className="absolute left-0 w-full mt-64" style={ { background: "#215d4f" } } />
//         <img src={ group } alt="" className="absolute right-0 -mt-2 w-28" /></li>

//     </ul>
//   )
//   return (
//     <>
//       <div className="navbar  px-5 md:px-10 sticky top-0 w-full hidden lg:flex  items-center justify-between flex-wrap-reverse pt-2 z-50 lg:flex-wrap bg-white">
//         {/* left portion of navbar  */ }
//         <div className="left border-1  w-auto md:w-1/5 ">
//           <img src={ logo } alt="logo" className="h-9 hover:cursor-pointer"></img>
//         </div>

//         {/* center portion of navbar  */ }
//         <div className="center w-2/4 hidden lg:flex">
//           <ul className="nav-list flex justify-between items-center  w-full ">
//             <li
//               className="list-item hover:cursor-pointer opacity-50 font-normal"
//               onClick={ () => {
//                 setAct((act) => "Home");
//               } }
//               style={ {
//                 color: act === "Home" ? "#215D4F" : "",
//                 opacity: act === "Home" ? "1" : "",
//                 fontWeight: act === "Home" ? "500" : "",
//               } }
//             >
//               Home
//             </li>
//             <li
//               className="list-item hover:cursor-pointer opacity-50 font-normal"
//               onClick={ () => {
//                 setAct((act) => "Why us");
//               } }
//               style={ {
//                 color: act === "Why us" ? "#215D4F" : "",
//                 opacity: act === "Why us" ? "1" : "",
//                 fontWeight: act === "Why us" ? "500" : "",
//               } }
//             >
//               Why us
//             </li>
//             <li
//               className="list-item hover:cursor-pointer opacity-50 font-normal"
//               onClick={ () => {
//                 setAct((act) => "Courses");
//               } }
//               style={ {
//                 color: act === "Courses" ? "#215D4F" : "",
//                 opacity: act === "Courses" ? "1" : "",
//                 fontWeight: act === "Courses" ? "500" : "",
//               } }
//             >
//               Courses
//             </li>
//             <li
//               className="list-item hover:cursor-pointer opacity-50 font-normal"
//               onClick={ () => {
//                 setAct((act) => "Mentors");
//               } }
//               style={ {
//                 color: act === "Mentors" ? "#215D4F" : "",
//                 opacity: act === "Mentors" ? "1" : "",
//                 fontWeight: act === "Mentors" ? "500" : "",
//               } }
//             >
//               Mentors
//             </li>
//             <li
//               className="list-item hover:cursor-pointer opacity-50 font-normal"
//               onClick={ () => {
//                 setAct((act) => "Contact us");
//               } }
//               style={ {
//                 color: act === "Contact us" ? "#215D4F" : "",
//                 opacity: act === "Contact us" ? "1" : "",
//                 fontWeight: act === "Contact us" ? "500" : "",
//               } }
//             >
//               Contact us
//             </li>
//           </ul>
//         </div>

//         {/* right portion of navbar  */ }
//         { !login ? (
//           <div className="right w-1/5 hidden lg:flex  justify-end">
//             <div className="h-full">
//               <a className=" hover:cursor-pointer login h-full">Login</a>
//             </div>
//             <button className="signup py-1 px-3.5 ml-5">Sign Up</button>
//           </div>
//         ) : (
//           <div className="right w-1/5 hidden lg:flex  justify-end gap-7 items-center ">
//             <div className="relative">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="12"
//                 height="13"
//                 viewBox="0 0 12 13"
//                 fill="none"
//                 className="notification-circle"
//               >
//                 <circle cx="6" cy="6.98535" r="6" fill="#215D4F" />
//               </svg>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="22"
//                 height="27"
//                 viewBox="0 0 22 27"
//                 fill="none"
//               >
//                 <path
//                   d="M10.6151 26.567C9.8853 26.567 9.26034 26.307 8.7402 25.7868C8.22006 25.2667 7.96043 24.6422 7.96132 23.9133H13.2689C13.2689 24.643 13.0088 25.268 12.4887 25.7881C11.9685 26.3083 11.344 26.5679 10.6151 26.567ZM0 22.5864V19.9326H2.65377V10.6444C2.65377 8.76464 3.2177 7.12239 4.34555 5.71766C5.47341 4.31293 6.89981 3.38986 8.62476 2.94845V2.01963C8.62476 1.46676 8.81849 0.9966 9.20594 0.609149C9.59339 0.221698 10.0631 0.0284153 10.6151 0.0292999C11.168 0.0292999 11.6381 0.223025 12.0256 0.610476C12.413 0.997927 12.6063 1.46764 12.6054 2.01963V2.94845C13.0256 3.03691 13.4294 3.16429 13.8169 3.33059C14.2043 3.4969 14.5524 3.69018 14.8611 3.91044C14.2198 4.68446 13.739 5.52482 13.4188 6.43153C13.0986 7.33823 12.938 8.30023 12.9371 9.31751C12.9371 11.1973 13.4515 12.8506 14.4803 14.2774C15.5091 15.7043 16.8745 16.749 18.5764 17.4115V19.9326H21.2302V22.5864H0Z"
//                   fill="#215D4F"
//                 />
//               </svg>
//             </div>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="25"
//               height="25"
//               viewBox="0 0 25 25"
//               fill="none"
//             >
//               <path
//                 d="M21.9578 0.0994263H2.43976C1.09789 0.0994263 0.0121988 1.19732 0.0121988 2.53919L0 24.497L4.87952 19.6175H21.9578C23.2997 19.6175 24.3976 18.5196 24.3976 17.1777V2.53919C24.3976 1.19732 23.2997 0.0994263 21.9578 0.0994263ZM19.5181 14.738H4.87952V12.2982H19.5181V14.738ZM19.5181 11.0783H4.87952V8.63858H19.5181V11.0783ZM19.5181 7.4187H4.87952V4.97894H19.5181V7.4187Z"
//                 fill="#215D4F"
//               />
//             </svg>
//             <img src={ profile } />
//           </div>
//         ) }

//         {/* for screen smaller than 768px */ }
//         <div className="flex flex-col md:hidden">
//           <button onClick={ togglenavbar } className="">
//             { !isopen ? <X /> : <Menu /> }
//           </button>
//         </div>

//         { !isopen && (
//           <div className="center w-2/4 flex md:hidden basis-full">
//             <ul className="nav-list flex flex-col justify-between items-center  w-full ">
//               <li
//                 className="list-item hover:cursor-pointer opacity-50 font-normal"
//                 onClick={ () => {
//                   setAct((act) => "Home");
//                 } }
//                 style={ {
//                   color: act === "Home" ? "#215D4F" : "",
//                   opacity: act === "Home" ? "1" : "",
//                   fontWeight: act === "Home" ? "500" : "",
//                 } }
//               >
//                 Home
//               </li>
//               <li
//                 className="list-item hover:cursor-pointer opacity-50 font-normal"
//                 onClick={ () => {
//                   setAct((act) => "Why us");
//                 } }
//                 style={ {
//                   color: act === "Why us" ? "#215D4F" : "",
//                   opacity: act === "Why us" ? "1" : "",
//                   fontWeight: act === "Why us" ? "500" : "",
//                 } }
//               >
//                 Why us
//               </li>
//               <li
//                 className="list-item hover:cursor-pointer opacity-50 font-normal"
//                 onClick={ () => {
//                   setAct((act) => "Courses");
//                 } }
//                 style={ {
//                   color: act === "Courses" ? "#215D4F" : "",
//                   opacity: act === "Courses" ? "1" : "",
//                   fontWeight: act === "Courses" ? "500" : "",
//                 } }
//               >
//                 Courses
//               </li>
//               <li
//                 className="list-item hover:cursor-pointer opacity-50 font-normal"
//                 onClick={ () => {
//                   setAct((act) => "Mentors");
//                 } }
//                 style={ {
//                   color: act === "Mentors" ? "#215D4F" : "",
//                   opacity: act === "Mentors" ? "1" : "",
//                   fontWeight: act === "Mentors" ? "500" : "",
//                 } }
//               >
//                 Mentors
//               </li>
//               <li
//                 className="list-item hover:cursor-pointer opacity-50 font-normal"
//                 onClick={ () => {
//                   setAct((act) => "Contact us");
//                 } }
//                 style={ {
//                   color: act === "Contact us" ? "#215D4F" : "",
//                   opacity: act === "Contact us" ? "1" : "",
//                   fontWeight: act === "Contact us" ? "500" : "",
//                 } }
//               >
//                 Contact us
//               </li>

//               { !login ? (
//                 <>
//                   <li className="h-full">
//                     <a className=" hover:cursor-pointer login ">Login</a>
//                   </li>
//                   <li>
//                     <button className="signup py-1 px-3.5 ml-0 my-1">
//                       Sign Up
//                     </button>
//                   </li>{ " " }
//                 </>
//               ) : (
//                 <>
//                   <button className="signup py-1 px-3.5 ml-0 my-1">
//                     Logout
//                   </button>
//                 </>
//               ) }
//             </ul>
//           </div>
//         ) }
//       </div>

//       <div className="flex lg:hidden flex-row flex-nowrap mt-2 mx-4 justify-between">
//         {/* left portion hamburger menu*/ }
//         <div className="left flex items-center">
//           <Menu color="darkgreen" className="lg:hidden" onClick={ () => {
//             handle_isopn();
//           } } />
//         </div>

//         {/* center logo image  */ }
//         <div className=" border-1  w-auto md:w-1/5 flex items-center">
//           <img src={ logo } alt="logo" className="h-7 sm:h-9 hover:cursor-pointer" />
//         </div>

//         {/* right side profile image and notification icon  */ }
//         <div className="right w-1/5 flex lg:hidden  justify-end gap-2 sm:gap-7 items-center ">
//           <div className="relative">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="12"
//               height="13"
//               viewBox="0 0 12 13"
//               fill="none"
//               className="notification-circle" >
//               <circle cx="6" cy="6.98535" r="6" fill="#215D4F"
//               />
//             </svg>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="22"
//               height="27"
//               viewBox="0 0 22 27"
//               fill="none"
//             >
//               <path
//                 d="M10.6151 26.567C9.8853 26.567 9.26034 26.307 8.7402 25.7868C8.22006 25.2667 7.96043 24.6422 7.96132 23.9133H13.2689C13.2689 24.643 13.0088 25.268 12.4887 25.7881C11.9685 26.3083 11.344 26.5679 10.6151 26.567ZM0 22.5864V19.9326H2.65377V10.6444C2.65377 8.76464 3.2177 7.12239 4.34555 5.71766C5.47341 4.31293 6.89981 3.38986 8.62476 2.94845V2.01963C8.62476 1.46676 8.81849 0.9966 9.20594 0.609149C9.59339 0.221698 10.0631 0.0284153 10.6151 0.0292999C11.168 0.0292999 11.6381 0.223025 12.0256 0.610476C12.413 0.997927 12.6063 1.46764 12.6054 2.01963V2.94845C13.0256 3.03691 13.4294 3.16429 13.8169 3.33059C14.2043 3.4969 14.5524 3.69018 14.8611 3.91044C14.2198 4.68446 13.739 5.52482 13.4188 6.43153C13.0986 7.33823 12.938 8.30023 12.9371 9.31751C12.9371 11.1973 13.4515 12.8506 14.4803 14.2774C15.5091 15.7043 16.8745 16.749 18.5764 17.4115V19.9326H21.2302V22.5864H0Z"
//                 fill="#215D4F"
//                 onClick={ () => {
//                   pop_up === "notification" ? hadler_popup("") : hadler_popup("notification");
//                 } }
//               />
//             </svg>
//           </div>
//           <img src={ profile } alt="profile" onClick={ () => {
//             pop_up === "profile" ? hadler_popup("") : hadler_popup("profile");
//           } } />
//         </div>
//       </div>
//       <div className="relative">
//         { pop_up === "profile" && profile_ }
//         { pop_up === "notification" && notification_ }
//       </div>
//     </>
//   );
// };

// export default Navbar;