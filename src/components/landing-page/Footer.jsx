import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div >
            <div className="flex flex-col items-center justify-center mt-8">
                <p className="w-2/4 mt-8 text-4xl font-medium leading-10 text-center">Sign up today and start earning in naira and dollars!</p>
                <p className="w-3/4 mt-6 text-center">Start getting that extra income from the comfort of your home by creating an account for free.</p>
                <span className="flex items-center gap-8">
                    <img src="/images/arrow-left.png" alt="arrows" />
                    <button className="px-4 py-2 text-white rounded-full bg-customBlue">Sign up for free</button>
                    <img src="/images/arrow2.png" alt="arrows"  />
                </span>
            </div>
            <div className="mt-8 bg-customBlue">
                <div className="container flex justify-around p-10">
                    <div>
                        <img src="/images/Freebyz-logo-white.png" alt="freebyz-logo" />
                    </div>

                    <div className="text-white ">
                        <h1>Quick links</h1>
                        <p>Home</p>
                        <p>Make money</p>
                        <p>Login</p>
                        <p>Sign up</p>
                    </div>

                    <div className="text-white ">
                        <h1>Company</h1>
                        <Link to='/about-us'>About us</Link>
                        <p>Track record</p>
                        <Link to='/contact-us'>FAQs</Link>
                    </div>

                    <div className="text-white ">
                        <h1>Legal</h1>
                        <Link to='/terms-of-use'>Terms of use</Link>
                        <Link to='/privacy-policy'>Privacy policy</Link>
                    </div>
                
                    <div className="text-white ">
                            <Link to='/contact-us'>Contact</Link>
                            <p>Contact support</p>
                            <p>Live chat</p>
                    </div>
                </div>

                <div className="container my-4 border-t border-white"></div>

                <div className="container flex justify-between mt-10">
                    <div className="text-white">
                        <p>All copyright © reserved by Freebyz 2024</p>
                        <p>Freebyz By Dominahl Technology LLC</p>
                    </div>

                    <div className="flex my-8">
                        <img src="/images/freebyz-facebook.png" alt="facebook-icon" />
                        <img src="/images/freebyz-ig.png" alt="instagram-icon" />
                        <img src="/images/freebyz-x.png" alt="twitter-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
