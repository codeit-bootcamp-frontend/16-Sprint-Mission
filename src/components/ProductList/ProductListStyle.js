/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ProductListStyle = css`
  padding-bottom: 40px;

  .product-list-ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(48%, 1fr));
    gap: 32px 8px;
  }

  .product-list img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  .product-list-ul.best {
    display: flex;
    flex-wrap: wrap;
    gap: 40px 24px;
  }

  .product-list-ul.best .product-list {
    flex-grow: 1;
  }

  .product-list-header .product-list-title {
    margin-bottom: 0;
  }

  .product-list-header {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--list-header-gap);
    margin-bottom: 24px;
  }

  .product-list-header-search {
    width: calc(100% - var(--dropdown-min-width) - var(--list-header-gap));
  }

  .product-list-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    gap: 8px;
  }

  @media (min-width: 600px) {
    .product-list-ul.best {
      gap: 40px 10px;
    }

    .product-list-ul.best .product-list {
      width: calc(50% - 10px);
    }
  }

  @media (min-width: 720px) {
    .product-list-ul {
      grid-template-columns: repeat(3, minmax(30%, 1fr));
      gap: 40px 16px;
    }

    .product-list-header {
      flex-wrap: nowrap;
    }

    .product-list-header-search {
      width: 242px;
    }
  }

  @media (min-width: 1200px) {
    .product-list-ul {
      grid-template-columns: repeat(5, minmax(220px, 1fr));
      gap: 40px 24px;
    }

    .product-list-ul.best {
      gap: 40px 24px;
    }

    .product-list-ul.best .product-list {
      width: calc(25% - 24px);
      flex-grow: 1;
    }

    .product-list-header-search {
      width: 324px;
    }
  }
`;

export default ProductListStyle;
