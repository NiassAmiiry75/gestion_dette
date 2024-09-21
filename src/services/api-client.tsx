import axios from "axios";

const apiClient=axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout:5000,
    headers:{
        'content-Type' : 'application/json',
    }
})
export default apiClient;