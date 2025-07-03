/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import ProductItem from "./ProductItem";

function BestProductsItems({ bestProducts, bestPageSize = 1 }) {
  return (
    <div css={bestProductsSection}>
      <h2>베스트 상품</h2>
      {bestProducts &&
        bestProducts.slice(0, bestPageSize).map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
    </div>
  );
}

export default BestProductsItems;

const bestProductsSection = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
