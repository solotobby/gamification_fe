import { useState } from 'react';
import Layout from '../../pageLayout';

const CreateBannerAds = () => {
    const [activeTab, setActiveTab] = useState('information');
    const [title, setTitle] = useState('');
    const [externalLink, setExternalLink] = useState('');
    const [imageUploaded, setImageUploaded] = useState(false);
    const [gender, setGender] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [amount, setAmount] = useState('');

    const isFormValid = () => imageUploaded && externalLink.trim() !== '';
    const isPostBannerEnabled = amount.trim() !== '';

    const handleImageUpload = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImageUploaded(true);
        }
    };

    const handleOptionChange = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const isContinueEnabled = selectedOptions.length >= 5;

    const targetAudience = () => (
        <div>
            <h2 className="mb-2 text-2xl font-semibold">Target Audience</h2>
            <p className="mb-4 text-gray-400">Choose at least 5 target audiences</p>
            <div className="grid grid-cols-3 gap-4 ">
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>

                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>
                <div className="p-4 border-2 border-gray-300 rounded-2xl">
                    <label className="flex items-center justify-between">
                        Amazon KDP <span className='px-4 py-2 bg-blue-300 rounded-full'>13000</span>
                        <input
                            type="radio"
                            value="Amazon KDP"
                            checked={gender === 'Amazon KDP'}
                            onChange={() => setGender('Amazon KDP')}
                        />
                    </label>
                </div>


            </div>
            <div className="flex justify-start mt-4">
                <button
                    className={`px-4 py-2 rounded-full ${isContinueEnabled ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'}`}
                    disabled={!isContinueEnabled}
                >
                    Continue
                </button>
            </div>
        </div>

    );

    const budgetTab = () => (
        <div>
            <h2 className="mb-2 text-2xl font-semibold">Budget</h2>
            <p className="mb-12 text-gray-400">Enter total amount you want to spend</p>
            <p className="mb-2">Amount</p>
            <input
                type="number"
                placeholder="₦"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-1/2 px-4 py-2 border border-gray-300 rounded"
            />
            <p className='my-12 text-2xl font-semibold'>Estimated Clicks: 0</p>
            <div className="flex justify-start mt-4">
                <button
                    className={`px-4 py-2 rounded-full ${isPostBannerEnabled ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'}`}
                    disabled={!isPostBannerEnabled}
                >
                    Post Banner
                </button>
            </div>
        </div>
    );

    return (
        <Layout className="px-4 pt-4">
            <div className="h-screen px-8 overflow-y-auto">
                <div className="flex items-center gap-2 mb-4">
                    <button
                        className={`flex items-center gap-2 ${activeTab === 'information' ? 'p-4 text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('information')}
                    >
                        <img src="/images/Info.png" alt="info icon" className="w-6 h-6" />
                        <p>Banner information</p>
                    </button>
                    <button
                        className={`flex items-center gap-2 ${activeTab === 'target' ? 'p-4 text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('target')}
                    >
                        <img src="/images/Users_Group.png" alt="target-audience-icon" />
                        <p>Target Audience</p>
                    </button>
                    <button
                        className={`flex items-center gap-2 ${activeTab === 'budget' ? 'p-4 text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('budget')}
                    >
                        <img src="/images/wallet.png" alt="budget-icon" />
                        <p>Budget</p>
                    </button>
                </div>

                {activeTab === 'information' && (
                    <>
                        <p className="mt-8 mb-2 text-base font-semibold">Banner information</p>
                        <p className="mb-4 text-gray-400">Give detailed description of your banner ads</p>
                        <p className="mt-16 mb-4">Upload image</p>
                        <div className="flex flex-col items-center w-1/2 p-12 bg-gray-200 rounded-md">
                            <img src="/images/upload.png" alt="Upload-icon" />
                            <p>Drag and drop files here or <span className="text-blue-600 cursor-pointer">Browse</span></p>
                            <p className="text-sm text-center text-gray-400">Must be of high quality with dimensions width: 1024, height: 250</p>
                            <input type="file" onChange={handleImageUpload} className="hidden" />
                        </div>
                        <div className="my-12">
                            <p>External link (This is the URL users will be directed to)</p>
                            <textarea
                                rows="1"
                                className="w-1/2 px-4 py-2 border border-gray-300 rounded"
                                value={externalLink}
                                onChange={(e) => setExternalLink(e.target.value)}
                            />
                        </div>
                    </>
                )}
                {activeTab === 'target' && targetAudience()}
                {activeTab === 'budget' && budgetTab()}

                {activeTab === 'information' && (
                    <button
                        className={`mt-6 px-4 py-2 rounded-full ${isFormValid() ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'}`}
                        disabled={!isFormValid()}
                    >
                        Continue
                    </button>
                )}
            </div>
        </Layout>
    );
};

export default CreateBannerAds;