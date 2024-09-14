import api from "./api";

export const fetchCampaignList = async () => {
    try {
        const res = await api.get('/dashboard/campaign/list')

        return res.data
    } catch (error) {
        console.log(error)
    }
    
}

export const fetchCampaignCategories = async () => {
    try {
        const res = await api.get('dashboard/campaign/categories')

        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const fetchCampaignSubCategories = async (id) => {
    try {
        const res = await api.get(`dashboard/campaign/sub/categories/${id}`)

        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const createCampaign = async (payload) => {
    try {
        const res = await api.post(`dashboard/campaign/`,payload)

        return res.data
    } catch (error) {
        console.log(error)
    }
}
