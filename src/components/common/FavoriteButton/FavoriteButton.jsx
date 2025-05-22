import styles from "./FavoriteButton.module.css";

const FavoriteButton = ({ favoriteCount }) => {
  return (
    <div className={styles["favorite-button"]}>
      <img
        className={styles["favorite-image"]}
        src={"/images/img_favorite_inactive.png"}
        width={32}
      />
      <span className={styles["favorite-count"]}>{favoriteCount}</span>
    </div>
  );
};

export default FavoriteButton;
