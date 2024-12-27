import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const Otp = () => {
    const [countdown, setCountdown] = useState(120);
    const [otpCode, setOtpCode] = useState('');
    const [countdownActive, setCountdownActive] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (countdownActive) {
            const timer = setTimeout(() => {
                if (countdown > 0) {
                    setCountdown((prev) => prev - 1);
                } else {
                    setCountdownActive(false);
                }
            }, 1000);
    
            return () => clearTimeout(timer);
        }
    }, [countdown, countdownActive]);

    const handleOtpCodeChange = (e) => {
        setOtpCode(e.target.value);
    };

    const handleResendCode = async () => {
        const email = localStorage.getItem('email');
        console.log('Email from localStorage in OTP component:', email);

    
        if (!email) {
            toast.error('User email not found. Please try again.');
            return;
        }
    
        try {
            const response = await fetch('http://app.e-portal.com.ng/api/process/otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
    
            const responseData = await response.json();
            if (response.ok && responseData.status === true) {
                toast.success(responseData.message || 'OTP resent successfully!');
                setCountdown(120);
                setCountdownActive(true);
            } else {
                toast.error(responseData.message || 'Failed to resend OTP.');
            }
        } catch (error) {
            toast.error('An error occurred while resending the OTP.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://app.e-portal.com.ng/api/validate/otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ otp: otpCode }),
            });
    
            const responseData = await response.json();
    
            if (response.ok && responseData.status === true) {
                toast.success(responseData.message || 'OTP verified successfully!');
                navigate('/login');
            } else {
                if (responseData.errors) {
                    const errorMessages = Object.values(responseData.errors)
                        .flat()
                        .join(' ');
                    toast.error(errorMessages || 'Validation error. Please check your input.');
                } else if (responseData.message) {
                    toast.error(responseData.message || 'An unexpected error occurred.');
                } else {
                    toast.error('An unexpected error occurred. Please try again.');
                }
            }
        } catch (error) {
            toast.error('Failed to verify OTP. Please try again later.');
        }
    };

    const countdownColor = 'text-blue-500';
    const minutes = String(Math.floor(countdown / 60)).padStart(2, '0');
    const seconds = String(countdown % 60).padStart(2, '0');
    const resendPlaceholderText = countdownActive
        ? `Resend code in ${minutes}:${seconds}`
        : 'Resend code now';

    return (
        <div className="relative grid h-screen grid-cols-1 bg-white md:grid-cols-3">
            <div className="w-full h-32 pl-2 md:pl-8 md:h-screen bg-customBlue left-class shrink-0 background-map2">
                <img className="pt-10" src="/images/Freebyz-logo-white.png" alt="freebyz-logo" />
                <h1 className="w-1/2 mt-20 text-2xl text-white">Work online and earn daily in dollar and naira!</h1>
            </div>

            <div className="flex h-full col-span-2">
                <div className="flex flex-col mt-4 md:mt-40 login-content lg:w-[40%] ml-0 md:ml-10 lg:ml-32 w-full px-4 md:px-0 login-content">
                    <h2 className="text-3xl font-bold">OTP authentication</h2>
                    <p className="text-gray-400">Kindly enter the 6-digit OTP code sent to your email address.</p>
                    <form className="mt-10" onSubmit={handleSubmit}>
                        <div className="relative flex flex-col form-group">
                            <label htmlFor="otp-code">Enter code</label>
                            <input
                                type="text"
                                id="otp-code"
                                name="otp-code"
                                value={otpCode}
                                onChange={handleOtpCodeChange}
                                className="mt-2 rounded-md"
                                placeholder="Enter OTP code"
                            />
                            {!otpCode && (
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <div className="mt-8 mr-4 text-base">
                                        <p
                                            className={`text-base ${countdownColor} cursor-pointer`}
                                            onClick={!countdownActive ? handleResendCode : null}
                                        >
                                            {resendPlaceholderText}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <button
                            className={`px-4 py-2 mt-8 text-white rounded-full ${otpCode ? 'bg-blue-500' : 'bg-gray-400'}`}
                            type="submit"
                            disabled={!otpCode}
                        >
                            Verify OTP
                        </button>
                        <div className="mt-2 text-red-500">{errorMessage}</div>
                    </form>
                </div>
            </div>

            <div className="absolute top-32 right-8 md:top-10">
                <p className="mx-8 mt-10">
                    Don&apos;t have an account? <Link to="/registration" className="text-blue-500">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Otp;
