/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import noImage from "../assets/noImage.png";

function ProductItem({ product, customStyle }) {
  return (
    <div css={[productItemStyle, customStyle]}>
      <img
        src={
          product.images && product.images.length > 0
            ? product.images[0]
            : noImage
        }
        alt="이미지 미리보기"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = noImage;
        }}
      />
      <div>{product.name}</div>
      <div css={productPrice}>{product.price.toLocaleString() + "원"}</div>
      <div css={productCount}>{`♡ ${product.favoriteCount}`}</div>
    </div>
  );
}

export default ProductItem;

const productItemStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;

  img {
    width: 343px;
    aspect-ratio: 1 / 1;
  }
`;

const productPrice = css`
  font-size: 16px;
  font-weight: 700;
`;

const productCount = css`
  color: #4b5563;
  font-size: 12px;
`;
