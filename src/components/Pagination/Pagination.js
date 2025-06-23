import { useEffect, useState } from "react";
import arrow from "../../assets/images/icons/ic_pagination_arrow.svg";
import styles from "./Pagination.module.scss";

const LIMIT = 5;
const Pagination = ({ pageSize, totalCount, currentPage, setCurrentPage }) => {
  const [currentGroup, setCurrentGroup] = useState([]);
  const [totalPager, setTotalPager] = useState(0);

  useEffect(() => {
    if (!totalCount) return;

    const getTotalPager = Math.ceil(totalCount / pageSize); // 페이지네이션 총 개수
    setTotalPager(getTotalPager);

    // 페이지네이션 5개(LIMIT)로 끊어서 2차원 배열로 생성
    const pagerArr = Array.from({ length: totalPager }).reduce(
      (acc, cur, idx) => {
        const groupIdx = Math.floor(idx / LIMIT);
        if (!acc[groupIdx]) acc[groupIdx] = [];
        acc[groupIdx].push(idx + 1);
        return acc;
      },
      []
    );

    // currentPage 값이 있는 배열 반환
    const currentGroup = pagerArr.find((item) => item.includes(currentPage));
    setCurrentGroup(currentGroup);
  }, [currentPage, totalCount, pageSize, totalPager]);

  // prev 버튼 클릭
  const handleClickPrev = () => {
    const changeCurrentPage = currentPage - 1 <= 0 ? 1 : currentPage - 1;
    setCurrentPage(changeCurrentPage);
  };

  // next 버튼 클릭
  const handleClickNext = () => {
    const totalPageNum = totalPager;
    const changeCurrentPage =
      currentPage + 1 >= totalPageNum ? totalPageNum : currentPage + 1;
    setCurrentPage(changeCurrentPage);
  };

  return (
    <div className={styles["pagination"]}>
      {currentGroup && (
        <>
          <button
            type="button"
            className={`${styles["pagination__button"]} ${styles["pagination__button-prev"]}`}
            onClick={handleClickPrev}
            disabled={currentPage === 1}
          >
            <img src={arrow} alt="이전으로" />
          </button>
          <ul className={styles["pagination__list"]}>
            {currentGroup.map((pager) => (
              <li key={pager}>
                <button
                  type="button"
                  className={`${styles["pagination__button"]} ${
                    pager === currentPage &&
                    styles["pagination__button-current"]
                  }`}
                  onClick={() => setCurrentPage(pager)}
                >
                  {pager}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`${styles["pagination__button"]} ${styles["pagination__button-next"]}`}
            onClick={handleClickNext}
            disabled={currentPage === totalPager}
          >
            <img src={arrow} alt="다음으로" />
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
