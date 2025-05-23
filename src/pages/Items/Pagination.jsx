import { useCallback, useContext, useEffect, useState } from "react";
import { ProductAllContext } from "../../context/ProductAllContext";
import styles from "../../styles/Pagination.module.css";

const PAGINATION_MAX = 5;

function Pagination() {
  const { queryStrings, setQueryStrings, total } = useContext(ProductAllContext);
  const { page, pageSize } = queryStrings;
  const [pageList, setPageList] = useState([1, 2, 3, 4, 5]);
  const maxPageLength = Math.ceil(total / pageSize);

  const getPaginationStart = useCallback((page)=>{
      return Math.floor((page - 1) / PAGINATION_MAX) * PAGINATION_MAX + 1;
  },[page])

  const pageStart = getPaginationStart(page);

  //이전으로 가기(pageStart변경)
  function handlePrev() {
    const prevPageStart = pageStart - PAGINATION_MAX;
    
    if (prevPageStart >= 1) {
      updatePagination(prevPageStart);
    }
  }

  //다음으로 가기(pageStart변경)
  function handleNext() {
    const nextPageStart = pageStart + PAGINATION_MAX;

    if (maxPageLength >= nextPageStart) {
      updatePagination(nextPageStart);
    }
  }

  //이전, 다음 누르면 페이지네이션 바꾸기
  function updatePagination(newPageStart) {
    const visiblePages = [];

    for (let i = 0; i < PAGINATION_MAX; i++) {
      if (newPageStart + i > maxPageLength) break;
      visiblePages.push(newPageStart + i);
    }

    setPageList(visiblePages);

    setQueryStrings((prev) => ({
      ...prev,
      page: newPageStart,
    }));
  }

  // 페이지네이션 누르면 쿼리 상태 업데이트
  function handlePageRequest(e) {
    const targetPage = Number(e.target.textContent);

    setQueryStrings((prev) => ({
      ...prev,
      page: targetPage,
    }));
  }

  return (
    <ul
      aria-label="페이지 네비게이션"
      className={styles[`items__all-pagination`]}
    >
      <li
        aria-label="이전 페이지로 가기"
        className={styles.pagination__prev}
        onClick={handlePrev}
      >
        {"‹"}
      </li>
      {pageList.map((i) => (
        <li
          aria-label={`${i}페이지로 이동`}
          className={page == i ? styles[`pagination--activate`] : ""}
          onClick={handlePageRequest}
          key={`page${i}`}
        >
          {i}
        </li>
      ))}
      <li
        aria-label="다음 페이지로 가기"
        className={styles.pagination__next}
        onClick={handleNext}
      >
        {"›"}
      </li>
    </ul>
  );
}

export default Pagination;
