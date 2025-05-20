import styles from "../styles/ProductItem.module.css";
import heartIcon from "../assets/icon/ic_heart.png";

function ProductItem({ className, item }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <img src={item.images[0]} alt="상품이미지" />
      <div className={styles.card__name}>{item.name}</div>
      <div className={styles.card__price}>
        {`${item.price.toLocaleString("ko-KR")}원`}
      </div>
      <div className={styles.card__favorite}>
        <img src={heartIcon} alt="좋아요 아이콘" />
        {item.favoriteCount}
      </div>
    </div>
  );
}

export default ProductItem;
