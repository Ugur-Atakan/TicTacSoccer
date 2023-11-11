import axios from 'axios';

const baseAPI = axios.create({baseURL: 'https://uguratakan.com/API/'});

export default baseAPI;
