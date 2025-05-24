/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCallback, useEffect } from "react";
import arrowLeft from "../../assets/images/ic_arrow_sm_left.svg";
import arrowRight from "../../assets/images/ic_arrow_sm_right.svg";
import usePagination from "../../hooks/usePagination";
import { DEFAULT_ITEM_PAGE_SIZE } from "../../constants/pagesize.js";

const PAGINATION_SIZE = 5;

const Pagination = ({
  pageSize = DEFAULT_ITEM_PAGE_SIZE,
  totalCount,
  paginationSize = PAGINATION_SIZE,
  handleLoad,
  orderStatus,
  searchKeyword,
}) => {
  const { pageData, pageActions } = usePagination({
    totalCount,
    pageSize,
    paginationSize,
    onPageChange: useCallback(
      (page) => {
        handleLoad({
          page,
          pageSize,
          orderBy: orderStatus,
          keyword: searchKeyword,
        });
      },
      [handleLoad, pageSize, orderStatus, searchKeyword]
    ),
  });

  const { currentPage, currentPages, hasPrev, hasNext } = pageData;
  const { goToPage, goPrevPages, goNextPages, updatePageWithResize } =
    pageActions;

  // 정렬 바뀌면 첫번째 페이지로 이동
  useEffect(() => {
    goToPage(1);
  }, [orderStatus, goToPage]);

  // resize시 보고 있던 페이지 유지
  useEffect(() => {
    updatePageWithResize(pageSize);
  }, [pageSize, updatePageWithResize]);

  return (
    <div css={PaginationStyle}>
      <button
        onClick={goPrevPages}
        css={PaginationBtnStyle(false)}
        disabled={!hasPrev}
      >
        <img src={arrowLeft} alt="이전 페이지" />
      </button>
      {currentPages.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          css={PaginationBtnStyle(page === currentPage)}
        >
          {page}
        </button>
      ))}
      <button
        onClick={goNextPages}
        css={PaginationBtnStyle(false)}
        disabled={!hasNext}
      >
        <img src={arrowRight} alt="다음 페이지" />
      </button>
    </div>
  );
};

export default Pagination;

const PaginationStyle = css`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 44px;
  padding-bottom: 20px;
`;

const PaginationBtnStyle = (isActive) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: ${isActive
    ? "1px solid var(--primary-color)"
    : "1px solid var(--border-color)"};
  color: ${isActive ? "#fff" : "var(--gray500)"};
  font-size: 1rem;
  font-weight: 600;
  background: ${isActive ? "var(--primary-color)" : "#fff"};

  &:hover {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    background: var(--gray200);
    opacity: 0.5;
    pointer-events: none;
    border: none;
  }
`;
