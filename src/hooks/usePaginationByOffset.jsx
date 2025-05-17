const getCurrentPageState = (
  offset,
  pageSize = 1,
  totalDataCount,
  maxVisiblePagelength
) => {
  const nextCurrentPageNumber = Math.ceil(offset / pageSize);

  const nextTotalPagesCount = Math.ceil(totalDataCount / pageSize);
  //prettier-ignore
  const paginationStartPage = Math.floor((nextCurrentPageNumber - 1) / maxVisiblePagelength) * maxVisiblePagelength + 1;
  const remainingPageCount = nextTotalPagesCount - paginationStartPage + 1;
  const visiblePageCount =
    remainingPageCount >= maxVisiblePagelength
      ? maxVisiblePagelength
      : remainingPageCount;
  const nextVisiblePageNumbers = new Array(visiblePageCount)
    .fill(0)
    .map((v, i) => v + i + paginationStartPage);
  return { nextCurrentPageNumber, nextVisiblePageNumbers, nextTotalPagesCount };
};

export const usePaginationByOffset = (
  offset,
  pageSize,
  totalDataCount,
  visiblePageLength = 5
) => {
  //prettier-ignore
  const { nextTotalPagesCount, nextCurrentPageNumber, nextVisiblePageNumbers } =
    getCurrentPageState(offset, pageSize, totalDataCount, visiblePageLength);

  //prettier-ignore
  return {
    totalPagesCount: nextTotalPagesCount,
    currentPageNumber: nextCurrentPageNumber,
    visiblePageNumbers: nextVisiblePageNumbers,
  };
};
