import axios from "axios";
import {
  type IComments,
  type IProduct,
} from "./pages/ItemDetailsPage/ItemDetailsPage";

interface APIResponse<T> {
  status: number;
  errorCode: number;
  message: string;
  result: T;
  timestamp: Date;
}

interface ICommentsQuery {
  productId: number;
  limit: number;
  cursor?: number | null;
}

// const BASE_URL = "https://panda-market-api.vercel.app/";
const INITIAL_PAGE = 1;
const MOBILE_DEFAULT_PAGE_SIZE = 4;

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
  timeout: 5000,
});

export const getProducts = async <T>({
  orderBy = "recent",
  currentPage = INITIAL_PAGE,
  pageSize = MOBILE_DEFAULT_PAGE_SIZE,
  keyword = "",
}): Promise<APIResponse<T>> => {
  try {
    const response = await instance.get("/products", {
      params: {
        orderBy,
        page: currentPage,
        pageSize,
        keyword: keyword || undefined,
      },
    });

    return response.data;
  } catch (error) {
    console.error("상품 요청 에러:", error);
    throw error;
  }
};

export const getProductById = async <IProduct>(
  productId: number
): Promise<IProduct> => {
  try {
    const response = await instance.get(`/products/${productId}`);

    return response.data;
  } catch (error) {
    console.error("상품 요청 에러:", error);
    throw error;
  }
};

export const getComments = async <T>({
  productId,
  limit,
  cursor = 0,
}: ICommentsQuery): Promise<IComments> => {
  try {
    const response = await instance.get(`/products/${productId}/comments`, {
      params: {
        productId,
        limit,
        cursor: cursor || undefined,
      },
    });

    return response.data;
  } catch (error) {
    console.error("댓글 요청 에러:", error);
    throw error;
  }
};
