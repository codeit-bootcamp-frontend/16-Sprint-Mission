import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.images[0]} alt={product.name} className={styles.img} />
      <div className={styles.textContainer}>
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
