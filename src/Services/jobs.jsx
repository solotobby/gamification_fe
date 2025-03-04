import api from "./api";

export const fetchJob = async (page = 1) => {
    try {
        const res = await api.get(`/jobs/available-jobs?page=${page}`);

        if (!res.data || typeof res.data !== "object" || !Array.isArray(res.data.data)) {
            throw new Error("Unexpected API response format");
        }

        return res.data;
    } catch (error) {
        return { data: [], banners: [], pagination: null };
    }
};
