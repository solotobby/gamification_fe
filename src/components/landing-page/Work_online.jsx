const Work_online = () => {
    return (
        <div className="flex flex-col justify-center background-map">
            <div className="container relative flex items-center justify-between">
                <div className="overflow-hidden w-96">
                    <div>
                        <h1 className="mt-20 text-5xl font-medium font-bricolage-grotesque">Work online and earn daily in dollar and naira!</h1>
                    </div>
                    <p className="max-w-2xl mt-8">Hire online workers to increase your business visibility and organic growth through engagements on Facebook, Instagram, YouTube, TikTok, WhatsApp and Twitter.</p>
                    <button className="px-4 py-2 my-6 text-white rounded-full mx-4t-6 p bg-customBlue">Sign up for free</button>
                </div>

                <div className="relative w-[40%] shrink-0 flex justify-end">
                    <span className="absolute right-0 top-[30%] z-10 p-4 flex flex-col items-center shadow-xl border-[1px] border-slate-100 bg-white rounded-md ">
                        <img src="/images/greenwallet.png" alt="green-wallet" />
                        <h1>#10,000.00</h1>
                        <p>Payout successful</p>
                    </span>

                    <span className="absolute bottom-0 left-0 z-10  shadow-xl border-[1px] border-slate-100 bg-white rounded-md p-6">
                        <div className="flex items-center justify-between gap-4">
                            <h1>Balance</h1>
                            <button className="px-2 py-1 text-sm text-white rounded-full bg-customBlue">Withdraw</button>
                            <div className="container my-4 border-t border-red"></div>
                        </div>
                        <p className="mt-3">#500,000.00</p>
                    </span>
                    <img  src="/images/prince-akachi-i2hoD-C2RUA-unsplash-removebg-preview 1.png" alt="akachi" className="w-full h-auto" />
                </div>
            </div>
        </div>
    )
}

export default Work_online;