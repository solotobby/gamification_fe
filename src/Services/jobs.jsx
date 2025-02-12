import api from "./api";

export const fetchJob = async () => {
    try {
        const res = await api.get(`/jobs/available-jobs?page=1&subcategory_id=2`);
        return res.data?.data || [];
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return [];
    }
};
