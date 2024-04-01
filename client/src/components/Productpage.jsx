// const Productpage = () => {
//     return ( 
//         <>
        
//          <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
      
//       <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
        
//         <div className="col-span-4 grid grid-cols-2 gap-4 py-10">
//           {Array.from({ length: 4 }, (_, i) => (
//             <div key={i} className="col-span-1 transition duration-150 ease-in hover:opacity-90">
//               <img
//                 src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
//                 alt="Nike Air Max 95 By You--0"
//                 className="w-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//         <div></div>
//         <div className='my-7'>
//         <div className="col-span-4 pt-8 lg:pt-0 flex-col h-[50vh] w-[60vh] ">
//           <div className="mb-7 border-b border-gray-300 pb-7">
//             <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
//               Nike Air Max 95 By You
//             </h2>
//             <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
//               The Nike Air Max 95 By You lets you take inspiration from the human body itself. The
//               midsole represents the spine, graduated panels are the muscles, the lace loops are the
//               shoe&apos;s ribs and the mesh in the upper is the skin.
//             </p>
//             <div className="mt-5 flex items-center ">
//               <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
//                 $40.00
//               </div>
              
//             </div>
//           </div>
          
          
//           <div className="py-6 ">
//             <ul className="space-y-5 pb-1 text-sm">
//               <li>
//                 <span className="text-heading inline-block pr-2 font-semibold">Name: </span>
//                 Nike Air Max Shoes
//               </li>
//               <li>
//                 <span className="text-heading inline-block pr-2 font-semibold">Category: </span>
//                 <a className="hover:text-heading transition hover:underline" href="#">
//                   Shoes
//                 </a>
//               </li>
//               <li className="productTags">
//                 <span className="text-heading inline-block pr-2 font-semibold">Owner's name:</span>
//                 <a
//                   className="hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline"
//                   href="#"
//                 >
//                   Charles Leclerc
//                 </a>
//                 </li>
//                 <li className="owner">
//                 <span className="text-heading inline-block pr-2 font-semibold">Owner's address:</span>
//                 <a
//                   className="hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline"
//                   href="#"
//                 >
//                   Monaco city, djddvn, dhudhudhi, 457679
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
            
//             <button
//               type="button"
//               className="h-11 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//             >
//               Rent the Product
//             </button>
//           </div>
          
//         </div>
//       </div>
//     </div>
//     </div>
    

//         </>
//      );
// }
 
// export default Productpage
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {calendar,test1} from "../assets"


const Productpage = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const startDatePickerRef = useRef(null);
    const endDatePickerRef = useRef(null);

    const handleCalendarIconClick = (ref) => {
        if (ref.current) {
            ref.current.setFocus(true); // Focus on the datepicker input field
        }
    };    
    return(
        <div className="mx-auto mt-20 flex  max-w-4xl items-start gap-4 p-3 border border-gray-300 shadow-md shadow-gray-300 rounded-md  ">
            <div className=" mt-20 max-w-2xl">
                <img src={test1} alt="testimg" style={{height:'300px', width:'300px'}} />
            </div>
            <div className=" max-w-xl gap-3 " style={{padding:'20px'}}>
                   <h1 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">Product name</h1>
                   <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, aperiam.
                     Porro ad cum assumenda reprehenderit voluptas molestias nemo esse debitis.</p> 
                   <div className="fonts-poppins text-2xl">
                    Rs <span className="fonts-poppins text-4xl font-bold text-[#30c5c8]">99</span> per Day
                   </div>
                   <br /> 
                   <div className="border border-[#30c5d8]"></div>
                   <br />
                   <div className="max-w-0.5xl border border-gray-300 rounded-2xl gap-3" style={{padding:'20px'}}>
                        <ul className="gap-3">
                            <li><span className="fonts-poppins text-xl font-bold">Owner's name: </span>absc xyz</li>
                            <li><span className="fonts-poppins text-xl font-bold">Owner's address: </span>absc xyz</li>
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