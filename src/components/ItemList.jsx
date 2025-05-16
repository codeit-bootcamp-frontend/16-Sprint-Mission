import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { getItems } from "../api";
import styles from "./ItemList.module.css";
import ItemCard from "./ItemCard";
import Button from "../ui/Button";
import Dropdown from "../ui/Dropdown/Dropdown";
import InputSearch from "../ui/InputSearch";
import Pagination from "./Pagination";
import useAsync from "../hooks/useAsync";

const DEFAULT_PAGE_SIZE = 10;
const PAGINATION_SIZE = 5;
const ORDER_MAP = {
  최신순: "recent",
  좋아요순: "favorite",
};
const dropdownMenu = ["최신순", "좋아요순"];

const ItemList = ({
  title,
  pageSize = DEFAULT_PAGE_SIZE,
  showSearch,
  showItemAddBtn,
  showOrderDropdown,
}) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [isLoading, loadingError, getItemsAsync] = useAsync(getItems);
  const [order, setOrder] = useState("최신순");
  const [listPage, setListPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const handleLoad = useCallback(
    async (options) => {
      const result = await getItemsAsync(options);
      if (!result) return;

      const { list, totalCount } = result;
      setItems(list);
      setTotalPage(Math.ceil(totalCount / DEFAULT_PAGE_SIZE));
    },
    [getItemsAsync]
  );

  const handleDropdownSelect = (selectedOrder) => {
    setOrder(selectedOrder);
  };

  const handlePaginationClick = (selectedPage) => {
    setListPage(selectedPage);
  };

  useEffect(() => {
    handleLoad({ page: listPage, pageSize, orderBy: ORDER_MAP[order] });
  }, [listPage, order, pageSize, handleLoad]);

  return (
    <div className={styles["item-list-area"]}>
      <div className={styles["item-list-header"]}>
        <h4 className={styles["item-list-title"]}>{title}</h4>
        {(showSearch || showItemAddBtn || showOrderDropdown) && (
          <div className={styles.actions}>
            {showSearch && (
              <InputSearch placeholder="검색할 상품을 입력해주세요" />
            )}
            {showItemAddBtn && (
              <Button
                type="button"
                variant="primary"
                size="sm"
                onClick={() => navigate("/addItem")}
              >
                상품 등록하기
              </Button>
            )}
            {showOrderDropdown && (
              <Dropdown
                menu={dropdownMenu}
                onClick={handleDropdownSelect}
                defaultSelected={order}
              />
            )}
          </div>
        )}
      </div>
      <ul className={styles["item-list-ul"]}>
        {items.map((item) => {
          const { id, images, description, name, price, favoriteCount } = item;
          return (
            <li key={id} className={styles["item-list"]}>
              <ItemCard
                key={id}
                imgSrc={images}
                description={description}
                name={name}
                price={price}
                likes={favoriteCount}
              />
            </li>
          );
        })}
      </ul>
      <Pagination
        loadFunc={handleLoad}
        paginationSize={PAGINATION_SIZE}
        totalPage={totalPage}
        onCurrentPage={handlePaginationClick}
      />
    </div>
  );
};

export default ItemList;
