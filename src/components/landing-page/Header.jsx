import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    return (
        <div className="my-9">
            <div className="container flex items-center justify-between">

                <Link to="/"> <img src="/images/freebyzlogo-blue.png" alt="freebyz-logo" /></Link>
                <img className="flex md:hidden" src="/images/menu-icon.png" onClick={() => setSideBarOpen(!sideBarOpen)} alt="menu-icon" />

               
                <div className={`gap-8 ${sideBarOpen ? 'block' : 'hidden'} md:flex`}>
                    <Link to="/">Home</Link>
                    <Link to="/make-money">Make money</Link>
                    <Link to='/contact-us'>FAQs</Link>
                    <Link to='/about-us'>About us</Link>
                    <Link to='/contact-us'>Contact</Link>
                </div>

                <div className="items-center hidden gap-6 md:flex">
                    <p>Login</p>
                    <button className="p-4 text-white rounded-full bg-customBlue">Sign up for free</button>
                </div>
            </div>
        </div>
    );
}

export default Header;