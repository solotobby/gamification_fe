import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/landing-page/Header";
import Home from './components/landing-page/pages/Home.jsx';
import ContactUs from "./components/landing-page/ContactUs.jsx";
import Footer from './components/landing-page/Footer.jsx';
import AboutUs from './components/landing-page/AboutUs.jsx';
import TermsOfUse from './components/landing-page/TermsOfUse.jsx';
import PrivacyPolicy from './components/landing-page/PrivacyPolicy.jsx';
import ForgotPassword from './components/landing-page/ForgotPassword.jsx';
import Login from './components/landing-page/Login.jsx';
import Register from './components/landing-page/Register.jsx';
import Otp from './components/landing-page/Otp.jsx';
import ResetPassword from './components/landing-page/ResetPassword.jsx';
import Sidenav from './components/dashboard/SideNav.jsx';
import DashboarDollar from './components/dashboard/DashboarDollar.jsx';
import ResetLinkSent from './components/landing-page/ResetLinkSent.jsx';
// import MakeMoney from './components/landing-page/MakeMoney.jsx';
import  CreateCampaign from './components/dashboard/campaign/CreateCampaign.jsx'
import ViewCampaign from './components/dashboard/campaign/ViewCampaign.jsx';
import ApprovedCampaign from './components/dashboard/campaign/ApprovedCampaign.jsx';
import DeniedCampaign from './components/dashboard/campaign/DeniedCampaign.jsx';
import YourWallet from './components/dashboard/wallet/YourWallet.jsx';
import WithdrawalRequests from './components/dashboard/wallet/WithdrawalRequests.jsx';
import FirstJob from './components/dashboard/FirstJob.jsx';
import AvailableJobs from './components/dashboard/jobs/AvailableJobs.jsx';
import MyJobs from './components/dashboard/jobs/MyJobs.jsx';
import CompletedJobs from './components/dashboard/jobs/CompletedJobs.jsx';
import DisputedJobs from './components/dashboard/jobs/DisputedJobs.jsx';
import CreateBannerAds from './components/dashboard/bannerAds/CreateBannerAds.jsx';
import ListBannerAds from './components/dashboard/bannerAds/ListBannerAds.jsx';
import Referral from './components/dashboard/referral/Referral.jsx';
import TalkToUs from './components/dashboard/talk to us/TalkToUs.jsx';
import OpenNewticket from './components/dashboard/talk to us/OpenNewTicket.jsx';
import CurrncyConverter from './components/dashboard/currency converter/CurrencyConverter.jsx';
import NigeriaRegistration from './components/landing-page/NigeriaRegistration.jsx';
import ForeignRegistration from './components/landing-page/ForeignRegistration.jsx';
import ForeignRegistration2 from './components/landing-page/ForeignRegistration2.jsx';
import AffiliateProgram from './components/landing-page/AffiliateProgram.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';


function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<><Header /><Home /><Footer /></>} />
        <Route path="/contact-us" element={<><Header /><ContactUs /><Footer /></>} />
        <Route path="/about-us" element={<><Header /><AboutUs /><Footer /></>} />
        <Route path="/terms-of-use" element={<><Header /><TermsOfUse /><Footer /></>} />
        <Route path="/privacy-policy" element={<><Header /><PrivacyPolicy /><Footer /></>} />
        {/* <Route path="/make-money" element={<><Header /><MakeMoney /><Footer /></>} /> */}
        <Route path="/affiliate" element={<><Header /><AffiliateProgram /><Footer /></>} />

        
        <Route path="/registration-form" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sidenav" element={<Sidenav />} />
        <Route path="/dashboard-dollar" element={<DashboarDollar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset-link" element={<ResetLinkSent />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/view-campaign" element={<ViewCampaign />} />
        <Route path="/approved-campaign" element={< ApprovedCampaign />} />
        <Route path="/denied-campaign" element={< DeniedCampaign />} />
        <Route path="/wallet" element={< YourWallet />} />
        <Route path="/withdrawal-request" element={<  WithdrawalRequests />} />
        <Route path="/first-job" element={<  FirstJob />} />
        <Route path="/available-jobs" element={< AvailableJobs />} />
        <Route path="/my-jobs" element={<  MyJobs />} />
        <Route path="/completed-jobs" element={<  CompletedJobs />} />
        <Route path="/disputed-jobs" element={<  DisputedJobs />} />
        <Route path="/create-banner-ads" element={<   CreateBannerAds />} />
        <Route path="/list-banner-ads" element={<  ListBannerAds />} />
        <Route path="/referral" element={< Referral />} />
        <Route path="/talk-to-us" element={< TalkToUs />} />
        <Route path="/open-new-ticket" element={< OpenNewticket />} />
        <Route path="/currency-converter" element={< CurrncyConverter />} />
        <Route path="/registration-nigeria" element={< NigeriaRegistration />} />
        <Route path="/registration" element={< ForeignRegistration />} />
        <Route path="/registration2" element={< ForeignRegistration2 />} />
        
      
      </Routes>
    </Router>
  );
}

export default App;
