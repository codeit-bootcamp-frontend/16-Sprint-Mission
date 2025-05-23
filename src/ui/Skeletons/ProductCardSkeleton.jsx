import styles from "../../components/ProductCard/ProductCard.module.css";
import skeletonStyles from "./ProductCardSkeleton.module.css";

const ProductCardSkeleton = () => {
  return (
    <div className={`${styles["item-img"]} ${skeletonStyles["skeleton-card"]}`}>
      <div className={skeletonStyles["skeleton-img"]}></div>
      <div className={skeletonStyles["skeleton-text"]}></div>
      <div className={skeletonStyles["skeleton-price"]}></div>
      <div className={skeletonStyles["skeleton-like"]}></div>
    </div>
  );
};

export default ProductCardSkeleton;
