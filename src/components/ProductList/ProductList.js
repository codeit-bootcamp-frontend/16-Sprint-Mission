import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductList.module.scss";

const ProductList = ({ list, type = "all" }) => {
  return (
    <ul
      className={`${styles["productList"]} ${styles[`productList__${type}`]}`}
    >
      {list.map((product) => (
        <li key={product.id}>
          <ProductItem product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
