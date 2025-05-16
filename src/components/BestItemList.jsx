import styles from "./BestItemList.module.css";
import ItemCard from "./ItemCard";
import { getItems } from "../api";
import { useEffect, useState } from "react";

const PAGE_SIZE = 4;
const ORDER_BY = "favorite";
const TITLE = "베스트 상품";

const BestItemList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    handleLoad({ pageSize: PAGE_SIZE, orderBy: ORDER_BY });
  }, []);

  return (
    <div className={styles["item-list-area"]}>
      <h4 className={styles["item-list-title"]}>{TITLE}</h4>
      <ul className={`${styles["item-list-ul"]}`}>
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

export default BestItemList;
