import { useEffect, useState } from "react";
import { getItems } from "../utils/api";
import ItemsContainer from "./ItemsContainer";
import styles from "./ItemsSection.module.css";
import { usePaginationByOffset } from "../hooks/usePaginationByOffset";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

const LIST_TYPE = "current";
const VISIBLE_PAGE_LENGTH = 5;

const CurrentItemsSection = ({ pageSize }) => {
  //prettier-ignore
  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get("keyword") || "";
  const [keyword, setKeyword] = useState(initKeyword);

  const [offset, setOffset] = useState(1);
  const [totalDataCount, setTotalDataCount] = useState(1);
  const [order, setOrder] = useState("recent");

  const [currentItemList, setCurrentItemList] = useState([]);

  const { totalPagesCount, currentPageNumber, visiblePageNumbers } =
    usePaginationByOffset(
      offset,
      pageSize,
      totalDataCount,
      VISIBLE_PAGE_LENGTH
    );

  const onCreateNewItemNavigate = useNavigate();

  const handleSearchOrderChange = (e) => {
    setOffset(1);
    setOrder(e.target.value);
  };

  const loadCurrentItemList = async (option) => {
    const result = await getItems(option);
    if (!result) return;
    const { list, totalCount } = result;
    setCurrentItemList(list);
    setTotalDataCount(totalCount);
  };

  const handleSearchInputChange = (e) => setKeyword(e.target.value);
  const handleSearchInputEnterPress = (e) => {
    if (e.key === "Enter") {
      setOffset(1);
      setSearchParams(keyword ? { keyword } : {});
    }
  };

  const handleCreateNewItemClick = (e) => {
    e.preventDefault();
    onCreateNewItemNavigate("/additem");
  };

  //prettier-ignore
  const handlePageNumberClick = (e) => onPaginationButtonClick(Number(e.target.value));
  const handlePagePrev = () => onPaginationButtonClick(visiblePageNumbers[0] - 1); //prettier-ignore
  const handlePageNext = () => onPaginationButtonClick(visiblePageNumbers[visiblePageNumbers.length - 1] + 1); //prettier-ignore
  const onPaginationButtonClick = (nextPageNumber) => setOffset((nextPageNumber - 1) * pageSize + 1); //prettier-ignore

  const prevPageEnable = visiblePageNumbers[0] > 1;
  const nextPageEnable =
    visiblePageNumbers[visiblePageNumbers.length - 1] < totalPagesCount;

  const handlers = {
    handlePageNumberClick,
    handlePagePrev,
    handlePageNext,
  };

  const pageControlEnabled = {
    prevPageEnable,
    nextPageEnable,
  };

  useEffect(() => {
    if (!pageSize) return;
    (async () => {
      await loadCurrentItemList({
        offset: offset,
        pageSize: pageSize,
        orderBy: order,
        keyword: initKeyword,
      });
    })();
  }, [pageSize, order, offset, initKeyword]);

  return (
    <>
      <section className={`${styles["cards-section"]} ${styles[LIST_TYPE]}`}>
        <div className={styles["section-header-container"]}>
          <h2 className={styles["section-title"]}>전체 상품</h2>
          <div className={styles["search-input-container"]}>
            <img
              className={styles["search-input-icon"]}
              src={"./images/ic_search.png"}
              width={24}
            />
            <input
              className={styles["search-input"]}
              placeholder="검색할 상품을 입력해주세요"
              value={keyword}
              onChange={handleSearchInputChange}
              onKeyDown={handleSearchInputEnterPress}
            ></input>
          </div>
          <button
            className={`${styles["search-submit"]} button-style`}
            onClick={handleCreateNewItemClick}
          >
            상품 등록하기
          </button>
          <select
            value={order}
            className={styles["search-select"]}
            onChange={handleSearchOrderChange}
          >
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
        <ItemsContainer
          listName={LIST_TYPE}
          itemList={currentItemList}
          pageSize={pageSize}
        />
        <Pagination
          visiblePageNumbers={visiblePageNumbers}
          currentPageNumber={currentPageNumber}
          handlers={handlers}
          pageControlEnabled={pageControlEnabled}
        />
      </section>
    </>
  );
};

export default CurrentItemsSection;
