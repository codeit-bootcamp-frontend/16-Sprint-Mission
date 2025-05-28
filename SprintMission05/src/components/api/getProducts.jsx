//컴포넌트안에서 사용하도록
// getProducts
export const getProducts = async ({
  order = "createdAt",
  offset = 0,
  limit = 10,
}) => {
  const query = new URLSearchParams({ order, offset, limit }).toString();
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  if (!response.ok) {
    throw new Error("상품을 불러오는데 실패했습니다");
  }
  const body = await response.json();
  console.log("🔥 API 응답:", body);
  return body;
};

// useProducts 커스텀 훅 : 적용 예시가 잘못되었다-> 반복되는 로직이 즁요 : 좀 더 고민
