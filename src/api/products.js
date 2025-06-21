import { BASE_API_URL } from "./config";

export async function fetchProducts() {
  const res = await fetch(`${BASE_API_URL}/products`);
  if (!res.ok) {
    throw new Error("상품 데이터를 불러오는데 실패했어요");
  }
  const json = await res.json();
  return json?.list || [];
}

export async function fetchPaginatedProducts({ page = 1, pageSize = 10 } = {}) {
  const res = await fetch(
    `${BASE_API_URL}/products?page=${page}&pageSize=${pageSize}`
  );
  if (!res.ok) throw new Error("상품 데이터를 불러오는데 실패했습니다.");
  const json = await res.json();
  return json;
}

export async function getProductByProductId({ productId }) {
  const res = await fetch(`${BASE_API_URL}/products/${productId}`);
  if (!res.ok) throw new Error("상품 데이터를 불러오는데 실패했습니다.");
  const json = await res.json();
  return json;
}
