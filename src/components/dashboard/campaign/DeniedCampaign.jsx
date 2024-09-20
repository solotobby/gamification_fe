import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from "../../pageLayout";

const DeniedCampaign = () => {
    const [deniedCampaigns, setDeniedCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);

    const token =  import.meta.env.VITE_API_TOKEN;


    useEffect(() => {
        const fetchDeniedCampaigns = async () => {
            try {
                const response = await axios.get('http://app.e-portal.com.ng/api/dashboard/campaign/denied', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const campaigns = Array.isArray(response.data.data) ? response.data.data : [];
                setDeniedCampaigns(campaigns);
            } catch (error) {
                console.error('Error fetching denied campaigns:', error);
                setDeniedCampaigns([]);
            } finally {
                setLoading(false);
            }
        };

        fetchDeniedCampaigns();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Layout className="px-4 pt-4">
            <div className='h-screen pb-20 overflow-y-auto'>
                <div className="p-12 overflow-x-auto">
                    <div className="flex justify-between mb-8">
                        <div>
                            <p className="mb-2 text-2xl font-semibold">Denied Campaign List</p>
                            <p className="text-gray-500">Here is the List of campaigns you have denied</p>
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
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Campaign Title</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Amount</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Worker&apos;s name</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                {deniedCampaigns.length > 0 ? (
                                    deniedCampaigns.map((campaign, index) => (
                                        <tr key={index} className={`odd:bg-white even:bg-gray-100`}>
                                            <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">{campaign.campaign.post_title}</td>
                                            <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">&#8358;{campaign.amount}</td>
                                            <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">{campaign.user.name}</td>
                                            <td className="px-8 py-4 text-base text-gray-800 whitespace-nowrap text-start">
                                                <button className="relative px-8 py-2 text-red-600 bg-red-100 rounded-md">
                                                    <span className="absolute w-2 h-2 -translate-y-1/2 bg-red-600 rounded-full left-3 top-1/2"></span>
                                                    Denied
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-4 text-base text-center text-gray-800">No denied campaigns available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default DeniedCampaign;