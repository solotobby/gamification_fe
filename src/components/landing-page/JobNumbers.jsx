const JobNumbers = () => {
    return (
        <div className="container flex flex-wrap items-center justify-center gap-2 mt-20 md:justify-between md:gap-0">
            <div className=" mb-0 bg-white rounded-lg md:mb-0 w-[48%] md:w-[30%] shrink-0 lg:w-[25%]">
                <div className="flex flex-col items-center md:flex-row">
                    <p className="mr-4 text-xl font-medium leading-10 font-bricolage-grotesque md:text-3xl">64,500</p>
                    <p className="text-xs text-center md:text-base">Available jobs for you to choose from</p>
                </div>
            </div>
            
            <div className=" mb-0 bg-white rounded-lg md:mb-0 md:ml-4 w-[48%] md:w-[30%] shrink-0 lg:w-[25%]">
                <div className="flex flex-col items-center md:flex-row">
                    <p className="mr-4 text-xl font-medium leading-10 font-bricolage-grotesque md:text-3xl">122,478</p>
                    <p className="text-xs text-center md:text-base">Active users on our platform</p>
                </div>
            </div>

            <div className=" bg-white rounded-lg w-[48%] md:w-[30%] shrink-0 lg:w-[25%]">
                <div className="flex flex-col items-center md:flex-row">
                    <p className="mr-4 text-xl font-medium leading-10 font-bricolage-grotesque md:text-3xl">150,885</p>
                    <p className="text-xs text-center md:text-base">Jobs completed and approved</p>
                </div>
            </div>
        </div>
    )
}

export default JobNumbers;