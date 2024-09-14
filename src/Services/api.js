import axios from 'axios'
import { getToken, removeToken, removeUser } from '../utils'

const api = axios.create({
    baseURL: 'http://app.e-portal.com.ng/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use((config) => {
    // const token = getToken()
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTYzNDAyYWQ1YWY2ZTdkMTNhZmNjYzY2YjMwNGY5MDI0ZjIyYzRkNDcxNmZhZmQ5Nzk5MzBhYTc0NDZkNDU2OTAwNTYxOTJhMmEwM2U4NjIiLCJpYXQiOjE3MjM5NzI3NDIuMjcxMzE0LCJuYmYiOjE3MjM5NzI3NDIuMjcxMzE3LCJleHAiOjE3NTU1MDg3NDIuMjUwNDExLCJzdWIiOiI3NDc4Iiwic2NvcGVzIjpbXX0.PVxm2A70ip_EcqLklNSL8jFeZjKqBGCVorM0MK8mBkTucsXCqX_V8q-EEu5RFB9nknHOeo7y70ans2TvFswW862UJ1qdfIaO-E8_D371f8XMXMXEezvu-Y2b00CsuklWOQv3taFx-buPiw_XUKYoqoBnpyE_kpr7eWmdIVHq3ylT38nqqhKbA0eAOh1Q7G-hYKgxIhHYSWjaB1C6O4h0Es77mWOMAwEpgaojvYquS5HxtxuNzjgy6Y5r9THlG0IO48zVeHAnx375sHornkE8P84ri7iShfjy5DNTUE0aJcWtAOvOv47zalGRjPzwmjwf-MQg2ndR--Vz0UZktHrMYM0PjagsPihc6EhsudnW92WUfvgoRVcdDwyR-hdT7HuMlXtcxUd5dkueUibuhB0XsLAFWS4zKKALlJjGxFLdGLd8Z98rJdpxz-C_2fVeRH6C60-diB70bv3fZGECO8S1BMOgXkyubW4nYhLhc-QFQscknYaBKxedFvyrvC7JyVmIUGb2uMlwcH8DB09Rj4EABPPOTBmdQalfyV786BkrQClpiQwUzUUtloMqRYt44LKDS6RD7e_UDpyKvbNBE7asHHiu-Es0Xs-OUYn8w5I4IefGf444A_G7ZE4Iz4q-eouJhRm5gKNkHHnAFJNaBZOIx6j5Ji6tz8X6XvGU8A1BbME'
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
