import { useCallback, useMemo } from "react";
import arrow from "../../assets/images/icons/ic_pagination_arrow.svg";
import styles from "./Pagination.module.scss";

const LIMIT = 5;
const Pagination = ({ pageSize, totalCount, currentPage, setCurrentPage }) => {
  // 페이지네이션 5개(LIMIT)로 끊어서 2차원 배열로 생성
  const calcPager = useMemo(() => {
    if (!totalCount) return;

    const totalPager = Math.ceil(totalCount / pageSize);

    const pagerArr = [];
    let pagerCounter = 0;
    for (let i = 0; i < totalPager; i++) {
      if (!pagerArr[pagerCounter]) pagerArr[pagerCounter] = [];
      pagerArr[pagerCounter].push(i + 1);
      if (pagerArr[pagerCounter].length === LIMIT) pagerCounter++;
    }

    return { pagerArr, totalPager };
  }, [pageSize, totalCount]);

  // currentPage 값이 있는 배열 반환
  const getCurrentGroup = useCallback(() => {
    if (!calcPager) return;

    return calcPager.pagerArr.filter((item) => item.includes(currentPage))[0];
  }, [calcPager, currentPage]);

  const currentGroup = getCurrentGroup();

  // prev 버튼 클릭
  const handleClickPrev = () => {
    const changeCurrentPage = currentPage - 1 <= 0 ? 1 : currentPage - 1;
    setCurrentPage(changeCurrentPage);
  };

  // next 버튼 클릭
  const handleClickNext = () => {
    const totalPageNum = calcPager.totalPager;
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
            disabled={currentPage === calcPager.totalPager}
          >
            <img src={arrow} alt="다음으로" />
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
