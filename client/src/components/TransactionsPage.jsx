import React from 'react'
import { useState, useContext } from 'react';
//import { UserContext } from './UserContext'
import {Navigate} from "react-router-dom";
import Header from './Header';
//import ChatComponent from './ChatComponent.jsx';

const TransactionsPage = () => {
    // const {ready,user} = useContext(UserContext);
   
    // if (!ready)
    // {
    //     return "Loading..." ;
    // }
    // if (ready && !user)
    // {
    //     return <Navigate to="/login"/>
    // }

    const [accepted, setAccepted] = useState(false);
    const [rejected, setRejected] = useState(false);
    
    const handleAccept = () => {
      setAccepted(true);
      setRejected(false);
    };
  
    const handleReject = () => {
      setRejected(true);
      setAccepted(false);
    };

  return (
    
    <div className=' flex  bg-neutral-50  p-4 gap-10 border border-gray-300 rounded-xl mr-56 ml-56 mt-20' >
        <div className='left ml-4'>
          <img src="src\assets\test1.jpg" alt="productImg" style={{height:'250px', width:'250ox'}} />
        </div>
        <div className='right mr-4 space-y-8'>
          <div className='space-y-2 mt-10'>
            <h1 className='font-semibold text-3xl'>Product Name</h1>
            <br />
            <div className='flex space-x-5'>
            <h2 className=' flex gap-2 text-xl'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins">
              <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/>
              <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/>
              <path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/>
              </svg>
               Rs <span className='text-3xl font-bold text-[#30c5d8]'>99</span> per Day
            </h2>
            <div className='border border-l-3 border-[#30c5d8]'></div>
            <h2 className='flex gap-2 text-xl '>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-stack">
              <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"/>
              <path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"/>
              <rect width="8" height="8" x="14" y="14" rx="2"/>
              </svg>
              Category
            </h2>
            <div className='border border-l-3 border-[#30c5d8]'></div>
            <h2 className=' flex gap-2 text-xl'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pinned">
              <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"/>
              <circle cx="12" cy="8" r="2"/>
              <path d="M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835"/>
              </svg> 
              Location(only area)
              </h2>
            </div>
          </div>
           <div className='flex gap-5'>
            <button
              className={`p-2 font-medium text-white rounded-lg hover:bg-green-500 ${
                accepted ? 'bg-green-500' : 'bg-gray-700'
              }`}
              onClick={handleAccept}
              disabled={accepted || rejected}
            >
              {accepted ? 'Accepted' : 'Accept'}
            </button>
            <button
               className={`p-2 font-medium text-white rounded-lg hover:bg-red-500 ${
                rejected ? 'bg-red-500' : 'bg-gray-700'
              }`}
              onClick={handleReject}
              disabled={accepted || rejected}
            >
              {rejected ? 'Rejected' : 'Reject'}
            </button>
          </div>
      </div>

    </div>
  );
};

export default TransactionsPage




     
        
      