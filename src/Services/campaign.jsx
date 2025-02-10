import api from "./api";

export const fetchCampaignList = async (type = "offline", page = 1) => {
    try {
        const res = await api.get(`/campaign?type=${type}&page=${page}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching campaign list:", error);
        return null;
    }
};

export const fetchCampaignCategories = async () => {
    try {
        const res = await api.get(`/campaign/categories`);
        return res.data?.data?.category || [];
    } catch (error) {
        console.error("Error fetching campaign categories:", error);
        return [];
    }
};

export const createCampaign = async (payload) => {
    try {
        const res = await api.post(`/campaign`, payload);
        return res.data;
    } catch (error) {
        console.error("Error creating campaign:", error);
        return null;
    }
};
