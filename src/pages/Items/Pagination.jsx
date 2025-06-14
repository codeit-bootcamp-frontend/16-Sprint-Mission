import { useContext } from "react";
import nextBtn_active from "@assets/images/nextBtn-active.png";
import nextBtn_inactive from "@assets/images/nextBtn-inactive.png";
import prevBtn_active from "@assets/images/prevBtn-active.png";
import prevBtn_inactive from "@assets/images/prevBtn-inactive.png";
import { ProductData } from "./ProductDataProvider";
import styles from "./styles/Pagination.module.css";
import { usePagination } from "../../hooks/usePagination";

const PAGINATION_MAX = 5;

function Pagination() {
  const { queryStrings, setQueryStrings, total } = useContext(ProductData);

  const {
    handlePageRequest,
    pageList,
    handleNextBtn,
    handlePrevBtn,
    isPrevDisabled,
    isNextDisabled,
  } = usePagination(queryStrings, setQueryStrings, total, PAGINATION_MAX);

  return (
    <ul
      aria-label="페이지 네비게이션"
      className={styles.pagination}
    >
      <li className={styles.prevBtn} onClick={handlePrevBtn}>
        <img
          src={isPrevDisabled ? prevBtn_inactive : prevBtn_active}
          alt="페이지 이전 목록으로 가기"
        />
      </li>
      {pageList.map((i) => (
        <li
          aria-label={`${i}페이지로 이동`}
          className={
            queryStrings.page == i ? styles.activate : null
          }
          onClick={handlePageRequest}
          key={`page${i}`}
        >
          {i}
        </li>
      ))}
      <li className={styles.nextBtn} onClick={handleNextBtn}>
        <img
          src={isNextDisabled ? nextBtn_inactive : nextBtn_active}
          alt="페이지 다음 목록으로 가기"
        />
      </li>
    </ul>
  );
}

export default Pagination;
