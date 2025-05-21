import { useState } from "react";
import styles from "./Pagination.module.css";
import arrowLeft from "../assets/images/ic_arrow_sm_left.svg";
import arrowRight from "../assets/images/ic_arrow_sm_right.svg";

const Pagination = ({
  handleLoad,
  pageSize = 10,
  paginationSize = 5,
  totalPage,
  onCurrentPage,
}) => {
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const [currentPages, setCurrentPages] = useState(
    Array.from({ length: paginationSize }, (_, i) => i + 1)
  );
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageNumClick = (e) => {
    const selectedPage = +e.target.textContent;
    setCurrentPage(selectedPage);
    onCurrentPage(selectedPage);
  };

  const handlePrevPaginationClick = () => {
    const currentFirstPage = currentPages[0];
    const prevFirstPage = currentFirstPage - paginationSize;
    const prevLastPage = prevFirstPage + paginationSize - 1;

    let prevPages = Array.from(
      { length: paginationSize },
      (_, i) => prevFirstPage + i
    );

    setHasPrev(true);
    setCurrentPages(prevPages);
    handleLoad({
      page: prevLastPage,
      pageSize,
    });
    setCurrentPage(prevLastPage);

    if (prevFirstPage === 1) setHasPrev(false);

    setHasNext(true);
  };

  const handleNextPaginationClick = () => {
    const paginationLength = currentPages.length;
    const currentLastPage = currentPages[paginationLength - 1];
    const nextFirstPage = currentLastPage + 1;
    let nextPages = Array.from(
      { length: paginationSize },
      (_, i) => nextFirstPage + i
    ).filter((page) => page <= totalPage); // totalPage 초과 방지

    setHasPrev(true);
    setCurrentPages(nextPages);
    handleLoad({
      page: nextFirstPage,
      pageSize,
    });
    setCurrentPage(nextFirstPage);

    if (nextPages.includes(totalPage)) setHasNext(false);
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={handlePrevPaginationClick}
        className={styles["pagination-btn"]}
        disabled={!hasPrev}
      >
        <img src={arrowLeft} alt="이전 페이지" />
      </button>
      {currentPages.map((page) => (
        <button
          key={page}
          onClick={handlePageNumClick}
          className={`${styles["pagination-btn"]} ${
            page === currentPage ? styles.active : ""
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNextPaginationClick}
        className={styles["pagination-btn"]}
        disabled={!hasNext}
      >
        <img src={arrowRight} alt="다음 페이지" />
      </button>
    </div>
  );
};

export default Pagination;
