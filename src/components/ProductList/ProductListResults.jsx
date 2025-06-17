/** @jsxImportSource @emotion/react */
import ProductListStyle from "./ProductListStyle";
import ProductCard from "../ProductCard";
import Button from "../ui/Button";

const ProductListResults = ({ products, pageSize, listType, isEmpty }) => {
  if (products.length === 0) return <ProductListEmpty isEmpty={isEmpty} />;

  return (
    <ProductListRenderer
      products={products}
      pageSize={pageSize}
      listType={listType}
    />
  );
};

const ProductListRenderer = ({ products, pageSize, listType }) => {
  return (
    <div css={ProductListStyle}>
      <ul className={`product-list-ul ${listType}`}>
        {products.slice(0, pageSize).map(({ id, ...itemData }) => {
          return (
            <li key={id} className="product-list">
              <ProductCard key={id} data={itemData} loading="eager" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ProductListEmpty = ({ isEmpty }) => {
  return (
    <div css={ProductListStyle}>
      <div className="product-list-empty">
        <p>상품이 없습니다.</p>
        <Button type="button" variant="primary" size="sm" onClick={isEmpty}>
          돌아가기
        </Button>
      </div>
    </div>
  );
};

export default ProductListResults;
