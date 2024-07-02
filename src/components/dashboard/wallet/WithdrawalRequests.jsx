import Layout from "../../pageLayout";

const WithdrawalRequests = () => {
    return (
        <Layout className="px-4 pt-4">
            <div className='h-screen overflow-y-auto'>
                <div className="p-12 overflow-x-auto">
                <div className="flex justify-between mb-8">
                        <div>
                            <p className="mb-2 text-2xl font-semibold">Withdrawl requests</p>
                            <p className="text-gray-500">Here is the List of all withdrawal requests</p>
                        </div>

                    </div>

                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr className="rounded-sm">
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">S/N</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Amount</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Payment date and time</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Status</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">When</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(10).keys()].map(index => (
                                    <tr key={index} className={`odd:bg-white even:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                        <td className="px-6 py-4 text-base font-medium text-gray-800 whitespace-nowrap text-start">{index + 1}</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">&#8358;20</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">23-03-17 23:59:34</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">Paid</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">2024-04-12 11:22:32</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default WithdrawalRequests;