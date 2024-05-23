import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [countries, setCountries] = useState([]);
    const [selectedDialingCode, setSelectedDialingCode] = useState('+234'); // Default dialing code for Nigeria
    const [values, setValues] = useState({
        "email": "",
        "first_name": "",
        "last_name": "",
        "country": "Nigeria", // Default country
        "phone": "",
        "password": "",
        "password_confirmation": "",
        "source": "Facebook",
        "ref_id": ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isTypingPassword, setIsTypingPassword] = useState(false)
    const navigate = useNavigate();
    const [passwordStrength, setPasswordStrength] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        specialCharacter: false,
        number: false
    });

    const handleInputValues = (e) => {
        const { value, name } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formObject = { ...values };
        try {
            const response = await fetch('http://app.e-portal.com.ng/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject),
            });

            const data = await response.json();
            if (response.status === 201) {
                console.log('Registration successful:', data);
                navigate('/login');
            } else {
                console.error('Failed to register:', data);
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
        setValues((prev) => ({
            ...prev,
            country: selectedCountry
        }));
    };

    useEffect(() => {
        const selectedCountryObject = countries.find(country => country.country === values.country);
        if (selectedCountryObject) {
            setSelectedDialingCode(selectedCountryObject.dialing_code);
        }
    }, [values.country, countries]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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

    useEffect(() => {
        if (values.password) {
            setPasswordStrength({
                length: values.password.length >= 8,
                uppercase: /[A-Z]/.test(values.password),
                lowercase: /[a-z]/.test(values.password),
                specialCharacter: /[!@#$%^&*(),.?":{}|<>]/.test(values.password),
                number: /\d/.test(values.password)
            });
            calculatePasswordStrength();
        }
    }, [values.password]);

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
                <div className='absolute top-0 left-0 right-0 md:left-3/4'>
                    <p className="mx-8 mt-10">
                        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
                    </p>
                </div>
                <form className="flex justify-center mt-10" onSubmit={handleSubmit}>
                    <div className='w-11/12 mx-auto md:w-2/5'>
                        <h2 className="text-3xl font-bold">Sign up for free</h2>
                        <p className="text-gray-300 ">Please ensure that you are providing the appropriate details</p>
                        <div className="flex justify-between gap-5">
                            <div className="flex flex-col form-group w-[48%] shrink-0">
                                <label htmlFor="first-name">First name</label>
                                <input type="text" id="first-name" name="first_name" className="w-full rounded-md" value={values.first_name} onChange={handleInputValues} />
                            </div>
                            <div className="flex flex-col form-group w-[48%] shrink-0">
                                <label htmlFor="last-name">Last name</label>
                                <input type="text" id="Last-name" name="last_name" className="w-full rounded-md" value={values.last_name} onChange={handleInputValues} />
                            </div>
                        </div>
                        <div className="flex flex-col mt-4 form-group">
                            <label htmlFor="email-address">Email address</label>
                            <input type="text" id="email-address" name="email" className="rounded-md" value={values.email} onChange={handleInputValues} />
                        </div>
                        <div className="flex flex-col mt-4 form-group">
                            <label htmlFor="country">Country</label>
                            <select id="country" name="country" value={values.country} onChange={handleCountryChange} className="rounded-md">
                                {countries.map((country, index) => (
                                    <option key={index} value={country.country}>
                                        {country.flag} {country.country}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <select id="phone-code" name="phone" className="w-24 rounded-md" value={selectedDialingCode} readOnly>
                                <option value={selectedDialingCode}>{selectedDialingCode}</option>
                            </select>
                            <input type="text" id="phone-number" name="phone" className="w-full rounded-md" placeholder="Enter your phone number" value={values.phone} onChange={handleInputValues} />
                        </div>
                        <div className="relative flex flex-col mt-4 form-group">
                            <label htmlFor="password">Password</label>
                            <div className="relative">
                                <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Password (minimum of 8 characters)" style={{ width: '100%' }} className="rounded-md" value={values.password} onChange={handleInputValues} />
                                <div className="absolute top-0 mt-3 right-4">
                                    {showPassword ? (
                                        <img src="/images/show-password.png" alt="hide-password" className="cursor-pointer" onClick={togglePasswordVisibility} />
                                    ) : (
                                        <img src="/images/hide-password.png" alt="show-password" className="cursor-pointer" onClick={togglePasswordVisibility} />
                                    )}
                                </div>
                            </div>
                            
                            {isTypingPassword && (
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
                                        <label htmlFor="uppercase" style={{ color: getRadioColor(passwordStrength.uppercase), marginLeft: '8px' }}>Uppercase letter</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="lowercase" checked={passwordStrength.lowercase} readOnly style={{ color: getRadioColor(passwordStrength.lowercase) }} />
                                        <label htmlFor="lowercase" style={{ color: getRadioColor(passwordStrength.lowercase), marginLeft: '8px' }}>Lowercase letter</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="specialCharacter" checked={passwordStrength.specialCharacter} readOnly style={{ color: getRadioColor(passwordStrength.specialCharacter) }} />
                                        <label htmlFor="specialCharacter" style={{ color: getRadioColor(passwordStrength.specialCharacter), marginLeft: '8px' }}>Special character</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="number" checked={passwordStrength.number} readOnly style={{ color: getRadioColor(passwordStrength.number) }} />
                                        <label htmlFor="number" style={{ color: getRadioColor(passwordStrength.number), marginLeft: '8px' }}>Number</label>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col mt-4 form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" id="confirm-password" name="password_confirmation" className="rounded-md" value={values.password_confirmation} onChange={handleInputValues} />
                        </div>
                        <div className="flex flex-col mt-4 form-group">
                            <label htmlFor="referral-code">Referral Code(Optional)</label>
                            <input type="text" id="referral-code" name="ref_id" className="rounded-md" value={values.ref_id} onChange={handleInputValues} />
                        </div>

                        <div className="flex flex-col mt-4 form-group">
                            <label htmlFor="how-heard">How did you hear about Freebyz?</label>
                            <select id="how-heard" name="source" className="rounded-md" value={values.source} onChange={handleInputValues}>
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
                        <div className="flex gap-3 mt-8">
                            <input type="checkbox" id="agree-checkbox" name="agree-checkbox" className='w-5 h-5 mt-1 shrink-0' />
                            <label htmlFor="agree-checkbox" className="ml-2 ">
                                I have read, understood, and agreed to Freebyz
                                <Link to="/privacy-policy" className="text-blue-500"> Privacy policy </Link>
                                and <Link to="/terms-of-use" className="text-blue-500"> Terms of use. </Link>
                            </label>
                        </div>

                        <div className="flex my-8">
                            <button className="px-4 py-2 text-white bg-blue-500 rounded-full" type="submit">Sign up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;