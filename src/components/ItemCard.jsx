import { Link } from "react-router-dom";
import styles from "./ItemCard.module.css";
import likeImg from "../assets/images/ic-like.svg";
import pandaLogoImg from "../assets/images/logo-panda.svg";

const ItemCard = ({ imgSrc, description, name, price, likes, type }) => {
  return (
    <Link to="/items">
      <img
        src={imgSrc}
        alt={name}
        className={`${styles["item-img"]} ${styles[type]}`}
        onError={(e) => {
          e.currentTarget.src = pandaLogoImg;
        }}
      />
      <h6 className={styles["item-desc"]}>{description}</h6>
      <h4 className={styles["item-price"]}>
        {price.toLocaleString("ko-KR")}원
      </h4>
      <button className={styles["btn-like"]}>
        <span className={styles["btn-like-ico"]}>
          <img className={styles["ico-img"]} src={likeImg} alt="좋아요" />
        </span>
        <span className={styles["btn-like-count"]}>{likes}</span>
      </button>
    </Link>
  );
};

export default ItemCard;
