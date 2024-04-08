import { useState } from "react";
import { Link } from "react-router-dom";
import { logo, search, user, menu } from "../assets";
import Categorybar from "./Categorybar";


const Header = () => {
  const [toggle,setToggle] = useState(false)
  return(
    <>
    <div >
        <header className="px-10 py-4 flex justify-between">
            <div className="flex items-center gap-1">
            <img src={logo} alt="logo" />
            <span className="font-bold">Rentals@PICT</span>
            </div>
            <div className="hidden md:block">
            <div className={`flex py-2 px-4  rounded-full gap-4 items-center `}>
              <input type="text" placeholder="Search..."/>
              <button className="bg-[#30d5c8] rounded-full p-2 hover:p-3">
                <img src={search} alt="search" />
              </button>
            </div>
            </div>
            <div className="flex py-2 px-4 border border-gray-300 rounded-full gap-4 items-center">
              <img src={menu} alt="menu" className="cursor-pointer" onClick={() => setToggle(!toggle)}/>
              <Link to={'/profile'} ><img src={user} alt="user" /></Link>
            </div>
            <div className={`${
            !toggle ? "hidden" : "flex"
            } p-6 bg-white border border-gray-400 absolute top-20 right-12 mr-12 my-4 min-w-[140px] rounded-xl sidebar shadow-mg shadow-gray-300`}>
              <ul className="list-none flex justify-end items-start flex-1 flex-col ">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/transactions'}>Transactions</Link></li>
                <li><Link to={'/my-items'}>My Items</Link></li>
                <li><Link to={'/contact-us'}>Contact us</Link></li>
              </ul>
            </div>
        </header>
        <div className="m-4">
          <div className={`sm:hidden flex py-2 px-4  rounded-full gap-4 items-center justify-between `}>
              <input type="text" placeholder="Search..." />
              <button className="bg-[#30d5c8] rounded-full p-1">
                <img src={search} alt="search" />
              </button>
          </div>
        </div>
        
    </div>
    <Categorybar/>
    </>
  );  
};


export default Header;
