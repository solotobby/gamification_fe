import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 right-0 w-full z-[100] bg-white py-3">
            <div className="container flex items-center justify-between md:flex-row">
                <Link to="/"> <img src="/images/freebyzlogo-blue.png" alt="freebyz-logo" /></Link>
                <img className="flex md:hidden" src="/images/menu-icon.png" onClick={() => setMenuOpen(!menuOpen)} alt="menu-icon" />
                <div className={`md:hidden side-bar ${menuOpen ? 'show' : ''}`}>
                    <p onClick={() => setMenuOpen(!menuOpen)}>X</p>
                    <Link to="/" className="block py-2" onClick={() => setMenuOpen(!menuOpen)}>Home</Link>
                    <Link to="/" className="block py-2" onClick={() => setMenuOpen(!menuOpen)}>Make money</Link>
                    <Link to='/about-us' className="block py-2" onClick={() => setMenuOpen(!menuOpen)}>About us</Link>
                    <Link to='/contact-us' className="block py-2" onClick={() => setMenuOpen(!menuOpen)}>Contact</Link>
                    <Link to="/register" className="block py-2" onClick={() => setMenuOpen(!menuOpen)}>Sign up for free</Link>
                    <Link to="/login" className="block py-2" onClick={() => setMenuOpen(!menuOpen)}>Login</Link>
                </div>
                <div className="items-center hidden gap-6 md:flex">
                    <Link to="/" className="py-2">Home</Link>
                    <Link to="/" className="py-2">Make money</Link>
                    <Link to='/about-us' className="py-2">About us</Link>
                    <Link to='/contact-us' className="py-2">Contact</Link>
                </div>
                <div className="items-center hidden gap-6 md:flex">
                    <Link to="/login" ><button className="py-2">Login</button></Link>
                    <Link to="/register"><button className="p-4 text-white rounded-full bg-customBlue">Sign up for free</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
