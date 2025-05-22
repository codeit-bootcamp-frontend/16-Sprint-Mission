const BASE_URL = 'https://panda-market-api.vercel.app';

export const getItems = async ({
  offset,
  pageSize,
  orderBy = 'recent',
  keyword = '',
}) => {
	if(!pageSize) {
		throw new Error('pageSize가 설정되지 않았습니다.');
	}
  const page = Math.ceil(offset / pageSize);
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;

  const response = await fetch(`${BASE_URL}/products?${query}`);
  if (!response.ok) {
    throw new Error('품목을 불러오지 못했습니다.');
  }
  const body = await response.json();
  return body;
};

export const getItemDetails = async (id) => {
	const response = await fetch(`${BASE_URL}/products/${id}`);
	if (!response.ok) {
    throw new Error('품목을 불러오지 못했습니다.');
  }
	const body = await response.json();
	return body;
}

export const getItemComments = async (id) => {
	const response = await fetch(`${BASE_URL}/products/${id}/comments?limit=100`);
	if (!response.ok) {
    throw new Error('댓글을 불러오지 못했습니다.');
  }
	const body = await response.json();
	return body;
}