import styles from "./ProductCard.module.css";
import ImageWithFallback from "./ImageWithFallback";
import replaceImg from "../../../../assets/images/no-image-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <ImageWithFallback
        src={product.images?.[0] || replaceImg}
        alt={product.name}
        fallback={replaceImg}
        className={styles.img}
      />
      <div className={styles.textContainer}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{product.price}원</p>
        <p className={styles.favorite}>
          <span>
            <FontAwesomeIcon icon={farHeart} />
          </span>
          ️ <span>{product.favoriteCount}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
