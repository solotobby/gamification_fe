import Layout from "../../pageLayout";
import { useContext } from 'react';
import { ReferralContext } from "../context/ReferralContext";
import { toast } from 'react-toastify';


const Referral = () => {
    
    const { referralURL } = useContext(ReferralContext);

     const copyToClipboard = () => {
            navigator.clipboard.writeText(referralURL).then(
                () => {
                    toast.success('Referral link copied to clipboard!');
                },
                (err) => {
                    console.error('Failed to copy: ', err);
                    toast.error('Failed to copy referral link. Please try again.');
                }
            );
        };

   
    return (
        <Layout className="px-4 pt-4">
            <div className='h-screen overflow-y-auto'>
                <div className="p-12 overflow-x-auto">
                    <div className="flex justify-between mb-8">
                        <div className="flex flex-col w-full">
                            <div className="flex gap-8 py-8">
                                <div className="flex items-center justify-center gap-4 p-8 bg-white">
                                    <img className="w-8 h-8" src="/images/greenwallet.png" alt="wallet-icon" />
                                    <div>
                                        <p >Wallet balance</p>
                                        <p>&#x24; 400</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-1/4 gap-4 p-8 bg-white">
                                    <img className="w-8 h-8" src="/images/total-jobs.png" alt="wallet-icon" />
                                    <div>
                                        <p>Total jobs done</p>
                                        <p>100</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-1/4 gap-4 p-8 bg-white">
                                    <img className="w-8 h-8" src="/images/total-campaigns.png" alt="wallet-icon" />
                                    <div>
                                        <p>Total campaign</p>
                                        <p>100</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-1/4 gap-4 p-8 bg-white">
                                    <img className="w-8 h-8" src="/images/total-referrals.png" alt="wallet-icon" />
                                    <div>
                                        <p>Total referral</p>
                                        <p>100</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between">

                                <div>
                                    <p className="text-start">Referral Link</p>
                                    <button 
                                    onClick={copyToClipboard}
                                    className="flex items-center gap-5 p-1 px-3 border-2 border-gray-400 border-dotted">
                                    {referralURL}
                                        <img src="/images/copy-icon.png" alt="copy-icon" className="mr-2" />
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div>
                        <p className="my-8 text-2xl font-semibold">Referral List</p>

                    </div>

                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr className="rounded-sm">
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">S/N</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Name</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Date</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Status</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Income</th>

                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(6).keys()].map(index => (
                                    <tr key={index} className={`odd:bg-white even:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                        <td className="px-6 py-4 text-base font-medium text-gray-800 whitespace-nowrap text-start">{index + 1}</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">Salawu Muibat Nifemi</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">2024-03-04 12:23:12</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">
                                            <button className="relative px-8 py-2 text-gray-600 bg-gray-200 rounded-md">
                                                <span className="absolute w-2 h-2 -translate-y-1/2 bg-gray-600 rounded-full left-3 top-1/2"></span>
                                                Pending
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">&#8358; 500.00</td>
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

export default Referral;