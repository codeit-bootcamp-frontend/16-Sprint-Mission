/** @jsxImportSource @emotion/react */
import { ProductListStyle } from "../../ProductList/ProductList";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductListLoading = ({ pageSize, listType }) => {
  return (
    <div css={ProductListStyle}>
      <ul className={`product-list-ul ${listType}`}>
        {Array.from({ length: pageSize }).map((_, index) => (
          <li key={index} className="product-list">
            <ProductCardSkeleton />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListLoading;
