import axios, { AxiosError } from 'axios';

// 서버 사이드 여부
const isServer = typeof window === 'undefined';

const apiClient = axios.create({
  baseURL: isServer ? `${process.env.NEXT_PUBLIC_ROOT_URL}/api` : process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' },
});

// 에러 처리
apiClient.interceptors.response.use(
  (res) => res.data,
  async (error: AxiosError) => {
    if (!error.response) {
      return Promise.reject(new Error('네트워크 오류가 발생했습니다. 인터넷 상태를 확인해주세요.'));
    }
    const { status, data } = error.response;
    const errorMessage = (data as { message?: string })?.message ?? '서버에서 오류가 발생했습니다.';
    console.error('API 에러 발생:', { status, errorMessage, data });
    return Promise.reject(error);
  },
);

export default apiClient;
