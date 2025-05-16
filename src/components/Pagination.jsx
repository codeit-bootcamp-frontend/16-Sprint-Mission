import { useState } from "react";

const Pagination = ({
  loadFunc,
  paginationSize = 5,
  totalPage,
  onCurrentPage,
}) => {
  const [hasNext, setHasNext] = useState(true);
  const [currentPages, setCurrentPages] = useState(
    Array.from({ length: paginationSize }, (_, i) => i + 1)
  );

  const handlePaginationClick = (e) => {
    const currentPage = e.target.textContent;
    onCurrentPage(currentPage);
  };

  const handlePrevPaginationClick = () => {};

  const handleNextPaginationClick = () => {
    const paginationLength = currentPages.length;
    const currentLastPage = currentPages[paginationLength - 1];
    const nextFirstPage = currentLastPage + 1;
    if (currentLastPage >= totalPage) {
      setHasNext(false);
      return;
    }
    setHasNext(true);
    setCurrentPages((prev) => prev.map((page) => page + 5));
    loadFunc({ page: nextFirstPage });
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPaginationClick}>prev</button>
      {currentPages.map((page) => (
        <button key={page} onClick={handlePaginationClick}>
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
