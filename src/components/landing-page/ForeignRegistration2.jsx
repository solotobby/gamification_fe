import { Link } from "react-router-dom";
import { useState } from "react";

const ForeignRegistration2 = () => {
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
        <div className="h-screen overflow-scroll ">
            <div className="flex flex-col items-center justify-center h-auto grid-cols-1 gap-32 md:grid-cols-3 md:h-full md:gap-0 bg-customBlue">
                <div className="flex flex-col mt-0  login-content lg:w-[30%] w-full py-20 px-8 rounded-3xl bg-white max-h-[600px]">
                    <div className="flex flex-col items-center text-center">
                        <img className="w-[55%] flex" src="/images/freebyzlogo-blue.png" alt="freebyzlogo-blue" />
                    </div>
                    <Link to="/registration" className="pt-8 text-3xl font-bold text-center">Sign up for free</Link>
                    <p className="text-center text-gray-400" >Please ensure that you provide your active email address</p>
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
                            className='inline-block w-full px-4 py-4 mt-8 text-xl text-center text-white bg-blue-500 rounded-full'
                            onClick={(e) => {
                                if (!isValidEmail(email)) {
                                    e.preventDefault();
                                    setError('Please enter a valid email address.');
                                }
                            }}
                        >
                            Submit
                        </Link>

                    </form>
                    <div>
                        <p className="mt-8 text-center">
                            Already have an account?  <Link to="/login" className="text-customBlue">Login</Link>
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ForeignRegistration2;