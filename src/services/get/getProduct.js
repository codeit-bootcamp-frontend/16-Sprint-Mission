const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProduct(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("상품을 불러오지 못했어요!");
  }

  const body = await response.json();
  return body;
}
