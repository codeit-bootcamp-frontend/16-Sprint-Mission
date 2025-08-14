import axios from "axios";
import { apiUrl } from "@/constants";

const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
