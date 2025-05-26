const BASEURL = "https://panda-market-api.vercel.app";

export async function getFavoriteItems({
  page = 1,
  pageSize = 4,
  orderBy = "favorite",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(`${BASEURL}/products?${query}`);
  if (!response.ok) {
    throw new Error("상품 목록을 불러오는데 오류가 발생했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getAllItems({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const response = await fetch(`${BASEURL}/products?${query}`);
  if (!response.ok) {
    throw new Error("상품 목록을 불러오는데 오류가 발생했습니다");
  }
  const body = await response.json();
  return body;
}
