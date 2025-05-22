import styles from "./Pagination.module.css";
import arrowLeft from "../../assets/images/ic_arrow_sm_left.svg";
import arrowRight from "../../assets/images/ic_arrow_sm_right.svg";
import usePagination from "../../hooks/usePagination";

const PAGINATION_SIZE = 5;

const Pagination = ({
  pageSize = 10,
  totalCount,
  paginationSize = PAGINATION_SIZE,
  handleLoad,
  orderStatus,
}) => {
  const { pageData, pageActions } = usePagination({
    totalCount,
    pageSize,
    paginationSize,
    onPageChange: (page) => {
      handleLoad({ page, pageSize, orderBy: orderStatus });
    },
  });
  const { currentPage, currentPages, hasPrev, hasNext } = pageData;
  const { goToPage, goPrevPages, goNextPages } = pageActions;

  return (
    <div className={styles.pagination}>
      <button
        onClick={goPrevPages}
        className={styles["pagination-btn"]}
        disabled={!hasPrev}
      >
        <img src={arrowLeft} alt="이전 페이지" />
      </button>
      {currentPages.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`
            ${styles["pagination-btn"]} 
            ${page === currentPage ? styles.active : ""}
          `}
        >
          {page}
        </button>
      ))}
      <button
        onClick={goNextPages}
        className={styles["pagination-btn"]}
        disabled={!hasNext}
      >
        <img src={arrowRight} alt="다음 페이지" />
      </button>
    </div>
  );
};

export default Pagination;
