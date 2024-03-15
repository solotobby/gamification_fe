const Work_online = () => {
    return (
        <div className="flex justify-evenly">
            <div className="overflow-hidden w-96">
                <div>
                    <h1 className="mt-20 text-5xl font-medium font-bricolage-grotesque">Work online and earn daily in dollar and naira!</h1>
                </div>
                <p className="max-w-2xl mt-8">Hire online workers to increase your business visibility and organic growth through engagements on Facebook, Instagram, YouTube, TikTok, WhatsApp and Twitter.</p>
                <button className="p-4 mt-6 text-white rounded-full bg-customBlue">Sign up for free</button>
            </div>

            <div>
                <img  src="/images/prince-akachi-i2hoD-C2RUA-unsplash-removebg-preview 1.png" alt="akachi" className="w-4/5 h-auto" />
                <div className="absolute top-0 left-0">
                    <img src="/public/images/Group1.png" alt="Small Image 1" className="absolute top-0 left-0" style={{ transform: 'translate(-50%, -50%)' }} />
                    <img src="/public/images/Group2.png" alt="Small Image 2" className="absolute bottom-0 right-0" style={{ transform: 'translate(50%, 50%)' }} />
                </div>
            </div>
        </div>
    )
}

export default Work_online;