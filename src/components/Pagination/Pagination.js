import { useEffect, useState } from "react";
import arrow from "../../assets/images/icons/ic_pagination_arrow.svg";
import styles from "./Pagination.module.scss";

const LIMIT = 5;

const Pagination = ({ pageSize, totalCount, currentPage, setCurrentPage }) => {
  const [currentGroup, setCurrentGroup] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (!totalCount) return;

    const getTotalPage = Math.ceil(totalCount / pageSize); // 페이지네이션 총 개수
    setTotalPage(getTotalPage);

    const getCurrentPageGroup = (currentPage, limit = LIMIT) => {
      const groupIdx = Math.floor((currentPage - 1) / limit);
      const startPage = groupIdx * limit + 1;
      const endPage = Math.min(startPage + limit - 1, totalPage);

      return Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      );
    };

    const currentGroup = getCurrentPageGroup(currentPage);

    setCurrentGroup(currentGroup);
  }, [currentPage, totalCount, pageSize, totalPage]);

  // prev 버튼 클릭
  const handleClickPrev = () => {
    const changeCurrentPage = currentPage - 1 <= 0 ? 1 : currentPage - 1;
    setCurrentPage(changeCurrentPage);
  };

  // next 버튼 클릭
  const handleClickNext = () => {
    const totalPageNum = totalPage;
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
            disabled={currentPage === totalPage}
          >
            <img src={arrow} alt="다음으로" />
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
