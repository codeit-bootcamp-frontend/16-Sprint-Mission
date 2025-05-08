const BASE_URL = 'https://panda-market-api.vercel.app';

export const getItems = async ({
  page,
  pageSize,
  orderBy = 'recent',
  keyword = '',
}) => {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;

  const response = await fetch(`${BASE_URL}/products?${query}`);
  if (!response.ok) {
    throw new Error('품목을 불러오지 못했습니다.');
  }
  const body = response.json();
  return body;
};
