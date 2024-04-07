import React, { useState, useRef, useEffect } from "react";
import { useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {calendar,} from "../assets"
import axios from "axios"


const Productpage = () => {

    const {id} = useParams();
    const [product,setProduct] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const currentDate = new Date();

    // const [selectedImage, setSelectedImage] = useState("http://localhost:4000/uploads/"+ product.photos[0]);
    useEffect(() => {
        if (!id) {
        return;
        }
        axios.get(`/product/${id}`).then(response => {
        setProduct(response.data);
        });
    }, [id]);
    
    // const handleClick = (image) => {
    //     setSelectedImage(image);
    // };

    // const handleCalendarIconClick = (ref) => {
    //     if (ref.current) {
    //         ref.current.setFocus(true); 
    //     }
    // }; 
    
    const handleStartDate = (date) => {
        if (!date) {
          setStartDate(null);
          return;
        }
        const selectedDate = date.toISOString()
        //.split('T')[0];
        setStartDate(selectedDate);
      };

      const handleEndDate = (date) => {
        if (!date) {
          setEndDate(null);
          return;
        }
        const selectedDate = date.toISOString()
        //.toISOString().split('T')[0];
        setEndDate(selectedDate);
      };
    
      async function requestProduct(ev) {
        ev.preventDefault();
        const requestData = {
          product:id,
          owner:product.owner, 
          from:startDate,
          to:endDate
        };
          await axios.post('/request', requestData);
      }


    if (!product) return '';



    
    // const startDatePickerRef = useRef(null);
    // const endDatePickerRef = useRef(null);

    console.log(product);

   

    return(
        <div className="mx-auto mt-20 flex mb-10 max-w-5xl justify-between items-start gap-4 p-3 border border-gray-300 shadow-md shadow-gray-300 rounded-md  ">
            <div className=" ml-10 mt-20 max-w-2xl">
                    <img src={"http://localhost:4000/uploads/"+product.photos[0]} alt="testing" style={{height:'350px', width:'400px'}} className="object-cover"/>
                    <div className="flex gap-2 justify-center ">
                       {/* {product.photos.map((image,index) =>
                            <img 
                            key={index} 
                            src={image} 
                            alt={`testting ${index + 1}`} 
                            style={{height:'45px', width:'45px'}} 
                            onClick={() => handleClick(image)}
                            />
                       )}  */}
                    </div>
            </div>
            <div className=" max-w-xl gap-3 " style={{padding:'20px'}}>
                   <h1 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">{product.name}</h1>
                   {/* <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                    
                    </p>  */}
                   <div className="fonts-poppins text-2xl">
                    Rs <span className="fonts-poppins text-4xl font-bold text-[#30c5d8]">{product.price}</span> per Day
                   </div>
                   <br /> 
                   <div className="border border-[#30c5d8]"></div>
                   <br />
                   <div className="max-w-0.5xl border border-gray-300 rounded-2xl gap-3" style={{padding:'20px'}}>
                        <ul className="space-y-3 pb-1">
                            <span className="fonts-poppins text-xl font-bold">Owner Details:</span>
                            <li className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                                </svg>
                                <span className="fonts-poppins text-20 font-semibold">{product.owner.name}  {product.owner.surname}</span>
                            </li>
                            
                            <li className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                <polyline points="9 22 9 12 15 12 15 22"/>
                                </svg>
                                <span className="fonts-poppins text-20 font-semibold">{product.area}</span>
                            </li>
                            <li className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <span className="fonts-poppins text-20 font-semibold"> 898745620</span>
                            </li>
                            <li>
                                <span className="fonts-poppins text-xl font-bold">Product features: </span>
                                <p>{product.description}
                                </p>
                            </li>
                        </ul>
                   </div>
                   <br />
                   <div className="flex p-4 gap-2">
                   <div className="flex-col gap-1 ">
                        <div>Rent from:</div>
                        <div className="flex gap-2">
                        <img 
                        src={calendar} 
                        alt="calendar" 
                        // onClick={() => handleCalendarIconClick(startDatePickerRef)} 
                        height={24}
                        width={24}
                         />    
                        {/* <DatePicker
                         selected={startDate} 
                         onChange={date => setStartDate(date)}
                         dateFormat= "dd/MM/yyyy"
                         className="custom-datepicker"
                         ref={startDatePickerRef}
                         /> */}
                         <DatePicker
                            selected={startDate}
                            onChange={handleStartDate}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Start Date"
                            className="custom-datepicker"
                            minDate={currentDate}
                        />
                        </div>   
                   </div>
                   <div className="flex-col gap-1">
                        <div>Rent till:</div>
                        <div className="flex gap-2">
                        <img 
                        src={calendar} 
                        alt="calendar" 
                        // onClick={() => handleCalendarIconClick(endDatePickerRef)} 
                        height={24}
                        width={24}
                         />    
                        <DatePicker
                            selected={endDate}
                            onChange={handleEndDate}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="End Date"
                            className="custom-datepicker"
                            minDate={currentDate}
                        />
                   </div>
                   </div>
                   <br />
                   <button 
                   onClick={requestProduct}
                   className="m-3 p-2 bg-primary hover:bg-primary/80 shadow-lg rounded-2xl">
                        Request product
                   </button>
            </div>
        </div>
        </div>
    );
};

export default Productpage