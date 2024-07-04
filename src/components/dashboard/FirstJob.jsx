import Layout from "../pageLayout";
import { useState } from "react";
import { Modal } from "../shared";

const FirstJob = () => {
    const [agreed, setAgreed] = useState(false);
    const [proof, setProof] = useState("");
    const [fileUploaded, setFileUploaded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const isSubmitEnabled = proof && fileUploaded && agreed;

    return (
        <Layout className="px-4 pt-4">
            <div className="h-screen p-12 overflow-y-auto">
                <div className="flex gap-4 mb-8">
                    <img src="/public/images/back-arrow.png" alt="" />
                    <p>Back</p>
                </div>
                <p className="mb-12 text-xl font-semibold">Like, comment and repost my tweet on X campaign</p>
                <p className='p-2 mt-8 text-red-600 bg-red-100 border-2 border-red-400 border-dotted rounded-2xl'>
                    Please note that this job must be approved before payment. We&apos;ll automatically approve it if it is not approved by the poster after 24 hours.
                </p>

                <div className="p-8 my-8 bg-white rounded-2xl">
                    <p className="mb-2 font-semibold" >Campaign summary</p>
                    <div className="w-full h-1 mb-12 bg-gray-200"></div>
                    <div className="flex justify-between">
                        <div>
                            <p onClick={() => setIsModalOpen(!isModalOpen)}>Campaign type</p>
                            <p className="font-semibold">facebook jobs</p>
                        </div>
                        <div>
                            <p>Campaign category</p>
                            <p className="font-semibold">Follow a link to visit a webpage</p>
                        </div>
                        <div>
                            <p>Amount per campaign</p>
                            <p className="font-semibold">&#8358; 1,000</p>
                        </div>
                        <div>
                            <p>Number of workers</p>
                            <p className="font-semibold">100</p>
                        </div>
                    </div>
                </div>

                <div className="p-8 my-8 bg-white rounded-2xl">
                    <p className="mb-2 font-semibold">Campaign description</p>
                    <div className="w-full h-1 mb-12 bg-gray-200"></div>
                    <div>
                        <p>External link</p>
                        <p className="mb-8 text-blue-400 cursor-pointer">https://thspian.com/watch?id=PR-032A5E8E77D&type=act</p>
                        <p className="font-semibold">Campaign description</p>
                        <p>Follow the link and vote for the person in the video. Click vote option, it will show you where to add your nationality and active WhatsApp number. You will get a code to put in a column given, then complete the vote.</p>
                    </div>
                </div>

                <div className="p-8 my-8 bg-white rounded-2xl">
                    <p className="mb-2 font-semibold">Campaign instruction</p>
                    <div className="w-full h-1 mb-12 bg-gray-200"></div>
                    <p>Screenshot proof of the point where you add the vote or the final voting stage.</p>
                </div>

                <div className="p-8 my-8 bg-white rounded-2xl">
                    <p className="mb-2 font-semibold">Post proof of completion</p>
                    <div className="w-full h-1 mb-12 bg-gray-200"></div>
                    <p className="mb-2">Proof</p>
                    <div className="mb-4">
                        <textarea
                            rows="5"
                            className="w-1/2 px-4 py-2 border border-gray-300 rounded"
                            value={proof}
                            onChange={(e) => setProof(e.target.value)}
                        />
                    </div>
                    <p className="mb-2">Upload proof</p>
                    <div className="flex flex-col items-center w-1/2 p-4 bg-gray-100 rounded-md">
                        <img src="/images/upload.png" alt="Upload-icon" />
                        <p>Drag and drop files here or <span className="text-blue-600 cursor-pointer">Browse</span></p>
                        <p className="text-sm text-center text-gray-400">Must be of high quality with dimensions width: 1024, height: 250</p>
                    </div>
                    <label className="flex items-center mt-4">
                        <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-500 border-gray-300 rounded form-checkbox focus:ring-blue-400"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                        />
                        <span className="ml-2 text-base text-gray-600">I agree that I will wait for a maximum of 24 hours for this task to be approved by the advertiser.</span>
                    </label>

                    <button
                        className={`px-4 py-3 mt-4 rounded-full ${isSubmitEnabled ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                        disabled={!isSubmitEnabled}
                    >
                        Submit
                    </button>
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(!isModalOpen)} >
                <div className="flex flex-col items-center justify-center p-8">
                    <p className="mb-4 text-2xl font-semibold text-center">Oops!</p>
                    <p className="mb-4 text-center text-gray-500">You are not verified yet. Please click the button below to get Verified!</p>
                    <button className="px-6 py-3 text-white bg-blue-600 rounded-full">Get verified</button>
                </div>
            </Modal>
        </Layout>
    );
}

export default FirstJob;

