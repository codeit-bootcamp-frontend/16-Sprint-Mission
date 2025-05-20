import ProductItem from "./ProductItem";
import FilterProducts from "./FilterProducts";
import Pagination from "./Pagination";
import FailLoad from "./FailLoad";
import { useResizeRequest } from "../hooks/useResizeRequest ";
import { useContext, useEffect, useState } from "react";
import { ProductAllContext } from "../context/ProductAllContext";
import styles from "../styles/ProductsAll.module.css";
import { getProducts } from "../service/api";

function ProductsAll() {
  const { products, setProducts, setTotal, queryStrings, setQueryStrings } =
    useContext(ProductAllContext);
  const [error, setError] = useState(null);

  //innerWidth에 따라 쿼리 변경하기
  useResizeRequest("all", setQueryStrings);

  //맨처음 목록 가져오기 + 쿼리 변하면 새로 가져다줘
  useEffect(() => {
    async function loadAllItems() {
      try {
        const result = await getProducts(queryStrings);
        setProducts(result.list);
          if (setTotal) setTotal(result.totalCount);
      } catch (err) {
        setError(err);
      }
    }
    loadAllItems();
  }, [queryStrings]);

  return (
    <>
      <section className={styles.items__all}>
        <div className={styles[`items__all-filter`]}>
          <h2>전체 상품</h2>
          <FilterProducts></FilterProducts>
        </div>
        {error ? (
          <FailLoad></FailLoad>
        ) : (
          <ul className={styles[`items__all-list`]}>
            {products.map((item) => {
              return (
                <li className={styles[`all-list__card`]} key={item.id}>
                  <ProductItem
                    className={styles[`all-list__item`]}
                    item={item}
                  ></ProductItem>
                </li>
              );
            })}
          </ul>
        )}
        <Pagination></Pagination>
      </section>
    </>
  );
}

export default ProductsAll;
