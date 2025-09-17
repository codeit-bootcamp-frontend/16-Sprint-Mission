import axios from "axios";
import { apiUrl } from "@/constants";
import { useAuthStore } from "@/stores/authStore";

const { clearUser } = useAuthStore.getState();

const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 헤더에 액세스 토큰 추가
apiClient.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// 응답 401 에러 (액세스 토큰 만료) 발생 시 토큰 재발급
apiClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalReq = error.config;
    const status = error?.status || error?.response?.status;

    if (typeof window === "undefined") return;

    const refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken && status === 401 && !originalReq._retry) {
      originalReq._retry = true; // 요청 무한 루프 방지

      try {
        const res = await axios.post("/auth/refresh-token", refreshToken);
        localStorage.setItem("accessToken", res.data.accessToken);
        originalReq.headers.Authorization = `Bearer ${res.data.accessToken}`;

        return apiClient(originalReq);
      } catch (err) {
        // 액세스 토큰 재발급 실패: 토큰 삭제 + 로그아웃
        clearUser();

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
