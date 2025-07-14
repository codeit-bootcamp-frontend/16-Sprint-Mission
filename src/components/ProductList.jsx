import styled from 'styled-components';

import ProductCard from './ProductCard';
function ProductList({ allItems }) {
  return (
    <ProductListWrapper>
      {allItems.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </ProductListWrapper>
  );
}
const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 32px 8px;
  padding-top: 16px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 40px 16px;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, auto);
    gap: 40px 24px;
  }
`;
export default ProductList;
