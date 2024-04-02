import {Routes, Route} from "react-router-dom";
import { Homepage, Productpage } from "./components";
import Layout from "./Layout";


function App(){
 return (
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route path="/" element = {<Homepage/>}/>
          <Route path="/product-details" element = {<Productpage/>}/>    
      </Route>
    </Routes>
  )
}

export default App
