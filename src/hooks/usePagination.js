import { useCallback, useEffect, useState } from "react";
import { getItemCount } from "../utils/getItemCount";

const usePagination = (itemCount) => {
  const INIT_PAGE_SIZE = getItemCount(itemCount || 10);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(INIT_PAGE_SIZE);

  const updatePageSize = useCallback(() => {
    const changeItemCount = getItemCount(itemCount);
    setPageSize(changeItemCount);
  }, [itemCount]);

  useEffect(() => {
    updatePageSize();
    window.addEventListener("resize", updatePageSize);

    return () => {
      window.removeEventListener("resize", updatePageSize);
    };
  }, [updatePageSize]);

  return {
    currentPage,
    setCurrentPage,
    pageSize,
  };
};

export default usePagination;
