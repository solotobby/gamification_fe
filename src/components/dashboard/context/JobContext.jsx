import { createContext, useState, useEffect } from "react";
import { fetchJob } from "../../../Services/jobs";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);
    const [banners, setBanners] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [selectedJob, setSelectedJob] = useState("All Jobs");
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getJobs = async () => {
            setLoading(true);
            try {
                const result = await fetchJob(page);
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
    }, [page]);

    return (
        <JobContext.Provider value={{ jobs, banners, pagination, selectedJob, setSelectedJob, loading, page, setPage }}>
            {children}
        </JobContext.Provider>
    );
};

