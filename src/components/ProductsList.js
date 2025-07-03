import ProductItem from "./ProductItem";

function ProductsList({ products }) {
  return (
    <>
      <h2>전체상품</h2>
      <button>상품 등록하기</button>
      <input />
      <select>
        <option>최신순</option>
        <option>좋아요순</option>
      </select>
      {products &&
        products.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
    </>
  );
}

export default ProductsList;
