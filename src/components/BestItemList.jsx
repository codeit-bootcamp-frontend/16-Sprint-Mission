import { useEffect, useState, useCallback } from "react";
import { getItems } from "../apis/api";
import styles from "./BestItemList.module.css";
import ItemCard from "./ItemCard";
import useAsync from "../hooks/useAsync";
import ItemCardSkeleton from "../ui/Skeletons/ItemCardSkeleton";

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
    handleLoad({ pageSize, orderBy: ORDER_BY });
  }, [pageSize, handleLoad]);

  return (
    <div className={styles["item-list-area"]}>
      <h4 className={styles["item-list-title"]}>{title}</h4>
      {!isLoading && loadingError && <p>상품 목록을 가져오지 못했습니다.</p>}
      {!loadingError && (
        <ul className={`${styles["item-list-ul"]}`}>
          {isLoading
            ? Array.from({ length: pageSize }).map((_, index) => (
                <li key={index} className={styles["item-list"]}>
                  <ItemCardSkeleton />
                </li>
              ))
            : items.slice(0, pageSize).map((item) => {
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
                      loading="eager"
                    />
                  </li>
                );
              })}
        </ul>
      )}
    </div>
  );
};

export default BestItemList;
