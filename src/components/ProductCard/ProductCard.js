import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.images[0]} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}원</p>
      <p>❤️ {product.favoriteCount}</p>
    </div>
  );
}

export default ProductCard;