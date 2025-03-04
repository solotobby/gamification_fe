import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RedirectReferral = () => {
    const { referral_code } = useParams();

    useEffect(() => {
        if (referral_code) {
            window.location.href = `https://dashboard.freebyz.com/register/${referral_code}`;
        }
    }, [referral_code]);

    return null;
};

export default RedirectReferral;