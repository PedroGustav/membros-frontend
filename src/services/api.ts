import axios from 'axios';

const api = axios.create({
    baseURL: 'https://membros-adtacima.herokuapp.com/',
})

export default api;