import { Header } from "./components";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <div className="sm:p-4 sm:m-2 justify-between items-center background-image">
            <Header/>
            <div className="border border-b border-[#30d5c8]"></div>
            <Outlet/>    
        </div>
    );
};

export default Layout



