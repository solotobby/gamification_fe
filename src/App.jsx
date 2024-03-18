
import Header from "./components/landing-page/Header";
import Lock_funds from "./components/landing-page/Lock_funds.jsx";
import Work_online from "./components/landing-page/Work_online.jsx";
import Job_numbers from "./components/landing-page/Job_numbers";
import Features from "./components/landing-page/Features.jsx";
import KickstartJourney from "./components/landing-page/KickstartJourney.jsx";
import TrustUs from "./components/landing-page/TrustUs.jsx";
import HomeTable from "./components/landing-page/HomeTable.jsx";
import Faq from "./components/landing-page/Faq.jsx";
import Footer from "./components/landing-page/Footer.jsx";

function App() {
  
  return (
    <>
     <Header/>
     <Work_online />
     <Lock_funds />
     <Job_numbers />
     <Features />
     <KickstartJourney />
     <TrustUs />
     <HomeTable />
     <Faq />
     <Footer />
    </>
  )
}

export default App
