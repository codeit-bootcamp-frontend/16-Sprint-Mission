import axios from "axios";
import { BASE_URL } from "@/constants/constants";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error("API 에러:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default instance;
