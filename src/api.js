const BASE_URL = "https://panda-market-api.vercel.app";

export async function getItems({ pageSize = 10, orderBy = "recent" }) {
  const query = `&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(`${BASE_URL}/products?page=1${query}`);

  if (!response.ok) {
    throw new Error("상품 목록을 불러오지 못했어요!");
  }

  const body = await response.json();
  return body;
}
