import Navbar from "../components/Navbar";
import {Outlet} from 'react-router-dom'
import Footer from "../components/footer";


const Main = () => {
    return (
        <div className="bg-[#E6E6FA]">
            {/* Navbar */}
            <Navbar></Navbar>


            {/* Outlet */}
            <div className="min-h-[calc(100vh-302px)]">
                <Outlet></Outlet>
            </div>


            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Main;