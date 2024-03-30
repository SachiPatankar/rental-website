import React from 'react'
import { useContext } from 'react';
import { UserContext } from './UserContext'
import {Navigate} from "react-router-dom";
import Header2 from './Header-2';

// {/* <div className="flex-col h-full w-3 w-3/12 divide-y divide-slate-200 rounded-xl mt-12 bg-white  " > 
//         {buttonsData.map((button, index) => (
        
//           <div className='w-full h-16 flex items-center pl-6  '>
//             {/* <img src={button.icon} alt={button.text} /> */}
//             <a href={button.link}>{button.text}</a>
//           </div>
//           ))}
        
//         </div>

//         <div>
          
//         </div> */}

const buttonsData = [
  {
    text: 'Dashboard',
    icon: 'icon-1.png',
    link: '/link1'
  },
  {
    text: 'Active products',
    icon: 'icon-2.png',
    link: '/link2'
  },

  {
    text: 'History',
    icon: 'icon-2.png',
    link: '/link2'
  },

  {
    text: 'My items on rent',
    icon: 'icon-2.png',
    link: '/link2'
  },
  // Add more button data as needed
];

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
          </div>
        </div>

        <div className='ml-auto flex items-center pr-6'>
        <button className='bg-primary text-white px-4 py-2 rounded-3xl'>Chat Now</button>
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
          </div>
        </div>

        <div className='ml-auto flex items-center pr-6'>
        <button className='bg-primary text-white px-4 py-2 rounded-3xl'>Chat Now</button>
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
          </div>
        </div>

        <div className='ml-auto flex items-center pr-6'>
        <button className='bg-primary text-white px-4 py-2 rounded-3xl'>Chat Now</button>
        </div>
      </div>

      

      
      
        
    </div>

    </div>
  )
}

export default TransactionsPage