import { useMemo, useState } from "react";
import { useAsync } from "../../../hooks/useAsync";
import { getItems } from "../../../utils/api";
import ItemsContainer from "../../../components/ItemsContainer";
import styles from "./ItemsSection.module.css";
import Pagination from "../../../components/common/Pagination/Pagination";
import ItemsSearchHeader from "../../../components/ItemsSearchHeader";
import { usePaginationByOffset } from "../../../hooks/usePaginationByOffset";

const VISIBLE_PAGE_LENGTH = 5;
const LIST_TYPE = "current";

const CurrentItemsSection = ({ pageSize }) => {
  const [offset, setOffset] = useState(1);
  const [order, setOrder] = useState("recent");
  const [keyword, setKeyword] = useState("");

  const options = useMemo(
    () => ({
      offset: offset,
      pageSize: pageSize,
      orderBy: order,
      keyword: keyword,
    }),
    [offset, pageSize, order, keyword]
  );

  const { result } = useAsync(getItems, options);
  const currentItemList = result?.list || [];
  const totalDataCount = result?.totalCount || 1;

  const { totalPagesCount, currentPageNumber, visiblePageNumbers } =
    usePaginationByOffset({ offset, pageSize, totalDataCount, VISIBLE_PAGE_LENGTH });

  const paginationHandler = {
    onPageNumberClick: (e) => {
      const nextPageNumber = Number(e.target.value);
      setOffset((nextPageNumber - 1) * pageSize + 1);
    },
    onPagePrev: () => {
      const nextPageNumber = visiblePageNumbers[0] - 1;
      setOffset((nextPageNumber - 1) * pageSize + 1);
    },
    onPageNext: () => {
      const nextPageNumber = visiblePageNumbers[visiblePageNumbers.length - 1] + 1;
      setOffset((nextPageNumber - 1) * pageSize + 1);
    },
  };

  const paginationState = {
    isPrevPageEnable: visiblePageNumbers[0] > 1,
    isNextPageEnable: visiblePageNumbers[visiblePageNumbers.length - 1] < totalPagesCount, //prettier-ignore
  };

  return (
    <>
      <section className={`${styles["cards-section"]} ${styles[LIST_TYPE]}`}>
        <ItemsSearchHeader
          order={order}
          setOrder={setOrder}
          setOffset={setOffset}
          setKeyword={setKeyword}
        />
        <ItemsContainer
          listName={LIST_TYPE}
          itemList={currentItemList}
          pageSize={pageSize}
        />
        <Pagination
          currentPageNumber={currentPageNumber}
          visiblePageNumbers={visiblePageNumbers}
          paginationHandler={paginationHandler}
          paginationState={paginationState}
        />
      </section>
    </>
  );
};

export default CurrentItemsSection;
