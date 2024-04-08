import {Routes, Route} from "react-router-dom";
import { Homepage, Productpage } from "./components";
import AddProductPage from "./components/AddProductPage";
import TransactionsPage from "./components/TransactionsPage";
import MyItems from "./components/MyItems";
import Layout from "./Layout";
import Profilepage from "./components/Profilepage";


function App(){
 return (
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route path="/" element = {<Homepage/>}/>
          <Route path="/product-details" element = {<Productpage/>}/> 
          <Route path="/my-items" element = {<MyItems/>}/>
          <Route path="/transactions" element = {<TransactionsPage/>}/>
          <Route path="/profile" element={<Profilepage/>}/>

      </Route>
    </Routes>
  )
}

export default App
