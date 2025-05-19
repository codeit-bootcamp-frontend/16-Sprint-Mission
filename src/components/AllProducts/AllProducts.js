import useResponsiveLimit from "../../hooks/useResponsiveLimit";
import usePaginationState from "../../hooks/usePaginationState";
import usePaginatedProducts from "../../hooks/usePaginatedProducts";
import ProductSection from "../ProductSection/ProductSection";
import Pagination from "../Pagination/Pagination";
import { useState, useCallback } from "react";

function AllProducts({ title, itemsPerDevice }) {
  console.log("AllProducts itemsPerDevice:", itemsPerDevice);
  const limit = useResponsiveLimit(itemsPerDevice);
  const [page, changePage] = usePaginationState(limit);
  const [sort, setSort] = useState("latest");

  const { products, totalPages } = usePaginatedProducts({ page, limit, sort });

    // sort 변경 시 페이지도 같이 1로 리셋
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
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={changePage}
      />
    </>
  );
}


export default AllProducts;
