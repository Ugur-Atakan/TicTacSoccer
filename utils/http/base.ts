import axios from 'axios';

const baseAPI = axios.create({baseURL: 'http://172.20.10.4:5001/api/'});

export default baseAPI;
