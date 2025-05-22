import { useState, useMemo } from "react";

const usePagination = ({
  pageSize = 10,
  totalCount,
  paginationSize = 5,
  onPageChange,
}) => {
  const totalPage = useMemo(
    () => Math.ceil(totalCount / pageSize),
    [totalCount, pageSize]
  );

  const [currentPage, setCurrentPage] = useState(1);
  const currentGroupIndex = Math.floor((currentPage - 1) / paginationSize);
  const currentPages = useMemo(() => {
    const start = currentGroupIndex * paginationSize + 1;
    return Array.from({ length: paginationSize }, (_, i) => start + i).filter(
      (p) => p <= totalPage
    );
  }, [currentGroupIndex, paginationSize, totalPage]);

  const hasPrev = currentGroupIndex > 0;
  const hasNext = currentPages[currentPages.length - 1] < totalPage;

  const goToPage = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const goPrevPages = () => {
    if (!hasPrev) return;
    const prevPage = currentPages[0] - 1;
    goToPage(prevPage);
  };

  const goNextPages = () => {
    if (!hasNext) return;
    const nextPage = currentPages[currentPages.length - 1] + 1;
    goToPage(nextPage);
  };

  return {
    pageData: {
      currentPage,
      currentPages,
      hasPrev,
      hasNext,
    },
    pageActions: {
      goToPage,
      goPrevPages,
      goNextPages,
    },
  };
};

export default usePagination;
