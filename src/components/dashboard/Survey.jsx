import { useState, useEffect } from 'react';
import { Modal } from '../shared';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Survey = ({ isModalOpen, setIsModalOpen }) => {
    const [step, setStep] = useState(0);
    const [gender, setGender] = useState('');
    const [ageRange, setAgeRange] = useState('');
    const [countries, setCountries] = useState([]);
    const [interests, setInterests] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedInterests, setSelectedInterests] = useState([]);
    const navigate = useNavigate();

    const handleProceedToDashboard = () => {
        navigate('/dashboard-naira');
    };

    useEffect(() => {
        if (isModalOpen) {
            const token = localStorage.getItem('authToken');

            if (!token) {
                console.error('No authentication token found.');
                return;
            }

            fetch('http://app.e-portal.com.ng/api/survey', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.status) {
                        setCountries(data.data.currency.map((item) => ({ id: item.id, name: item.country })));
                        setInterests(data.data.interests);
                    }
                })
                .catch((error) => console.error('Error fetching survey data:', error));
        }
    }, [isModalOpen]);

    const toggleInterest = (id) => {
        setSelectedInterests((prev) =>
            prev.includes(id) ? prev.filter((interestId) => interestId !== id) : [...prev, id]
        );
    };

    const handleContinue = () => {
        if (step === 0 && !gender) {
            toast.error('Please select your gender.');
        } else if (step === 1 && !selectedCountry) {
            toast.error('Please select your country.');
        } else if (step === 2 && selectedInterests.length < 10) {
            toast.error('Please select at least 10 interests.');
        } else {
            setStep((prev) => prev + 1);
        }
    };

    const isButtonDisabled =
        (step === 0 && !gender) ||
        (step === 1 && !selectedCountry) ||
        (step === 2 && selectedInterests.length < 2);

    const getButtonClass = () => {
        return isButtonDisabled
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-blue-500 text-white';
    };

    return (
        <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
            <div>

                {step === 0 ? (
                    <div>
                        <p className="mb-2 text-xl font-semibold">Let&apos;s personalize your experience</p>
                        <p className="text-slate-500">Please tell us a little bit more about yourself.</p>

                        <div className="flex justify-start my-6">
                            <div className={`h-1 w-10 mx-2 ${step === 0 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                            <div className={`h-1 w-10 mx-2 ${step === 1 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                            <div className={`h-1 w-10 mx-2 ${step === 2 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                        </div>

                        <p className="mt-4">What&apos;s your gender?</p>
                        <div className="flex">
                            <div className="w-1/3 p-4 mr-4 border-2 border-gray-300 rounded">
                                <label className="flex items-center justify-between">
                                    Male
                                    <input
                                        type="radio"
                                        value="Male"
                                        checked={gender === 'Male'}
                                        onChange={() => setGender('Male')}
                                    />
                                </label>
                            </div>
                            <div className="w-1/3 p-4 border-2 border-gray-300 rounded">
                                <label className="flex items-center justify-between">
                                    Female
                                    <input
                                        type="radio"
                                        value="Female"
                                        checked={gender === 'Female'}
                                        onChange={() => setGender('Female')}
                                    />
                                </label>
                            </div>
                        </div>

                        <p className="mt-4">What is your age range? </p>
                        <div className="flex">
                            {['18-24', '25-34', '35-44', '45-54', '55+'].map((range) => (
                                <div key={range} className="w-1/3 p-4 mr-4 border-2 border-gray-300 rounded">
                                    <label className="flex items-center justify-between">
                                        {range}
                                        <input
                                            type="radio"
                                            value={range}
                                            checked={ageRange === range}
                                            onChange={() => setAgeRange(range)}
                                        />
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                ) : step === 1 ? (
                    <div>
                        <p className="mb-2 text-xl font-semibold">Let&apos;s personalize your experience</p>
                        <p className="text-slate-500">Select your country.</p>


                        <div className="flex justify-start my-6">
                            <div className={`h-1 w-10 mx-2 ${step === 0 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                            <div className={`h-1 w-10 mx-2 ${step === 1 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                            <div className={`h-1 w-10 mx-2 ${step === 2 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                        </div>


                        <div className="grid grid-cols-3 gap-4 mt-4">
                            {countries.map((country) => (
                                <div
                                    key={country.id}
                                    className={`p-4 border-2 rounded ${selectedCountry === country.name ? 'border-blue-500' : 'border-gray-300'}`}
                                    onClick={() => setSelectedCountry(country.name)}
                                >
                                    <label className="flex items-center justify-between">
                                        {country.name}
                                        <input
                                            type="radio"
                                            value={country.name}
                                            checked={selectedCountry === country.name}
                                            onChange={() => setSelectedCountry(country.name)}
                                        />
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : step === 2 ? (
                    <div>
                        <p className="mb-2 text-xl font-semibold">Let&apos;s personalize your experience</p>
                        <p className="text-slate-500">What are your interests? (Select at least 10)</p>


                        <div className="flex justify-start my-6">
                            <div className={`h-1 w-10 mx-2 ${step === 0 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                            <div className={`h-1 w-10 mx-2 ${step === 1 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                            <div className={`h-1 w-10 mx-2 ${step === 2 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                        </div>


                        <div className="grid grid-cols-3 gap-4 mt-4">
                            {interests.map((interest) => (
                                <div
                                    key={interest.id}
                                    className={`p-4 border-2 rounded ${selectedInterests.includes(interest.id) ? 'border-blue-500' : 'border-gray-300'}`}
                                    onClick={() => toggleInterest(interest.id)}
                                >
                                    <label className="flex items-center justify-between">
                                        {interest.name}
                                        <input
                                            type="checkbox"
                                            value={interest.id}
                                            checked={selectedInterests.includes(interest.id)}
                                            onChange={() => toggleInterest(interest.id)}
                                        />
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className='background-ribon'>
                        <div className='py-6 text-center'>
                            <h2 className='mb-4 font-bold'>Survey Completed!</h2>
                            <p className='text-gray-400'>You can now access your dashboard to start earning in dollars and naira!</p>
                            <button className="px-4 py-2 mt-8 text-white bg-blue-500 rounded-full"
                            onClick={handleProceedToDashboard}
                            >
                                Proceed to Dashboard
                            </button>
                        </div>
                    </div>
                )}


                <div className="mt-6">
                    {step < 3 && (
                        <button
                            className={`px-4 py-2 rounded-full ${getButtonClass()}`}
                            onClick={handleContinue}
                            disabled={isButtonDisabled}
                        >
                            Continue
                        </button>
                    )}
                </div>
            </div>
        </Modal>
    );
};

Survey.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
};

export default Survey;