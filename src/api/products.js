import { BASE_URL } from './config';

export async function fetchProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) {
    throw new Error('상품 데이터를 불러오는데 실패했어요');
  }
  const json = await res.json();
  console.log(json.list);
  return json?.list || [];
}