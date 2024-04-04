import { useState, useEffect } from "react";

const WorkOnline = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [
        "/images/prince-akachi-i2hoD-C2RUA-unsplash-removebg-preview 1.png",
        "/images/christian-buehner-JQFHdpOKz2k-unsplash-removebg-preview 1.png",
        "/images/stephanie-liverani-Zz5LQe-VSMY-unsplash-removebg-preview 1.png"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="flex flex-col justify-center background-map">
            <div className="container relative flex flex-col items-center justify-between md:flex-row">
                <div className="overflow-hidden md:w-96">
                    <div>
                        <h1 className="mt-2 text-2xl font-medium font-bricolage-grotesque md:mt-20 md:text-5xl">Work online and earn daily in dollar and naira!</h1>
                    </div>
                    <p className="max-w-2xl mt-8">Hire online workers to increase your business visibility and organic growth through engagements on Facebook, Instagram, YouTube, TikTok, WhatsApp and Twitter.</p>
                    <button className="px-4 py-2 mx-auto my-6 text-white rounded-full md:mx-4 bg-customBlue">Sign up for free</button>
                </div>

                <div className="relative w-full md:w-[40%] shrink-0 flex justify-end">
                    <img src={images[imageIndex]} alt="akachi" className="w-full h-auto" />

                    <span className="absolute right-0 top-[30%] md:top-[20%] z-10 p-2 md:p-4 flex flex-col items-center shadow-xl border-[1px] border-slate-100 bg-white rounded-md">
                        <img src="/images/greenwallet.png" alt="green-wallet" />
                        <h2 className="text-sm md:text-base">#10,000.00</h2>
                        <p className="text-sm md:text-base">Payout successful</p>
                    </span>

                    <span className="absolute bottom-0 left-0 z-10 shadow-xl border-[1px] border-slate-100 bg-white rounded-md p-2 md:p-4">
                        <div className="flex items-center justify-between gap-4">
                            <h3 className="text-sm md:text-base">Balance</h3>
                            <button className="px-2 py-1 text-sm text-white rounded-full bg-customBlue">Withdraw</button>
                            <div className="container my-4 border-t border-red"></div>
                        </div>
                        <p className="mt-3">#500,000.00</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default WorkOnline;