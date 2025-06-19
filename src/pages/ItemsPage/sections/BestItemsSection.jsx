import { useAsync } from "../../../hooks/useAsync";
import { useMemo } from "react";
import { getItems } from "../../../utils/api";
import styles from "./BestItemsSection.module.css";
import ItemsContainer from "../../../components/common/ItemsContainer/ItemsContainer";

const LIST_TYPE = "best";

const BestItemsSection = ({ pageSize }) => {
  const options = useMemo(
    () => ({
      offset: 1,
      pageSize: 4,
      orderBy: "favorite",
      keyword: "",
    }),
    []
  );

  const { result } = useAsync(getItems, options);
  const bestItemList = result?.list || [];

  return (
    <section className={`${styles["cards-section"]} ${styles[LIST_TYPE]}`}>
      <div className={styles["section-header-container"]}>
        <h2 className={styles["section-title"]}>베스트 상품</h2>
      </div>
      <ItemsContainer
        listName={LIST_TYPE}
        itemList={bestItemList.slice(0, pageSize)}
        pageSize={pageSize}
      />
    </section>
  );
};

export default BestItemsSection;
