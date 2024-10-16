import { Link } from "react-router-dom";
import { useState } from "react";

const ForeignRegistration = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const isValidEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

       
        if (!isValidEmail(value)) {
            setError('Please enter a valid email address.');
        } else {
            setError(''); 
        }
    };

    return (
        <div className="relative h-screen overflow-scroll">
            <div className="relative grid h-auto grid-cols-1 gap-32 md:grid-cols-3 md:h-full md:gap-0">
                <div className="w-full h-32 pl-2 md:pl-8 md:h-full bg-customBlue left-class shrink-0 background-map2">
                    <Link to='/'><img className="pt-10 cursor-pointer" src="/images/Freebyz-logo-white.png" alt="freebyz-logo"  /></Link>
                    <h1 className="hidden w-1/2 mt-20 text-2xl text-white md:block">Work online and earn daily in dollar and naira!</h1>
                </div>

                <div className='flex h-auto col-span-1 md:col-span-2'>
                    <div className="flex flex-col mt-0 md:mt-60 login-content lg:w-[40%] ml-0 md:ml-10 lg:ml-32 w-full px-4 md:px-0">
                        <Link to="/registration" className="text-3xl font-bold">Sign up for free</Link>
                        <p className="text-gray-400">Please ensure that you provide your active email address</p>
                        <form className="mt-10">
                            <div className="flex flex-col form-group">
                                <label htmlFor="email-address">Email address</label>
                                <input
                                    type="text"
                                    id="email-address"
                                    name="email-address"
                                    className={`mt-2 placeholder-gray-400 rounded-md ${error ? 'border-red-500' : ''}`}
                                    placeholder="email address"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                {error && <span className="mt-1 text-red-500">{error}</span>}
                            </div>
                            <Link 
                                to="/registration-form" 
                                state={{ email }}
                                className='inline-block px-4 py-2 mt-8 text-white bg-blue-500 rounded-full'
                                onClick={(e) => {
                                    if (!isValidEmail(email)) {
                                        e.preventDefault();
                                        setError('Please enter a valid email address.');
                                    }
                                }}
                            >
                                Submit
                            </Link>
                            <p className="pb-10 mt-7"></p>
                        </form>
                    </div>
                </div>
                
                <div className='absolute right-100 top-40 md:right-8 md:top-10'>
                    <p className="mx-5">
                        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForeignRegistration;