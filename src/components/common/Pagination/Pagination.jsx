import styles from "./Pagination.module.css";
import PaginationButton from "./PaginationButton";

const Pagination = ({
  currentPageNumber,
  visiblePageNumbers,
  paginationHandler,
  paginationState,
}) => {
  return (
    <nav className={styles["pagination-container"]}>
      <PaginationButton
        type="prev"
        onClick={paginationHandler.onPagePrev}
        isEnabled={paginationState.isPrevPageEnable}
      />
      {visiblePageNumbers.map((pageNumber) => {
        return (
          <PaginationButton
            key={pageNumber}
            type="number"
            pageNumber={pageNumber}
            onClick={paginationHandler.onPageNumberClick}
            currentPageNumber={currentPageNumber}
          />
        );
      })}
      <PaginationButton
        type="next"
        onClick={paginationHandler.onPageNext}
        isEnabled={paginationState.isNextPageEnable}
      />
    </nav>
  );
};

export default Pagination;
