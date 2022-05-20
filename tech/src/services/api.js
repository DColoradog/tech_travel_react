import axios from 'axios';

const api = axios.create({
    baseURL: 'https://6286ef73e9494df61b2f63f7.mockapi.io/'
});

export default api;