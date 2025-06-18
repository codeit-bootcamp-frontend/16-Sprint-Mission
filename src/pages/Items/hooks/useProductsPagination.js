// ✅ useProductsPagination.js
import { useState, useEffect, useCallback } from "react";
import { fetchPaginatedProducts } from "../../../api/products";
import useResponsiveLimit from "./useResponsiveLimit";
import usePaginationState from "./usePaginationState";

export default function useProductsPagination(itemsPerDevice) {
    
  const limit = useResponsiveLimit(itemsPerDevice);
  const [page, changePage] = usePaginationState(limit);
  const [sort, setSort] = useState("latest");
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const handleSortChange = useCallback(
    (newSort) => {
      setSort(newSort);
      changePage(1);
    },
    [changePage]
  );

  useEffect(() => {
    const load = async () => {
      const res = await fetchPaginatedProducts({ page, pageSize: limit });
      let data = res.list || [];

      if (sort === "likes") {
        data.sort((a, b) => b.favoriteCount - a.favoriteCount);
      } else {
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }

      setProducts(data);
      setTotalPages(Math.ceil(res.totalCount / limit));
    };

    if (page && limit) load();
  }, [page, limit, sort]);

  return {
    products,
    totalPages,
    page,
    changePage,
    sort,
    handleSortChange,
  };
}