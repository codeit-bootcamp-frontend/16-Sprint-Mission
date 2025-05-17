const Pagination = () => {
  return (
    <nav className={'items-pagination'}>
      <button
        className={'pagination-button prev-page'}
        onClick={handlePagePrev}
        disabled={!prevPageEnable}
      >
        <img
          className={'pagination-button-image'}
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
            className={`pagination-button ${ButtonClassName}`}
            onClick={handlePageNumberClick}
          >
            {pageIndex}
          </button>
        );
      })}
      <button
        className={'pagination-button next-page'}
        onClick={handlePageNext}
        disabled={!nextPageEnable}
      >
        <img
          className={'pagination-button-image'}
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
