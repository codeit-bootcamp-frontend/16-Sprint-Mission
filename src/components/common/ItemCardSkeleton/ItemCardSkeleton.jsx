import styles from "./ItemCardSkeleton.module.css";

const ItemCardSkeleton = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["image"]} width={282} />
      <div className={styles["context"]}>
        <div className={styles["title"]} />
        <div className={styles["price"]} />
        <div className={styles["favorite-container"]} />
      </div>
    </div>
  );
};

export default ItemCardSkeleton;
