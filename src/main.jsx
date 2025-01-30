import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles/index.scss';

import { ReferralProvider } from './components/dashboard/context/ReferralContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReferralProvider>
    <App />
    <ToastContainer 
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      theme="colored"
    />
    </ReferralProvider>
   
  </React.StrictMode>,
)
