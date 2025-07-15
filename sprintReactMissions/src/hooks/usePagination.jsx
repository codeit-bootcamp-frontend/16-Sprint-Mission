//페이지네이션 번호계산용 훅
import { useMemo } from "react";

function usePagination(currentPage, totalPages, maxButtons = 5) {
  const pageNumbers = useMemo(() => {
    const half = Math.floor(maxButtons / 2);

    let start = Math.max(currentPage - half, 1);
    let end = start + maxButtons - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxButtons + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [currentPage, totalPages, maxButtons]);
  return { pageNumbers };
}

export default usePagination;
