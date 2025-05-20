const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  try {
    const response = await fetch(`${BASE_URL}/products?${query}`);
    if (!response.ok) {
      throw Error(
        `데이터를 불러오는데 실패했습니다 (상태 코드: ${response.status})`
      );
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("상품 데이터를 가져오는 중 오류 발생:", error);
    throw error;
  }
}
