import Layout from "../pageLayout";
import { useState } from "react";
import { Link } from 'react-router-dom';

const DashboarNaira = () => {
  
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };


    return (
        <Layout className="px-4 pt-4">
            <>
                <div className="h-screen px-8 py-8 overflow-y-auto">
                    <div className="relative p-8 bg-blue-100 border-2 border-blue-400 border-dotted">
                        <div className="flex justify-between mb-2">
                            <p className="font-bold">Learn the SIMPLE secrets some USERS USED TO MAKE MILLIONS on Freebyz in 2023.</p>
                            <img
                                src={isExpanded ? "/images/Chevron_Down.png" : "/images/Chevron_Up.png"}
                                className="cursor-pointer"
                                alt="toggle"
                                onClick={toggleExpand}
                            />
                        </div>

                        <div className={`leading-7 ${isExpanded ? 'block' : 'hidden'}`}>
                            <p>Verification fee is 1050 (naira wallet) and $5 (Dollar wallet). To fund your wallet, pay directly to your virtual account (naira wallet activation). </p>
                            <p>Click here to see the account number to Fund. Once you pay N1050, your Naira wallet will be verified immediately. </p>
                            <p>Click here to pay in other currencies. </p>
                            <p>Display your business and events banners to over 120k users across Africa. Place a BANNER ADS today!</p>
                            <p>Let’s help you achieve your 2024 goals, LOCK SOME FUNDS in our SAFELOCK to avoid spending Temptations and get 5% interest. </p>
                            <p>New to Freebyz? Learn how to work and submit tasks here.</p>
                            <p>GROW YOUR SOCIAL MEDIA on Freebyz, create a campaign today to hire workers.</p>
                        </div>

                        {!isExpanded && (
                            <div className="leading-7">
                                <p>Verification fee is 1050 (naira wallet) and $5 (Dollar wallet). To fund your wallet, pay directly to your virtual account (naira wallet activation). </p>
                                <p>Click here to see the account number to Fund. Once you pay N1050, your Naira wallet will be verified immediately. </p>

                            </div>
                        )}
                    </div>


                    <div className="flex gap-8 py-8">
                        <div className="flex items-center justify-center w-1/4 gap-4 p-8 bg-white">
                            <img className="w-8 h-8" src="/images/greenwallet.png" alt="wallet-icon" />
                            <div>
                                <p>Wallet balance</p>
                                <p>&#8358; 10,000,000.00</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-1/4 gap-4 p-8 bg-white ">
                            <img className="w-8 h-8" src="/images/total-jobs.png" alt="wallet-icon" />
                            <div>
                                <p>Total jobs done</p>
                                <p>100</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-1/4 gap-4 p-8 bg-white ">
                            <img className="w-8 h-8" src="/images/total-campaigns.png" alt="wallet-icon" />
                            <div>
                                <p>Total campaign</p>
                                <p>100</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-1/4 gap-4 p-8 bg-white ">
                            <img className="w-8 h-8" src="/images/total-referrals.png" alt="wallet-icon" />
                            <div>
                                <p>Total referral</p>
                                <p>100</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div >
                            <p>Fund your wallet</p>
                            <span className="flex w-auto p-1 mt-2 border-2 border-green-600 border-dotted">
                                <p className="flex gap-8 px-3 text-black-600">Wema bank <span>0123456789</span> <span> <img src="/images/copy-icon.png" alt="copy-icon" className="mr-2" /></span></p>
                            </span>
                        </div>
                        <div>
                            <p className="text-end">Referral Link</p>
                            <button className="flex items-center gap-5 p-1 px-3 border-2 border-blue-600 border-dotted">
                                https://freebyz.com/register/w7nT7uD
                                <img src="/images/copy-icon.png" alt="copy-icon" className="mr-2" />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between pt-4">
                        <p>Some available jobs</p>
                        <p className="text-blue-500">See all jobs</p>
                    </div>

                    <Link to="/first-job">
                        <div className="p-4 mt-8 bg-white cursor-pointer">
                            <div className="flex justify-between">
                                <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                                <p>&#8358;15.00</p>
                            </div>
                            <div className="relative w-full h-2 mt-16 bg-gray-300">
                                <div className="absolute h-2 bg-blue-600" style={{ width: '50%' }}></div>
                            </div>
                            <div className="flex justify-between mt-12">
                                <p>Facebook jobs</p>
                                <p>14 / 20 workers completed</p>
                            </div>
                        </div>
                    </Link>
                    <div className="p-4 mt-8 bg-white">
                        <div className="flex justify-between">
                            <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                            <p>&#8358;15.00</p>
                        </div>
                        <div className="relative w-full h-2 mt-16 bg-gray-300 rounded">
                            <div className="absolute h-2 bg-blue-600" style={{ width: '50%' }}></div>
                        </div>
                        <div className="flex justify-between mt-12">
                            <p>Facebook jobs</p>
                            <p>14 / 20 workers completed</p>
                        </div>
                    </div>
                    <div className="p-4 mt-8 bg-white">
                        <div className="flex justify-between">
                            <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                            <p>&#8358;15.00</p>
                        </div>
                        <div className="relative w-full h-2 mt-16 bg-gray-300 rounded">
                            <div className="absolute h-2 bg-blue-600" style={{ width: '50%' }}></div>
                        </div>
                        <div className="flex justify-between mt-12">
                            <p>Facebook jobs</p>
                            <p>14 / 20 workers completed</p>
                        </div>
                    </div>
                    <div>
                        <img src="/images/advertise.png" alt="advert-banner" className="w-full py-8" />
                    </div>
                    <div className="p-4 mt-8 bg-white">
                        <div className="flex justify-between">
                            <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                            <p>&#8358;15.00</p>
                        </div>
                        <div className="relative w-full h-2 mt-16 bg-gray-300 rounded">
                            <div className="absolute h-2 bg-blue-600" style={{ width: '50%' }}></div>
                        </div>
                        <div className="flex justify-between mt-12">
                            <p>Facebook jobs</p>
                            <p>14 / 20 workers completed</p>
                        </div>
                    </div>
                    <div className="p-4 mt-8 bg-white">
                        <div className="flex justify-between">
                            <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                            <p>&#8358;15.00</p>
                        </div>
                        <div className="relative w-full h-2 mt-16 bg-gray-300 rounded">
                            <div className="absolute h-2 bg-blue-600" style={{ width: '50%' }}></div>
                        </div>
                        <div className="flex justify-between mt-12">
                            <p>Facebook jobs</p>
                            <p>14 / 20 workers completed</p>
                        </div>
                    </div>
                </div>

            </>

        </Layout>
    )
}

export default DashboarNaira;
