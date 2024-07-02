import Layout from "../../pageLayout";

const MyJobs = () => {
    return (
        <Layout className="px-4 pt-4">
            <div className='h-screen overflow-y-auto'>
                <div className="p-12 overflow-x-auto">
                <div className="flex justify-between mb-8">
                        <div>
                            <p className="mb-2 text-2xl font-semibold">My jobs</p>
                            <p className="text-gray-500">Here is the list of all your jobs</p>
                        </div>

                        <div className="flex items-center gap-1 p-1 border-2 border-gray-200 rounded-md">
                            <img src="/images/search-icon.png" alt="search-icon" className="w-6" />
                            <input
                                type="text"
                                placeholder="Search.."
                                className="bg-transparent border-0 outline-none w-96 flex-grow-1"
                            />
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr className="rounded-sm">
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">S/N</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Name</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Amount</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Status</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(10).keys()].map(index => (
                                    <tr key={index} className={`odd:bg-white even:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                        <td className="px-6 py-4 text-base font-medium text-gray-800 whitespace-nowrap text-start">{index + 1}</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">Like, comment and repost my tweet on X</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">&#8358;20</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">Status will be here</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">...</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default MyJobs;