import "../css/components/Pagination.css";
import arrowLeftActive from "../img/arrow_left_active.svg";
import arrowLeftInactive from "../img/arrow_left_inactive.svg";
import arrowRightActive from "../img/arrow_right_active.svg";
import arrowRightInactive from "../img/arrow_right_inactive.svg";

function Pagination({
  totalCount,
  pageSize,
  currentPage,
  onClickNext,
  onClickPrev,
  onClickPage,
}) {
  const pageTotal = Math.ceil(totalCount / pageSize);
  const totalPageList = Array(pageTotal)
    .fill()
    .map((e, i) => i + 1);

  const visiblePageList =
    currentPage < pageTotal - 4
      ? totalPageList.slice(currentPage - 1, currentPage + 4)
      : totalPageList.slice(pageTotal - 5, pageTotal);

  return (
    <div className="pagination__container">
      <button
        className="pagination__button"
        disabled={currentPage < 2}
        onClick={onClickPrev}
      >
        <img
          src={currentPage < 2 ? arrowLeftInactive : arrowLeftActive}
          alt="페이지 네이션 이전 버튼"
        />
      </button>
      {visiblePageList?.map((number, index) => (
        <button
          key={index}
          className="pagination__button"
          aria-current={currentPage === number ? "page" : undefined}
          onClick={() => onClickPage(number)}
        >
          {number}
        </button>
      ))}
      <button
        className="pagination__button"
        disabled={currentPage === pageTotal}
        onClick={onClickNext}
      >
        <img
          src={
            currentPage === pageTotal ? arrowRightInactive : arrowRightActive
          }
          alt="페이지 네이션 이전 버튼"
        />
      </button>
    </div>
  );
}

export default Pagination;
