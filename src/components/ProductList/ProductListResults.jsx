/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProductListStyle } from "./ProductList";
import ProductCard from "../ProductCard";
import ProductCardSkeleton from "../../ui/Skeletons/ProductCardSkeleton";
import Button from "../../ui/Button";

const ProductListResults = ({
  isLoading,
  isError,
  isEmpty,
  items,
  pageSize,
  listType,
}) => {
  const isLoadingError = !isLoading && isError;

  if (isLoading)
    return <ProductListLoading pageSize={pageSize} listType={listType} />;

  if (isLoadingError) return <ProductListError />;

  if (items.length === 0) return <ProductListEmpty isEmpty={isEmpty} />;

  return (
    <ProductListRenderer
      items={items}
      pageSize={pageSize}
      listType={listType}
    />
  );
};

const ProductListRenderer = ({ items, pageSize, listType }) => {
  return (
    <div css={ProductListStyle}>
      <ul className={`item-list-ul ${listType}`}>
        {items.slice(0, pageSize).map(({ id, ...itemData }) => {
          return (
            <li key={id} className="item-list">
              <ProductCard key={id} data={itemData} loading="eager" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ProductListLoading = ({ pageSize, listType }) => {
  return (
    <div css={ProductListStyle}>
      <ul className={`item-list-ul ${listType}`}>
        {Array.from({ length: pageSize }).map((_, index) => (
          <li key={index} className="item-list">
            <ProductCardSkeleton />
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductListError = () => {
  return (
    <div css={ProductListStyle}>
      <p>상품 목록을 가져오지 못했습니다.</p>
    </div>
  );
};

const ProductListEmpty = ({ isEmpty }) => {
  return (
    <div css={ProductListStyle}>
      <div className="item-list-empty">
        <p>상품이 없습니다.</p>
        <Button type="button" variant="primary" size="sm" onClick={isEmpty}>
          돌아가기
        </Button>
      </div>
    </div>
  );
};

export default ProductListResults;
