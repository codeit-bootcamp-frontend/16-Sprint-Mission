import axios from "axios";

export const getData = async (
  order = "",
  page = 1,
  pageSize = 10,
  keyword = ""
) => {
  const query = `orderBy=${order}&page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  try {
    const response = await axios.get(
      `https://panda-market-api.vercel.app/products?${query}`
    );
    return response.data;
  } catch (error) {
    console.error("상품 리스트를 받아오지 못했습니다!", error);
    throw new Error("상품 리스트를 받아오지 못했습니다!");
  }
};
