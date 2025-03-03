import api from "./api";

export const fetchJob = async () => {
    try {
        const res = await api.get(`/jobs/available-jobs`);
        return res.data?.data || [];
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return [];
    }
};
