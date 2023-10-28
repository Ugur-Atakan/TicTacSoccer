import axios from 'axios';

const baseAPI = axios.create({baseURL: 'http://192.168.1.110:5001/api/'});

export default baseAPI;
