import styles from "../../components/ItemCard/ItemCard.module.css";
import skeletonStyles from "./ItemCardSkeleton.module.css";

const ItemCardSkeleton = () => {
  return (
    <div className={`${styles["item-img"]} ${skeletonStyles["skeleton-card"]}`}>
      <div className={skeletonStyles["skeleton-img"]}></div>
      <div className={skeletonStyles["skeleton-text"]}></div>
      <div className={skeletonStyles["skeleton-price"]}></div>
      <div className={skeletonStyles["skeleton-like"]}></div>
    </div>
  );
};

export default ItemCardSkeleton;
