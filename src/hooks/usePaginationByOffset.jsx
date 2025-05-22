const getCurrentPageState = ({
  offset,
  pageSize = 1,
  totalDataCount = 1,
  visiblePageLength,
}) => {
  const nextCurrentPageNumber = Math.ceil(offset / pageSize);

  const nextTotalPagesCount = Math.ceil(totalDataCount / pageSize);
  //prettier-ignore
  const paginationStartPage = Math.floor((nextCurrentPageNumber - 1) / visiblePageLength) * visiblePageLength + 1;
  const remainingPageCount = nextTotalPagesCount - paginationStartPage + 1;
  const visiblePageCount =
    remainingPageCount >= visiblePageLength ? visiblePageLength : remainingPageCount;
  const nextVisiblePageNumbers = new Array(visiblePageCount)
    .fill(0)
    .map((v, i) => v + i + paginationStartPage);
  return { nextCurrentPageNumber, nextVisiblePageNumbers, nextTotalPagesCount };
};

export const usePaginationByOffset = ({
  offset,
  pageSize,
  totalDataCount,
  visiblePageLength = 5,
}) => {
  //prettier-ignore
  const { nextTotalPagesCount, nextCurrentPageNumber, nextVisiblePageNumbers } =
    getCurrentPageState({offset, pageSize, totalDataCount, visiblePageLength});

  //prettier-ignore
  return {
    totalPagesCount: nextTotalPagesCount,
    currentPageNumber: nextCurrentPageNumber,
    visiblePageNumbers: nextVisiblePageNumbers,
  };
};
