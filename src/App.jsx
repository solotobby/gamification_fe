import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/landing-page/Header";
import Home from './components/landing-page/pages/Home.jsx'
import ContactUs from "./components/landing-page/ContactUs.jsx";
import Footer from './components/landing-page/Footer.jsx'
import AboutUs from './components/landing-page/AboutUs.jsx';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;