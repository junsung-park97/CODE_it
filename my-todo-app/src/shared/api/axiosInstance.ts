import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const TENANT_ID = process.env.NEXT_PUBLIC_TENANT_ID;

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/${TENANT_ID}`,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API 오류:", error.response?.data?.message ?? error.message);
    return Promise.reject(error);
  },
);

export default axiosInstance;
