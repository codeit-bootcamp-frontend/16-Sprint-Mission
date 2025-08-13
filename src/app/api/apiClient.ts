import axios from 'axios';

const isServer = typeof window === 'undefined';

const apiClient = axios.create({
  baseURL: isServer ? `${process.env.NEXT_PUBLIC_ROOT_URL}/api` : process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' },
});

// 에러 처리 및 리프레쉬 토큰 추가 인터셉터
apiClient.interceptors.response.use(
  (res) => res.data,
  async (error) => {
    const status = error.response?.status;
    console.log(status);
  },
);

export default apiClient;
