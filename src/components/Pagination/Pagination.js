import styles from "./Pagination.module.css";

function Pagination({ currentPage, totalPages, onPageChange, maxPageButtons = 5 }) {

  const groupStart = Math.floor((currentPage - 1) / maxPageButtons) * maxPageButtons + 1;
  const groupEnd = Math.min(groupStart + maxPageButtons - 1, totalPages);

  const handlePrevGroup = () => {
    const prevPage = Math.max(groupStart - 1, 1);
    onPageChange(prevPage);
  };

  const handleNextGroup = () => {
    const nextPage = Math.min(groupEnd + 1, totalPages);
    onPageChange(nextPage);
  };

  const pages = [];
  for (let i = groupStart; i <= groupEnd; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <button disabled={groupStart === 1} onClick={handlePrevGroup}>
        &lt;
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? styles.active : ''}
        >
          {page}
        </button>
      ))}
      <button disabled={groupEnd === totalPages} onClick={handleNextGroup}>
        &gt;
      </button>
    </div>
  );
}

export default Pagination;