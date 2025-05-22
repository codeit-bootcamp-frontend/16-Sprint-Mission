import { useState } from "react";
import { formatPriceKRW } from "../../../utils/formatPrice";
import styles from "./ItemCard.module.css";
import { useNavigate } from "react-router-dom";

const IMAGE_DEFAULT_URL = "/images/img_items_default_md.png";

const ItemCard = ({ id, imageUrl, name, price, favoriteCount }) => {
  const [isImageValid, setIsImageValid] = useState(true);
  const navigate = useNavigate();

  const imgSrc = isImageValid ? imageUrl : IMAGE_DEFAULT_URL;

  const handleItemCardClick = () => {
    navigate(`./${id}`);
  };

  return (
    <div className={styles["container"]} onClick={handleItemCardClick}>
      <img
        className={styles["image"]}
        src={imgSrc}
        onError={() => setIsImageValid(false)}
        alt={name}
        width={282}
      />
      <div className={styles["context"]}>
        <h3 className={styles["title"]}>{name}</h3>
        <p className={styles["price"]}>{formatPriceKRW(price)}</p>
        <div className={styles["favorite-container"]}>
          <img
            className={styles["favorite-image inactive"]}
            src={"/images/img_favorite_inactive.png"}
            width={13.4}
          />
          <p className={styles["favorite-count"]}>{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
