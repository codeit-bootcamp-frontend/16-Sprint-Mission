// components/AllProducts/AllProducts.js
import { useEffect, useState } from "react";
import styles from "./AllProducts.module.css";
import { getLimitFromHtmlClass } from "../../utils/getLimitFromHtmlClass";
import ProductCard from "../ProductCard/ProductCard";
import { fetchPaginatedProducts } from "../../api/products";
import Pagination from "../Pagination/Pagination";

function AllProducts({ title,itemsPerDevice }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [limit, setLimit] = useState(() =>
    getLimitFromHtmlClass(
      itemsPerDevice.desktop,
      itemsPerDevice.tablet,
      itemsPerDevice.mobile
    )
  );

  useEffect(() => {
    const load = async () => {
      const res = await fetchPaginatedProducts({ page, pageSize: limit });
      console.log(res);
      setProducts(res.list);
      const total = Math.ceil(res.totalCount / limit); 
      setTotalPages(total);
    };

    load();

  }, [page, limit]);

 useEffect(() => {
  const update = () => {
    const newLimit = getLimitFromHtmlClass(
      itemsPerDevice.desktop,
      itemsPerDevice.tablet,
      itemsPerDevice.mobile
    );

    setLimit((prevLimit) => {
      const currentStartIndex = (page - 1) * prevLimit;
      const newPage = Math.floor(currentStartIndex / newLimit) + 1;
      setPage(newPage);
      return newLimit;
    });
  };

  window.addEventListener("resize", update);
  return () => window.removeEventListener("resize", update);
}, [page, itemsPerDevice]);
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </section>
  );
}

export default AllProducts;
