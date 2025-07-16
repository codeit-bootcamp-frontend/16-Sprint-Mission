import { InquiryItemType, ProductItemType } from "types/productType";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getData = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
}) => {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const res = await fetch(`${BASE_URL}/products?${query}`);

  if (!res.ok) {
    throw new Error("상품 리스트를 불러오는데 실패했습니다.");
  }

  const data = await res.json();
  return data;
};

export const getProductInfo = async (
  productId: number
): Promise<ProductItemType> => {
  const res = await fetch(`${BASE_URL}/products/${productId}`);

  if (!res.ok) {
    throw new Error("상품 정보를 불러오는데 실패했습니다.");
  }

  const data = await res.json();
  return data;
};

export const getProductInquiries = async (
  productId: number
): Promise<{ nextCursor: number; list: InquiryItemType[] }> => {
  const res = await fetch(
    `${BASE_URL}/products/${productId}/comments?limit=10`
  );

  if (!res.ok) {
    throw new Error("상품 정보를 불러오는데 실패했습니다.");
  }

  const data = await res.json();
  return data;
};
