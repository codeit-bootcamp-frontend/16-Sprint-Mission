import { useState } from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
  loadFunc,
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
    loadFunc({ page: prevLastPage });
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
    loadFunc({ page: nextFirstPage });
    setCurrentPage(nextFirstPage);

    if (nextPages.includes(totalPage)) setHasNext(false);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPaginationClick} disabled={!hasPrev}>
        prev
      </button>
      {currentPages.map((page) => (
        <button
          key={page}
          onClick={handlePageNumClick}
          className={`${styles["btn-page"]} ${
            page === currentPage ? styles.active : ""
          }`}
        >
          {page}
        </button>
      ))}
      <button onClick={handleNextPaginationClick} disabled={!hasNext}>
        next
      </button>
    </div>
  );
};

export default Pagination;
