import axios from 'axios';

const api = axios.create({
    baseURL: 'http://54.207.229.94:3333/',
})

export default api;