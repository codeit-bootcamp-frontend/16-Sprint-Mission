import styled from 'styled-components';
import { applyFontStyles } from '../../../styles/mixins';
import { FontTypes, ColorTypes } from '../../../styles/theme';

function AddItemButton() {
  return (
    <div>
      <StButton>
        <div>상품 등록하기</div>
      </StButton>
    </div>
  );
}

export default AddItemButton;

const StButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  ${applyFontStyles(FontTypes.SEMIBOLD16, ColorTypes.SECONDARY_WHITE)};
  width: 133px;
  height: 42px;
  background-color: ${({ theme }) => theme.colors[ColorTypes.PRIMARY_100]};
  border-radius: 8px;
  padding: 12px 23px;
  white-space: nowrap;
  &:hover {
    background-color: ${ColorTypes.PRIMARY_200};
  }
`;
