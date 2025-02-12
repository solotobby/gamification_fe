const OurGoal = () => {
    return (
        <div className="my-8">
            <div className="my-8 text-white bg-blue-500">
                <div className="container flex flex-col justify-between md:flex-row">
                    <div className="flex flex-col justify-center items-left md:items-start md:w-[40%] w-full shrink-0">
                        <h1 className="pt-6 mb-6 text-4xl font-bold text-left">Our goal</h1>
                        <p className="w-full text-xl">
                        We want to put smiles on the faces of online workers who may not have tech skills to work online while supporting creators/businesses to grow their user base and social engagement organically. Our dream is to be the best provider of access to micro tasks that is accessible globally by anyone and everyone.
                        </p>
                    </div>
                    <div className="w-full py-8 my-8 md:py-20 md:w-[40%] shrink-0">
                        <img src="/images/Clapping.png" alt="ourgoal-image" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurGoal;