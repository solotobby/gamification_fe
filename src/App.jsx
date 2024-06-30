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
import Dashboard from './components/landing-page/Dashboard.jsx';
import Sidenav from './components/dashboard/SideNav.jsx';
import DashboarDollar from './components/dashboard/DashboarDollar.jsx';
import ResetLinkSent from './components/landing-page/ResetLinkSent.jsx';
import MakeMoney from './components/landing-page/MakeMoney.jsx';
import  CreateCampaign from './components/dashboard/CreateCampaign.jsx'
import ViewCampaign from './components/dashboard/ViewCampaign.jsx';
import ApprovedCampaign from './components/dashboard/ApprovedCampaign.jsx';
import DeniedCampaign from './components/dashboard/DeniedCampaign.jsx';
import YourWallet from './components/dashboard/YourWallet.jsx';
import WithdrawalRequests from './components/dashboard/WithdrawalRequests.jsx';
import DashboardNaira from './components/dashboard/DashboadNaira.jsx';
import FirstJob from './components/dashboard/FirstJob.jsx';
import AvailableJobs from './components/dashboard/AvailableJobs.jsx';


function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<><Header /><Home /><Footer /></>} />
        <Route path="/contact-us" element={<><Header /><ContactUs /><Footer /></>} />
        <Route path="/about-us" element={<><Header /><AboutUs /><Footer /></>} />
        <Route path="/terms-of-use" element={<><Header /><TermsOfUse /><Footer /></>} />
        <Route path="/privacy-policy" element={<><Header /><PrivacyPolicy /><Footer /></>} />
        <Route path="/dashboard" element={<><Header /><Dashboard /><Footer /></>} />
        <Route path="/" element={<><Header /><Dashboard /><Footer /></>} />
        <Route path="/make-money" element={<><Header /><MakeMoney /><Footer /></>} />

        
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sidenav" element={<Sidenav />} />
        <Route path="/dashboard-dollar" element={<DashboarDollar />} />
        <Route path="/dashboard-naira" element={<DashboardNaira />} />
        <Route path="/reset-link" element={<ResetLinkSent />} />
        <Route path="/dashboard-dollar/create-campaign" element={<CreateCampaign />} />
        <Route path="/dashboard-dollar/view-campaign" element={<ViewCampaign />} />
        <Route path="/dashboard-dollar/approved-campaign" element={< ApprovedCampaign />} />
        <Route path="/dashboard-dollar/denied-campaign" element={< DeniedCampaign />} />
        <Route path="/dashboard-dollar/your-wallet" element={< YourWallet />} />
        <Route path="/dashboard-dollar/withdrawal-request" element={<  WithdrawalRequests />} />
        <Route path="/first-job" element={<  FirstJob />} />
        <Route path="/available-jobs" element={< AvailableJobs />} />
        
        
       
       

      </Routes>
    </Router>
  );
}

export default App;
