export async function getProducts({ page = 1, pageSize = 1 } = {}) {
  const params = new URLSearchParams();
  if (page) params.append("page", page);
  if (page && pageSize) params.append("pageSize", pageSize);
  const response = await fetch(`https://panda-market-api.vercel.app/products?${params}`);

  if (!response.ok) {
    throw new Error("상품을 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  // console.log("API 응답:", body);
  return body;
}