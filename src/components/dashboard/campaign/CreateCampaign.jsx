import { useEffect, useState } from 'react';
import Layout from '../../pageLayout';
import { fetchCampaignCategories, fetchCampaignSubCategories, createCampaign } from '../../../Services/campaign';

const CreateCampaign = () => {
    const [activeTab, setActiveTab] = useState('information');
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [showSubCategoryDropdown, setShowSubCategoryDropdown] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedSubCategory, setSelectedSubCategory] = useState('Select');
    const [numberOfWorkers, setNumberOfWorkers] = useState('');
    const [title, setTitle] = useState('');
    const [externalLink, setExternalLink] = useState('');
    const [campaignDescription, setCampaignDescription] = useState('');
    const [campaignProof, setCampaignProof] = useState('');
    const [agreed, setAgreed] = useState(false);

    const getCampaignCategories = async () => {

        try {
            const response = await fetchCampaignCategories()

            if (response) {
                const data = response;
                console.log('API Response:', data);

                if (data && Array.isArray(data.data)) {
                    setCategories(data.data);
                } else {
                    console.error('Unexpected data format:', data);
                }
            }


        } catch (error) {
            console.error('Error fetching campaign data:', error);
        }
    };

    const getCampaignSubCategories = async (id) => {

        try {
            const response = await fetchCampaignSubCategories(id)

            if (response) {
                const data = response;
                console.log('API Response:', data);

                if (data && Array.isArray(data.data)) {
                    setSelectedSubCategory(data.data);
                } else {
                    console.error('Unexpected data format:', data);
                }
            }


        } catch (error) {
            console.error('Error fetching campaign data:', error);
        }
    };

    const createNewCampaign = async () => {
        try {
            const payload = {
                "description": campaignDescription,
                "proof": campaignProof,
                "post_title": title,
                "post_link": externalLink,
                "number_of_staff": numberOfWorkers,
                "campaign_amount": "3",
                "validate": true,
                "campaign_type": selectedCategory.id,
                "campaign_subcategory": selectedSubCategory.id,
                "allow_upload": true,
                "priotize": false
            }
            const res = await createCampaign({
                ...payload
            })
            if (res.status) {
                window.alert('Post successfully created')
            }
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {

        getCampaignCategories();
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            getCampaignSubCategories(selectedCategory.id)
        }
    }, [selectedCategory]);


    const toggleCategoryDropdown = () => {
        setShowCategoryDropdown(!showCategoryDropdown);
        setShowSubCategoryDropdown(false);
    };

    const toggleSubCategoryDropdown = () => {
        setShowSubCategoryDropdown(!showSubCategoryDropdown);
        setShowCategoryDropdown(false);
    };

    const handleSubCategorySelect = (subCategory) => {
        setSelectedSubCategory(subCategory);
        setShowSubCategoryDropdown(false);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setShowCategoryDropdown(false);
    };

    const handleWorkerChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setNumberOfWorkers(value >= 0 ? value : 0);
    };

    const isFormValid = () => {
        if (activeTab === 'information') {
            return selectedCategory?.name !== 'Select' && selectedSubCategory !== 'Select' && numberOfWorkers > 0;
        }
        if (activeTab === 'description') {
            return title && externalLink && campaignDescription && campaignProof && agreed;
        }
        return false;
    };

    const renderInformationContent = () => (
        <div>
            <p className="mb-4">Category</p>
            <div className="relative mb-4">
                <button
                    onClick={toggleCategoryDropdown}
                    className="flex items-center justify-between w-1/2 px-4 py-2 mb-8 text-left text-gray-700 bg-gray-200 rounded"
                >
                    <span>{selectedCategory?.name || 'Select Category'}</span>
                    <img src="/images/select-arrow.png" alt="select dropdown" className="w-6 h-6 ml-2" />
                </button>
                {showCategoryDropdown && (
                    <ul
                        className="absolute left-0 z-10 w-1/2 mt-2 bg-white border border-gray-200 rounded shadow-lg"
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

            <p className="mb-2">Sub-category</p>
            <div className="relative">
                <button
                    onClick={toggleSubCategoryDropdown}
                    className="flex items-center justify-between w-1/2 px-4 py-2 mb-8 text-left text-gray-700 bg-gray-200 rounded"
                >
                    <span>{selectedSubCategory?.name || 'Select Sub-category'}</span>
                    <img src="/images/select-arrow.png" alt="select dropdown" className="w-6 h-6 ml-2" />
                </button>
                {showSubCategoryDropdown && (
                    <ul
                        className="absolute left-0 z-10 w-1/2 mt-2 bg-white border border-gray-200 rounded shadow-lg"
                        style={{ maxHeight: '200px', overflowY: 'auto' }}  // Set max-height and overflow
                    >
                        {selectedSubCategory.map((el) => (
                            <li
                                key={el.id}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleSubCategorySelect(el)}
                            >
                                {el.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className='flex gap-2'>
                <div>
                    <p className="mb-2">Number of workers</p>
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            value={numberOfWorkers}
                            onChange={handleWorkerChange}
                            className="px-2 py-1 text-center border border-gray-300 rounded w-96"
                        />
                    </div>
                </div>

                <div>
                    <p className="mb-2">Cost per campaign</p>
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            className="px-2 py-1 text-center border border-gray-300 rounded w-96"
                        />
                    </div>
                </div>
            </div>
            <p>Estimated cost <span>&#8358;</span></p>
        </div>
    );

    const renderDescriptionContent = () => (
        <div className='h-screen overflow-y-auto pb-28'>
            <div className='flex gap-2 mb-6'>
                <img src="/images/back-arrow.png" onClick={() => setActiveTab('information')} alt="arrow-back" />
                <p >Back</p>
            </div>
            <p className="mb-2">Campaign Description</p>
            <p className='mb-6'>Give detailed description of the campaign</p>

            <p>Title</p>
            <textarea
                rows="2"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <p className='mb-6'>Please give a simple campaign title e.g Facebook Like or Youtube comment</p>

            <p>External Link</p>
            <textarea
                rows="2"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded"
                value={externalLink}
                onChange={(e) => setExternalLink(e.target.value)}
            />
            <p className='mb-6'>Please provide an external link for your campaign e.g https://myhotjobz.com</p>

            <p>Campaign Description (Ensure you provide simple and clear instruction on task to be done)</p>
            <textarea
                rows="5"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded"
                value={campaignDescription}
                onChange={(e) => setCampaignDescription(e.target.value)}
            />

            <p className='mt-6'>Expected Campaign Proof</p>
            <p className='mt-6'>(You can request for social media handle, email or other means of identifying the worker)</p>
            <textarea
                rows="5"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded"
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
                <span className="ml-2 text-base text-gray-600">I agree that this campaign will be automatically approved after 24 hours if I fail to approve it.</span>
            </label>

            <button
                className={`mt-6 px-4 py-2 rounded-full ${isFormValid() ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'}`}
                disabled={!isFormValid()}
                onClick={createNewCampaign}
            >
                Post Campaign
            </button>
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
                        <p className="mb-2 text-base font-semibold">Campaign information</p>
                        <p className="mb-4">Please provide detailed information about your campaign.</p>
                        {renderInformationContent()}
                    </>
                )}
                {activeTab === 'description' && renderDescriptionContent()}

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

export default CreateCampaign;