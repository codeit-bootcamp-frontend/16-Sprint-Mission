import { useEffect, useState } from "react";
import { getItems } from "../utils/api";
import ItemsContainer from "./ItemsContainer";
import styles from "./ItemsSection.module.css";

const LIST_TYPE = "best";

const BestItemsSection = ({ pageSize }) => {
  const [bestItemList, setBestItemList] = useState([]);

  const loadBestItemList = async (options) => {
    const result = await getItems(options);
    if (!result) return;
    const { list } = result;
    setBestItemList(list);
  };

  useEffect(() => {
    if (!pageSize) return;
    (async () => {
      await loadBestItemList({
        offset: 1,
        pageSize: pageSize,
        orderBy: "favorite",
        keyword: "",
      });
    })();
  }, [pageSize]);

  return (
    <section className={`${styles["cards-section"]} ${styles[LIST_TYPE]}`}>
      <div className={styles["section-header-container"]}>
        <h2 className={styles["section-title"]}>베스트 상품</h2>
      </div>
      <ItemsContainer
        listName={LIST_TYPE}
        itemList={bestItemList}
        pageSize={pageSize}
      />
    </section>
  );
};

export default BestItemsSection;
