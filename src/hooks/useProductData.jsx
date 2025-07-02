import { getProducts } from "../services/api";
import usePagination from "./usePagination";

export function useProductData({ pageSize, isPageinated = true }) {
  const {
    currentPage,
    totalPages,
    data: products,
    isLoading,
    error,
    goToPage,
    nextPage,
    prevPage,
  } = usePagination({
    fetchData: getProducts,
    pageSize,
    isEnabled: isPageinated,
  });

  return {
    products,
    currentPage,
    totalPages,
    isLoading,
    error,
    goToPage,
    nextPage,
    prevPage,
  };
}
