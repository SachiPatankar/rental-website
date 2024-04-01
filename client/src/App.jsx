import './App.css'
import {Routes,Route} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import IndexPage from './pages/IndexPage';
import Layout from '../Layout';
import RegisterPage from './pages/RegisterPage';
import TransactionsPage from './pages/TransactionsPage';

import axios from 'axios';
import { UserContextProvider } from './pages/UserContext';
import AccountPage from './pages/TransactionsPage';
import ProfilePage from './pages/ProfilePage';
import Chatbot from './pages/ChatPage';

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

        <Route path="/transactions" element = {<TransactionsPage/>}/>
        <Route path="/myprofile" element = {<ProfilePage/>}/>
        <Route path="/chat" element= {<Chatbot/>}/>
        
      </Routes>
    </UserContextProvider>
  )
}

export default App
