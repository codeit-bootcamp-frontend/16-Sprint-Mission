/** @jsxImportSource @emotion/react */
import ProductListContainerStyle from "./ProductListContainerStyle";
import ProductCard from "../ProductCard";
import Button from "../ui/Button";

const ProductListResults = ({ products, pageSize, listType, isEmpty }) => {
  if (products.length === 0) {
    return (
      <ProductList>
        <ProductList.Empty onEmpty={isEmpty} />
      </ProductList>
    );
  }

  return (
    <ProductList>
      <ProductList.Content
        products={products}
        pageSize={pageSize}
        listType={listType}
      />
    </ProductList>
  );
};

const ProductList = ({ children }) => {
  return <div css={ProductListContainerStyle}>{children}</div>;
};

ProductList.Content = ({ products, pageSize, listType }) => {
  return (
    <ul className={`product-list-ul ${listType}`}>
      {products.slice(0, pageSize).map(({ id, ...itemData }) => {
        return (
          <li key={id} className="product-list">
            <ProductCard key={id} data={itemData} loading="eager" />
          </li>
        );
      })}
    </ul>
  );
};

ProductList.Empty = ({ isEmpty }) => {
  return (
    <div className="product-list-empty">
      <p>상품이 없습니다.</p>
      <Button type="button" variant="primary" size="sm" onClick={isEmpty}>
        돌아가기
      </Button>
    </div>
  );
};

export default ProductListResults;
