import { useEffect, useState } from "react";

import { CiHeart } from "react-icons/ci";
import noImg from "../assets/img/noimg.jpg";

import styles from "./ProductItem.module.css";

function ProductItem({ item, isBestProduct }) {
  const { images, name, price, favoriteCount } = item;
  const [url, setURL] = useState(images || noImg);

  const handleError = () => {
    setURL(noImg);
  };

  return (
    <a href="#" className={styles.card}>
      <img
        className={isBestProduct ? styles.bestImg : styles.img}
        src={url}
        alt={name}
        onError={handleError}
      />
      <p>{name}</p>
      <h3 className={styles.price}>{price}원</h3>
      <span className={styles.likeNum}>
        <button className={styles.heart}>
          <CiHeart />
        </button>
        {favoriteCount}
      </span>
    </a>
  );
}

export default ProductItem;
