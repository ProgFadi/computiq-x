import axios from 'axios';
import { SESSION_KEY, BASE_URL} from "../common/Constants";

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL=BASE_URL;
axiosInstance.interceptors.response.use(
  (response) => response
  // ,(error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

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
  let apiToken = sessionData.token.access_token
  console.log(apiToken)
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${apiToken}`;
}
export default axiosInstance;

