import { useState } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
    const [isCampaignsOpen, setIsCampaignsOpen] = useState(false);
    const [isWalletOpen, setIsWalletOpen] = useState(false);
    const [isJobsOpen, setIsJobsOpen] = useState(false);
    const toggleCampaigns = () => setIsCampaignsOpen(!isCampaignsOpen);
    const toggleWallet = () => setIsWalletOpen(!isWalletOpen);
   

    return (
        <div className="p-4 bg-red-500">
            <Link to="/">
                <img src="/images/freebyzlogo-blue.png" alt="freebyz-logo" className="mb-8" />
            </Link>

            <div className="flex mb-4">
                <img src="/images/dashboard-icon.png" alt="dashboard-icon" />
                <p className="mx-4 text-blue-500">Dashboard</p>
            </div>

            <div className="flex mb-4">
                <img src="/images/safelock.png" alt="safelock-icon" />
                <p className="mx-4">Safelock funds</p>
            </div>

            <div className="flex items-center mb-4 cursor-pointer" onClick={toggleCampaigns}>
                <img src="/images/campaign.png" alt="campaign-icon" />
                <p className="mx-4">Campaigns</p>
                <img src="/images/dropdown.png" alt="dropdown" />
            </div>
            {isCampaignsOpen && (
                <div className="mb-4 ml-8">
                    <Link to="/dashboard-dollar/create-campaign" className="block mb-2">Create Campaign</Link>
                    <Link to="/dashboard-dollar/view-campaign" className="block mb-2">View Campaigns</Link>
                    <Link to="/dashboard-dollar/approved-campaign" className="block mb-2">Approved Campaigns</Link>
                    <Link to="/dashboard-dollar/denied-campaign" className="block">Denied Campaigns</Link>
                </div>
            )}

            <div className="flex items-center mb-4 cursor-pointer" >
                <img src="/images/jobs.png" alt="jobs-icon" />
                <p className="mx-4">Jobs</p>
                <img src="/images/dropdown.png" alt="dropdown" />
            </div>
            {isJobsOpen && (
                <div className="mb-4 ml-8">
                    <Link to="/available-jobs" className="block mb-2">Available jobs</Link>
                    <Link to="/my-jobs" className="block mb-2">My jobs</Link>
                    <Link to="/completed-jobs" className="block mb-2">Completed jobs</Link>
                    <Link to="/disputed-jobs" className="block">Disputed jobs</Link>
                </div>
            )}
            

            <div className="flex items-center mb-4 cursor-pointer" onClick={toggleWallet}>
                <img src="/images/Wallet.png" alt="wallet-icon" />
                <p className="mx-4">Wallet</p>
                <img src="/images/dropdown.png" alt="dropdown" />
            </div>
            {isWalletOpen && (
                <div className="mb-4 ml-8">
                    <Link to="/dashboard-dollar/wallet" className="block mb-2">Your wallet</Link>
                    <Link to="/dashboard-dollar/withdrawal-request" className="block mb-2">Withdrawal requests</Link>
                 
                </div>
            )}

            <div className="flex mb-4">
                <img src="/images/referral.png" alt="referral-icon" />
                <p className="mx-4">Referral</p>
            </div>

            <div className="flex mb-4">
                <img src="/images/badge.png" alt="badge-icon" />
                <p className="mx-4">Badge</p>
            </div>

            <div className="flex mb-4">
                <img src="/images/currency-converter.png" alt="currency-converter-icon" />
                <p className="mx-4">Currency Converter</p>
            </div>

            <div className="flex mb-4">
                <img src="/images/transaction-list.png" alt="transaction-list-icon" />
                <p className="mx-4">Transaction List</p>
            </div>

            <div className="flex items-center mb-4 cursor-pointer" >
                <img src="/images/tutorials.png" alt="tutorials-icon" />
                <p className="mx-4">Tutorials</p>
                <img src="/images/dropdown.png" alt="dropdown" />
            </div>
           

            <div className="flex mb-4">
                <img src="/images/talk-to-us.png" alt="talk-to-us-icon" />
                <p className="mx-4">Talk to Us</p>
            </div>

            <div className="flex mb-4">
                <img src="/images/knowledge.png" alt="knowledge-base-icon" />
                <p className="mx-4">Knowledge Base</p>
            </div>

            <div className="flex mt-8">
                <img src="/images/logout.png" alt="logout-icon" />
                <p className="mx-4 text-red-500">Logout</p>
            </div>
        </div>
    );
};

export default Sidenav;