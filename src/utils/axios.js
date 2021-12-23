import axios from 'axios';
import {BASE_URL, SESSION_KEY} from "../common/Constants";

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL=BASE_URL;
axiosInstance.interceptors.request.use(
    (config) => {
      const token = getToken();
      const auth = token ? `bearer ${token}` : '';
      config.headers.common['Authorization'] = auth;
      return config;
    },
    (error) => Promise.reject(error),
);
axiosInstance.interceptors.response.use(
  (response) => response
  // ,(error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

function getToken() {
  let session = localStorage.getItem(SESSION_KEY)
  if (session) {
    return JSON.parse(session).token.access_token
  }
}

function getSession() {
  let session = localStorage.getItem(SESSION_KEY)
  if (session) {
      return JSON.parse(session)
  }
  return session
}
function checkSession() {
  return localStorage.getItem(SESSION_KEY) !== null
}

if (checkSession()) {
  let sessionData = getSession();
  console.log('local storage: ',sessionData)
  let apiToken = sessionData.token
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${apiToken}`;
}
export default axiosInstance;
