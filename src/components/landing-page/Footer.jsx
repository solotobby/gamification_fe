import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div >
            <div className="container flex flex-col items-center justify-center mt-20">
                <p className="w-full px-4 mt-8 text-4xl font-medium leading-10 text-center md:w-3/4 md:mt-8 md:text-5xl md:leading-10">Sign up today and start earning in naira and dollars!</p>
                <p className="w-full px-4 mt-4 text-base text-center md:w-3/4 md:mt-6 md:text-lg">Start getting that extra income from the comfort of your home by creating an account for free.</p>

                <span className="flex items-center gap-8 md:gap-8">
                    <img className="w-16 md:w-auto" src="/images/arrow-left.png" alt="left-arrow" />
                    <button className="px-4 py-2 text-sm text-white rounded-full bg-customBlue md:px-2 md:py-2 md:text-xl">Sign up for free</button>
                    <img className="w-16 md:w-auto" src="/images/arrow2.png" alt="right-arrow" />
                </span>
            </div>
            <div className="pb-10 mt-8 bg-customBlue">
                <div className="container flex flex-wrap justify-around gap-5 p-10">

                    <div className="w-full lg:w-1/4 shrink-0 ">
                        <img src="/images/Freebyz-logo-white.png" alt="freebyz-logo"/>
                    </div>
                  <div className="grid grid-cols-2 gap-10 lg:flex-grow lg:grid-cols-4 lg:gap-3">
                    <div className="text-sm text-white md:text-xl">
                            <h1 className="my-4 font-bold">Quick links</h1>
                            <div className="flex flex-col gap-2">
                                <p >Home</p>
                                <p >Make money</p>
                                <p >Login</p>
                                <p >Sign up</p>
                            </div>
                        </div>

                        <div className="text-sm text-white md:text-xl">
                            <h1 className="my-4 font-bold">Company</h1>
                            <div className="flex flex-col gap-2">
                                <Link to='/about-us' >About us</Link>
                                <p >Track record</p>
                                <Link to='/contact-us' >FAQs</Link>
                            </div>
                        </div>

                        <div className="text-sm text-white md:text-xl">
                            <h1 className="my-4 font-bold">Legal</h1>
                            <div className="flex flex-col gap-2">
                                <Link to='/terms-of-use' >Terms of use</Link>
                                <Link to='/privacy-policy' >Privacy policy</Link>
                            </div>
                        </div>

                        <div className="text-sm text-white md:text-xl">
                            <h1 className="my-4 font-bold">Contact</h1>
                            <div className="flex flex-col gap-2">
                                <p>Contact support</p>
                                <p>Live chat</p>
                            </div>
                        </div>
                  </div>
                </div>

                <div className="container my-4 border-t border-white"></div>

                <div className="container flex flex-col justify-between mt-6 md:flex-row ">
                    <div className="mb-4 text-white md:mb-0">
                        <p>All copyright © reserved by Freebyz 2024</p>
                        <p>Freebyz By Dominahl Technology LLC</p>
                    </div>
                    <div className="flex gap-4 pb-8 md:gap-8">
                        <img src="/images/freebyz-facebook.png" alt="facebook-icon" className="w-4 h-4" />
                        <img src="/images/freebyz-ig.png" alt="instagram-icon" className="w-4 h-4" />
                        <img src="/images/freebyz-x.png" alt="twitter-icon" className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
