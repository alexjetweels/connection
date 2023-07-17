import axios, { AxiosError } from 'axios';

import { queryClient } from '~/main';

import path from './path';

axios.interceptors.request.use(
  function (config) {
    config.baseURL = import.meta.env.VITE_APP_BASE_URL;
    config.withCredentials = false;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (res) {
    return res;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      queryClient.clear();
      return window.location.replace(path.LOG_IN);
    }

    return Promise.reject(error);
  }
);
