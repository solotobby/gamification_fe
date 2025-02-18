import { useEffect, useState } from 'react';
import Layout from '../../pageLayout';
import { fetchCampaignCategories, createCampaign } from '../../../Services/campaign';

const CreateCampaign = () => {
    const [activeTab, setActiveTab] = useState('information');
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [showSubCategoryDropdown, setShowSubCategoryDropdown] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedSubCategory, setSelectedSubCategory] = useState('Select');
    const [numberOfWorkers, setNumberOfWorkers] = useState('');
    const [costPerCampaign, setCostPerCampaign] = useState('');
    const [title, setTitle] = useState('');
    const [externalLink, setExternalLink] = useState('');
    const [campaignDescription, setCampaignDescription] = useState('');
    const [campaignProof, setCampaignProof] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [subcategories, setSubcategories] = useState([]);
    const [amount, setAmount] = useState(0);
    const [finalCost, setFinalCost] = useState(0);
    const [estimatedCost, setEstimatedCost] = useState(0);



    const createNewCampaign = async () => {
        try {
            const payload = {
                description: campaignDescription,
                proof: campaignProof,
                post_title: title,
                post_link: externalLink,
                number_of_staff: numberOfWorkers,
                campaign_amount: costPerCampaign,
                validate: true,
                campaign_type: selectedCategory?.id,
                campaign_subcategory: selectedSubCategory?.id,
                allow_upload: true,
                priotize: false,
            };
            const res = await createCampaign(payload);
            if (res.status) {
                window.alert("Post successfully created");
            }
        } catch (error) {
            console.error("Error creating campaign:", error);
        }
    };

    useEffect(() => {
        getCampaignCategories();
    }, []);
    

    useEffect(() => {
        if (selectedSubCategory?.amount && numberOfWorkers > 0) {
            const baseCost = numberOfWorkers * selectedSubCategory.amount;
            setEstimatedCost(baseCost);
            setFinalCost(baseCost + (0.6 * baseCost));
        } else {
            setEstimatedCost(0);
            setFinalCost(0);
        }
    }, [numberOfWorkers, selectedSubCategory?.amount]);
    

    const getCampaignCategories = async () => {
        try {
            const data = await fetchCampaignCategories();
            if (Array.isArray(data)) {
                setCategories(data);
            }
        } catch (error) {
            console.error("Error fetching campaign categories:", error);
        }
    };


    const toggleCategoryDropdown = () => {
        setShowCategoryDropdown(!showCategoryDropdown);
        setShowSubCategoryDropdown(false);
    };

    const toggleSubCategoryDropdown = () => {
        if (!selectedCategory) return;
        setShowSubCategoryDropdown(!showSubCategoryDropdown);
    };


    const handleSubCategorySelect = (subCategory) => {
        setSelectedSubCategory(subCategory);
        setShowSubCategoryDropdown(false);
        setAmount(subCategory.amount);
    };


    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setSubcategories(category.subcategories || []);
        setSelectedSubCategory(null);
        setShowCategoryDropdown(false);
        setAmount(0);
    };



    const handleWorkerChange = (e) => {
        setNumberOfWorkers(Math.max(0, parseInt(e.target.value, 10) || 0));
    };

    const handleCostPerCampaignChange = (e) => {
        setCostPerCampaign(Math.max(0, parseInt(e.target.value, 10) || 0));
    };

    const isFormValid = () => {
        if (activeTab === "information") {
            return selectedCategory && selectedSubCategory && numberOfWorkers > 0;
        }
        if (activeTab === "description") {
            return title && externalLink && campaignDescription && campaignProof && agreed;
        }
        return false;
    };


    const renderInformationContent = () => (
        <div className='flex flex-col items-center w-full mx-auto'>
            <div className='w-[80%] mx-auto '>
                <p className="mb-4 text-lg">Category</p>
                <div className="relative w-full mx-auto mb-4">
                    <div
                        onClick={toggleCategoryDropdown}
                        className="flex items-center justify-between w-full px-4 py-4 mb-8 text-left text-gray-900 bg-gray-100 rounded-lg"
                    >
                        <span className={`${selectedCategory ? 'text-gray-700' : 'text-gray-400'}`}>{selectedCategory?.name || 'Select Category'}</span>
                        <img src="/images/select-arrow.png" alt="select dropdown" className="w-6 h-6 ml-2" />
                    </div>
                    {showCategoryDropdown && (
                        <ul
                            className="absolute left-0 z-10 w-full bg-blue-100 border-gray-200 rounded-lg shadow-lg border-lg top-20"
                            style={{ maxHeight: '200px', overflowY: 'auto' }}
                        >
                            {categories.map((el) => (
                                <li
                                    key={el.id}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleCategorySelect(el)}
                                >
                                    {el.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </div>
            <div className='w-[80%] mx-auto '>
                <p className="mb-2 text-lg">Sub-category</p>
                <div className="relative w-full mx-auto mb-4">
                    <div
                        onClick={toggleSubCategoryDropdown}
                        className="flex items-center justify-between w-full px-4 py-4 mb-8 text-left text-gray-900 bg-gray-100 rounded-lg"
                    >
                        <span className={`${selectedCategory ? 'text-gray-700' : 'text-gray-400'}`}>{selectedSubCategory?.name || 'Select Sub-category'}</span>
                        <img src="/images/select-arrow.png" alt="select dropdown" className="w-6 h-6 ml-2" />
                    </div>
                    {showSubCategoryDropdown && selectedCategory && (
                        <ul
                            className="absolute left-0 z-10 w-full bg-blue-100 border-gray-200 rounded-lg shadow-lg border-lg top-20"
                            style={{ maxHeight: '200px', overflowY: 'auto' }}
                        >
                            {subcategories.map((subCategory) => (
                                <li
                                    key={subCategory.id}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSubCategorySelect(subCategory)}
                                >
                                    {subCategory.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className='flex gap-2 mt-16 w-[80%] mx-auto'>
                <div className='flex-grow'>
                    <p className="mb-2">Number of workers</p>
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            value={numberOfWorkers}
                            onChange={handleWorkerChange}
                            className="w-full px-2 py-4 text-center border-2 border-gray-300 rounded-lg"
                            disabled={!selectedCategory || selectedSubCategory?.name === 'Select'}
                        />
                    </div>
                </div>

                <div className='flex-grow'>
                    <p className="mb-2">Cost per campaign</p>
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            value={costPerCampaign}
                            onChange={handleCostPerCampaignChange}
                            className="w-full px-2 py-4 text-center border-2 border-gray-300 rounded-lg"
                            disabled={!selectedCategory || selectedSubCategory?.name === 'Select'}
                        />
                    </div>
                </div>
            </div>
            <div className='mx-auto w-[80%]'>
                <p className="mt-10 text-lg font-semibold">Estimated cost: <span className="text-xl">&#8358; {finalCost.toFixed(2)}</span></p>
            </div>
        </div>
    );

    const renderDescriptionContent = () => (
        <div className='flex flex-col items-center w-full h-screen mx-auto overflow-y-auto pb-28'>
            <div className='w-[80%] mx-auto'>
                <div className='flex gap-2 mt-2 mb-12 justify-left'>
                    <img src="/images/back-arrow.png" onClick={() => setActiveTab('information')} alt="arrow-back" />
                    <p className='text-xl text-blue-600'>Back</p>
                </div>
                <p className="mb-2 text-2xl font-semibold text-center">Campaign Description</p>
                <p className='mb-12 text-center text-gray-500'>Give detailed description of the campaign</p>

                <p className='mb-2 text-lg'>Title</p>
                <textarea
                    rows="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <p className='mb-6 italic text-gray-500'>Please give a simple campaign title e.g Facebook Like or Youtube comment</p>

                <p className='mt-20 mb-2 text-lg'>External Link</p>
                <textarea
                    rows="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    value={externalLink}
                    onChange={(e) => setExternalLink(e.target.value)}
                />
                <p className='mb-6 italic text-gray-500'>Please provide an external link for your campaign e.g https://myhotjobz.com</p>

                <p className='mt-20 mb-2 text-lg'>Campaign Description (Ensure you provide simple and clear instruction on task to be done)</p>
                <textarea
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    value={campaignDescription}
                    onChange={(e) => setCampaignDescription(e.target.value)}
                />

                <p className='mt-20 mb-2 text-lg'>Expected Campaign Proof (You can request for social media handle, email or other means of identifying the worker)</p>

                <textarea
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    value={campaignProof}
                    onChange={(e) => setCampaignProof(e.target.value)}
                />
                <label className="flex items-center mt-4">
                    <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-500 border-gray-300 rounded form-checkbox focus:ring-blue-400"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                    />
                    <span className="ml-2 text-base text-gray-600" required >I agree that this campaign will be automatically approved after 24 hours if I fail to approve it.</span>
                </label>

                <button
                    className={`mt-16 px-4 py-2 rounded-full ${isFormValid() ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'}`}
                    disabled={!isFormValid()}
                    onClick={createNewCampaign}
                >
                    Post Campaign
                </button>
            </div>
        </div>
    );

    return (
        <Layout className="px-4 pt-4 ">
            <div className="h-screen p-8 m-5 overflow-y-auto bg-white rounded-md">
                <div className="flex items-center gap-2 mb-8">
                    <button
                        className={`flex items-center gap-2 ${activeTab === 'information' ? 'p-4 text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('information')}
                    >
                        <img src="/images/Info.png" alt="info icon" className="w-6 h-6" />
                        <p>Campaign information</p>
                    </button>
                    <button
                        className={`flex items-center gap-2 ${activeTab === 'description' ? 'p-4 text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('description')}
                    >
                        <img src="/images/text-align.png" alt="text-align-icon" />
                        <p>Campaign description</p>
                    </button>
                </div>

                {activeTab === 'information' && (
                    <>
                        <p className="mb-2 text-2xl font-semibold text-center">Campaign information</p>
                        <p className="mb-12 text-center text-gray-500">Please provide detailed information about your campaign.</p>
                        <div className='flex flex-col items-center'>
                            <div className='w-[80%] mx-auto'>
                                <p className="mb-4 text-lg">Category</p>
                                <div className="relative w-full mx-auto mb-4">
                                    <div
                                        onClick={toggleCategoryDropdown}
                                        className="flex items-center justify-between w-full px-4 py-4 mb-8 text-left text-gray-900 bg-gray-100 rounded-lg cursor-pointer"
                                    >
                                        <span className={`${selectedCategory ? 'text-gray-700' : 'text-gray-400'}`}>
                                            {selectedCategory?.name || 'Select Category'}
                                        </span>
                                        <img src="/images/select-arrow.png" alt="select dropdown" className="w-6 h-6 ml-2" />
                                    </div>
                                    {showCategoryDropdown && (
                                        <ul
                                            className="absolute left-0 z-10 w-full bg-blue-100 border-gray-200 rounded-lg shadow-lg border-lg top-20"
                                            style={{ maxHeight: '200px', overflowY: 'auto' }}
                                        >
                                            {categories.map((category) => (
                                                <li
                                                    key={category.id}
                                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                    onClick={() => handleCategorySelect(category)}
                                                >
                                                    {category.name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            <div className='w-[80%] mx-auto'>
                                <p className="mb-2 text-lg">Sub-category</p>
                                <div className="relative w-full mx-auto mb-4">
                                    <div
                                        onClick={toggleSubCategoryDropdown}
                                        className={`flex items-center justify-between w-full px-4 py-4 mb-8 text-left text-gray-900 bg-gray-100 rounded-lg cursor-pointer ${!selectedCategory ? 'opacity-50 cursor-not-allowed' : ''
                                            }`}
                                        disabled={!selectedCategory}
                                    >
                                        <span className={`${selectedSubCategory ? 'text-gray-700' : 'text-gray-400'}`}>
                                            {selectedSubCategory?.name || 'Select Sub-category'}
                                        </span>
                                        <img src="/images/select-arrow.png" alt="select dropdown" className="w-6 h-6 ml-2" />
                                    </div>
                                    {showSubCategoryDropdown && selectedCategory && (
                                        <ul
                                            className="absolute left-0 z-10 w-full bg-blue-100 border-gray-200 rounded-lg shadow-lg border-lg top-20"
                                            style={{ maxHeight: '200px', overflowY: 'auto' }}
                                        >
                                            {selectedCategory.subcategories.map((subCategory) => (
                                                <li
                                                    key={subCategory.id}
                                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                    onClick={() => handleSubCategorySelect(subCategory)}
                                                >
                                                    {subCategory.name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            <div className='flex gap-2 mt-16 w-[80%] mx-auto'>
                                <div className='flex-grow'>
                                    <p className="mb-2">Number of workers</p>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            value={numberOfWorkers}
                                            onChange={handleWorkerChange}
                                            className="w-full px-2 py-4 text-center border-2 border-gray-300 rounded-lg"
                                            disabled={!selectedCategory || selectedSubCategory?.name === 'Select'}
                                        />
                                    </div>
                                </div>

                                <div className='flex-grow'>
                                   
                                    <div className='flex-grow'>
                                        <p className="mb-2">Cost per campaign</p>
                                        <div className="flex items-center gap-2">
                                            {amount > 0 && (
                                                <div className="mt-4 text-lg font-bold">
                                                    {amount}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mx-auto w-[80%]'>
                                <p className="mt-10 text-lg font-semibold">
                                    Estimated cost: <span className="text-xl">&#8358; {finalCost.toFixed(2)}</span>
                                </p>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'description' &&
                    <div className='flex flex-col items-center'>
                        {renderDescriptionContent()}
                    </div>
                }

                {activeTab === 'information' && (
                    <div className='mx-auto w-[80%]'>
                        <button
                            className={`mt-6 px-4 py-2 rounded-full ${isFormValid() ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'}`}
                            disabled={!isFormValid()}
                            onClick={() => setActiveTab('description')}
                        >
                            Continue
                        </button>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default CreateCampaign;