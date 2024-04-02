import React, { useState } from 'react';
import axios from "axios";


const AddProductPage = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [addedphotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState('');

  const addPhotoByLink = async(ev) => {
    ev.preventDefault();
    const {data:filename} = await axios.post("/upload-by-link", {link: photoLink})
    setAddedPhotos(prev =>{
      return [...prev, filename]
    })
    setPhotoLink("");
  }

  return (
    <div>
      <div className='text-left'>
        <h2 className='text-xl pl-2'>Name of Product</h2>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Eg. Camera' className='max-w-xl'></input>

        <h2 className='text-xl pl-2'>Category</h2>
        <input value={category} onChange={e => setCategory(e.target.value)} type="text" placeholder='it will be a drop down' className='max-w-md'></input>

        <h2 className='text-xl pl-2'>Description</h2>
        <textarea value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder='Eg. Some camera description...' className='max-w-2xl'></textarea>

        <h2 className='text-xl pl-2'>Area</h2>
        <input value={area} onChange={e => setArea(e.target.value)} type="text" placeholder='it will be a drop down' className='max-w-md'></input>

        <h2 className='text-xl pl-2'>Price</h2>
        <input value={price} onChange={e => setPrice(e.target.value)} type="text" placeholder='100' className='max-w-md'></input>

        <h2 className='text-xl pl-2'>Photos</h2>
        <div className='flex'>
          <input value = {photoLink} onChange={e => setPhotoLink(e.target.value)}type="text" placeholder='add link here' className='max-w-xl mr-4'></input>
          <button onClick={addPhotoByLink}className='px-4 rounded-2xl'>Add photos</button>
        </div>

        {console.log(addedphotos)}

        {addedphotos.length > 0 && addedphotos.map(link =>(
          <div>
            {link}
          </div>
        ))}
        <button className="p-8 bg-white rounded-2xl border-gray-200 border-2 flex gap-1">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
          </svg> */}
          Upload
        </button>

        <button className='bg-primary w-2/3 m-4 p-2 rounded-2xl'>Save</button>
      </div>
    </div>
  );
};

export default AddProductPage;
