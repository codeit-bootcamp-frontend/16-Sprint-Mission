/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProductListStyle } from "./ProductList";
import { useEffect, useState, useCallback } from "react";
import { getItems } from "../../services/api";
import SectionTitle from "../../ui/SectionTitle";
import ProductListResults from "./ProductListResults";
import useAsync from "../../hooks/useAsync";

const ORDER_BY = "favorite";
const LIST_TYPE = "best";

const BestProductList = ({ title, pageSize }) => {
  const [items, setItems] = useState([]);
  const {
    isLoading,
    loadingError,
    runAsync: getItemsAsync,
  } = useAsync(getItems);

  const handleLoad = useCallback(
    async (options) => {
      const result = await getItemsAsync(options);
      if (!result) return;

      const { list } = result;
      setItems(list);
    },
    [getItemsAsync]
  );

  useEffect(() => {
    handleLoad({ pageSize, orderBy: ORDER_BY });
  }, [pageSize, handleLoad]);

  return (
    <div css={ProductListStyle}>
      <SectionTitle title={title} />
      <ProductListResults
        isLoading={isLoading}
        isError={loadingError}
        items={items}
        pageSize={pageSize}
        listType={LIST_TYPE}
      />
    </div>
  );
};

export default BestProductList;
