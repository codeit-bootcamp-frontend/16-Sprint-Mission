import styled from 'styled-components';

import BestProducts from './BestProducts';
import AllProducts from './AllProducts';

function MarketPage() {
  return (
    <StyledMarketPageContainer>
      <BestProducts />
      <AllProducts />
    </StyledMarketPageContainer>
  );
}

export default MarketPage;

const StyledMarketPageContainer = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.mobile};

  @media (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing.tablet};
  }

  @media (min-width: 1200px) {
    padding: 0 ${({ theme }) => theme.spacing.desktop};
  }
`;
