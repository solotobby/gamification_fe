import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WorkOnline = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [
        {
            src: "/images/black-boy.png",
            spans: (
                <>
                    <span className="absolute right-0 top-[30%] md:top-[20%] z-10 p-2 md:p-4 flex flex-col items-center shadow-xl border-[1px] border-slate-100 bg-white rounded-md">
                        <img src="/images/greenwallet.png" alt="green-wallet" />
                        <h2 className="text-base md:text-base">&#8358;10,000.00</h2>
                        <p className="text-base md:text-base">Payout successful</p>
                    </span>
                    <span className="absolute bottom-0 left-0 z-10 shadow-xl border-[1px] border-slate-100 bg-white rounded-md p-2 md:p-4">
                        <div className="flex items-center justify-between gap-4">
                            <h3 className="text-base md:text-base">Balance</h3>
                            <button className="px-2 py-1 text-base text-white rounded-full bg-customBlue">Withdraw</button>
                        </div>
                        <div className="container my-4 border-t border-black-200"></div>
                        <p className="mt-3">&#8358;500,000.00</p>
                        <div className="container my-4 border-t border-black-800"></div>
                    </span>
                </>
            ),
        },
        {
            src: "/images/young-lady.png",
            spans: (
                <>
                    <span className="absolute right-0 bottom-0 md:bottom-0 z-10 p-2 md:p-4 flex flex-col items-center shadow-xl border-[1px] border-slate-100 bg-white rounded-md">
                        <img src="/images/market-icon.png" alt="stock-market-icon" />
                        <p>525%</p>
                        <p className="px-2 py-1 text-base text-gray-400 rounded-full text-gre">Engagement Rate</p>
                        <p className="mt-3">+27.33%</p>
                       
                    </span>
                    <span className="absolute top-[20%] left-0 z-10 shadow-xl border-[1px] border-slate-100 bg-white rounded-md p-2 md:p-4">
                        <div className="flex items-center justify-between gap-4">
                            <img src="/images/yellow-safelock.png" alt="yellow-safelock" />
                            <div>
                                <h2 className="text-base md:text-base">&#36;750.50</h2>
                                <p className="text-base md:text-base">Locked Balance</p>
                            </div>
                        </div>
                    </span>
                </>
            ),
        },
        {
            src: "/images/yellow.png",
            spans: (
                <>
                    <span className="absolute left-[70%] top-[30%] md:top-[20%] z-10 p-2 md:p-4 flex flex-col items-center shadow-xl border-[1px] border-slate-100 bg-white rounded-md">
                        <div className="flex flex-col items-center justify-between gap-2">
                            <h3 className="text-base">Engagement Rate</h3>
                            <img src="/images/engagement-rate.png" alt="engagement-rate-graph" />
                        </div>
                    </span>
                    <span className="absolute bottom-0 left-0 z-10 shadow-xl border-[1px] border-slate-100 bg-white rounded-md p-2 md:p-4 flex flex-col items-center">
                        <img src="/images/show-love-icon.png" alt="green-wallet" />
                        <h2 className="text-base md:text-base">10,000</h2>
                        <h2 className="text-base text-gray-400 md:text-base">Post Impressions</h2>
                        <p className="text-base text-green-500">+300%</p>
                    </span>
                </>
            ),
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="flex flex-col justify-center pt-24 background-map">
            <div className="container relative flex flex-col items-center justify-between md:flex-row">
                <div className="overflow-hidden md:w-96">
                    <div>
                        <h1 className="mt-2 text-2xl font-medium font-bricolage-grotesque md:mt-20 md:text-5xl">
                            Work online and earn daily in dollar and naira!
                        </h1>
                    </div>
                    <p className="max-w-2xl mt-8">
                        Hire online workers to increase your business visibility and organic growth through engagements on Facebook, Instagram, YouTube, TikTok, WhatsApp, and Twitter.
                    </p>
                    <Link to="/registration">
                        <button className="px-4 py-2 mx-auto my-6 text-white rounded-full md:mx-4 bg-customBlue">
                            Sign up for free
                        </button>
                    </Link>
                    
                </div>

                <div className="relative w-full md:w-[40%] shrink-0 flex justify-end">
                    <div>
                        <img src={images[imageIndex].src} alt="current" className="w-full h-auto" />
                        {images[imageIndex].spans}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkOnline;