/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ProductCardSkeleton = () => {
  return (
    <div css={ProductCardSkeletonStyle}>
      <div className="skeleton-card">
        <div className="skeleton-img"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-price"></div>
        <div className="skeleton-like"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;

const ProductCardSkeletonStyle = css`
  .skeleton-img {
    width: 100%;
    aspect-ratio: 1/1;
    background-color: #e0e0e0;
    border-radius: var(--thumb-border-radius);
  }

  .skeleton-text {
    width: 80%;
    height: 18px;
    margin: 12px 0 8px;
    background-color: #e0e0e0;
    border-radius: 4px;
  }

  .skeleton-price {
    width: 60%;
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 4px;
    margin-bottom: 8px;
  }

  .skeleton-like {
    width: 50px;
    height: 24px;
    background-color: #e0e0e0;
    border-radius: var(--border-radius-sm);
  }
`;
