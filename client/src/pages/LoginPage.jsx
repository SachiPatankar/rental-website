import React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from "axios";
import { UserContext } from './UserContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [redirect, setRedirect] = useState(false);
  
  
  const {setUser} = useContext(UserContext);
  
  
  const handleLoginSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const {data} = await axios.post("/login", { email, pswd });
      setUser(data);
      alert("Login successful");
      setRedirect(true);
    } catch (e) {
      alert("Login failed!");
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mt-4 grow mt-48">
      <h1 className='text-4xl text-center mb-4'>Login</h1>
      <form className='max-w-md mx-auto' onSubmit={handleLoginSubmit}>
        <input type='email'
               placeholder='your@email.com'
               value={email}
               onChange={(ev) => setEmail(ev.target.value)} />

        <input type='password'
               placeholder='password'
               value={pswd}
               onChange={(ev) => setPswd(ev.target.value)} />

        <button className='primary'>Login</button>
        <div className='text-gray-500'>
          Don't have an account yet? <Link className='underline text-black' to='/register'>Register Now</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
