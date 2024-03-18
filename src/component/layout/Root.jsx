import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";


const Root = () => {
    return (
        <div className="max-w-8xl mx-auto font-roboto">
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
        
    </div>
    );
};

export default Root;