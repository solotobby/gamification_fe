import { Link } from "react-router-dom";


const Sidenav = () => {
    return (
        <div className="bg-red-500">
            <Link to="/"> <img src="/images/freebyzlogo-blue.png" alt="freebyz-logo"className="mb-8" /></Link>
           <div className="flex mb-4">
            <img src="/images/dashboard-icon.png" alt="dashboard-icon" />
                <p className="mx-4 text-blue-500">
                    Dashboard
                </p>
           </div>
           <div className="flex mb-4">
            <img src="/images/safelock.png" alt="dashboard-icon" />
                <p className="mx-4">
                    Safelock funds
                </p>
           </div>
           <div className="flex mb-4">
            <img src="/images/bannerads.png" alt="safelock-icon" />
                <p className="mx-4">
                    Banner Ads
                </p>
            <img src="/images/dropdown.png" alt="dropdown" />
           </div>
           <div className="flex mb-4">
            <img src="/images/jobs.png" alt="safelock-icon" />
                <p className="mx-4">
                    Jobs
                </p>
            <img src="/images/dropdown.png" alt="dropdown" />
           </div>
           <div className="flex mb-4">
            <img src="/images/campaign.png" alt="safelock-icon" />
                <p className="mx-4">
                    Campaigns
                </p>
            <img src="/images/dropdown.png" alt="dropdown" />
           </div>
           <div className="flex mb-4">
            <img src="/images/Wallet.png" alt="safelock-icon" />
                <p className="mx-4">
                    Wallet
                </p>
            <img src="/images/dropdown.png" alt="dropdown" />
           </div>
           <div className="flex mb-4">
            <img src="/images/referral.png" alt="dashboard-icon" />
                <p className="mx-4">
                    Referral
                </p>
           </div>
           <div className="flex mb-4">
            <img src="/images/badge.png" alt="dashboard-icon" />
                <p className="mx-4">
                    Badge
                </p>
           </div>
           <div className="flex mb-4">
            <img src="/images/currency-converter.png" alt="dashboard-icon" />
                <p className="mx-4">
                    Currency converter
                </p>
           </div>
           <div className="flex mb-4">
            <img src="/images/transaction-list.png" alt="dashboard-icon" />
                <p className="mx-4">
                    Transaction List
                </p>
           </div>
           <div className="flex mb-4">
            <img src="/images/tutorials.png" alt="safelock-icon" />
                <p className="mx-4">
                    Tutorials
                </p>
            <img src="/images/dropdown.png" alt="dropdown" />
           </div>
           <div className="flex mb-4">
            <img src="/images/talk-to-us.png" alt="dashboard-icon" />
                <p className="mx-4">
                   Talk to us
                </p>
           </div>
           <div className="flex mb-4">
            <img src="/images/knowledge.png" alt="dashboard-icon" />
                <p className="mx-4">
                   Knowlege base
                </p>
           </div>
           <div className="flex mt-8">
            <img src="/images/logout.png" alt="dashboard-icon" />
                <p className="mx-4 text-red-500">
                   Logout
                </p>
           </div>
        </div>
    )
}

export default Sidenav;