import React from 'react'
import Header2 from './Header-2'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useParams} from "react-router-dom";
import axios from "axios"

const ProfilePage = () => {

  const {id} = useParams();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [locality, setLocality] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
   
    useEffect(() => {
      if (!id) {
        return;
      }
      axios.get('/profile/'+id).then(response => {
         const {data} = response;
         setName(data.name);
         setSurname(data.surname);
         setLocality(data.locality);
         setCity(data.city);
         setEmail(data.email)
         setGender(data.gender);
         setDob(data.dob);
        
      });
    }, [id]);
   
    // Function to handle form submission
    const handleSave = async(ev) => {
        ev.preventDefault();
        const profileData = {
          name, surname, locality,
          city, email
        };
        await axios.put('/profile', {
          id, ...profileData
        });
        setRedirect(true);
    };

  
    return (
      <div>
        <div><Header2/></div>
        <div>
      <div className="border border-gray-300 justify-center items-center m-auto mt-5 rounded-lg" style={{width: '700px' }}>
        <div className="bg-[#30c5d8] rounded-lg">
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt="profile"
          className="p-4 items-center justify-center m-auto"
          style={{ height: '250px', width: '250px' }}
        />
      </div>
      <form className='px-20 gap-y-5 pt-5 mx-auto' >
            <div className='flex justify-start border my-2 py-2  rounded-2xl'>
              <h4 className='mx-3'>Name: </h4>
                <h4 className='mx-3'>{name}</h4>
                
            </div>
            <div className='flex justify-start border my-2 py-2  rounded-2xl'>
            <h4 className='mx-3'>Surname: </h4>
                <h4 className='mx-3'>{surname}</h4>
                
            </div>
            <div className='flex justify-start border my-2 py-2  rounded-2xl'>
            <h4 className='mx-3'>Gender: </h4>
                <h4 className='mx-3'>{gender}</h4>
                
            </div>

            <div className=" flex border my-2 py-2 mt-4 rounded-2xl justify-start">
            <h4 className='mx-3'>Date of Birth: </h4>
              <h4 className="mx-3 mr-4">{dob}</h4>  
              
            </div>

            <div className=" flex border my-2 py-2 mt-4 rounded-2xl justify-start">
            <h4 className='mx-3'>Locality: </h4>
              <h4 className="mx-3 mr-4">{locality}</h4>  
              
            </div>
            
            <div className=" flex border my-2 py-2 mt-4 rounded-2xl justify-start">
            <h4 className='mx-3'>City: </h4>
              <h4 className="mx-3 mr-4">{city}</h4>  
              
            </div>
            <div className=" flex border my-2 py-2 mt-4 rounded-2xl justify-start">
            <h4 className='mx-3'>Email: </h4>
              <h4 className="mx-3 mr-4">{email}</h4>  
              
            </div>
        </form>
      {/* <div className="flex justify-center items-center m-auto space-x-3 p-4">
        
          <button className="px-6 py-2 font-semibold text-black bg-[#30c5d8] rounded-2xl shadow-md" onClick={handleSave}>Save</button>
         
      </div> */}
    </div>
        </div>
        
      </div>
    );
}

export default ProfilePage