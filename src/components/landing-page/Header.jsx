import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 right-0 w-full z-[100] bg-white py-6">
            <div className="container flex items-center justify-between md:flex-row">
                <Link to="/">
                    <img src="/images/freebyzlogo-blue.png"
                    alt="freebyz-logo"
                    className="w-24 md:w-auto"
                    />
                    
                </Link>
                    
                <img className="flex md:hidden" src="/images/menu-icon.png" onClick={() => setMenuOpen(!menuOpen)} alt="menu-icon" />
                <div className={`md:hidden side-bar ${menuOpen ? 'show' : ''}`}>
                    <p className="text-3xl text-blue-500" onClick={() => setMenuOpen(!menuOpen)}>x</p>
                    <Link to="/" className="block py-2" onClick={() => setMenuOpen(!menuOpen)}>Home</Link>
                    {/* <Link to="/make-money" className="block py-2" onClick={() => setMenuOpen(!menuOpen)}>Make money</Link> */}
                    <Link to="/affiliate" className="block py-2" onClick={() => setMenuOpen(!menuOpen)}>Affiliate Program</Link>
                    <Link to='/about-us' className="block py-2" onClick={() => setMenuOpen(!menuOpen)}>About us</Link>
                    <Link to='/contact-us' className="block py-2" onClick={() => setMenuOpen(!menuOpen)}>Contact</Link>
                    <a
                        href="https://dashboard.freebyz.com/register"
                        className="block py-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        Sign up for free
                    </a>

                    <a
                        href="https://dashboard.freebyz.com/login"
                        className="block py-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        Login
                    </a>
                </div>
                <div className="items-center hidden gap-12 md:flex">
                    <Link to="/" className="py-2">Home</Link>
                    <Link to="/affiliate" className="py-2">Affiliate Program</Link>
                    {/* <Link to="/make-money" className="py-2">Make money</Link> */}
                    <Link to='/about-us' className="py-2">About us</Link>
                    <Link to='/contact-us' className="py-2">Contact</Link>
                </div>
                <div className="items-center hidden gap-6 md:flex">
                    <a href="https://dashboard.freebyz.com/login" rel="noopener noreferrer" className="py-2">Login</a>

                    <a href="https://dashboard.freebyz.com/register" rel="noopener noreferrer" className="inline-block p-4 text-white rounded-full bg-customBlue">Sign up for free</a>


                </div>
            </div>
        </div>
    );
}

export default Header;