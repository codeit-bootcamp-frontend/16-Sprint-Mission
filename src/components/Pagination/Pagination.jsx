/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import arrowLeft from "../../assets/images/ic_arrow_sm_left.svg";
import arrowRight from "../../assets/images/ic_arrow_sm_right.svg";
import Button from "../ui/Button";

const Pagination = ({ pageData, pageActions }) => {
  const { currentPage, currentPages, currentCursor, hasPrev, hasNext } =
    pageData;
  const { goToPage, goPrevPages, goNextPages, goToPrev, goToNext } =
    pageActions;

  // 커서 기반 분기
  const isCursor = !!currentCursor || (!currentPage && !currentPages);

  return (
    <div css={PaginationStyle}>
      <button
        onClick={isCursor ? goToPrev : goPrevPages}
        css={PaginationBtnStyle(false)}
        disabled={!hasPrev}
      >
        <img src={arrowLeft} alt="이전 페이지" />
      </button>

      {isCursor ? (
        <>
          <Button size="sm" onClick={goToPrev} disabled={!hasPrev}>
            이전 페이지
          </Button>
          <Button size="sm" onClick={goToNext} disabled={!hasNext}>
            다음 페이지
          </Button>
        </>
      ) : (
        currentPages.map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            css={PaginationBtnStyle(page === currentPage)}
          >
            {page}
          </button>
        ))
      )}

      <button
        onClick={isCursor ? goToNext : goNextPages}
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
