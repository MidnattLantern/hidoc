import axios from 'axios';

axios.defaults.baseURL = 'https://hidoc-api-80e680483d64.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();