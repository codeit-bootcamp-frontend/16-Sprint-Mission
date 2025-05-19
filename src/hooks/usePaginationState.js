import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";

export default function usePaginationState(limit) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const initialIndex = (initialPage - 1) * limit;

  const [startIndex, setStartIndex] = useState(initialIndex);

  const page = Math.floor(startIndex / limit) + 1;

  useEffect(() => {
    setSearchParams({ page });
  }, [page, setSearchParams]);

  const changePage = useCallback(
    (newPage) => {
      setStartIndex((newPage - 1) * limit);
    },
    [limit]
  );

  return [page, changePage];
}
