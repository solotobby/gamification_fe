const OurGoal = () => {
    return (
        <div className="my-8">
            <div className="my-8 bg-customGray">
                <div className="container flex flex-col md:flex-row">
                    <div className="flex flex-col justify-center items-left md:items-start">
                        <h1 className="pt-6 mb-6 text-2xl font-bold text-left">Our goal</h1>
                        <p className="w-full px-4 md:w-2/5 md:px-0">
                            Asides putting a smile on many faces by providing a mean to earn online, we aim at supporting hardworking creators,
                            business owners, and organizations to gain meaningful organic engagement that will translate to massive sales.
                            Although our platform allows you work, play a game and win cash, airtime and data rewards,
                            it also a platform built to inspire you to get knowledge, be kind to the world and extend a helping hand.
                            The goal is a build a community that is ready to give value and earn from it.
                        </p>
                    </div>
                    <div className="w-full py-8 my-8 md:w-4/5 md:py-20">
                        <img src="/images/Clapping.png" alt="ourgoal-image" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurGoal;