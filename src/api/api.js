import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const getProducts = async ({ page = 1, pageSize = 10, orderBy = 'recent', keyword = '' }) => {
  try {
    const res = await axios.get(`${baseURL}/products`, {
      params: { page, pageSize, orderBy, keyword },
    });
    return res.data;
  } catch (error) {
    console.log('상품 목록 api 호출 실패 :', error.message);
    throw error;
  }
};
