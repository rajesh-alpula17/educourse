import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3004",
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log('baseURL: ' + config.baseURL);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);