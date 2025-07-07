import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CiHeart } from "react-icons/ci";
import noImg from "../../assets/img/noimg.jpg";

import styles from "./ProductItem.module.css";

function ProductItem({ item, type = "small" }) {
  const { id, images, name, price, favoriteCount } = item;
  const [imgSrc, setImgSrc] = useState(images?.[0] || noImg);

  useEffect(() => {
    setImgSrc(images?.[0] || noImg);
  }, [images]);

  const handleImageError = () => {
    setImgSrc(noImg);
  };

  return (
    <Link to={`items/${id}`} className={styles.card}>
      <img
        className={styles[type]}
        src={imgSrc}
        alt={name}
        onError={handleImageError}
      />
      <p>{name}</p>
      <h3 className={styles.price}>{price}원</h3>
      <span className={styles.likeNum}>
        <button className={styles.heart}>
          <CiHeart />
        </button>
        {favoriteCount}
      </span>
    </Link>
  );
}

export default ProductItem;
