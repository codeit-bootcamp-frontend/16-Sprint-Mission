import styled from 'styled-components';
import { useState } from 'react';

import kebab from '../../assets/images/icons/ic_kebab.svg';
import { FontTypes, ColorTypes } from '../../styles/theme';
import { applyFontStyles } from '../../styles/mixins';

function CommentEditList() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledContainer>
      <StyledEditButton onClick={() => setIsOpen((prev) => !prev)}>
        <img
          src={kebab}
          alt="kebab"
        />
      </StyledEditButton>

      {isOpen && (
        <StyledEditList>
          <StyledEditItem>수정하기</StyledEditItem>
          <StyledEditItem>삭제하기</StyledEditItem>
        </StyledEditList>
      )}
    </StyledContainer>
  );
}

export default CommentEditList;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledEditButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const StyledEditList = styled.ul`
  position: absolute;
  top: 34px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  width: 138px;
  height: 96px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors[ColorTypes.SECONDARY_GRAY_200]};
  background-color: #ffffff;
  z-index: 1;
`;

const StyledEditItem = styled.li`
  display: flex;

  ${applyFontStyles(FontTypes.REGULAR16, ColorTypes.SECONDARY_GRAY_500)}
`;
