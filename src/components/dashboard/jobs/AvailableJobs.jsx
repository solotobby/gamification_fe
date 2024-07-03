import Layout from "../../pageLayout"
import { Link } from 'react-router-dom';
import { useState } from "react";



const AvailableJobs = () => {
    const [selectedJob, setSelectedJob] = useState("Facebook jobs");

    return (
        <Layout className="px-4 pt-4">
            <>
                <div className="h-screen px-8 py-8 overflow-y-auto">

                <div className="flex justify-end mb-4">
                        <div className="relative flex items-center">
                            <select
                                value={selectedJob}
                                onChange={(e) => setSelectedJob(e.target.value)}
                                className="px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                            >
                                <option>Facebook jobs</option>
                                <option>TikTok jobs</option>
                                <option>Instagram jobs</option>
                            </select>
                            <img
                                src="/images/dropdown.png"
                                alt="drop-down-icon"
                                className="absolute w-4 h-4 pointer-events-none right-3"
                            />
                        </div>
                    </div>

                    <Link to="/first-job">
                        <div className="p-4 mt-8 bg-white cursor-pointer">
                            <div className="flex justify-between">
                                <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                                <p>&#8358;15.00</p>
                            </div>
                            <div className="relative w-full h-2 mt-16 bg-gray-300">
                                <div className="absolute h-2 bg-blue-600" style={{ width: '50%' }}></div>
                            </div>
                            <div className="flex justify-between mt-12">
                                <p>Facebook jobs</p>
                                <p>14 / 20 workers completed</p>
                            </div>
                        </div>
                    </Link>
                    <div className="p-4 mt-8 bg-white">
                        <div className="flex justify-between">
                            <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                            <p>&#8358;15.00</p>
                        </div>
                        <div className="relative w-full h-2 mt-16 bg-gray-300 rounded">
                            <div className="absolute h-2 bg-blue-600" style={{ width: '50%' }}></div>
                        </div>
                        <div className="flex justify-between mt-12">
                            <p>Facebook jobs</p>
                            <p>14 / 20 workers completed</p>
                        </div>
                    </div>
                    <div className="p-4 mt-8 bg-white">
                        <div className="flex justify-between">
                            <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                            <p>&#8358;15.00</p>
                        </div>
                        <div className="relative w-full h-2 mt-16 bg-gray-300 rounded">
                            <div className="absolute h-2 bg-blue-600" style={{ width: '50%' }}></div>
                        </div>
                        <div className="flex justify-between mt-12">
                            <p>Facebook jobs</p>
                            <p>14 / 20 workers completed</p>
                        </div>
                    </div>
                    <div>
                        <img src="/images/advertise.png" alt="advert-banner" className="w-full py-8" />
                    </div>
                    <div className="p-4 mt-8 bg-white">
                        <div className="flex justify-between">
                            <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                            <p>&#8358;15.00</p>
                        </div>
                        <div className="relative w-full h-2 mt-16 bg-gray-300 rounded">
                            <div className="absolute h-2 bg-blue-600" style={{ width: '50%' }}></div>
                        </div>
                        <div className="flex justify-between mt-12">
                            <p>Facebook jobs</p>
                            <p>14 / 20 workers completed</p>
                        </div>
                    </div>
                    <div className="p-4 mt-8 bg-white">
                        <div className="flex justify-between">
                            <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                            <p>&#8358;15.00</p>
                        </div>
                        <div className="relative w-full h-2 mt-16 bg-gray-300 rounded">
                            <div className="absolute h-2 bg-blue-600" style={{ width: '50%' }}></div>
                        </div>
                        <div className="flex justify-between mt-12">
                            <p>Facebook jobs</p>
                            <p>14 / 20 workers completed</p>
                        </div>
                    </div>
                </div>

            </>

        </Layout>
    )
}

export default AvailableJobs;