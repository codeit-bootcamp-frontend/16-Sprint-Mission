import styles from './Pagination.module.css';

const Pagination = ({
  visiblePageNumbers,
  currentPageNumber,
  handlers,
  pageControlEnabled,
}) => {
  const { handlePageNumberClick, handlePagePrev, handlePageNext } = handlers;
  const { prevPageEnable, nextPageEnable } = pageControlEnabled;

  return (
    <nav className={styles['pagination-container']}>
      <button
        className={`${styles['pagination-button']} ${styles['prev-page']}`}
        onClick={handlePagePrev}
        disabled={!prevPageEnable}
      >
        <img
          className={styles['pagination-button-image']}
          src={
            prevPageEnable
              ? './images/ic_prevPageClick_active.png'
              : './images/ic_prevPageClick_inactive.png'
          }
          width={16}
        />
      </button>
      {visiblePageNumbers.map((pageIndex) => {
        const ButtonClassName =
          currentPageNumber === pageIndex ? 'selected' : '';
        return (
          <button
            key={pageIndex}
            value={pageIndex}
            className={`${styles['pagination-button']} ${styles[ButtonClassName]}`}
            onClick={handlePageNumberClick}
          >
            {pageIndex}
          </button>
        );
      })}
      <button
        className={`${styles['pagination-button']} ${styles['next-page']}`}
        onClick={handlePageNext}
        disabled={!nextPageEnable}
      >
        <img
          className={styles['pagination-button-image']}
          src={
            nextPageEnable
              ? './images/ic_nextPageClick_active.png'
              : './images/ic_nextPageClick_inactive.png'
          }
          width={16}
        />
      </button>
    </nav>
  );
};

export default Pagination;
