const BASE_URL = `https://panda-market-api.vercel.app`;

export async function getBestProducts() {
  try {
    const response = await fetch(
      `${BASE_URL}/products?page=1&pageSize=4&orderBy=favorite`
    );
    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("getBestProducts 실패:", error);
    throw error;
  }
}

export async function getProducts({
  page = 1,
  pageSize = 4,
  orderBy = "recent",
  keyword,
} = {}) {
  const query =
    `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}` +
    (keyword ? `&keyword=${encodeURIComponent(keyword)}` : "");
  try {
    const response = await fetch(`${BASE_URL}/products?${query}`);
    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("getProducts 실패:", error);
    throw error;
  }
}
