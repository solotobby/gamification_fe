import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from "react-router-dom";


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
        <div className="relative grid h-screen grid-cols-1 bg-white md:grid-cols-3">
           
            <div className="w-full h-32 pl-2 md:pl-8 md:h-full bg-customBlue left-class shrink-0 background-map2">
                <Link to='/'><img className="pt-10" src="/images/Freebyz-logo-white.png" alt="freebyz-logo" /></Link>
                <h1 className="w-1/2 mt-20 text-2xl text-white">Work online and earn daily in dollar and naira!</h1>
                
            </div>

            
            <div className='flex h-full col-span-2'>
                <div className="flex flex-col mt-40 login-content lg:w-[40%] ml-0 md:ml-10 lg:ml-32 w-full px-4 md:px-0">
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
                            Send Reset Link
                        </button>
                        <p className="pb-10 mt-7 "><Link to="/login" className="text-blue-500 ">Back to Log in</Link></p>
                        
                    </form>
                </div>
            </div>

            <div className='absolute top-32 right-8 md:top-10'>
                <p className="mx-8 mt-10">Don&apos;t have an account? <Link to="/registration" className="text-blue-500">Sign up</Link></p>
            </div>
        </div>
    );
}

export default ForgotPassword;