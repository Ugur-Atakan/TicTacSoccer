import axios from 'axios';

const baseAPI = axios.create({baseURL: 'http://192.168.1.41:5001/api'});

export default baseAPI;
