import styles from "./ItemListSkeleton.module.css";
import ItemCardSkeleton from "./ItemCardSkeleton";

const ItemListSkeleton = ({ count = 4, listType = "all" }) => {
  return (
    <ul className={`${styles["item-list-ul"]} ${styles[listType]}`}>
      {Array.from({ length: count }).map((_, i) => (
        <li key={i} className={styles["item-list"]}>
          <ItemCardSkeleton />
        </li>
      ))}
    </ul>
  );
};

export default ItemListSkeleton;
