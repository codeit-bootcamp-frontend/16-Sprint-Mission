const BASE_URL = "https://panda-market-api.vercel.app";
const limit = 5;

export const getComments = async (productId, cursor) => {
  const queryCursor = `&cursor=${cursor}`;
  const query = `limit=${limit}${cursor ? queryCursor : ""}`;
  const response = await fetch(
    `${BASE_URL}/products/${productId}/comments?${query}`
  );

  if (!response.ok) {
    throw new Error("댓글을 불러오지 못했어요!");
  }

  const data = await response.json();
  return data;
};
