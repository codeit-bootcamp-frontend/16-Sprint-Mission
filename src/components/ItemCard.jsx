import { Link } from "react-router-dom";
import styles from "./ItemCard.module.css";
import likeImg from "../assets/images/ic-like.svg";
import pandaLogoImg from "../assets/images/logo-panda.svg";

const ItemCard = ({ data, loading = "lazy" }) => {
  const { images, name, description, price, favoriteCount } = data;

  return (
    <Link to="/items">
      <span className={styles["img-wrap"]}>
        <img
          src={images}
          alt={name}
          className={styles["item-img"]}
          onError={(e) => {
            e.currentTarget.src = pandaLogoImg;
          }}
          loading={loading}
        />
      </span>

      <h6 className={styles["item-desc"]}>{description}</h6>
      <h4 className={styles["item-price"]}>
        {price.toLocaleString("ko-KR")}원
      </h4>
      <button className={styles["btn-like"]}>
        <span className={styles["btn-like-ico"]}>
          <img className={styles["ico-img"]} src={likeImg} alt="좋아요" />
        </span>
        <span className={styles["btn-like-count"]}>{favoriteCount}</span>
      </button>
    </Link>
  );
};

export default ItemCard;
