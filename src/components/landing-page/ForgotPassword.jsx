import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isEmailEntered, setIsEmailEntered] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setEmail(value);
        setIsEmailEntered(value.trim() !== '');
    };

    const handleContinue = async (e) => {
        e.preventDefault();
       
        try {
            await fetch('http://app.e-portal.com.ng/api/process/otp', {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            navigate('/otp');
        } catch (error) {
            console.error('Error sending OTP:', error);
           
        }
    };

    return (
        <div className="flex">
           
            <div className="pl-10 w-[30%] bg-customBlue left-class h-svh shrink-0 background-map2">
                <img className="pt-10" src="/images/Freebyz-logo-white.png" alt="freebyz-logo" />
                <h1 className="w-1/2 mt-20 text-2xl text-white">Work online and earn daily in dollar and naira!</h1>
                
            </div>

            
            <div className="flex flex-col mx-auto mt-40 login-content">
                <h2 className="text-3xl font-bold">Can’t remember your password?</h2>
                <p className="text-gray-400 ">Enter your email address and we’ll send a 6-digit OTP code to you.</p>
                <form className="mt-10" onSubmit={handleContinue}>
                    <div className="flex flex-col form-group">
                        <label htmlFor="email-address">Email address</label>
                        <input 
                            type="text" 
                            id="email-address" 
                            name="email-address" 
                            className="mt-2 placeholder-gray-400 rounded-md" 
                            placeholder="freebyzuser@gmail.com" 
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <button 
                        className={`px-4 py-2 mt-8 text-white rounded-full ${isEmailEntered ? 'bg-blue-500' : 'bg-gray-300'}`} 
                        type="submit" 
                        disabled={!isEmailEntered}
                    >
                        Continue
                    </button>
                    <p className="mt-10">Back to Log in</p>
                </form>
            </div>

            <div>
                <p className="mx-8 mt-10">Don't have an account? Sign up</p>
            </div>
        </div>
    );
}

export default ForgotPassword;