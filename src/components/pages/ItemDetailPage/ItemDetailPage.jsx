import styled from 'styled-components';

import ProductInfo from './ProductInfo';
import ProductQuestion from './ProductQuestion';

function ItemDetailPage() {
  return (
    <StyledItemDetailPage>
      <ProductInfo />
      <ProductQuestion />
    </StyledItemDetailPage>
  );
}

export default ItemDetailPage;

const StyledItemDetailPage = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.mobile};
  margin-top: 24px;

  @media (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing.tablet};
  }

  @media (min-width: 1024px) {
    padding: 0 ${({ theme }) => theme.spacing.desktop};
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`;
