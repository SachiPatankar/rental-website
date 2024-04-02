
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {calendar,test1,test2,test3,test4} from "../assets"

const imagesDisplay = [
        test1,
        test2,
        test3,
        test4,
]
const Productpage = () => {
    const [selectedImage, setSelectedImage] = useState(imagesDisplay[0]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const startDatePickerRef = useRef(null);
    const endDatePickerRef = useRef(null);

    const handleClick = (image) => {
        setSelectedImage(image);
    };

    const handleCalendarIconClick = (ref) => {
        if (ref.current) {
            ref.current.setFocus(true); 
        }
    };  

    return(
        <div className="mx-auto mt-20 flex  max-w-5xl justify-between items-start gap-4 p-3 border border-gray-300 shadow-md shadow-gray-300 rounded-md  ">
            <div className=" ml-10 mt-20 max-w-2xl">
                    <img src={selectedImage} alt="testing" style={{height:'350px', width:'350px'}} />
                    <div className="flex gap-2 justify-center">
                       {imagesDisplay.map((image,index) =>
                            <img 
                            key={index} 
                            src={image} 
                            alt={`testting ${index + 1}`} 
                            style={{height:'45px', width:'45px'}} 
                            onClick={() => handleClick(image)}
                            />
                       )} 
                    </div>
            </div>
            <div className=" max-w-xl gap-3 " style={{padding:'20px'}}>
                   <h1 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">Product name</h1>
                   <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, aperiam.
                     Porro ad cum assumenda reprehenderit voluptas molestias nemo esse debitis.</p> 
                   <div className="fonts-poppins text-2xl">
                    Rs <span className="fonts-poppins text-4xl font-bold text-[#30c5d8]">99</span> per Day
                   </div>
                   <br /> 
                   <div className="border border-[#30c5d8]"></div>
                   <br />
                   <div className="max-w-0.5xl border border-gray-300 rounded-2xl gap-3" style={{padding:'20px'}}>
                        <ul className="space-y-3 pb-1">
                            <span className="fonts-poppins text-xl font-bold underline">Owner Details:</span>
                            <li className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                                </svg>
                                <span className="fonts-poppins text-20 font-semibold">Asmita Wadekar </span>
                            </li>
                            
                            <li className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                <polyline points="9 22 9 12 15 12 15 22"/>
                                </svg>
                                <span className="fonts-poppins text-20 font-semibold">Baner, Pune-46 </span>
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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Inventore illum similique, id omnis tempora quis.
                                </p>
                            </li>
                        </ul>
                   </div>
                   <br />
                   <div className="flex ">
                   <div className="flex gap-1 ">
                        <label>Rent from:</label>
                        <div className="flex">
                        <img 
                        src={calendar} 
                        alt="calendar" 
                        onClick={() => handleCalendarIconClick(startDatePickerRef)} 
                        className="cursor-pointer bg-[#30c5d8] rounded-lg"
                         />    
                        <DatePicker
                         selected={startDate} 
                         onChange={date => setStartDate(date)}
                         dateFormat= "dd/MM/yyyy"
                         className="custom-datepicker"
                         ref={startDatePickerRef}
                         />
                        </div>   
                   </div>
                   <div className="flex gap-1">
                        <label>to:</label>
                        <div className="flex">
                        <img 
                        src={calendar} 
                        alt="calendar" 
                        onClick={() => handleCalendarIconClick(endDatePickerRef)} 
                        className="cursor-pointer bg-[#30c5d8] rounded-lg"
                         />    
                        <DatePicker
                         selected={endDate} 
                         onChange={date => setEndDate(date)}
                         dateFormat= "dd/MM/yyyy"
                         className="custom-datepicker"
                         ref={endDatePickerRef}
                         />
                        </div>   
                   </div>
                   </div>
                   <br />
                   <button className="py-2 px-6 bg-[#30c5d8] hover:bg-[#30c5d8]/80 shadow-lg ">
                        Request product
                   </button>
            </div>
        </div>
    );
};

export default Productpage