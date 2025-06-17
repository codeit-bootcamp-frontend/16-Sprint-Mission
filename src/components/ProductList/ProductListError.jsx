/** @jsxImportSource @emotion/react */
import { ProductListStyle } from "./ProductList";

const ProductListError = () => {
  return (
    <div css={ProductListStyle}>
      <p>상품 목록을 가져오지 못했습니다.</p>
    </div>
  );
};

export default ProductListError;
