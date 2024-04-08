// import { user } from "../assets";


// const Profilepage = () =>{
//     return(
//         <div className="border border-gray-300 justify-center items-center m-auto mt-20 rounded-lg" style={{height:'750px', width:'550px'}}>
//              <div className="bg-[#30c5d8] rounded-lg">
//                 <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" 
//                 alt="profile" 
//                 className="p-4 items-center justify-center m-auto" 
//                 style={{height:'250px', width:'250px'}}
//                 />
//              </div>
//              <div className="space-y-2 m-10">
//                 <div>
//                     <h2 className="fonts-poppins text-xl font-bold">Name:</h2>
//                     <h3 className="font-semibold text-xl"><span>Name</span> <span>Surname</span></h3>
//                 </div>
//                 <div>
//                     <h2 className="fonts-poppins text-xl font-bold">Email Id: </h2>
//                     <h3 className="font-semibold text-xl">email@gmail.com</h3>
//                 </div>
//                 <div>
//                     <h2 className="fonts-poppins text-xl font-bold">DOB:</h2>
//                     <h3 className="font-semibold text-xl">12/34/56</h3>
//                 </div>
//                 <div>
//                     <h2 className="fonts-poppins text-xl font-bold">City</h2>
//                 </div>
//                 <div>
//                     <h2 className="fonts-poppins text-xl font-bold">Address: </h2>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                          Earum officiis veniam dignissimos illum dolor voluptas 
//                          accusantium error iste ea debitis?
//                     </p>
//                 </div>
//              </div>
//              <div className="flex justify-center items-center m-auto space-x-3">
//                 <button className="px-6 py-2 font-semibold text-[#30c5d8] bg-black rounded-2xl shadow-md ">Edit</button>
//                 <button className="px-6 py-2 font-semibold text-black bg-[#30c5d8] rounded-2xl shadow-md ">Save</button>
//              </div>
//         </div>
//     );
// };

// export default Profilepage

import React, { useState } from "react";

const Profilepage = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("Name Surname");
  const [email, setEmail] = useState("email@gmail.com");
  const [dob, setDob] = useState("00/00/0000");
  const [address, setAddress] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum officiis veniam dignissimos illum dolor voluptas accusantium error iste ea debitis?");

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    // Save changes to backend or perform necessary actions
  };

  return (
    <div className="border border-gray-300 justify-center items-center m-auto mt-20 rounded-lg" style={{ height: '700px', width: '550px' }}>
      <div className="bg-[#30c5d8] rounded-lg">
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt="profile"
          className="p-4 items-center justify-center m-auto"
          style={{ height: '250px', width: '250px' }}
        />
      </div>
      <div className="space-y-2 m-10">
        <div>
          <h2 className="fonts-poppins text-xl font-bold">Name:</h2>
          {editMode ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <h3 className="font-semibold text-xl">{name}</h3>
          )}
        </div>
        <div>
          <h2 className="fonts-poppins text-xl font-bold">Email Id: </h2>
          {editMode ? (
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <h3 className="font-semibold text-xl">{email}</h3>
          )}
        </div>
        <div>
          <h2 className="fonts-poppins text-xl font-bold">DOB:</h2>
          {editMode ? (
            <input
              type="text"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          ) : (
            <h3 className="font-semibold text-xl">{dob}</h3>
          )}
        </div>
        <div>
          <h2 className="fonts-poppins text-xl font-bold">Address: </h2>
          {editMode ? (
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          ) : (
            <p>{address}</p>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center m-auto space-x-3">
        {editMode ? (
          <button className="px-6 py-2 font-semibold text-black bg-[#30c5d8] rounded-2xl shadow-md" onClick={handleSave}>Save</button>
        ) : (
          <button className="px-6 py-2 font-semibold text-[#30c5d8] bg-black rounded-2xl shadow-md" onClick={handleEdit}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Profilepage;
