import styled from 'styled-components';

import BestProducts from './BestProducts';
import AllProducts from './AllProducts';

function MarketPage() {
  return (
    <MarketPageContainer>
      <BestProducts />
      <AllProducts />
    </MarketPageContainer>
  );
}

export default MarketPage;

const MarketPageContainer = styled.div`
  padding: 0 var(--page-spacing-x-mobile);

  @media (min-width: 768px) {
    padding: 0 var(--page-spacing-x-tablet);
  }

  @media (min-width: 1200px) {
    padding: 0 var(--page-spacing-x-desktop);
  }
`;
