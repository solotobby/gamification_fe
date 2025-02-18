import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <div className="container flex flex-col items-center justify-center mt-20 ">
                <p className="w-full px-4 mt-8 text-4xl font-medium leading-10 text-center md:w-3/4 md:mt-8 md:text-5xl md:leading-10">Sign up today and start earning in your local currency!</p>
                <p className="w-full px-4 my-8 text-base text-center md:w-3/4 md:mt-6 md:text-base">Start getting that extra income from the comfort of your home by creating an account for free.</p>

                <span className="flex items-center gap-8 md:gap-8">
                    <img className="w-16 md:w-auto" src="/images/arrow-left.png" alt="left-arrow" />
                    <a href="https://dashboard.freebyz.com/register" rel="noopener noreferrer" className="px-4 py-4 text-base text-white rounded-full bg-customBlue md:px-4 md:py-2 md:text-xl">Sign up for free</a>

                    <img className="w-16 md:w-auto" src="/images/arrow2.png" alt="right-arrow" />
                </span>
            </div>
            <div className="pb-10 mt-8 bg-customBlue">
                <div className="container flex flex-wrap justify-around gap-5 p-10">

                    <div className="w-full lg:w-1/4 shrink-0 ">
                        <img src="/images/Freebyz-logo-white.png" alt="freebyz-logo" />
                    </div>
                    <div className="grid grid-cols-2 gap-10 lg:flex-grow lg:grid-cols-4 lg:gap-3">
                        <div className="text-base text-white md:text-xl">
                            <h1 className="my-4 font-bold font-inter">Quick links</h1>
                            <div className="flex flex-col gap-2">

                                <Link to='/' className="text-base font-inter">Home</Link>
                                {/* <Link to='/make-money' className="text-base font-inter">Make money</Link> */}

                                <a href="https://dashboard.freebyz.com/register" rel="noopener noreferrer" className="text-base font-inter">Sign up</a>

                            </div>
                        </div>

                        <div className="text-base text-white md:text-xl">
                            <h1 className="my-4 font-bold font-inter">Company</h1>
                            <div className="flex flex-col gap-2">
                                <Link to='/about-us' className="text-base font-inter">About us</Link>
                                <p className="text-base font-inter">Track record</p>
                                <Link to='/contact-us' className="text-base font-inter">FAQs</Link>
                            </div>
                        </div>

                        <div className="text-base text-white md:text-xl">
                            <h1 className="my-4 font-bold font-inter">Legal</h1>
                            <div className="flex flex-col gap-2">
                                <Link to='/terms-of-use' className="text-base font-inter" >Terms of use</Link>
                                <Link to='/privacy-policy' className="text-base font-inter">Privacy policy</Link>
                            </div>
                        </div>

                        <div className="text-base text-white md:text-xl">
                            <h1 className="my-4 font-bold font-inter">Contact</h1>
                            <div className="flex flex-col gap-2">
                                <Link to='/' className="text-base font-inter">Contact support</Link>
                                <a
                                    href="https://tawk.to/chat/6510bbe9b1aaa13b7a78ae75/1hb4ls2fd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base font-inter"
                                >
                                    Live chat
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-4 border-t border-white"></div>

                <div className="container flex flex-col justify-between mt-6 md:flex-row ">
                    <div className="mb-4 text-white md:mb-0">
                        <p className="text-base font-inter">All copyright © reserved by Freebyz {currentYear}</p>
                        <p className="text-base font-inter">Freebyz By Dominahl Technology LLC</p>
                    </div>
                    <div className="flex gap-4 pb-8 md:gap-8">
                        <a
                            href="https://www.facebook.com/share/XzPhzupkGenQRLps/?mibextid=qi2Omg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/images/facebook.png"
                                alt="facebook-icon"
                                className="w-5 h-5 cursor-pointer"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/freebyzjobs?utm_source=qr&igsh=MTAyd3JqY3hvd2Judg=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/images/freebyz-ig.png"
                                 alt="instagram-icon"
                                className="w-5 h-5 cursor-pointer"
                            />
                        </a>
                        <a
                            href="https://x.com/FreebyzHQ?t=5PLw53pf5s7a86asWLDHYQ&s=08"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/images/freebyz-x.png"
                                 alt="twitter-icon"
                               className="w-5 h-5 cursor-pointer"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
