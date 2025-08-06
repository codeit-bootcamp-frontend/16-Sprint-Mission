/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BREAK_POINT } from "../style/BreakPoints";
import ProductItem from "./ProductItem";
import searchIcon from "../assets/searchIcon.svg";
import Dropdown from "./Dropdown";
import { useRef } from "react";

function ProductsList({ products, setOrderBy, setKeyword }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(inputRef.current.value);
  };

  return (
    <div css={sectionWrapper}>
      <section css={productsToolsSection}>
        <h2 css={sectionTitle} className="pt-title">
          전체상품
        </h2>
        <button css={sectionButton} className="pt-button">
          상품 등록하기
        </button>
        <form css={searchWrapper} className="pt-search" onSubmit={handleSubmit}>
          <input
            css={sectionInput}
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            ref={inputRef}
          />
          <button css={searchIconButton} type="submit">
            <img src={searchIcon} />
          </button>
        </form>
        <Dropdown
          customStyle={sectionDropdown}
          className="pt-select"
          setOrderBy={setOrderBy}
        />
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
  width: 344px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${BREAK_POINT.md}px) {
    width: 100%;
    .pt-title {
      order: 1;
    }
    .pt-button {
      order: 3;
    }
    .pt-search {
      order: 2;
    }
    .pt-select {
      order: 4;
    }
  }
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

  @media (min-width: ${BREAK_POINT.md}px) {
    width: 242px;
  }

  @media (min-width: ${BREAK_POINT.lg}px) {
    width: 325px;
  }
`;
const searchIconButton = css`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);

  img {
    cursor: pointer;
  }
`;
const sectionDropdown = css`
  width: 42px;
  height: 42px;

  @media (min-width: ${BREAK_POINT.md}px) {
    width: 130px;
  }
`;

const productItemsSection = css`
  display: grid;
  grid-template-columns: repeat(2, 168px);
  gap: 32px 8px;
  margin: 0 auto;

  @media (min-width: ${BREAK_POINT.md}px) {
    grid-template-columns: repeat(3, 221px);
    gap: 16px;
  }

  @media (min-width: ${BREAK_POINT.lg}px) {
    grid-template-columns: repeat(5, 221px);
    gap: 24px;
  }
`;

const customProductItem = css`
  img {
    width: 168px;
    aspect-ratio: 1 / 1;

    @media (min-width: ${BREAK_POINT.md}px) {
      width: 221px;
    }
  }
`;
