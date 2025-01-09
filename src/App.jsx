import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/landing-page/Header";
import Home from './components/landing-page/pages/Home.jsx';
import ContactUs from "./components/landing-page/ContactUs.jsx";
import Footer from './components/landing-page/Footer.jsx';
import AboutUs from './components/landing-page/AboutUs.jsx';
import TermsOfUse from './components/landing-page/TermsOfUse.jsx';
import PrivacyPolicy from './components/landing-page/PrivacyPolicy.jsx';
import ForgotPassword from './components/landing-page/ForgotPassword.jsx';
import Otp from './components/landing-page/Otp.jsx';
import ResetPassword from './components/landing-page/ResetPassword.jsx';
import MakeMoney from './components/landing-page/MakeMoney.jsx';
import ScrollToTop from './components/landing-page/pages/ScrollToTop.jsx';


function App() {
  return (
    <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          <Route path="/contact-us" element={<><Header /><ContactUs /><Footer /></>} />
          <Route path="/about-us" element={<><Header /><AboutUs /><Footer /></>} />
          <Route path="/terms-of-use" element={<><Header /><TermsOfUse /><Footer /></>} />
          <Route path="/privacy-policy" element={<><Header /><PrivacyPolicy /><Footer /></>} />
          <Route path="/" element={<><Header /><Footer /></>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/make-money" element={<><Header /><MakeMoney /><Footer /></>} />
        </Routes>
    </Router>
  );
}

export default App;
