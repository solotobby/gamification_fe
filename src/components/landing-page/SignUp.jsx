import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('Nigeria');
    const [selectedDialingCode, setSelectedDialingCode] = useState('+234');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        specialCharacter: false,
        number: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
    
        try {
            const response = await fetch('http://app.e-portal.com.ng/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject),
            });
    
            if (!response.ok) {
                throw new Error('Failed to register');
            }
    
           
        } catch (error) {
            console.error('Error registering:', error);
            
        }
    };

    useEffect(() => {
        fetchCountryList();
    }, []);

    const fetchCountryList = async () => {
        try {
            const response = await fetch('http://app.e-portal.com.ng/api/country/list');
            if (!response.ok) {
                throw new Error('Failed to fetch country list');
            }
            const data = await response.json();
            
            setCountries(data);
        } catch (error) {
            console.error('Error fetching country list:', error);
        }
    };


    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        setSelectedCountry(selectedCountry);
    
        const selectedCountryObject = countries.find(country => country.country === selectedCountry);
    
        if (selectedCountryObject) {
            setSelectedDialingCode(selectedCountryObject.dialing_code);
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleReferralCodeChange = (e) => {
        setReferralCode(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setPasswordStrength({
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            specialCharacter: /[!@#$%^&*(),.?":{}|<>]/.test(password),
            number: /\d/.test(password)
        });
    };

    const calculatePasswordStrength = () => {
        const { length, uppercase, lowercase, specialCharacter, number } = passwordStrength;
        const criteriaMet = [length, uppercase, lowercase, specialCharacter, number].filter(Boolean).length;
        if (criteriaMet < 3) {
            return "Weak";
        } else if (criteriaMet < 5) {
            return "Not strong enough";
        } else {
            return "Strong";
        }
    };

    const getRadioColor = (checked) => {
        return checked ? '#28A23F' : '';
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="h-full px-8 bg-customBlue left-class background-map2 shrink-0">
                <img className="pt-10 mb-3 md:mb-0" src="/images/Freebyz-logo-white.png" alt="freebyz-logo" />
                <h1 className="hidden mt-20 text-2xl text-white md:block">It takes less than two minutes to create your account.</h1>
            </div>

            <div className="relative pt-20 mt-6 md:col-span-3">
                <div className='absolute top-0 right-0'>
                    <p className="mx-8 mt-10">
                        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
                    </p>
                </div>
                <form className="flex justify-center mt-10" onSubmit={handleSubmit}>
                    <div className='w-11/12 mx-auto md:w-2/5'>
                        <h2 className="text-3xl font-bold">Sign up for free</h2>
                        <p className="text-gray-300 ">Please ensure that you are providing the appropriate details</p>
                        <div className="flex gap-20">
                            <div className="flex flex-col form-group">
                                <label htmlFor="first-name">First name</label>
                                <input type="text" id="first-name" name="first-name" className="w-full rounded-md" />
                            </div>
                            <div className="flex flex-col form-group ">
                                <label htmlFor="last-name">Last name</label>
                                <input type="text" id="Last-name" name="last-name" className="w-full rounded-md" />
                            </div>
                        </div>
                        <div className="flex flex-col mt-4 form-group">
                            <label htmlFor="email-address">Email address</label>
                            <input type="text" id="email-address" name="email-address" className="rounded-md" />
                        </div>
                        <div className="flex flex-col mt-4 form-group">
                            <label htmlFor="country">Country</label>
                            <select id="country" name="country" value={selectedCountry} onChange={handleCountryChange} className="rounded-md">
                                {countries.map((country, index) => (
                                    <option key={index} value={country.country}>
                                        {country.flag} {country.country}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <select id="phone-code" name="phone-code" className="w-24 rounded-md" value={selectedDialingCode} readOnly>
                                <option value={selectedDialingCode}>{selectedDialingCode}</option>
                            </select>
                            <input type="text" id="phone-number" name="phone-number" className="w-full rounded-md" placeholder="Enter your phone number" />
                        </div>
                        <div className="relative flex flex-col mt-4 form-group">
                            <label htmlFor="password">Password</label>
                            <div className="relative">
                                <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Password (minimum of 8 characters)" style={{ width: '100%' }} className="rounded-md" onChange={handlePasswordChange} />
                                <div className="absolute top-0 mt-3 right-4">
                                    {showPassword ? (
                                        <img src="/images/show-password.png" alt="hide-password" className="cursor-pointer" onClick={togglePasswordVisibility} />
                                    ) : (
                                        <img src="/images/hide-password.png" alt="show-password" className="cursor-pointer" onClick={togglePasswordVisibility} />
                                    )}
                                </div>
                            </div>
                            <div className="gap-4 mt-2">
                                <div>
                                    <span>Password strength: </span>
                                    <span style={{ color: calculatePasswordStrength() === 'Weak' ? 'red' : calculatePasswordStrength() === 'Not strong enough' ? 'yellow' : '#28A23F' }}>{calculatePasswordStrength()}</span>
                                </div>
                                <div>
                                    <input type="radio" id="length" checked={passwordStrength.length} readOnly style={{ color: getRadioColor(passwordStrength.length) }} />
                                    <label htmlFor="length" style={{ color: getRadioColor(passwordStrength.length), marginLeft: '8px' }}>At least 8 characters</label>
                                </div>
                                <div>
                                    <input type="radio" id="uppercase" checked={passwordStrength.uppercase} readOnly style={{ color: getRadioColor(passwordStrength.uppercase) }} />
                                    <label htmlFor="uppercase" style={{ color: getRadioColor(passwordStrength.uppercase), marginLeft: '8px'  }}>Upper case character</label>
                                </div>
                                <div>
                                    <input type="radio" id="lowercase" checked={passwordStrength.lowercase} readOnly style={{ color: getRadioColor(passwordStrength.lowercase) }} />
                                    <label htmlFor="lowercase" style={{ color: getRadioColor(passwordStrength.lowercase), marginLeft: '8px'  }}>Lower case character</label>
                                </div>
                                <div>
                                    <input type="radio" id="special-character" checked={passwordStrength.specialCharacter} readOnly style={{ color: getRadioColor(passwordStrength.specialCharacter) }} />
                                    <label htmlFor="special-character" style={{ color: getRadioColor(passwordStrength.specialCharacter), marginLeft: '8px'  }}>One special character</label>
                                </div>
                                <div>
                                    <input type="radio" id="number" checked={passwordStrength.number} readOnly style={{ color: getRadioColor(passwordStrength.number) }} />
                                    <label htmlFor="number" style={{ color: getRadioColor(passwordStrength.number), marginLeft: '8px'  }}>One number</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-4 form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange} className="rounded-md" />
                        </div>
                        <div className="flex flex-col mt-4 form-group">
                            <label htmlFor="referral-code">Referral Code(Optional)</label>
                            <input type="text" id="referral-code" name="referral-code" className="rounded-md" />
                        </div>
                        
                        <div className="flex flex-col mt-4 form-group">
                            <label htmlFor="how-heard">How did you hear about Freebyz?</label>
                            <select id="how-heard" name="how-heard" className="rounded-md">
                                <option value="">Select one</option>
                                <option value="Facebook">Facebook</option>
                                <option value="WhatsApp">WhatsApp</option>
                                <option value="YouTube">YouTube</option>
                                <option value="Instagram">Instagram</option>
                                <option value="TikTok">TikTok</option>
                                <option value="Twitter">Twitter</option>
                                <option value="OnlineAds">Online Ads</option>
                                <option value="FriendReferral">Referred by a friend</option>
                            </select>
                        </div>

                        <div className="flex items-center mt-4">
                            <input type="checkbox" id="agree-checkbox" name="agree-checkbox" />
                            <label htmlFor="agree-checkbox" className="ml-2">
                                I have read, understood, and agreed to Freebyz
                                <Link to="/privacy-policy" className="text-blue-500"> Privacy policy </Link>
                                and terms of use.
                            </label>
                        </div>
                        <div className="flex my-8">
                            <button className="px-4 py-2 text-white bg-blue-500 rounded-full" type="submit">Sign up</button>
                            <p className="mx-8">or</p>
                            <button className="flex items-center px-4 py-2 text-black border border-gray-400 rounded-full">
                                <img src="/images/goggle-icon.png" alt="Google-Icon" className="mr-2" />
                                Sign up using Google
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;