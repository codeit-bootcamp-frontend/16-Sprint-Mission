import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { getItems } from "../../apis/api";
import styles from "./ItemList.module.css";
import Button from "../../ui/Button";
import Dropdown from "../../ui/Dropdown";
import InputSearch from "../../ui/Input/InputSearch";
import Pagination from "../Pagination";
import useAsync from "../../hooks/useAsync";
import ItemListRenderer from "./ItemListRenderer";

const DEFAULT_PAGE_SIZE = 10;
const PAGINATION_SIZE = 5;
const ORDER_MAP = {
  최신순: "recent",
  좋아요순: "favorite",
};
const dropdownMenuItems = Object.keys(ORDER_MAP);

const ItemList = ({ title, pageSize = DEFAULT_PAGE_SIZE }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [isLoading, loadingError, getItemsAsync] = useAsync(getItems);
  const [order, setOrder] = useState("최신순");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const handleLoad = useCallback(
    async (options) => {
      const result = await getItemsAsync(options);
      if (!result) return;

      const { list, totalCount } = result;
      setItems(list);
      setTotalPage(Math.ceil(totalCount / pageSize));
    },
    [pageSize, getItemsAsync]
  );

  const handleDropdownSelect = (selectedOrder) => {
    setOrder(selectedOrder);
  };

  const handlePaginationClick = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    handleLoad({
      page: currentPage,
      pageSize,
      orderBy: ORDER_MAP[order],
    });
  }, [currentPage, order, pageSize, handleLoad]);

  return (
    <div className={styles["item-list-area"]}>
      <div className={styles["item-list-header"]}>
        <h4 className={styles["item-list-title"]}>{title}</h4>
        <Button
          type="button"
          variant="primary"
          size="sm"
          className={styles["add-item-btn"]}
          onClick={() => navigate("/addItem")}
        >
          상품 등록하기
        </Button>
        <InputSearch
          className={styles["item-list-header-search"]}
          placeholder="검색할 상품을 입력해주세요"
        />
        <Dropdown
          menu={dropdownMenuItems}
          onClickMenu={handleDropdownSelect}
          defaultSelected={order}
          iconType="orderIcon"
        />
      </div>
      <ItemListRenderer
        isLoading={isLoading}
        isError={loadingError}
        items={items}
        pageSize={pageSize}
      />
      <Pagination
        handleLoad={handleLoad}
        pageSize={pageSize}
        paginationSize={PAGINATION_SIZE}
        totalPage={totalPage}
        onCurrentPage={handlePaginationClick}
      />
    </div>
  );
};

export default ItemList;
