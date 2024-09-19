import axios from 'axios'
import { getToken, removeToken, removeUser } from '../utils'

const api = axios.create({
    baseURL: 'http://app.e-portal.com.ng/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use((config) => {
    const token = process.env.REACT_APP_API_TOKEN;
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

api.interceptors.response.use(data => data, (error) => {
    if (error.response?.status === 401) {
        removeToken()

        window.location.href = '/login';
    }
    throw error;
});

export default api;
