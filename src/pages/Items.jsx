import { useState, useEffect } from "react";
import FilterProducts from "../components/FilterProducts";
import ProductsFavorite from "../components/ProductsFavorite";
import ProductsAll from "../components/ProductsAll";
import Pagination from "../components/Pagination";
import HandlePageSize from "../HandlePageSize";
import {reRequestByResize, viewPort} from '../util'
import styles from "../css/itemTemp.module.css";
import { getProducts } from "../api";
// import ProductAllContextProvider, { useProducts, useQueryStrings, useSetProducts, useSetToTal } from "../context/ProductAllContext";

function Items() {
  const [products, setProducts] = useState([]);
  const [queryStrings, setQueryStrings] = useState({
    orderBy: "recent",
    page: 1,
    pageSize: 10,
  });
  const [total, setTotal] = useState(0);
const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  
  //맨처음 목록 가져오기 + 쿼리 변하면 새로 가져다줘
  useEffect(() => {
    async function temp() {
      const result = await getProducts(queryStrings);
      setProducts(result.list);
      setTotal(result.totalCount);
    }
    temp();
  }, [queryStrings]);

  return (
    <main className={styles.items}>
      <HandlePageSize setInnerWidth={setInnerWidth} setQueryStrings={setQueryStrings} innerWidth={innerWidth} viewPort={viewPort}> </HandlePageSize>
      <div className={styles.container}>
        <ProductsFavorite setInnerWidth={setInnerWidth} innerWidth={innerWidth} queryStrings={queryStrings} setQueryStrings={setQueryStrings}></ProductsFavorite>
        <ProductsAll
          total={total}
          setTotal={setTotal}
          products={products}
          setProducts={setProducts}
          queryStrings={queryStrings}
          setQueryStrings={setQueryStrings}
          >
        </ProductsAll>
      </div>
    </main>
  );
}

export default Items;
