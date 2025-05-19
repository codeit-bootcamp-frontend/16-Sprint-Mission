import styles from "../styles/ProductItem.module.css"

function ProductItem({ className, item }) {
  return (
    <div className={`${styles.card} ${className}`} >
      <img src={item.images[0]} alt="상품이미지"></img>
      <div className={styles.card__name}>{item.name}</div>
      <div className={styles.card__price}>{item.price.toLocaleString("ko-KR")}</div>
      <div className={styles.card__favorite}>❤{item.favoriteCount}</div>
    </div>
  );
}

export default ProductItem;
