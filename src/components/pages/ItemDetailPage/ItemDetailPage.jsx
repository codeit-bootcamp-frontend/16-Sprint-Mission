import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ProductInfo from './ProductInfo';
import ProductComments from './ProductComments';

import { applyFontStyles } from '../../../styles/mixins';
import { FontTypes, ColorTypes } from '../../../styles/theme';
import back from '../../../assets/images/icons/ic_back.png';

function ItemDetailPage() {
  return (
    <StyledItemDetailPage>
      <ProductInfo />
      <ProductComments />
      <StyledButtonWrapper>
        <Link to="/items">
          <StyledButton>
            <StyledButtonText>목록으로 돌아가기</StyledButtonText>
            <img
              src={back}
              alt="back"
            />
          </StyledButton>
        </Link>
      </StyledButtonWrapper>
    </StyledItemDetailPage>
  );
}

export default ItemDetailPage;

const StyledItemDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 ${({ theme }) => theme.spacing.mobile};
  margin-top: 24px;
  margin-bottom: 100px;

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

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 240px;
  height: 48px;
  padding: 12px 64px;
  border-radius: 40px;
`;

const StyledButtonText = styled.p`
  ${applyFontStyles(FontTypes.SEMIBOLD16, ColorTypes.SECONDARY_GRAY_100)}
`;
