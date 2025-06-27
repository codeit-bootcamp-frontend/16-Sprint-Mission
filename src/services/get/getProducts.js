const BASE_URL = process.env.REACT_APP_API_URL;

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const response = await fetch(`${BASE_URL}/products?${query}`);

  if (!response.ok) {
    throw new Error("상품 목록을 불러오지 못했어요!");
  }

  const body = await response.json();
  return body;
}
