import axios from 'axios';
import { message } from 'antd';

let config = {
  baseURL: `/api${process.env.REACT_APP_pathname}`,
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.CancelToken = axios.CancelToken;
_axios.isCancel = axios.isCancel;
_axios.all = axios.all;

_axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.data.isok) {
      return response.data;
    } else {
      if (response.data.msg) {
        let errorMessage =
          response.data.msg && response.data.msg.length
            ? response.data.msg
            : '网络出错，请重试';
        message.error(errorMessage);
      } else {
        message.error(response.data.error);
      }
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default _axios;
