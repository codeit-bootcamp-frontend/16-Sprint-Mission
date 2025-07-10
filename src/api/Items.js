const BASEURL = "https://panda-market-api.vercel.app";

// 베스트 상품 목록 조회
export async function getFavoriteItems({
  page = 1,
  pageSize = 4,
  orderBy = "favorite",
}) {
  const params = {
    page,
    pageSize,
    orderBy,
  };

  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${BASEURL}/products?${query}`);
  if (!response.ok) {
    throw new Error("상품 목록을 불러오는데 오류가 발생했습니다");
  }
  const body = await response.json();
  return body;
}

// 전체 상품 목록 조회
export async function getAllItems({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const params = {
    page,
    pageSize,
    orderBy,
    keyword,
  };

  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${BASEURL}/products?${query}`);
  if (!response.ok) {
    throw new Error("상품 목록을 불러오는데 오류가 발생했습니다");
  }
  const body = await response.json();
  return body;
}

// 상품 상세 조회
export async function getItemDetail({ productId }) {
  const response = await fetch(`${BASEURL}/products/${productId}`);
  if (!response.ok) {
    throw new Error("상품 상세를 불러오는데 오류가 발생했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getItemDetailComments({
  productId,
  limit = 100,
  cursor = 0,
}) {
  const params = {
    limit,
    cursor,
  };
  const query = new URLSearchParams(params).toString();
  const response = await fetch(
    `${BASEURL}/products/${productId}/comments?${query}`
  );
  if (!response.ok) {
    throw new Error("상품 상세 댓글을 불러오는데 오류가 발생했습니다");
  }
  const body = await response.json();
  return body;
}
