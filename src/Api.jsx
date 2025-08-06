import axios from 'axios';

export const fetchProducts = async params => {
  const queryString = new URLSearchParams(params).toString();
  const baseURL = 'https://panda-market-api.vercel.app/products';
  try {
    const response = await axios.get(`${baseURL}?${queryString}`);
    return response.data;
  } catch (error) {
    console.error('상품 리스트를 받아오지 못했습니다!', error);
    throw new Error('상품 리스트를 받아오지 못했습니다!');
  }
};
