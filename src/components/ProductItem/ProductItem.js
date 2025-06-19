import { Link } from "react-router-dom";
import style from "./ProductItem.module.scss";

const ProductItem = ({ product }) => {
  const { id, images, name, price, favoriteCount } = product;

  return (
    <Link to={`/items/${id}`} className={style.productItem}>
      <figure className={style.productItem__image}>
        <img src={images[0]} alt={name} />
      </figure>
      <div className={style.productItem__content}>
        <p className={style.productItem__subject}>{name}</p>
        <strong className={style.productItem__price}>
          <span>{price.toLocaleString("ko-KR")}</span>원
        </strong>
        <span className={style.productItem__favorite}>{favoriteCount}</span>
      </div>
    </Link>
  );
};

export default ProductItem;
