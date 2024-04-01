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
        <div className='flex items-center justify-center'>
          <div className='max-w-2xl bg-neutral-50 flex'>
            <div>
              {/* Profile Photo */}
              <img src="..\..\assets\man.jpg" alt='img' height={200} width={200} className="rounded-full m-20" />
            </div>
            <form onSubmit={handleSubmit} className="m-20">
              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              {/* Address */}
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              {/* Password */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              {/* Mobile Number */}
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              {/* Submit Button */}
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ProfilePage