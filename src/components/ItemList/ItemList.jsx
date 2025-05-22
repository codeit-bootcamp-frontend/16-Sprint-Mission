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
const ORDER_MAP = {
  최신순: "recent",
  좋아요순: "favorite",
};
const DEFAULT_ORDER = Object.keys(ORDER_MAP)[0];
const dropdownMenuItems = Object.keys(ORDER_MAP);

const ItemList = ({ title, pageSize = DEFAULT_PAGE_SIZE }) => {
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [order, setOrder] = useState(DEFAULT_ORDER);
  const navigate = useNavigate();
  const {
    isLoading,
    loadingError,
    runAsync: getItemsAsync,
  } = useAsync(getItems);

  const handleLoad = useCallback(
    async (options) => {
      const result = await getItemsAsync(options);
      if (!result) return;

      setItems(result.list);
      setTotalCount(result.totalCount);
    },
    [getItemsAsync]
  );

  const handleDropdownSelect = (selectedOrder) => {
    setOrder(selectedOrder);
  };

  useEffect(() => {
    handleLoad({
      pageSize,
      orderBy: ORDER_MAP[order],
    });
  }, [order, pageSize, handleLoad]);

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
        items={items}
        pageSize={pageSize}
        isLoading={isLoading}
        isError={loadingError}
      />
      <Pagination
        pageSize={pageSize}
        totalCount={totalCount}
        handleLoad={handleLoad}
        orderStatus={ORDER_MAP[order]}
      />
    </div>
  );
};

export default ItemList;
