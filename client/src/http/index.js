import axios from "axios";

const $host = axios.crete({
  baseUrl: process.env.REACT_APP_API_URL,
});

const $authHost = axios.crete({
  baseUrl: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };