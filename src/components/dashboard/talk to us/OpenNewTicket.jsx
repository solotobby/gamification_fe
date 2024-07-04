import Layout from "../../pageLayout";
import { useState } from "react";


const OpenNewticket = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [message, setMessage] = useState('');
    const [fileUploaded, setFileUploaded] = useState(false);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleFileUpload = () => {
        setFileUploaded(true);
    };

    const isFormComplete = selectedOption && message && fileUploaded;

    return (
        <Layout>
            <div className="h-screen p-12 overflow-x-auto overflow-y-auto">
                <div className="bg-white p-14">
                    <div className="mb-8">
                        <div className="mb-8">
                            <p className="text-2xl font-semibold">We want to hear from you</p>
                            <p className="mb-2 text-base text-gray-500">Please let us know how you feel about Freebyz.</p>
                        </div>

                        <div className="mb-12">
                            <p>What is the ticket about</p>
                            <select
                                value={selectedOption}
                                onChange={handleOptionChange}
                                className="w-1/2 p-2 border border-gray-300 rounded-md"
                            >
                                <option value="" disabled>
                                    Select
                                </option>
                                <option value="reporting">Reporting a worker</option>
                                <option value="feedback">Feedback</option>
                                <option value="complaint">Complaint</option>
                            </select>
                        </div>

                        <div className="mb-12">
                            <p>Message</p>
                            <textarea
                                value={message}
                                onChange={handleMessageChange}
                                className="w-1/2 p-2 border border-gray-300 rounded-md"
                                rows="10"
                            ></textarea>
                        </div>

                        <div>
                            <p>Upload proof</p>
                            <div className="flex flex-col items-center w-1/2 p-12 bg-gray-200 border-2 border-gray-300 rounded-md">
                                <img src="/images/upload.png" alt="Upload-icon" />
                                <p>
                                    Drag and drop files here or{' '}
                                    <span className="text-blue-600 cursor-pointer">Browse</span>
                                </p>
                                <p className="text-sm text-center text-gray-400">
                                    Must be of high quality with dimensions width: 1024, height: 250
                                </p>
                                <input type="file" className="hidden" onChange={handleFileUpload} />
                            </div>

                            <button
                                className={`px-6 py-4 my-12 rounded-full ${
                                    isFormComplete ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                                }`}
                                disabled={!isFormComplete}
                            >
                                Send
                            </button>

                            <p className="w-1/2 p-4 bg-red-100 border-2 border-red-500 border-dashed rounded-2xl">
                                Note: If you are reporting a worker, please include the worker name, email, and the Job
                                done. This will enable us to take proper action.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default OpenNewticket;