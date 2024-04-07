import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import { UserContext } from './UserContext'
import Header2 from './Header-2';
import ChatComponent from './ChatComponent.jsx';

const IncomingRequestPage = () => {
    const {ready,user} = useContext(UserContext);
    const [requests,setRequests] = useState([]);

    useEffect(() => {
      axios.get(`/incomingrequests`).then(response => {
        setRequests(response.data);
      });
    }, []);

    const handleConfirm = async (requestId) => {
        try {
            await axios.put(`/confirm-request/${requestId}`);
            setRequests(prevRequests => prevRequests.map(request =>
                request._id === requestId ? { ...request, status: "confirmed" } : request
            ));
        } catch (error) {
            console.error('Error confirming request:', error);
        }
    };

    const handleDecline = async (requestId) => {
        try {
            await axios.put(`/decline-request/${requestId}`);
            setRequests(prevRequests => prevRequests.map(request =>
                request._id === requestId ? { ...request, status: "declined" } : request
            ));
        } catch (error) {
            console.error('Error declining request:', error);
        }
    };
   
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
            <h2>₹ {request.product.price}/per day</h2>
            <h2>Requested by:</h2>
            <h2>{request.renter.name} {request.renter.surname}</h2>
            <h2>{request.renter.locality}, {request.renter.city}</h2>

            <div className='flex gap-5'>
            <button 
            onClick={() => handleConfirm(request._id)}
            className={'text-white px-3 py-1 rounded-3xl mt-4 bg-lime-500'}>Confirm</button>

            <button 
            onClick={() => handleDecline(request._id)}
            className={'text-white px-3 py-1 rounded-3xl mt-4 bg-red-500'}>Decline</button>
            </div>


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

export default IncomingRequestPage