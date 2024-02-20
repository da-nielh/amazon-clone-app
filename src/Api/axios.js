import axios from 'axios'

const axiosInstance = axios.create({
    // Local instance of firebase function 
    // baseURL: 'http://127.0.0.1:5001/clone-app-acf89/us-central1/api'

    // deployed version of firebase function
    // baseURL: 'https://amazon-api-deploy-0nbu.onrender.com/'

    // deployed version of amazon server on Render.com 
    baseURL: 'https://amazon-api-deploy-0nbu.onrender.com/'
})

export {axiosInstance}