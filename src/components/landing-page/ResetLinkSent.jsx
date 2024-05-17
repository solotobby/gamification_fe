import { useState } from 'react';
import { Link } from "react-router-dom";


const ForgotPassword = () => {
   
    return (
        <div className="grid h-screen grid-cols-1 md:grid-cols-4">
            <div className="h-full px-8 bg-customBlue left-class background-map2 shrink-0">
                <img className="pt-10 mb-3 md:mb-0" src="/images/Freebyz-logo-white.png" alt="freebyz-logo" />
                <h1 className="hidden mt-20 text-2xl text-white md:block">Work online and earn daily in dollar and naira!</h1>
            </div>
    
            <div className='absolute top-0 right-0'>
                <p className="mx-8 mt-10">
                    Don&apos;t have an account? <Link to="/login" className="text-blue-500">Login</Link>
                </p>
            </div>
    
            <div className="flex items-center justify-center col-span-3 mt-10 text-center">
                <div className='w-11/12 '>
                    <h2 className="text-3xl font-bold">Reset link sent!</h2>
                    <p className="w-1/2 mx-auto text-center text-gray-400">We have sent a password reset link to your registered email address. Kindly click the link to change your password.</p>
                    <button className="px-4 py-2 mt-8 text-white bg-blue-500 rounded-full" type="submit">Login instead</button>

                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;