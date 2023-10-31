import axios from 'axios';

const baseAPI = axios.create({baseURL: 'https://uguratakan.com/api/'});

export default baseAPI;
