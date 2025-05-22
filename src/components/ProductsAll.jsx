import styles from "../styles/ProductsAll.module.css";
import ProductItem from "./ProductItem";
import FilterProducts from "./FilterProducts";
import Pagination from "./Pagination";
import FailLoad from "./FailLoad";
import { useResizeRequest } from "../hooks/useResizeRequest ";
import { useContext, useEffect, useState } from "react";
import { ProductAllContext } from "../context/ProductAllContext";
import { useLoadItems } from "../hooks/useLoadItems";

function ProductsAll() {
  const { products, setProducts, setTotal, queryStrings, setQueryStrings } =
    useContext(ProductAllContext);

  //innerWidth에 따라 쿼리 변경하기
  const [pageSize] = useResizeRequest("all");
  useEffect(() => {
    setQueryStrings((prev) => ({ ...prev, pageSize }));
  }, [pageSize]);

  // 쿼리스트링으로 아이템 가져오기 가져다줘
  const [loadFail, result] = useLoadItems(queryStrings);

  useEffect(() => {
    if (result.list) {
      setProducts([...result.list]);
      setTotal(result.totalCount);
    }
  }, [result]);

  return (
    <>
      <section className={styles.items__all}>
        <div className={styles[`items__all-filter`]}>
          <h2>전체 상품</h2>
          <FilterProducts></FilterProducts>
        </div>
        {loadFail ? (
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
