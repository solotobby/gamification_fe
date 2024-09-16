import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";



const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputValues, setInputValues] = useState({
        "email": "",
        "password": ""
    })

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');


    const handleInputValues = (e) => {
        const { value, name } = e.target
        setInputValues((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formObject = { ...inputValues };
        try {
            const response = await fetch('http://app.e-portal.com.ng/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject),
            });

            const data = await response.json();

            if (response.status === 200) {
                const { token } = data.data;
                console.log('Login successful:', data.message);
                console.log('User token:', token);


                localStorage.setItem('accessToken', token);


                navigate('/dashboard-naira');
            } else {
                setErrorMessage(data.message);
                console.error('Incorrect Login or Password:', data.message);
            }
        } catch (error) {
            console.error('Error registering:', error);
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative grid h-screen grid-cols-1 bg-white md:grid-cols-3">
            <div className="w-full h-32 pl-2 md:pl-8 md:h-full bg-customBlue left-class shrink-0 background-map2">
                <img className="pt-10" src="/images/Freebyz-logo-white.png" alt="freebyz-logo" />
                <h1 className="w-1/2 mt-20 text-2xl text-white">Work online and earn daily in dollar and naira!</h1>
            </div>

            <div className="flex h-full col-span-2 login-content">
                <div className="flex flex-col login-content lg:w-[40%] ml-0 md:ml-10 lg:ml-32 w-full px-4 md:px-0 md:mt-40 mt-24">
                    <h2 className="text-3xl font-bold">Log in to your account</h2>
                    <p className="text-gray-400 ">Please ensure that you are providing the appropriate details</p>

                    <form className="mt-10" onSubmit={handleSubmit}>
                        <div className="flex flex-col form-group">
                            <label htmlFor="email-address">Email address</label>
                            <input type="text" id="email-address" name="email" className={`placeholder-gray-400 rounded-md ${errorMessage ? 'border border-red-500' : ''}`} placeholder="freebyzuser@email.com" value={inputValues.email} onChange={handleInputValues} />
                        </div>
                        <div className="relative flex flex-col mt-8 form-group">
                            <label htmlFor="password">Password</label>
                            <input type={showPassword ? 'text' : 'password'} id="password" name="password" className={`rounded-md ${errorMessage ? 'border border-red-500' : ''}`} value={inputValues.password} onChange={handleInputValues} />
                            {showPassword ? (
                                <img src="/images/show-password.png" alt="hide-password" className="absolute mt-3 transform -translate-y-1/2 cursor-pointer top-1/2 right-4" onClick={togglePasswordVisibility} />
                            ) : (
                                <img src="/images/hide-password.png" alt="show-password" className="absolute mt-3 transform -translate-y-1/2 cursor-pointer top-1/2 right-4" onClick={togglePasswordVisibility} />
                            )}
                        </div>
                        {errorMessage && <p className="mt-2 text-red-500">{errorMessage}</p>}
                        <div className="flex mt-8">
                        <button 
                                className="px-4 py-2 text-white bg-blue-500 rounded-full" 
                                type="submit" 
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'Log in'}
                            </button>


                        </div>
                        <p className="mt-10 mb-10 md:mb-0"><Link to="/forgot-password" className="text-blue-500">Forgot Password?</Link></p>
                    </form>

                </div>
            </div>
 
            <div className='absolute left-0 top-32 right-8 md:top-10 md:left-3/4'>
                <p className="mx-8 mt-10">Don&apos;t have an account? <Link to="/registration-foreign" className="text-blue-500">Sign up</Link></p>
            </div>
        </div>
    );
}

export default Login;