import axios from 'axios';

// 서버 사이드 여부
const isServer = typeof window === 'undefined';

const apiClient = axios.create({
  baseURL: isServer ? `${process.env.NEXT_PUBLIC_ROOT_URL}/api` : process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' },
});

// 에러 처리
// if (isServer) {
apiClient.interceptors.response.use(
  (res) => res.data,
  async (error) => {
    const status = error.response?.status;
    console.log(status);
  },
);
// }

export default apiClient;
