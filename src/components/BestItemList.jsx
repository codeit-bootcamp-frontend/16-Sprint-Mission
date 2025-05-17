import { useEffect, useState, useCallback } from "react";
import { getItems } from "../apis/api";
import styles from "./BestItemList.module.css";
import ItemCard from "./ItemCard";
import useAsync from "../hooks/useAsync";

const ORDER_BY = "favorite";

const BestItemList = ({ pageSize, title }) => {
  const [items, setItems] = useState([]);
  const [isLoading, loadingError, getItemsAsync] = useAsync(getItems);

  const handleLoad = useCallback(
    async (options) => {
      const result = await getItemsAsync(options);
      if (!result) return;

      const { list } = result;
      setItems(list);
    },
    [getItemsAsync]
  );

  useEffect(() => {
    handleLoad({ pageSize: pageSize, orderBy: ORDER_BY });
  }, [pageSize, handleLoad]);

  return (
    <div className={styles["item-list-area"]}>
      <h4 className={styles["item-list-title"]}>{title}</h4>
      <div className={styles["item-list-content"]}>
        {isLoading && <p>상품 목록 가져오는 중...</p>}
        {!isLoading && loadingError && <p>상품 목록을 가져오지 못했습니다.</p>}
        {!loadingError && (
          <ul className={`${styles["item-list-ul"]}`}>
            {items.slice(0, pageSize).map((item) => {
              const { id, images, description, name, price, favoriteCount } =
                item;
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
        )}
      </div>
    </div>
  );
};

export default BestItemList;
