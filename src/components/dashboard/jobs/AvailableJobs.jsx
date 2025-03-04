import Layout from "../../pageLayout";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { fetchJob } from "../../../Services/jobs";
import Banner from "./Banner";
import { JobContext } from "../context/JobContext";

const AvailableJobs = () => {
    const { jobs, banners, pagination, selectedJob, setSelectedJob, loading, page, setPage, setJobs, setBanners, setPagination, setLoading } = useContext(JobContext);

    useEffect(() => {
        const getJobs = async () => {
            setLoading(true);
            try {
                const result = await fetchJob(page);

                if (!result || typeof result !== "object") {
                    throw new Error("Invalid API response format");
                }

                setJobs(result.data || []);
                setBanners(result.banners || []);
                setPagination(result.pagination || null);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            } finally {
                setLoading(false);
            }
        };

        getJobs();
    }, [page, setJobs, setBanners, setPagination, setLoading]);

    const filteredJobs = selectedJob === "All Jobs"
        ? jobs
        : jobs.filter((job) => job.type === selectedJob);

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
                            <option>All Jobs</option>
                            {Array.from(new Set(jobs.map((job) => job.type))).map((type) => (
                                <option key={type}>{type}</option>
                            ))}
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
                ) : filteredJobs.length > 0 ? (
                    <>
                        {filteredJobs.map((job, index) => (
                            <div key={job.id}>
                                <Link to={`/job/${job.id}`}>
                                    <div className="p-4 mt-8 bg-white rounded-lg shadow-md cursor-pointer">
                                        <div className="flex justify-between">
                                            <p>{job.post_title}</p>
                                            <p>{job.currency} {job.campaign_amount}</p>
                                        </div>
                                        <div className="relative w-full h-2 mt-4 bg-gray-300 rounded">
                                            <div className="absolute h-2 bg-blue-600 rounded" style={{ width: `${job.progress}%` }}></div>
                                        </div>
                                        <div className="flex justify-between mt-4 text-sm text-gray-600">
                                            <p>{job.type}</p>
                                            <p>{job.completed} / {job.number_of_staff} workers completed</p>
                                        </div>
                                    </div>
                                </Link>

                                {(index + 1) % 5 === 0 && banners.length > index / 5 && (
                                    <Banner imageUrl={banners[Math.floor(index / 5)]?.banner_url || ""} />
                                )}
                            </div>
                        ))}
                    </>
                ) : (
                    <p className="text-center text-gray-500">No jobs available</p>
                )}

                {pagination && (
                    <div className="flex justify-between mt-8">
                        <button
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                            disabled={pagination.current_page === 1}
                            className={`px-4 py-2 text-white rounded ${pagination.current_page === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                                }`}
                        >
                            Previous
                        </button>
                        <p className="text-gray-700">Page {pagination.current_page} of {pagination.last_page}</p>
                        <button
                            onClick={() => setPage((prev) => Math.min(prev + 1, pagination.last_page))}
                            disabled={pagination.current_page === pagination.last_page}
                            className={`px-4 py-2 text-white rounded ${pagination.current_page === pagination.last_page ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                                }`}
                        >
                            Next
                        </button>
                    </div>
                )}

            </div>
        </Layout>
    );
};

export default AvailableJobs;
