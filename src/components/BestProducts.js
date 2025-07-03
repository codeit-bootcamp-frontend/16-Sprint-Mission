/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import ProductItem from "./ProductItem";

function BestProductsItems({ bestProducts }) {
  return (
    <>
      <h2>베스트 상품</h2>
      {bestProducts &&
        bestProducts.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
    </>
  );
}

export default BestProductsItems;
