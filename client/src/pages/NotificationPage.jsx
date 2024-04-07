import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { UserContext } from './UserContext'
import {Navigate} from "react-router-dom";
import Header2 from './Header-2';
import ChatComponent from './ChatComponent.jsx';
import axios from "axios"

const NotificationPage = () => {
    const [notifs,SetNotifs] = useState([]);

    useEffect(() => {
      axios.get(`/myrequests`).then(response => {
        setRequests(response.data);
      });
    }, []);

    
   
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
    
    {requests.map((request) => (

      <div className='bg-white flex mt-8  elem w-full rounded-xl'>
        <div className='flex' >
          <img src={"http://localhost:4000/uploads/"+request.product.photos[0]} alt='img' height={552} width={325} className='rounded-l-xl' ></img>
          <div className='pl-8 flex-col text-left pt-8'>
            <h1>{request.product.name}</h1>
            <p>{request.product.description}</p>
            <h3>{request.product.area}</h3>
            <h2>₹ {request.product.price}/per day</h2>
            <h2>{request.owner.name} {request.owner.surname}</h2>

            <button className={`text-white px-3 py-1 rounded-3xl mt-4 ${getStatusColor(request.status)}`}>{request.status}</button>
          </div>
        </div>

        <div className='ml-auto flex items-center pr-6'>
        <ChatComponent/>
        </div>
      </div>

      ))}
        
    </div>

    </div>
  )
}

export default NotificationPage