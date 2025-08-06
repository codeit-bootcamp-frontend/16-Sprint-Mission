import styled from 'styled-components';

import ProductCard from './ProductCard';
function BestProductsSection({ bestItems }) {
  return (
    <BestProductsWrapper>
      {bestItems.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </BestProductsWrapper>
  );
}
const BestProductsWrapper = styled.div`
  display: flex;
  gap: 10px;
  @media screen and (min-width: 1024px) {
    gap: 24px;
  }
`;
export default BestProductsSection;
