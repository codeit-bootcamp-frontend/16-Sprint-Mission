/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BREAK_POINT } from "../style/BreakPoints";
import ProductItem from "./ProductItem";
import searchIcon from "../assets/searchIcon.svg";
import Dropdown from "./Dropdown";

function ProductsList({ products, setOrderBy }) {
  return (
    <div css={sectionWrapper}>
      <section css={productsToolsSection}>
        <h2 css={sectionTitle}>전체상품</h2>
        <button css={sectionButton}>상품 등록하기</button>
        <div css={searchWrapper}>
          <input css={sectionInput} placeholder="검색할 상품을 입력해주세요" />
          <button css={searchIconButton}>
            <img src={searchIcon} />
          </button>
        </div>
        <Dropdown css={sectionDropdown} setOrderBy={setOrderBy} />
      </section>

      <div css={productItemsSection}>
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
    </div>
  );
}

export default ProductsList;

const sectionWrapper = css`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  gap: 16px;
`;

const productsToolsSection = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

const sectionTitle = css`
  flex-grow: 1;
  font-size: 20px;
  font-weight: 700;
`;
const sectionButton = css`
  background-color: #3692ff;
  width: 133px;
  height: 42px;
  border-radius: 8px;
  color: #f3f4f6;
  font-size: 16px;
  font-weight: 600;
  vertical-align: middle;
`;
const searchWrapper = css`
  position: relative;
`;
const sectionInput = css`
  width: 288px;
  height: 42px;
  border: none;
  border-radius: 12px;
  background-color: #f3f4f6;
  padding: 9px 16px;
`;
const searchIconButton = css`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
`;
const sectionDropdown = css`
  width: 42px;
  height: 42px;
`;

const productItemsSection = css`
  display: grid;
  grid-template-columns: repeat(2, 168px);
  gap: 32px 8px;
  margin: 0 auto;
`;

const customProductItem = css`
  img {
    width: 168px;
    aspect-ratio: 1 / 1;
  }
`;
