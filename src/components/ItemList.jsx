import styles from "./ItemList.module.css";
import ItemCard from "./ItemCard";
import { getItems } from "../api";
import { useEffect, useState } from "react";

const ItemList = ({ title, pageSize, orderBy, type }) => {
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
    handleLoad({ pageSize, orderBy });
  }, []);

  return (
    <div className={styles["item-list-area"]}>
      <h4 className={styles["item-list-title"]}>{title}</h4>
      <ul className={`${styles["item-list"]} ${styles[type]}`}>
        {items.map((item) => {
          const { id, images, description, name, price, favoriteCount } = item;
          return (
            <ItemCard
              key={id}
              imgSrc={images}
              description={description}
              name={name}
              price={price}
              likes={favoriteCount}
              type={type}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
