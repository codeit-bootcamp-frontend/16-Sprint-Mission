import { useContext, useEffect, useState } from "react";
import { ProductAllContext } from "../context/ProductAllContext";
import styles from "../styles/Pagination.module.css";

function Pagination() {
  const { queryStrings, setQueryStrings, total } = useContext(ProductAllContext);
  const { pageSize } = queryStrings;
  const [pageStart, setPageStart] = useState(1);
  const [pageList, setPageList] = useState([1, 2, 3, 4, 5]);
  const pageLength = Math.ceil(total / pageSize);
  const PAGINATION_MAX = 5;

  //이전으로 가기(pageStart변경)
  function handlePrev() {
    if (pageStart - PAGINATION_MAX >= 1) {
      setPageStart((prev) => prev - PAGINATION_MAX);
    }
  }

  //다음으로 가기(pageStart변경)
  function handleNext() {
    if (pageLength >= pageStart + PAGINATION_MAX) {
      setPageStart((prev) => prev + PAGINATION_MAX);
    }
  }

  //pageStart 바뀌면 페이지네이션 바꾸기
  useEffect(() => {
    const visiblePages = new Array(PAGINATION_MAX);
    for (let i = 0; i < PAGINATION_MAX; i++) {
      if (pageStart + i > pageLength) break;
      visiblePages[i] = pageStart + i;
    }
    setPageList(visiblePages);
    
    setQueryStrings((prev) => ({
      ...prev,
      page: pageStart,
    }));
  }, [pageStart, pageLength]);

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
        aria-label="이전 페이지"
        className={styles.pagination__prev}
        onClick={handlePrev}
      >
        {"‹"}
      </li>
      {pageList.map((i) => (
        <li
          aria-label={`${i}페이지로 이동`}
          className={
            queryStrings.page == i ? styles[`pagination--activate`] : ""
          }
          onClick={handlePageRequest}
          key={`${i}`}
        >
          {i}
        </li>
      ))}
      <li
        aria-label="다음 페이지"
        className={styles.pagination__next}
        onClick={handleNext}
      >
        {"›"}
      </li>
    </ul>
  );
}

export default Pagination;
