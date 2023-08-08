//make a navsubcustom component boilerplate
import home from "../images/report/home.svg";
import chevrontoright from "../images/report/chevrontoright.svg";
import React from "react";

const NavSubCustom = ({page,route,subtitle}) => {
    return (
        <>
            <nav className='w-full grid rounded ml-2' style={ { background: '#215D4F' } }>
                <ul className='flex justify-end inline-block pl-3 pr-12 '>
                    <h2 className="flex-grow text-white mx-3 my-4 h5 ">{subtitle}</h2>
                    <ul className='flex mx-2 my-4 font-normal text-md decoration-white hidden xl:flex justify-around w-3/12'>
                        <li className=''><img src={home} alt="" /></li>
                        <img src={chevrontoright} alt="" />
                        <li className=''>{page}</li>
                        <img src={chevrontoright} alt="" />
                        <li className='text-honey'>{route}</li>

                    </ul>
                </ul>
                
            </nav>
        </>
    )
}
export default NavSubCustom;