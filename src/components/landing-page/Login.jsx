import { useState } from 'react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="pl-10 w-[30%] bg-customBlue left-class shrink-0 background-map2 h-svh">
                <img className="pt-10" src="/images/Freebyz-logo-white.png" alt="freebyz-logo" />
                <h1 className="w-1/2 mt-20 text-2xl text-white">Work online and earn daily in dollar and naira!</h1>
            </div>

            <div className="flex flex-col mx-auto mt-40 login-content">
                <h2 className="text-3xl font-bold">Log in to your account</h2>
                <p className="text-gray-400 ">Please ensure that you are providing the appropriate details</p>

                <form className="mt-10">
                    <div className="flex flex-col form-group">
                        <label htmlFor="email-address">Email address</label>
                        <input type="text" id="email-address" name="email-address" className="placeholder-gray-400 rounded-md" placeholder="freebyzuser@email.com" />
                    </div>
                    <div className="relative flex flex-col mt-8 form-group">
                        <label htmlFor="password">Password</label>
                        <input type={showPassword ? 'text' : 'password'} id="password" name="password" className="rounded-md" />
                        {showPassword ? (
                            <img src="/images/show-password.png" alt="hide-password" className="absolute mt-3 transform -translate-y-1/2 cursor-pointer top-1/2 right-4" onClick={togglePasswordVisibility} />
                        ) : (
                            <img src="/images/hide-password.png" alt="show-password" className="absolute mt-3 transform -translate-y-1/2 cursor-pointer top-1/2 right-4" onClick={togglePasswordVisibility} />
                        )}
                    </div>
                    <div className="flex mt-8">
                        <button className="px-4 py-2 text-white bg-blue-500 rounded-full" type="submit">Log in</button>
                        <p className="mx-8">or</p>
                        <button className="flex items-center px-4 py-2 text-black border border-gray-400 rounded-full">
                            <img src="/images/goggle-icon.png" alt="Google-Icon" className="mr-2" />
                            Log in using Google
                        </button>
                    </div>

                    <p className="mt-10">Forgot password?</p>
                </form>

            </div>

            <div>
                <p className="mx-8 mt-10">Don't have an account? Sign up</p>
            </div>
        </div>
    );
}

export default Login;