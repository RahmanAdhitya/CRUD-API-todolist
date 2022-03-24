import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:2000/todo',
});

export default axiosInstance;
