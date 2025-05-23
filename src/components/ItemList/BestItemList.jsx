import { useEffect, useState, useCallback } from "react";
import { getItems } from "../../services/api";
import styles from "./ItemList.module.css";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import ItemListResults from "./ItemListResults";
import useAsync from "../../hooks/useAsync";

const ORDER_BY = "favorite";
const LIST_TYPE = "best";

const BestItemList = ({ title, pageSize }) => {
  const [items, setItems] = useState([]);
  const {
    isLoading,
    loadingError,
    runAsync: getItemsAsync,
  } = useAsync(getItems);

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
      <SectionTitle title={title} />
      <ItemListResults
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
