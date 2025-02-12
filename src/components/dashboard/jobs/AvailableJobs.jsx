import Layout from "../../pageLayout"
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { fetchJob } from '../../../Services/jobs';



const AvailableJobs = () => {
    const [selectedJob, setSelectedJob] = useState("Facebook jobs");
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getJobs = async () => {
            setLoading(true)
            try {
                const jobData = await fetchJob();
                setJobs(jobData || []);
            } catch (error) {
                console.error("Error fetching jobs:", error);
                setJobs([]);
            }
            setLoading(false);
        };

        getJobs();
    }, []);

    return (
        <Layout className="px-4 pt-4">
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

                {loading ? (
                    <div className="flex justify-center mt-8">
                        <div className="w-6 h-6 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                        <p className="ml-2 text-gray-600">Loading jobs...</p>
                    </div>
                ) : jobs.length > 0 ? (
                    jobs.map((job) => (
                        <Link to={`/job/${job.id}`} key={job.id}>
                            <div className="p-4 mt-8 bg-white rounded-lg shadow-md cursor-pointer">
                               
                                <div className="flex justify-between">
                                    <p>{job.post_title}</p>
                                    <p>{job.currency} {job.campaign_amount}</p> 
                                </div>

                                
                                <div className="relative w-full h-2 mt-4 bg-gray-300 rounded">
                                    <div
                                        className="absolute h-2 bg-blue-600 rounded"
                                        style={{ width: `${job.progress}%` }} 
                                    ></div>
                                </div>

                            
                                <div className="flex justify-between mt-4 text-sm text-gray-600">
                                    <p>{job.type}</p>
                                    <p>{job.completed} / {job.number_of_staff} workers completed</p>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No jobs available</p>
                )}

    
                <div>
                    <img src="/images/advertise.png" alt="advert-banner" className="w-full py-8" />
                </div>
            </div>
        </Layout>
    )
}

export default AvailableJobs;