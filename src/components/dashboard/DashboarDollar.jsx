import Layout from "../pageLayout";
import { Modal } from "../shared";
import { useState } from "react";

const DashboarDollar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    
    return (
        <Layout className="px-4 pt-4">
           <>
            <div className="h-screen px-8 overflow-y-auto">
                <div className="p-8 bg-blue-100">
                    <div className="flex justify-between mb-2 font-weight: 800">
                        <p>Learn the SIMPLE secrets some USERS USED TO MAKE MILLIONS on Freebyz in 2023.</p>
                        <img src="/images/dropdown.png" className="mr-5" alt="drop-down" />
                    </div>
                    <p className="mb-2 font-weight: 100">Verification fee is 1050 (naira wallet) and $5 (Dollar wallet). To fund your wallet, pay directly to your virtual account( naira wallet activation). </p>
                    <p className="mb-2 font-weight: 100">Click here to see the account number to Fund. Once you pay N1050, your Naira wallet will be verified immediately. </p>
                </div>

                <div className="flex gap-8 py-8">
                        <div className="flex w-1/4 gap-4 p-8 bg-slate-500">
                            <img src="/images/greenwallet.png" alt="wallet-icon" />
                            <div>
                                <p onClick={()=> setIsModalOpen(!isModalOpen)}>Wallet balance</p>
                                <p>Wallet balance</p>
                            </div>
                        </div>
                        <div className="flex w-1/4 gap-4 p-8 bg-blue-200">
                            <img src="/images/total-jobs.png" alt="wallet-icon" />
                            <div>
                                <p>Wallet balance</p>
                                <p>Wallet balance</p>
                            </div>
                        </div>
                        <div className="flex w-1/4 gap-4 p-8 bg-red-200">
                            <img src="/images/total-campaigns.png" alt="wallet-icon" />
                            <div>
                                <p>Wallet balance</p>
                                <p>Wallet balance</p>
                            </div>
                        </div>
                        <div className="flex w-1/4 gap-4 p-8 bg-blue-500">
                            <img src="/images/total-referrals.png" alt="wallet-icon" />
                            <div>
                                <p>Wallet balance</p>
                                <p>Wallet balance</p>
                            </div>
                        </div>
                </div>
                <div className="flex justify-between">
                        <div >
                            <p>Fund your wallet</p>
                            <span className="flex w-auto p-1 mt-2 border-2 border-green-600 border-dotted">
                                <p className="px-3 text-white bg-green-600 ">Click here to fund your dollar wallet</p>  
                            </span>
                        </div>
                        <div>
                            <p>Referral Link</p>
                            <button className="flex items-center gap-5 p-1 px-3 border-2 border-purple-600 border-dotted">
                                Referralllll
                                <img src="/images/copy-icon.png" alt="copy-icon" className="mr-2" /> 
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between pt-4">
                        <p>Some available jobs</p>
                        <p className="text-blue-500">Some all jobs</p>
                    </div>

                    <div className="p-4 mt-8 bg-blue-300">
                        <div className="flex justify-between ">
                            <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                            <p>&#8358;15.00</p>
                        </div>
                        <div className="flex justify-between mt-12">
                            <p>Facebook jobs</p>
                            <p>14 / 20 workers completed</p>
                        </div>
                    </div>
                    <div className="p-4 mt-8 bg-blue-300">
                        <div className="flex justify-between ">
                            <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                            <p>&#8358;15.00</p>
                        </div>
                        <div className="flex justify-between mt-12">
                            <p>Facebook jobs</p>
                            <p>14 / 20 workers completed</p>
                        </div>
                    </div>
                    <div className="p-4 mt-8 bg-blue-300">
                        <div className="flex justify-between ">
                            <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                            <p>&#8358;15.00</p>
                        </div>
                        <div className="flex justify-between mt-12">
                            <p>Facebook jobs</p>
                            <p>14 / 20 workers completed</p>
                        </div>
                    </div>
                    <div>
                        <img src="/images/advertise.png" alt="advert-banner" className="w-full py-8" />
                    </div>
                    <div className="p-4 mt-8 bg-blue-300">
                        <div className="flex justify-between ">
                            <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                            <p>&#8358;15.00</p>
                        </div>
                        <div className="flex justify-between mt-12">
                            <p>Facebook jobs</p>
                            <p>14 / 20 workers completed</p>
                        </div>
                    </div>
                    <div className="p-4 mt-8 bg-blue-300">
                        <div className="flex justify-between ">
                            <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                            <p>&#8358;15.00</p>
                        </div>
                        <div className="flex justify-between mt-12">
                            <p>Facebook jobs</p>
                            <p >14 / 20 workers completed</p>
                        </div>
                    </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={()=> setIsModalOpen(!isModalOpen)} header='anything' description='hello there'>
                <div>
                    Hello
                </div>
            </Modal>
           </>
           
        </Layout>
    )
}

export default DashboarDollar;
