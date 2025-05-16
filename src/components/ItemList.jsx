import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItems } from "../api";
import styles from "./ItemList.module.css";
import ItemCard from "./ItemCard";
import Button from "../ui/Button";
import Dropdown from "../ui/Dropdown/Dropdown";
import InputSearch from "../ui/InputSearch";

const DEFAULT_PAGE_SIZE = 10;
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
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [order, setOrder] = useState("최신순");

  const handleLoad = async (options) => {
    let result;
    try {
      setIsLoading(true);
      result = await getItems(options);
      const { list } = result;
      setItems(list);
    } catch (err) {
      setError(err);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  const handleDropdownSelect = (selectedOrder) => {
    setOrder(selectedOrder);
  };

  useEffect(() => {
    handleLoad({ pageSize, orderBy: ORDER_MAP[order] });
  }, [order, pageSize]);

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
    </div>
  );
};

export default ItemList;
