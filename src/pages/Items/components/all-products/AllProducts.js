import styles from "./AllProducts.module.css";
import useProductsPagination from "../../hooks/useProductsPagination";
import ProductSection from "../product-section/ProductSection";
import Pagination from "../Pagination/Pagination";

function AllProducts({ title, itemsPerDevice }) {
  const { products, totalPages, page, changePage, sort, handleSortChange } =
    useProductsPagination(itemsPerDevice);

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
