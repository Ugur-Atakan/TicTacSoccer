import axios from 'axios';

const baseAPI = axios.create({baseURL: 'http://185.95.165.218:5001/api/'});

export default baseAPI;
