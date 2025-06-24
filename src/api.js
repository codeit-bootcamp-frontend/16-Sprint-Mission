const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString();

  const response = await fetch(`${BASE_URL}/products?${query}`);
  if (!response.ok) {
    throw new Error("상품을 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function postProducts(data) {
  const response = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("상품 등록 실패");

  return await response.json();
}
