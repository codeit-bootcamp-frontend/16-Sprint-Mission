import { useContext, useState } from "react";
import { ProductAllContext } from "../../context/ProductAllContext";
import styles from "../../styles/Pagination.module.css";
import nextBtn_active from "../..//assets/images/nextBtn-active.png";
import nextBtn_inactive from "../..//assets/images/nextBtn-inactive.png";
import prevBtn_active from "../..//assets/images/prevBtn-active.png";
import prevBtn_inactive from "../..//assets/images/prevBtn-inactive.png";

const PAGINATION_MAX = 5;

function Pagination() {
  const { queryStrings, setQueryStrings, total } = useContext(ProductAllContext);
  const { page, pageSize } = queryStrings;
  const [pageList, setPageList] = useState([1, 2, 3, 4, 5]);
  const maxPageLength = Math.ceil(total / pageSize);

  function getPaginationStart() {
    return Math.floor((page - 1) / PAGINATION_MAX) * PAGINATION_MAX + 1;
  }

  const pageStart = getPaginationStart(page);
  
  // 밑에 이전, 다음 버튼 활성, 비활성 이미지용
  const isPrevDisabled = pageStart <= 1;
  const isNextDisabled = pageStart + PAGINATION_MAX > maxPageLength;

  //이전으로 가기(pageStart변경)
  function handlePrev() {
    const prevPageStart = pageStart - PAGINATION_MAX;

    if (prevPageStart >= 1) {
      updatePagination(prevPageStart);
    }
  }

  //다음으로 가기(pageStart변경)
  function handleNext() {
    const nextPageStart = pageStart + PAGINATION_MAX;

    if (maxPageLength >= nextPageStart) {
      updatePagination(nextPageStart);
    }
  }

  //이전, 다음 누르면 페이지네이션 바꾸기
  function updatePagination(newPageStart) {
    const visiblePages = [];

    for (let i = 0; i < PAGINATION_MAX; i++) {
      if (newPageStart + i > maxPageLength) break;
      visiblePages.push(newPageStart + i);
    }

    setPageList(visiblePages);

    setQueryStrings((prev) => ({
      ...prev,
      page: newPageStart,
    }));
  }

  // 페이지네이션 누르면 쿼리 상태 업데이트
  function handlePageRequest(e) {
    const targetPage = Number(e.target.textContent);

    setQueryStrings((prev) => ({
      ...prev,
      page: targetPage,
    }));
  }

  return (
    <ul
      aria-label="페이지 네비게이션"
      className={styles[`items__all-pagination`]}
    >
      <li className={styles.pagination__prev} onClick={handlePrev}>
        <img src={isPrevDisabled ? prevBtn_inactive : prevBtn_active} alt="페이지 이전 목록으로 가기" />
      </li>
      {pageList.map((i) => (
        <li
          aria-label={`${i}페이지로 이동`}
          className={page == i ? styles[`pagination--activate`] : ""}
          onClick={handlePageRequest}
          key={`page${i}`}
        >
          {i}
        </li>
      ))}
      <li className={styles.pagination__next} onClick={handleNext}>
        <img src={isNextDisabled ? nextBtn_inactive : nextBtn_active} alt="페이지 다음 목록으로 가기" />
      </li>
    </ul>
  );
}

export default Pagination;
