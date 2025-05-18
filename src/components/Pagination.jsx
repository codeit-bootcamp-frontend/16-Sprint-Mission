import { useEffect, useState } from "react";
import styles from "../css/ItemTemp.module.css";
// import { useQueryStrings, useSetQueryStrings, useToTal } from "../context/ProductAllContext.jsx";

function Pagination({ queryStrings, setQueryStrings, total }) {
  const { page, pageSize } = queryStrings;
  const [pageStart, setPageStart] = useState(page);
  const [pageList, setPageList] = useState([1, 2, 3, 4, 5]);
  // const [prevDisabled, setPrevDisabled] = useState(true);
  // const [nextDisabled, setNextDisabled] = useState(false);
  const pageLength = Math.ceil(total / pageSize); //31

  const PAGINATIONNUM = 5;

  // 잉 없어도 되네
  //   pageStart 바뀌면 버튼 disable 값 바꾸기
  // 이거 prev가 false면 next는 무조건 트루 next가 false면 prev는 무조건 true인거 아니야?
  // useEffect(() => {
  //   // if (pageStart === 1) {
  //   //   setPrevDisabled(true);
  //   // } else {
  //   //   setPrevDisabled(false);
  //   // }

  //   // if (pageStart >= pageLength) {
  //   //   setNextDisabled(true);
  //   // } else {
  //   //   setNextDisabled(false);
  //   // }
  // }, [pageStart]);

  //   이전으로 가기 함수
  function handlePrev() {
    if (pageStart - PAGINATIONNUM >= 1) {
      setPageStart((prev) => prev - PAGINATIONNUM);
    }
  }

  //   다음으로 가기 함수
  function handleNext() {
    if (pageLength >= pageStart + PAGINATIONNUM) {
      setPageStart((prev) => prev + PAGINATIONNUM);
    }
  }

  //   pageStart 바뀌면 페이지네이션 바꾸게
  useEffect(() => {
    const temp = new Array(5);
    for (let i = 0; i < PAGINATIONNUM; i++) {
      if (pageStart + i > 31) break;
      temp[i] = pageStart + i;
    }

    setPageList(temp);

    //next, prev눌러서 페이지 변하면 요청 다시
    setQueryStrings((prev) => ({
      ...prev,
      page: pageStart,
    }));
  }, [pageStart]);

  // 페이지네이션 누르면 요청 새로보내기
  function handlePageRequest(e) {
    setQueryStrings((prev) => ({
      ...prev,
      page: e.target.textContent,
    }));
  }

  return (
    <ul className={styles.pagination}>
      <li
        className={styles.prevBtn}
        // disabled={prevDisabled}
        onClick={handlePrev}
      >
        {"‹"}
      </li>
      {pageList.map((i) => (
        <li
          className={queryStrings.page == i ? styles.activate : ""}
          onClick={handlePageRequest}
          key={`${page + i}`}
        >
          {i}
        </li>
      ))}
      <li
        className={styles.nextBtn}
        // disabled={nextDisabled}
        onClick={handleNext}
      >
        {"›"}
      </li>
    </ul>
  );
}

export default Pagination;
