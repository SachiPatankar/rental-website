import React from 'react'
import {Link} from 'react-router-dom'


const LoginPage = () => {
  return (
    <div className="mt-4 grow mt-48">
        <h1 className='text-4xl text-center mb-4'>Login</h1>
        <form className='max-w-md mx-auto'>
            <input type='email' placeholder='your@email.com'/>
            <input type='password' placeholder='password'/>
            <button className='primary'>Login</button>
            <div className='text-gray-500'>Don't have an account yet? <Link className='underline text-black' to={'/register'}>Register Now</Link> </div>
            </form>
    </div>
  )
}

export default LoginPage