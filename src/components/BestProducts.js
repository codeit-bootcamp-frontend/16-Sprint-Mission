/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import ProductItem from "./ProductItem";

function BestProductsItems({ bestProducts, bestPageSize }) {
  return (
    <div css={bestProductsSection}>
      <h2>베스트 상품</h2>
      <div css={bestProductsWrapper}>
        {bestProducts &&
          bestProducts.slice(0, bestPageSize).map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}

export default BestProductsItems;

const bestProductsSection = css`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
`;

const bestProductsWrapper = css`
  display: flex;
  gap: 10px;
`;
