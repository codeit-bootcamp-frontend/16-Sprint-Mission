import styles from "./ItemCard.module.css";
import fvIcon from "../assets/favorite_icon.svg";

function ItemCard({ image, name, price, favoriteCount, imageClassName = "" }) {
  const localePrice = price.toLocaleString();
  return (
    <div className={styles.card}>
      <div className={`${styles.imageWrapper} ${imageClassName}`}>
        <img
          src={image || "https://placehold.co/600x400?text=No+Image"}
          alt={name}
          onError={(e) => {
            e.target.src = "https://placehold.co/600x400?text=Image+Not+Found";
          }}
        />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>{localePrice}원</div>
      <div className={styles.favorite}>
        <img src={fvIcon} alt="좋아요" />
        {favoriteCount}
      </div>
    </div>
  );
}

export default ItemCard;
