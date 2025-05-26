import { Link } from "react-router-dom";
import style from "./ProductItem.module.scss";

const ProductItem = () => {
  return (
    <Link to={`링크`} className={style.productItem}>
      <figure className={style.productItem__image}>
        <img src={``} alt={`상품 제목`} />
      </figure>
      <div className={style.productItem__content}>
        <p className={style.productItem__subject}>{`상품 제목`}</p>
        <strong className={style.productItem__price}>
          <span>{"30,000"}</span>원
        </strong>
        <span className={style.productItem__favorite}>{240}</span>
      </div>
    </Link>
  );
};

export default ProductItem;
