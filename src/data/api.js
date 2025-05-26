const BASE_URL = "https://panda-market-api.vercel.app";

export const getData = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
}) => {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const res = await fetch(`${BASE_URL}/products?${query}`);

  if (!res.ok) {
    throw new Error("상품 리스트를 불러오는데 실패했습니다.");
  }

  const data = await res.json();
  return data;
};
