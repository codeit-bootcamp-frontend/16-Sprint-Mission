import React from "react";
import ProductItem from "./ProductItem";
import FilterProducts from "./FilterProducts";
import Pagination from "./Pagination";
import styles from '../css/ItemTemp.module.css';
// import { useProducts } from "../context/ProductAllContext";

function ProductsAll({ products, setQueryStrings, total, queryStrings }) {
  // const products = useProducts();

  return (
    <div className={styles.productsAll}>
      <div className={styles[`filter-container`]}>
        <h2>전체 상품</h2>
        <FilterProducts queryStrings={queryStrings} setQueryStrings={setQueryStrings}></FilterProducts>
      </div>
      <ul className={styles.productsAllList}>
        {products.map((item) => {
          return (
            <li key={item.id}>
              <ProductItem item={item}></ProductItem>
            </li>
          );
        })}
      </ul>
      <Pagination
        total={total}
        queryStrings={queryStrings}
        setQueryStrings={setQueryStrings}
      ></Pagination>
    </div>
  );
}

export default ProductsAll;
