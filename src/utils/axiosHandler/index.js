import axios from 'axios';
import {AppConfig} from '../appConfig';

const axiosInstance = axios.create({
  baseURL: AppConfig.BASEURL,
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = '';
    if (token) {
      config.headers = {
        ...config.headers,
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      };
    } else {
      config.headers = {
        ...config.headers,
        Accept: 'application/json',
      };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    if (response.data) {
      return Promise.resolve(response);
    }
  },
  error => {
    if (error.response && error.response.data) {
      const err = error.response.data;
      if (err.error instanceof Array) {
        return Promise.reject(err.error[0]);
      } else {
        return Promise.reject(err.error);
      }
    }

    if (error && error.message === 'canceled') {
      return Promise.reject({message: 'No Internet Connection!'});
    }

    return error;
  },
);

export default axiosInstance;
