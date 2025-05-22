import { useNavigate } from "react-router-dom";
import { formatPriceKRW } from "../../../utils/formatPrice";
import styles from "./ItemCard.module.css";
import ItemImageViewer from "../ItemImageViewer/ItemImageViewer";

const ItemCard = ({ id, imageUrl, name, price, favoriteCount }) => {
  const navigate = useNavigate();
  const handleItemCardClick = () => {
    navigate(`./${id}`);
  };

  return (
    <div className={styles["container"]} onClick={handleItemCardClick}>
      <ItemImageViewer
        alt={name}
        src={imageUrl}
        defaultWidth={282}
        borderRadius={19.46}
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
