import Layout from "../../pageLayout";

const ListBannerAds = () => {
   

    return (
        <Layout className="px-4 pt-4">
            <div className='h-screen overflow-y-auto'>
                <div className="p-12 overflow-x-auto">
                    <div className="flex justify-between mb-8">
                        <div>
                            <p className="mb-2 text-2xl font-semibold">List</p>
                            <p className="text-gray-500">Here is the list of all your banner ads</p>
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr className="rounded-sm">
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">S/N</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Budget</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Clicks</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Status</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Date created</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(11).keys()].map(index => (
                                    <tr key={index} className={`odd:bg-white even:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                        <td className="px-6 py-4 text-base font-medium text-gray-800 whitespace-nowrap text-start">{index + 1}</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">&#8358; 20</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">20</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">Status will be here</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">2024-03-04 12:23:12</td>
                                       
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                
                
            </div>
        </Layout>
    );
};

export default  ListBannerAds;