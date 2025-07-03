/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import ProductItem from "./ProductItem";

function ProductsList({ products }) {
  return (
    <>
      <section css={productsToolsSection}>
        <h2 css={sectionTitle}>전체상품</h2>
        <button css={sectionButton}>상품 등록하기</button>
        <input css={sectionInput} />
        <select css={sectionDropdown}>
          <option>최신순</option>
          <option>좋아요순</option>
        </select>
      </section>

      <div css={productItemsWrapper}>
        {products &&
          products.map((product) => {
            return (
              <ProductItem
                key={product.id}
                product={product}
                customStyle={customProductItem}
              />
            );
          })}
      </div>
    </>
  );
}

export default ProductsList;

const productsToolsSection = css`
  display: grid;
  grid-template-areas: "title button" "input dropdown";
  grid-template-columns: 1fr auto;
`;

const sectionTitle = css`
  grid-area: title;
`;
const sectionButton = css`
  grid-area: button;
`;
const sectionInput = css`
  grid-area: input;
`;
const sectionDropdown = css`
  grid-area: dropdown;
`;

const productItemsWrapper = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 8px;
`;

const customProductItem = css`
  img {
    width: 168px;
    height: 168px;
  }
`;
