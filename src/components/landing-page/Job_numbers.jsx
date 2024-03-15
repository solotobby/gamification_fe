const Job_numbers = () => {
    return (
        <div className="flex items-center justify-around mt-20">
            <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center">
                    <p className="mr-4 text-3xl font-medium leading-10 font-bricolage-grotesque">64,500</p>
                    <p>Available jobs for you to choose from</p>
                </div>
            </div>
            
            <div className="max-w-sm p-8 bg-white rounded-lg shadow-md">
                <div className="flex items-center">
                    <p className="mr-4 text-3xl font-medium leading-10 font-bricolage-grotesque">122,478</p>
                    <p>Active users on our platform</p>
                </div>
            </div>

            <div className="max-w-sm p-8 bg-white rounded-lg shadow-md">
                <div className="flex items-center">
                    <p className="mr-4 text-3xl font-medium leading-10 font-bricolage-grotesque">150,885</p>
                    <p>Jobs completed and approved</p>
                </div>
            </div>
        </div>
    )
}

export default Job_numbers;