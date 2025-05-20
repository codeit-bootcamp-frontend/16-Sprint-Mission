import styles from "./ProductCard.module.css";
import ImageWithFallback from "../ImageWithFallback";
import replaceImg from "../../assets/images/no-image-icon.png";

function ProductCard({ product, size = "default" }) {

  const sizeClass = styles[`img-${size}`] || "";
const textSizeClass = styles[`textContainer-${size}`] || "";

  return (
    <div className={styles.card}>
      <ImageWithFallback
        src={product.images?.[0] || replaceImg}
        alt={product.name}
        fallback={replaceImg}
        className={`${styles.img} ${sizeClass}`}
      />
      <div className={`${styles.textContainer} ${textSizeClass}`}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{product.price}원</p>
        <p className={styles.favorite}>
          <span>🤍</span>️ <span>{product.favoriteCount}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
