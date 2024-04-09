import React from 'react'
import {Outlet} from 'react-router-dom';
import Header from './src/pages/Header';
import Categorybar from './src/pages/CategoryBar';

const Layout = () => {
  return (
    <div className='pt-4 min-h-screen flex flex-col' >
        <Header/>
        <Categorybar/>
        <Outlet />
   
    </div>
  )
}

export default Layout