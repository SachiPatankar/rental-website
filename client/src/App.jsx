import './App.css'
import {Routes,Route} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import IndexPage from './pages/IndexPage';
import Layout from '../Layout';
import RegisterPage from './pages/RegisterPage';

import axios from 'axios';
import { UserContextProvider } from './pages/UserContext';

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>

        <Route path="/" element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
        </Route>
        
      </Routes>
    </UserContextProvider>
  )
}

export default App
