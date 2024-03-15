import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [gender, setGender] = useState(''); 

    const [locality, setLocality] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [pswd, setPswd] = useState('');

    const [dob, setDob] = useState(null);
    const currentDate = new Date();

    const handleDateChange = (date) => {
      if (!date) {
        setDob(null);
        return;
      }
      const selectedDate = date.toISOString().split('T')[0];
      setDob(selectedDate);
    };

    const handleGenderChange = (event) => {
      setGender(event.target.value);
    };

    async function registerUser(ev){
      ev.preventDefault();
      try{
        await axios.post("/register",{
          name,
          surname,
          gender,
          dob,
          locality,
          city,
          email,
          pswd,
        });
        alert("Registration successfull");
      }catch(e)
      {
        alert("Registration failed!");
      }
    }

  return (
    <div className="mt-4 grow mt-32">
        <h1 className='text-4xl text-center mb-4'>Register</h1>
        
        <form className='max-w-md mx-auto' onSubmit={registerUser}>
            <input type='text' 
                   placeholder='Your Name' 
                   value={name} 
                   onChange={ev => setName(ev.target.value)}/>
            <input type='text' 
                   placeholder='Your Surname'
                   value={surname} 
                   onChange={ev => setSurname(ev.target.value)}/>

            <div className='flex justify-start  py-4 text-gray-500 border rounded-2xl my-2 py-2'>
                <h4 className='mx-3'>Gender</h4>
                    <div className='ml-8'>
                        <input type='radio' 
                               id='female' 
                               name='gender'
                               value='female'
                               checked={gender === 'female'}
                               onChange={handleGenderChange}/>
                        <label htmlFor="female">Female</label>
                    </div>
                    <div className='ml-8'>
                        <input type='radio' 
                               id='male' 
                               name='gender'
                               value='male'
                               checked={gender === 'male'}
                               onChange={handleGenderChange}/>
                        <label htmlFor="male">Male</label>
                    </div>
            </div>

            <div className=" text-gray-500 flex border rounded-2xl my-2 py-2">
              <h4 className="mx-3 mt-4 mr-4">Date of Birth</h4>
              <DatePicker
                  selected={dob}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select Date of Birth"
                  yearDropdown // Enable year dropdown
                  scrollableYearDropdown // Allow scrolling through years
                  showYearDropdown={100} 
                  yearDropdownItemNumber={100}
                  maxDate={currentDate}
              />
            </div>

            <input type='text' 
                   placeholder='Your locality'
                   value={locality} 
                   onChange={ev => setLocality(ev.target.value)}/>
            
            <input type='text' 
                   placeholder='Your city'
                   value={city} 
                   onChange={ev => setCity(ev.target.value)}/>

            <input type='email' 
                   placeholder='your@email.com'
                   value={email} 
                   onChange={ev => setEmail(ev.target.value)}/>

            <input type='password' 
                   placeholder='password'
                   value={pswd} 
                   onChange={ev => setPswd(ev.target.value)}/>

            <button className='primary'>Register</button>

            <div className='text-gray-500'>Already have an account? <Link className='underline text-black' to={'/login'}>Login</Link> </div>
        </form>
    </div>
  )
}

export default RegisterPage
