const BASE_URL = 'https://panda-market-api.vercel.app';

export const getProductsByQuery = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
}) => {
  const params = {
    page: page,
    pageSize: pageSize,
    orderBy: orderBy,
    keyword: keyword,
  };
  const queryString = new URLSearchParams(params).toString();

  const response = await fetch(`${BASE_URL}/products?${queryString}`);
  if (!response.ok) throw new Error('상품 리스트를 불러오는데 실패했습니다.');
  return await response.json();
};
