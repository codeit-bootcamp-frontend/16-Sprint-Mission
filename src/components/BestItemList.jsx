import { useEffect, useState, useCallback } from "react";
import { getItems } from "../apis/api";
import styles from "./ItemList.module.css";
import useAsync from "../hooks/useAsync";
import ItemListContent from "./ItemListContent";

const ORDER_BY = "favorite";
const LIST_TYPE = "best";

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
      <ItemListContent
        isLoading={isLoading}
        isError={loadingError}
        items={items}
        pageSize={pageSize}
        listType={LIST_TYPE}
      />
    </div>
  );
};

export default BestItemList;
