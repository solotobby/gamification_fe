const HomeTable = () => {
    return (
        <div className="container mt-8">
           
            <div className="flex items-center justify-between">
                <div>
                    <p className="w-3/4 mt-20 text-5xl font-medium leading-10 font-bricolage-grotesque">See some payouts</p>
                    <p className="w-4/5 my-8">This could be you today. All you need to do is sign up for free, hire workers or get hired and earn!</p>
                </div>
                <div className="flex gap-6">
                    <img src="/public/images/left-gray-button.png" alt="left-button" />
                    <img src="/public/images/right-gray-button.png" alt="right-button" />
                </div>
                
            </div>

            {/* <div className='flex justify-betwwen'>
                <div>
                    <p>#47,500.00</p>
                    <p>Cash withdrawal</p>
                </div>
                <div>
                    <p>11.00AM</p>
                </div>
                    
            </div> */}
               
                
        </div>
    )
}

export default HomeTable;