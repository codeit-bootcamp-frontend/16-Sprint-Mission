import styles from "./ItemListSkeleton.module.css";
import ItemCardSkeleton from "./ItemCardSkeleton";

const SKELETON_GAP = 24;

const ItemListSkeleton = ({ count = 4, thumbSize = 220 }) => {
  return (
    <ul className={styles["skeleton-list"]}>
      {Array.from({ length: count }).map((_, i) => (
        <li
          key={i}
          className={styles["skeleton-item"]}
          style={{ width: `calc(${thumbSize}px - ${SKELETON_GAP}px)` }}
        >
          <ItemCardSkeleton />
        </li>
      ))}
    </ul>
  );
};

export default ItemListSkeleton;
