import styled from 'styled-components';
import theme from '../../../styles/theme';

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
  padding: 0 ${({ theme }) => theme.spacing.mobile};

  @media (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing.tablet};
  }

  @media (min-width: 1200px) {
    padding: 0 ${({ theme }) => theme.spacing.desktop};
  }
`;
