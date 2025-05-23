import styles from "./ItemList.module.css";
import ItemCard from "../ItemCard";
import ItemCardSkeleton from "../../ui/Skeletons/ItemCardSkeleton";
import Button from "../../ui/Button";

const ItemListResults = ({
  isLoading,
  isError,
  isEmpty,
  items,
  pageSize,
  listType,
}) => {
  const isLoadingError = !isLoading && isError;

  if (isLoading)
    return <ItemListLoading pageSize={pageSize} listType={listType} />;

  if (isLoadingError) return <ItemListError />;

  if (items.length === 0) return <ItemListEmpty isEmpty={isEmpty} />;

  return (
    <ItemListRenderer items={items} pageSize={pageSize} listType={listType} />
  );
};

const ItemListRenderer = ({ items, pageSize, listType }) => {
  return (
    <ul className={`${styles[`item-list-ul`]} ${styles[listType]}`}>
      {items.slice(0, pageSize).map(({ id, ...itemData }) => {
        return (
          <li key={id} className={styles["item-list"]}>
            <ItemCard key={id} data={itemData} loading="eager" />
          </li>
        );
      })}
    </ul>
  );
};

const ItemListLoading = ({ pageSize, listType }) => {
  return (
    <ul className={`${styles[`item-list-ul`]} ${styles[listType]}`}>
      {Array.from({ length: pageSize }).map((_, index) => (
        <li key={index} className={styles["item-list"]}>
          <ItemCardSkeleton />
        </li>
      ))}
    </ul>
  );
};

const ItemListError = () => {
  return <p>상품 목록을 가져오지 못했습니다.</p>;
};

const ItemListEmpty = ({ isEmpty }) => {
  return (
    <div className={styles["item-list-empty"]}>
      <p>상품이 없습니다.</p>
      <Button type="button" variant="primary" size="sm" onClick={isEmpty}>
        돌아가기
      </Button>
    </div>
  );
};

export default ItemListResults;
