import React from 'react'
import Header2 from './Header-2'
import { useState } from 'react';

// const ProfilePage = () => {
//   return (
//     <div>
//         <div><Header2/></div>
//         <div className='flex items-center justify-center'>
//         <div className='max-w-2xl bg-neutral-50 flex '>
//             <div>
//             <img src="..\..\assets\man.jpg" alt='img' height={200} width={200} className="rounded-full m-20" ></img>
//             </div>
//         </div>
//         </div>
//     </div>
//   )
// }

const ProfilePage = () => {
    // State variables to hold profile data
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic (e.g., sending data to backend)
    };
  
    return (
      <div>
        <div><Header2/></div>
        
      </div>
    );
}

export default ProfilePage