import Layout from "../pageLayout";
import { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ReferralContext } from "./context/ReferralContext";
import Survey from './Survey';
import { JobContext } from "./context/JobContext";

const Dashboard = () => {

    const { referralURL } = useContext(ReferralContext);
    const [isExpanded, setIsExpanded] = useState(false);
    const { totalReferrals } = useContext(ReferralContext);
    const { jobs, banners, pagination, selectedJob, setSelectedJob, loading, page, setPage } = useContext(JobContext);
    const [isModalOpen, setIsModalOpen] = useState(
        localStorage.getItem("hasCompletedSurvey") ? false : true
    );
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };


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

    useEffect(() => {
        
        window.history.pushState(null, "", window.location.href);
        window.addEventListener("popstate", () => {
            window.history.pushState(null, "", window.location.href);
        });

        const hasCompletedSurvey = localStorage.getItem("hasCompletedSurvey");
        if (!hasCompletedSurvey) {
            setIsModalOpen(true);
        }

        return () => {
            window.removeEventListener("popstate", () => {
                window.history.pushState(null, "", window.location.href);
            });
        };
    }, []);

    const handleSurveyCompletion = () => {
        localStorage.setItem("hasCompletedSurvey", "true");
        setIsModalOpen(false);
    };

    const filteredJobs = selectedJob === "All Jobs"
        ? jobs
        : jobs.filter((job) => job.type === selectedJob);

    return (
        <Layout className="px-4 pt-4">
            <>
                <div className="h-screen px-8 py-8 overflow-y-auto">
                <Survey isModalOpen={isModalOpen} setIsModalOpen={handleSurveyCompletion} />
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
                            <p>a SOCIAL MEDIA on Freebyz, create a campaign today to hire workers.</p>
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
                            <p>Total referrals</p>
                            <p>{totalReferrals}</p>
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
                            <button
                                onClick={copyToClipboard}
                                className="flex items-center gap-5 p-1 px-3 border-2 border-blue-600 border-dotted"
                            >
                                {referralURL || 'Loading...'}
                                <img
                                    src="/images/copy-icon.png"
                                    alt="copy-icon"
                                    className="mr-2 cursor-pointer"
                                />
                            </button>
                        </div>
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

                    <div className="flex justify-end mb-4">
                    <div className="relative flex items-center">
                        <select
                            value={selectedJob}
                            onChange={(e) => setSelectedJob(e.target.value)}
                            className="px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                            <option>All Jobs</option>
                            {Array.from(new Set(jobs.map((job) => job.type))).map((type) => (
                                <option key={type}>{type}</option>
                            ))}
                        </select>
                        <img
                            src="/images/dropdown.png"
                            alt="drop-down-icon"
                            className="absolute w-4 h-4 pointer-events-none right-3"
                        />
                    </div>
                </div>
                    
                    {loading ? (
                    <div className="flex justify-center mt-8">
                        <div className="w-6 h-6 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                        <p className="ml-2 text-gray-600">Loading jobs...</p>
                    </div>
                ) : filteredJobs.length > 0 ? (
                    filteredJobs.map((job, index) => (
                        <div key={job.id} className="p-4 mt-8 bg-white rounded-lg shadow-md cursor-pointer">
                            <Link to={`/job/${job.id}`}>
                                <div className="flex justify-between">
                                    <p>{job.post_title}</p>
                                    <p>{job.currency} {job.campaign_amount}</p>
                                </div>
                                <div className="relative w-full h-2 mt-4 bg-gray-300 rounded">
                                    <div className="absolute h-2 bg-blue-600 rounded" style={{ width: `${job.progress}%` }}></div>
                                </div>
                                <div className="flex justify-between mt-4 text-sm text-gray-600">
                                    <p>{job.type}</p>
                                    <p>{job.completed} / {job.number_of_staff} workers completed</p>
                                </div>
                            </Link>

                            {(index + 1) % 5 === 0 && banners.length > index / 5 && (
                                <img src={banners[Math.floor(index / 5)]?.banner_url || ""} alt="Banner" className="w-full mt-4 rounded" />
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No jobs available</p>
                )}
                {pagination && (
                    <div className="flex justify-between mt-8">
                        <button
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                            disabled={pagination.current_page === 1}
                            className={`px-4 py-2 text-white rounded ${pagination.current_page === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
                        >
                            Previous
                        </button>
                        <p className="text-gray-700">Page {pagination.current_page} of {pagination.last_page}</p>
                        <button
                            onClick={() => setPage((prev) => Math.min(prev + 1, pagination.last_page))}
                            disabled={pagination.current_page === pagination.last_page}
                            className={`px-4 py-2 text-white rounded ${pagination.current_page === pagination.last_page ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
                        >
                            Next
                        </button>
                    </div>
                )}
                </div>

            </>

        </Layout>
    )
}

export default Dashboard;
