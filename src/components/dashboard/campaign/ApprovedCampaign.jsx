import { useState, useEffect } from 'react';
import Layout from "../../pageLayout";

const ApprovedCampaign = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = import.meta.env.VITE_API_TOKEN;

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await fetch('http://app.e-portal.com.ng/api/dashboard/campaign/approved', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                if (data.status) {
                    setCampaigns(data.data.data);
                } else {
                    console.error('Failed to fetch campaigns:', data.message);
                }
            } catch (error) {
                console.error('Error fetching campaigns:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCampaigns();
    }, [token]);

    return (
        <Layout className="px-4 pt-4">
            <div className='h-screen overflow-y-auto'>
                <div className="p-12 pb-24 overflow-x-auto">
                    <div className="flex justify-between mb-8">
                        <div>
                            <p className="mb-2 text-2xl font-semibold">Approved Campaign List</p>
                            <p className="text-gray-500">Here is the List of campaigns you have approved</p>
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
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Worker&apos;s Name</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="4" className="py-4 text-center">Loading...</td>
                                    </tr>
                                ) : campaigns.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="py-4 text-center">No approved campaigns available.</td>
                                    </tr>
                                ) : (
                                    campaigns.map((campaign, index) => (
                                        <tr key={campaign.id} className={`odd:bg-white even:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                            <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">{campaign.campaign.post_title}</td>
                                            <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">&#8358;{campaign.amount}</td>
                                            <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">{campaign.user.name}</td>
                                            <td className="px-8 py-4 text-base text-gray-800 whitespace-nowrap text-start">
                                                <button className="relative px-8 py-2 text-blue-600 bg-blue-200 rounded-md">
                                                    <span className="absolute w-2 h-2 -translate-y-1/2 bg-blue-600 rounded-full left-3 top-1/2"></span>
                                                    {campaign.status}
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ApprovedCampaign;