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

  let startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
  let endPage = Math.min(startPage + 5 - 1, pageTotal);

  const visiblePageList = totalPageList.slice(startPage - 1, endPage);

  return (
    <div className="pagination__container">
      <button
        className="pagination__button"
        disabled={currentPage === 1}
        onClick={onClickPrev}
      >
        <img
          src={currentPage === 1 ? arrowLeftInactive : arrowLeftActive}
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
