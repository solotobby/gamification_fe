import { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isButtonBlue, setIsButtonBlue] = useState(false);
    const [error, setError] = useState(null);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setIsButtonBlue(e.target.value.trim() !== '' || confirmPassword.trim() !== '');
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setIsButtonBlue(password.trim() !== '' || e.target.value.trim() !== '');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://app.e-portal.com.ng/api/resset/password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: 'KzF6MAljg1bEYbODhrutiyCbCPAQWvtHv6HP0uV4WwJvlNhvCJfLkISZUoEOewXw',
                    password,
                    password_confirmation: confirmPassword,
                }),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }

            // Password reset successful, you may redirect the user or show a success message
            console.log('Password reset successful');
        } catch (error) {
            setError(error.message);
        }
    };
    
    return (
        <div className="flex">
            <div className="pl-10 w-[30%] bg-customBlue left-class h-svh shrink-0 background-map2">
                <img className="pt-10" src="/images/Freebyz-logo-white.png" alt="freebyz-logo" />
                <h1 className="w-1/2 mt-20 text-2xl text-white">Work online and earn daily in dollar and naira!</h1>
            </div>

            <div className="flex flex-col mx-auto mt-40 login-content">
                <h2 className="text-3xl font-bold">Reset your password</h2>
                <p className="text-gray-400">Your new password must be different from previously used passwords.</p>
                <form className="mt-10" onSubmit={handleSubmit}>
                    <div className="relative flex flex-col form-group">
                        <label htmlFor="new-password">New Password</label>
                        <input 
                            type={passwordVisible ? 'text' : 'password'} 
                            id="new-password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Password (min of 8 characters)"
                            className="rounded-md"
                        />
                        <img 
                            src={`/images/${passwordVisible ? 'show-password.png' : 'hide-password.png'}`} 
                            alt="toggle-password" 
                            className="absolute mt-3 transform -translate-y-1/2 cursor-pointer top-1/2 right-4"
                            onClick={togglePasswordVisibility}
                        />
                    </div>

                    <div className="relative flex flex-col mt-6 form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input 
                            type="password" 
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            placeholder="Confirm Password"
                            className="rounded-md"
                        />
                    </div>
                   
                    <button 
                        className={`px-4 py-2 mt-8 rounded-full ${isButtonBlue ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`} 
                        type="submit" 
                        disabled={!isButtonBlue}
                    >
                        Reset Password
                    </button>

                    <p className="mt-10 text-blue-500">Back to Log in</p>
                </form>
            </div>

            <div>
                <p className="mx-8 mt-10">
                    Don't have an account? 
                    <Link to="/registeration" className="ml-1 text-blue-500"> 
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default ResetPassword;