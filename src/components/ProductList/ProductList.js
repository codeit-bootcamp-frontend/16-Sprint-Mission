import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductList.module.scss";

const ProductList = ({ list, type = "all", pageSize = null }) => {
  const productList = pageSize ? list.slice(0, pageSize) : list;

  return (
    <ul
      className={`${styles["productList"]} ${styles[`productList__${type}`]}`}
    >
      {productList.map((product) => (
        <li key={product.id}>
          <ProductItem product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
