import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Header2 from './Header-2';


const AddProductPage = () => {
  const {id} = useParams();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [addedphotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState('');
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/product/'+id).then(response => {
       const {data} = response;
       setName(data.name);
       setCategory(data.category);
       setAddedPhotos(data.photos);
       setDescription(data.description);
       setArea(data.area)
       setPrice(data.price);
    });
  }, [id]);


  const addPhotoByLink = async(ev) => {
    ev.preventDefault();
    const {data:filename} = await axios.post("/upload-by-link", {link: photoLink})
    setAddedPhotos(prev =>{
      return [...prev, filename]
    })
    setPhotoLink("");
  }

  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();
  
    for (let i = 0; i < files.length; i++) {
      data.append('photos', files[i]);
    }
  
    axios.post('/upload', data, {
      headers: { 'Content-type': 'multipart/form-data' }
    })
      .then(response => {
        const { data: filenames} = response;
        setAddedPhotos(prev => [...prev, ...filenames]);
      })
  }

  async function saveProduct(ev) {
    ev.preventDefault();
    const productData = {
      name, category, addedphotos,
      description, area, price,
    };
    if (id) {
      // update
      await axios.put('/products', {
        id, ...productData
      });
      setRedirect(true);
    } else {
      // new place
      await axios.post('/products', productData);
      setRedirect(true);
    }

  }

  function removePhoto(ev,filename) {
    ev.preventDefault()
    setAddedPhotos([...addedphotos.filter(photo => photo !== filename)]);
  }

  if(redirect)
  {
    return <Navigate to={redirect}/>
  }

  return (
    <div>
      <Header2/>
      <form onSubmit={saveProduct}>
      <div className='text-left'>
        <h2 className='text-xl pl-2'>Name of Product</h2>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Eg. Camera' className='max-w-xl'></input>

        {/* <h2 className='text-xl pl-2'>Category</h2>
        <input value={category} onChange={e => setCategory(e.target.value)} type="text" placeholder='it will be a drop down' className='max-w-md'></input> */}
        <h2 className='text-xl pl-2'>Category</h2>
            <select value={category} onChange={e => setCategory(e.target.value)} className='max-w-md'>
                <option value="">Select...</option>
                <option value="studio-eqp">Studio Equipments</option>
                <option value="kitchen-appliances">Kitchen Appliances</option>
                <option value="home-appliances">Home Appliances</option>
                <option value="travel">Travel</option>
                <option value="other">Other Electronics</option>
            </select>

        <h2 className='text-xl pl-2'>Description</h2>
        <textarea value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder='Eg. Some camera description...' className='max-w-2xl'></textarea>

        <h2 className='text-xl pl-2'>Area</h2>
        <input value={area} onChange={e => setArea(e.target.value)} type="text" placeholder='Eg. Dhanakawadi' className='max-w-md'></input>

        <h2 className='text-xl pl-2'>Price</h2>
        <input value={price} onChange={e => setPrice(e.target.value)} type="text" placeholder='100' className='max-w-md'></input>

        <h2 className='text-xl pl-2'>Photos</h2>
        <div className='flex'>
          <input value = {photoLink} onChange={e => setPhotoLink(e.target.value)}type="text" placeholder='add link here' className='max-w-xl mr-4'></input>
          <button onClick={addPhotoByLink}className='px-4 rounded-2xl'>Add photos</button>
        </div>

        {console.log(addedphotos)}

        
        <div className="mt-2 grid gap-2 rounded-md grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {addedphotos.length > 0 && addedphotos.map(link =>(
          // <div>
          //   {'http://localhost:4000/uploads' + link}
          // </div>
          <div key={link}> 
          <img  src= {'http://localhost:4000/uploads/' + link} />
          <button onClick={ev => removePhoto(ev,link)} className="cursor-pointer bottom-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          </div>
         
        ))}
        <label className=" cursor-pointer p-8 bg-white rounded-2xl border-gray-200 border-2 flex gap-1">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
          </svg> */}
          <input type='file' className='hidden' onChange={uploadPhoto}/>
          Upload from device
        </label>
        </div>

        <button className='bg-primary w-2/3 m-4 p-2 rounded-2xl'>Save</button>
      </div>
      </form>
    </div>
  );
};

export default AddProductPage;
