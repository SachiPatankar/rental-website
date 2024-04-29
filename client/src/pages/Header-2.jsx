import React, { useState } from 'react'
import {Link} from "react-router-dom";
import {useContext} from "react";
import { UserContext } from './UserContext';
import {Navigate} from "react-router-dom";


const Header2 = () => {
  const {user,setUser,ready} = useContext(UserContext);
  const [redirect,setRedirect] = useState(null);

  const [toggle,setToggle] = useState(false);
    const handleMenuToggle = () => {
      setToggle(!toggle);
    };

    const logout = async() =>{
      await axios.post('/logout');
      setRedirect('/login');
      setUser(null);
    }

    if (redirect) {
      return <Navigate to={redirect} />
    }

    return (
      <header className="flex justify-between w-full pb-8">
        <Link to={'/'} className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>

          <span className="font-bold text-xl">Rental@PICT</span>

        </Link>

        <Link to={user? null :'/login'} 
              className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 "
              onClick={user ? handleMenuToggle : null}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
          </div>
          {!!user && (
            <div>
              {user.name}
            </div>
          )}
        </Link>




        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-slate-50 absolute top-20 right-10 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >

          

          <ul className="list-none flex justify-end items-start flex-1 flex-col">
          <li className={`font-poppins font-medium cursor-pointer text-[16px] mb-4`}>
              <Link to={user ? `/myprofile/${user._id}`: "/myprofile"}>My Profile</Link>
            </li>
            <li className={`font-poppins font-medium cursor-pointer text-[16px] mb-4`}>
              <Link to={"/transactions"}>Ongoing Transactions</Link>
            </li>
            <li className={`font-poppins font-medium cursor-pointer text-[16px] mb-4`}>
              <Link to={"/incoming"}>Incoming Requests</Link>
            </li>
            <li className={`font-poppins font-medium cursor-pointer text-[16px] mb-4`}>
              <Link to={"/myitems"}>My Items</Link>
            </li>
            <li className={`font-poppins font-medium cursor-pointer text-[16px] mb-4`}>
              <Link onClick={logout}>Logout</Link>
            </li>
            
          </ul>

        </div>
      </header>
    );
}

export default Header2