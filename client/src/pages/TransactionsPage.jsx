import React from 'react'
import { useContext } from 'react';
import { UserContext } from './UserContext'
import {Navigate} from "react-router-dom";
import Header2 from './Header-2';
import ChatComponent from './ChatComponent.jsx';

const TransactionsPage = () => {
    const {ready,user} = useContext(UserContext);
   
    if (!ready)
    {
        return "Loading..." ;
    }
    if (ready && !user)
    {
        return <Navigate to="/login"/>
    }
    
  return (
    <div className='flex flex-col'>
    <Header2/>
    <div className=' flex flex-col bg-neutral-50 pb-20 px-8 rounded-xl' >

      <div className='bg-white flex mt-8  elem w-full rounded-xl'>
        <div className='flex' >
          <img src="..\..\public\assets\camera.jpg" alt='img' height={552} width={325} className='rounded-l-xl' ></img>
          <div className='pl-8 flex-col text-left pt-8'>
            <h1>Camera</h1>
            <p>A very good camera, something else amazing</p>
            <h3>Pune</h3>
            <h2>₹ 99/per day</h2>
            <button className='text-white px-3 py-1 rounded-3xl mt-4 bg-lime-500'>Confirmed</button>
          </div>
        </div>

        <div className='ml-auto flex items-center pr-6'>
        <ChatComponent/>
        </div>
      </div>

      <div className='bg-white flex mt-8  elem w-full rounded-xl'>
        <div className='flex' >
          <img src="..\..\assets\camera.jpg" alt='img' height={552} width={325} className='rounded-l-xl' ></img>
          <div className='pl-8 flex-col text-left pt-8'>
            <h1>Camera</h1>
            <p>A very good camera, something else amazing</p>
            <h3>Pune</h3>
            <h2>₹ 99/per day</h2>
            <button className='text-white px-3 py-1 rounded-3xl mt-4 bg-rose-600'>Declined</button>
          </div>
        </div>

        <div className='ml-auto flex items-center pr-6'>
        <ChatComponent/>
        </div>
      </div>

      <div className='bg-white flex mt-8  elem w-full rounded-xl'>
        <div className='flex' >
          <img src="..\..\assets\camera.jpg" alt='img' height={552} width={325} className='rounded-l-xl' ></img>
          <div className='pl-8 flex-col text-left pt-8'>
            <h1>Camera</h1>
            <p>A very good camera, something else amazing</p>
            <h3>Pune</h3>
            <h2>₹ 99/per day</h2>
            <button className='text-white px-3 py-1 rounded-3xl mt-4 bg-blue-600'>Requested</button>
          </div>
        </div>

        <div className='ml-auto flex items-center pr-6'>
        {/* <button className='bg-primary text-white px-4 py-2 rounded-3xl'>Chat Now</button> */}
        <ChatComponent/>
        </div>
      </div>
        
    </div>

    </div>
  )
}

export default TransactionsPage