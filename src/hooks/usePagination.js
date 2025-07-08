import { useEffect, useState } from "react";
import useResponse from "./useResponse";

const usePagination = (itemCount) => {
  const curView = useResponse();
  const INIT_PAGE_SIZE = itemCount[curView];
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(INIT_PAGE_SIZE);

  useEffect(() => {
    const changeItemCount = itemCount[curView];
    setPageSize(changeItemCount);
  }, [curView, itemCount]);

  return {
    currentPage,
    setCurrentPage,
    pageSize,
  };
};

export default usePagination;
