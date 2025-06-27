/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BREAKPOINTS } from "@/constants/responsive";

const ProductInfoStyle = ({ thumbSize, addFavorite }) => css`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 40px;

  @media (min-width: ${BREAKPOINTS.tablet + 120}px) {
    flex-wrap: nowrap;
  }

  @media (min-width: ${BREAKPOINTS.desktop}px) {
    gap: 24px;
  }

  .product-img {
    width: ${typeof thumbSize === "number" ? `${thumbSize}px` : thumbSize};
    height: ${typeof thumbSize === "number" ? `${thumbSize}px` : thumbSize};
    aspect-ratio: 1/1;
    border-radius: var(--thumb-border-radius);
    overflow: hidden;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product-info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .product-name {
    font-size: 16px;
    margin-bottom: 8px;
    color: var(--secondary-color);

    @media (min-width: ${BREAKPOINTS.tablet}px) {
      font-size: 20px;
    }

    @media (min-width: ${BREAKPOINTS.desktop}px) {
      font-size: 24px;
      margin-bottom: 16px;
    }
  }

  .product-price {
    font-size: 24px;
    margin-bottom: 16px;
    color: var(--secondary-color);

    @media (min-width: ${BREAKPOINTS.tablet}px) {
      font-size: 32px;
    }

    @media (min-width: ${BREAKPOINTS.desktop}px) {
      font-size: 40px;
    }
  }

  .product-description {
    margin-bottom: 16px;
  }

  .description-item {
    margin-bottom: 24px;

    .description-title {
      display: block;
      margin-bottom: 8px;
      font-size: 14px;
      color: var(--text-primary);
      font-weight: 600;

      @media (min-width: ${BREAKPOINTS.desktop}px) {
        margin-bottom: 16px;
        font-size: 16px;
      }
    }

    .description {
      color: var(--secondary-color);
    }
  }

  .product-info-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;

    .actions {
      margin-left: 24px;
      padding-left: 24px;
      border-left: 1px solid var(--gray300);
    }
  }

  .btn-favorite {
    border-color: ${addFavorite ? "var(--primary-color)" : "var(--gray300)"};
    color: ${addFavorite ? "var(--primary-color)" : "var(--gray500)"};

    &:hover {
      border-color: var(--primary-color);
    }
  }
  .heart-icon {
    fill: ${addFavorite ? "var(--primary-color)" : "#fff"};
    stroke: ${addFavorite
      ? "1px solid transparent"
      : "1px solid var(--gray500)"};
  }
`;

export default ProductInfoStyle;
