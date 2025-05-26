import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductList.module.scss";

const ProductList = ({ type = "all" }) => {
  return (
    <ul
      className={`${styles["productList"]} ${styles[`productList__${type}`]}`}
    >
      <li>
        <ProductItem />
      </li>
      <li>
        <ProductItem />
      </li>
      <li>
        <ProductItem />
      </li>
      <li>
        <ProductItem />
      </li>
    </ul>
  );
};

export default ProductList;
