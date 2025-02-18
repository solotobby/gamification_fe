import Layout from "../../pageLayout";
import { useEffect, useContext, useState } from 'react';
import { ReferralContext } from "../context/ReferralContext";
import { toast } from 'react-toastify';


const Referral = () => {

    const { referralURL } = useContext(ReferralContext);
    const [stats, setStats] = useState({
        total_user_referred: 0,
        verified_user_referred: 0,
        pending_user_referred: 0,
        total_referral_income: 0,
        referral_link: ""
    });
    const [referrals, setReferrals] = useState([]);
    const [pagination, setPagination] = useState({ current_page: 1, last_page: 1 });

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            console.error("No authentication token found.");
            return;
        }

        fetch("http://app.e-portal.com.ng/api/referral-stat", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) setStats(data.data);
            })
            .catch(err => console.error("Error fetching referral stats:", err));
    }, []);

    useEffect(() => {
        fetchReferrals(1);
    }, []);

    const fetchReferrals = (page) => {
        const token = localStorage.getItem("authToken");
        if (!token) return;

        fetch(`http://app.e-portal.com.ng/api/referral?page=${page}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setReferrals(data.data);
                    setPagination({ current_page: data.pagination.current_page, last_page: data.pagination.last_page });
                }
            })
            .catch(err => console.error("Error fetching referrals:", err));
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(stats.referral_link).then(
            () => toast.success("Referral link copied to clipboard!"),
            (err) => {
                console.error("Failed to copy: ", err);
                toast.error("Failed to copy referral link. Please try again.");
            }
        );
    };

    return (
        <Layout className="min-h-screen px-4 pt-4 overflow-auto">
            <div>
                <div className="p-12">
                    <div className="flex justify-between ">
                        <div className="flex flex-col w-full">
                            <div className="flex gap-8 py-8">
                                <div className="flex items-center justify-center gap-4 p-8 bg-white">
                                    <img className="w-8 h-8" src="/images/greenwallet.png" alt="wallet-icon" />
                                    <div>
                                        <p >Total referral income</p>
                                        <p>&#8358; {stats.total_referral_income}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-1/4 gap-4 p-8 bg-white">
                                    <img className="w-8 h-8" src="/images/total-jobs.png" alt="wallet-icon" />
                                    <div>
                                        <p>Total referrals</p>
                                        <p>{stats.total_user_referred}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-1/4 gap-4 p-8 bg-white">
                                    <img className="w-8 h-8" src="/images/total-campaigns.png" alt="wallet-icon" />
                                    <div>
                                        <p>Total verified users</p>
                                        <p>{stats.verified_user_referred}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-1/4 gap-4 p-8 bg-white">
                                    <img className="w-8 h-8" src="/images/total-referrals.png" alt="wallet-icon" />
                                    <div>
                                        <p>Total pending users</p>
                                        <p>{stats.pending_user_referred}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between">

                                <div>
                                    <p className="text-start">Referral Link</p>
                                    <button
                                        onClick={copyToClipboard}
                                        className="flex items-center gap-5 p-1 px-3 border-2 border-gray-400 border-dotted">
                                        {stats.referral_link || 'Loading...'}
                                        <img src="/images/copy-icon.png" alt="copy-icon" className="mr-2" />
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div>
                        <p className="my-8 text-2xl font-semibold">Referral List</p>

                    </div>

                    <div className="w-full">
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr className="rounded-sm">
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Name</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Date</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Status</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Income</th>

                                </tr>
                            </thead>
                            <tbody>
                                {referrals.map((referral, index) => (
                                    <tr key={referral.id} className={`odd:bg-white even:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">{referral.name}</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">{new Date(referral.created_at).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">
                                            <button
                                                className={`relative px-8 w-32 py-2 text-white rounded-md 
                                                    ${referral.status === 'Verified' ? 'bg-green-600' :
                                                        referral.status === 'Unverified' ? 'bg-red-500' :
                                                            referral.status === 'pending' ? 'bg-orange-500' :
                                                                'bg-gray-600'}`}
                                            >
                                                <span className="absolute w-2 h-2 -translate-y-1/2 bg-white rounded-full left-3 top-1/2"></span>
                                                {referral.status}
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 text-base font-medium text-gray-800 whitespace-nowrap text-start">&#8358; {referral.income}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {referrals.length > 0 && (
                            <div className="sticky bottom-0 flex justify-center py-2 mt-8">
                                <button
                                    disabled={pagination.current_page === 1}
                                    onClick={() => fetchReferrals(pagination.current_page - 1)}
                                    className="px-4 mx-2 text-white bg-gray-600 rounded disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                <button
                                    disabled={referrals.length < 10 || pagination.current_page === pagination.last_page}
                                    onClick={() => fetchReferrals(pagination.current_page + 1)}
                                    className="px-4 py-2 mx-2 text-white bg-gray-600 rounded disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Referral;