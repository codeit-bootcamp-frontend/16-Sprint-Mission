import styles from "./Pagination.module.css";

function Pagination({ page, pageSize, totalCount, onPageChange }) {
  const blockSize = 5;
  const totalPages = Math.ceil(totalCount / pageSize);
  const currentBlock = Math.ceil(page / blockSize);
  const startPage = (currentBlock - 1) * blockSize + 1;
  const endPage = Math.min(startPage + blockSize - 1, totalPages);

  const handlePrevBlock = () => {
    const prevBlockPage = Math.max(startPage - blockSize, 1);
    onPageChange(prevBlockPage);
  };

  const handleNextBlock = () => {
    const nextBlockPage = Math.min(startPage + blockSize, totalPages);
    onPageChange(nextBlockPage);
  };

  return (
    <div className={styles.paginationWrapper}>
      <button
        onClick={handlePrevBlock}
        className={styles.prevBtn}
        disabled={startPage === 1}
      ></button>
      {[...Array(endPage - startPage + 1)].map((_, idx) => {
        const pageNum = startPage + idx;
        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={page === pageNum ? styles.active : ""}
          >
            {pageNum}
          </button>
        );
      })}
      <button
        onClick={handleNextBlock}
        className={styles.nextBtn}
        disabled={endPage === totalPages}
      ></button>
    </div>
  );
}

export default Pagination;
