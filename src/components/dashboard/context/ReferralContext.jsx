import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const ReferralContext = createContext();

export const ReferralProvider = ({ children }) => {
    const [referralCode, setReferralCode] = useState('');
    const [referralURL, setReferralURL] = useState('');
    const [totalReferrals, setTotalReferrals] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) return;

        axios
            .get('http://app.e-portal.com.ng/api/user-details', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                const code = response.data?.data?.user?.referral_code;
                if (code) {
                    setReferralCode(code);
                    setReferralURL(`https://freebyz.com/register/${code}`);
                } else {
                    toast.warning('No referral code found.');
                }
            })
            .catch((error) => {
                console.error('Error fetching user details:', error);
                toast.error('Failed to fetch user details. Please try again later.');
            });
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) return;

        axios
            .get('http://app.e-portal.com.ng/api/referral-stat', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                if (response.data.status) {
                    setTotalReferrals(response.data.data.total_user_referred);
                }
            })
            .catch((error) => {
                console.error('Error fetching referral stats:', error);
            });
    }, []);

    return (
        <ReferralContext.Provider value={{ referralCode, referralURL, totalReferrals }}>
            {children}
        </ReferralContext.Provider>
    );
};
