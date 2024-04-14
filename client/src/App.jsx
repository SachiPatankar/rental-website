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
import ChatComponent from './pages/ChatComponent.jsx';
import AddProductPage from './pages/AddProductPage';
import Productpage from './pages/ProductPage';
import MyItems from './pages/MyItems';
import NotificationPage from './pages/NotificationPage';
import IncomingRequestPage from './pages/IncomingRequestPage';
import SearchResults from './pages/SearchResults.jsx';

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
          <Route path="/:category" element={<IndexPage/>}/>


          <Route path="/product" element={<Productpage/>}/>
          <Route path="/product/:id" element={<Productpage/>}/>
          <Route path="/search" element={<SearchResults />} />
        
        </Route>

        <Route path="/addproduct" element= {<AddProductPage/>}/>
        <Route path="/addproduct/:id" element= {<AddProductPage/>}/>


        <Route path="/transactions" element = {<TransactionsPage/>}/>
        <Route path="/myitems" element = {<MyItems/>}/>
        <Route path="/myprofile/:id" element = {<ProfilePage/>}/>
        <Route path="/chat" element= {<ChatComponent/>}/>
        <Route path="/notifications" element= {<NotificationPage/>}/>
        <Route path="/incoming" element = {<IncomingRequestPage/>}/>
        

        
        
      </Routes>
    </UserContextProvider>
  )
}

export default App
