/** @jsxImportSource @emotion/react */
import ProductListStyle from "./ProductListContainerStyle";
import { useEffect, useState, useCallback } from "react";
import { getProducts } from "@/services/get/getProducts";
import SectionTitle from "../ui/SectionTitle";
import ProductListResults from "./ProductListResults";
import useAsync from "../../hooks/useAsync";
import ProductListSkeleton from "../ui/Skeletons/ProductListSkeleton";
import ProductListError from "./ProductListError";

const ORDER_BY = "favorite";
const LIST_TYPE = "best";

const BestProductList = ({ title, pageSize }) => {
  const [products, setProducts] = useState([]);
  const {
    isLoading,
    loadingError,
    runAsync: getProductsAsync,
  } = useAsync(getProducts);

  const handleLoad = useCallback(
    async (options) => {
      const result = await getProductsAsync(options);
      if (!result) return;

      const { list } = result;
      setProducts(list);
    },
    [getProductsAsync]
  );

  useEffect(() => {
    handleLoad({ pageSize, orderBy: ORDER_BY });
  }, [pageSize, handleLoad]);

  return (
    <div css={ProductListStyle}>
      <SectionTitle title={title} />
      {isLoading && (
        <ProductListSkeleton pageSize={pageSize} listType={LIST_TYPE} />
      )}
      {loadingError && <ProductListError />}
      <ProductListResults
        products={products}
        pageSize={pageSize}
        listType={LIST_TYPE}
      />
    </div>
  );
};

export default BestProductList;
