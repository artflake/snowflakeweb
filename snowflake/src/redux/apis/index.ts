import axios from "axios";

import { getToken } from "../../utils";
import { API_URL } from "../../utils/constants";

axios.defaults.xsrfHeaderName = "X-CSRF";
axios.defaults.xsrfCookieName = "csrf_token";

// Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${getToken()}`,
      "X-CSRF": `${getXcsrfToken()}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 403 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const access_token = ""; //await refreshAccessToken();
      axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getXcsrfToken() {
  let csrf = "";
  for (let i = 0; i < document.cookie.split(";").length; i++) {
    const temp = document.cookie.split(";")[i];
    if (temp.split("=")[0] === " csrf_token") {
      csrf = temp.split("=")[1];
    }
  }
  if (csrf.length === 0) {
    document.cookie = "csrf_token=" + uuidv4();
    csrf = uuidv4();
  }
  return csrf;
}

export default axiosInstance;
