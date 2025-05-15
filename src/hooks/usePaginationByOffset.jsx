import { useEffect, useState } from 'react';

const VISIBLE_PAGECOUNT = 5;

const getCurrentPageState = (
  offset,
  pageSize = 1,
  totalDataCount,
  maxVisiblePageCount = VISIBLE_PAGECOUNT
) => {
  const nextCurrentPageNumber = Math.ceil(offset / pageSize);

  const nextTotalPagesCount = Math.ceil(totalDataCount / pageSize);

  //prettier-ignore
  const paginationStartPage = Math.floor((nextCurrentPageNumber - 1) / maxVisiblePageCount) * maxVisiblePageCount + 1;
  const remainingPageCount = nextTotalPagesCount - paginationStartPage + 1;
  const visiblePageCount =
    remainingPageCount >= maxVisiblePageCount
      ? maxVisiblePageCount
      : remainingPageCount;
  const nextVisiblePageNumbers = new Array(visiblePageCount)
    .fill(0)
    .map((v, i) => v + i + paginationStartPage);
  return { nextCurrentPageNumber, nextVisiblePageNumbers, nextTotalPagesCount };
};

export const usePaginationByOffset = (offset, pageSize, totalDataCount) => {
  const [totalPagesCount, setTotalPagesCount] = useState(1);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [visiblePageNumbers, setVisiblePageNumbers] = useState([1]);

  useEffect(() => {
    const {
      nextTotalPagesCount,
      nextCurrentPageNumber,
      nextVisiblePageNumbers,
    } = getCurrentPageState(offset, pageSize, totalDataCount);
    setTotalPagesCount(nextTotalPagesCount);
    setCurrentPageNumber(nextCurrentPageNumber);
    setVisiblePageNumbers((prev) => {
      return JSON.stringify(prev) === JSON.stringify(nextVisiblePageNumbers)
        ? prev
        : nextVisiblePageNumbers;
    });
  }, [offset, pageSize, totalDataCount]);

  return { totalPagesCount, currentPageNumber, visiblePageNumbers };
};
