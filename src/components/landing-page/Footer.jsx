import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <div className="container flex flex-col items-center justify-center mt-20 ">
                <p className="w-full px-4 mt-8 text-4xl font-medium leading-10 text-center md:w-3/4 md:mt-8 md:text-5xl md:leading-10">Sign up today and start earning in your local currency!</p>
                <p className="w-full px-4 my-8 text-base text-center md:w-3/4 md:mt-6 md:text-base">Start getting that extra income from the comfort of your home by creating an account for free.</p>

                <span className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                    <img className="w-10 md:w-24" src="/images/arrow-left.png" alt="left-arrow" />

                    <a href="https://dashboard.freebyz.com/register"
                        rel="noopener noreferrer"
                        className="px-4 py-3 text-sm text-white rounded-full bg-customBlue md:px-6 md:py-3 md:text-lg">
                        Sign up for free
                    </a>

                    <img className="w-10 md:w-24" src="/images/arrow2.png" alt="right-arrow" />
                </span>
            </div>
            <div className="pb-10 mt-8 bg-customBlue">
                <div className="container flex flex-wrap justify-around gap-6 p-10 md:gap-20">
                    <div className="w-full lg:w-1/4 shrink-0 ">
                        <img src="/images/Freebyz-logo-white.png" alt="freebyz-logo" />
                    </div>
                    <div className="grid grid-cols-2 gap-6 md:gap-10 lg:flex-grow lg:grid-cols-4 lg:gap-3">
                        <div className="text-sm text-white md:text-lg">
                            <h1 className="my-4 font-bold font-inter">Quick links</h1>
                            <div className="flex flex-col gap-2">
                                <Link to="/" className="text-sm md:text-base font-inter">Home</Link>
                                <a href="https://dashboard.freebyz.com/register" rel="noopener noreferrer" className="text-sm md:text-base font-inter">Sign up</a>
                            </div>
                        </div>

                        <div className="text-sm text-white md:text-lg">
                            <h1 className="my-4 font-bold font-inter">Company</h1>
                            <div className="flex flex-col gap-2">
                                <Link to="/about-us" className="text-sm md:text-base font-inter">About us</Link>
                                <p className="text-sm md:text-base font-inter">Track record</p>
                                <Link to="/contact-us" className="text-sm md:text-base font-inter">FAQs</Link>
                            </div>
                        </div>

                        <div className="text-sm text-white md:text-lg">
                            <h1 className="my-4 font-bold font-inter">Legal</h1>
                            <div className="flex flex-col gap-2">
                                <Link to="/terms-of-use" className="text-sm md:text-base font-inter">Terms of use</Link>
                                <Link to="/privacy-policy" className="text-sm md:text-base font-inter">Privacy policy</Link>
                            </div>
                        </div>

                        <div className="text-sm text-white md:text-lg">
                            <h1 className="my-4 font-bold font-inter">Contact</h1>
                            <div className="flex flex-col gap-2">
                                <a href="mailto:hello@freebyz.com" className="text-sm md:text-base font-inter">Contact support</a>
                                <a href="https://tawk.to/chat/6510bbe9b1aaa13b7a78ae75/1hb4ls2fd" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-inter">Live chat</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-2 border-t border-white"></div>


                <div className="container flex flex-col items-center justify-between mt-12 md:flex-row">
                    <div className="mb-4 text-center text-white md:text-left md:mb-0">
                        <p className="text-xs md:text-base font-inter">All copyright © reserved by Freebyz {currentYear}</p>
                        <p className="text-xs md:text-base font-inter">Freebyz By Dominahl Technology LLC</p>
                    </div>
                    <div className="flex justify-center gap-4 pb-8 md:justify-start md:gap-8">
                        <a href="https://www.facebook.com/share/XzPhzupkGenQRLps/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                            <img src="/images/facebook.png" alt="facebook-icon" className="w-5 h-5 cursor-pointer" />
                        </a>
                        <a href="https://www.instagram.com/freebyzjobs?utm_source=qr&igsh=MTAyd3JqY3hvd2Judg==" target="_blank" rel="noopener noreferrer">
                            <img src="/images/freebyz-ig.png" alt="instagram-icon" className="w-5 h-5 cursor-pointer" />
                        </a>
                        <a href="https://x.com/FreebyzHQ?t=5PLw53pf5s7a86asWLDHYQ&s=08" target="_blank" rel="noopener noreferrer">
                            <img src="/images/freebyz-x.png" alt="twitter-icon" className="w-5 h-5 cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Footer;
