import styles from "./AllProducts.module.css";
import useResponsiveLimit from "../../hooks/useResponsiveLimit";
import usePaginationState from "../../hooks/usePaginationState";
import usePaginatedProducts from "../../hooks/usePaginatedProducts";
import ProductSection from "../ProductSection/ProductSection";
import Pagination from "../Pagination/Pagination";
import { useState, useCallback } from "react";

function AllProducts({ title, itemsPerDevice }) {
  const limit = useResponsiveLimit(itemsPerDevice);
  const [page, changePage] = usePaginationState(limit);
  const [sort, setSort] = useState("latest");

  const { products, totalPages } = usePaginatedProducts({ page, limit, sort });

  const handleSortChange = useCallback((newSort) => {
    setSort(newSort);
    changePage(1);
  }, [changePage]);

  return (
    <>
      <ProductSection
        title={title}
        products={products}
        sort={sort}
        showSearch={true}
        showRegisterButton={true}
        onChangeSort={handleSortChange}
      />
      <div className={styles.paginationWrapper}>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={changePage}
      />
      </div>
    </>
  );
}


export default AllProducts;
