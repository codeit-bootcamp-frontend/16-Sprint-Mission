import styled from 'styled-components';

import { applyFontStyles } from '../../styles/mixins';
import { ColorTypes, FontTypes } from '../../styles/theme';
import XIcon from '../../assets/images/icons/IC_X.svg';

function TagInput() {
  return (
    <Container>
      <label htmlFor="tag">태그</label>
      <Wrapper>
        <input
          id="tag"
          type="text"
          placeholder="태그를 입력해주세요"
        />
        <TagWrapper>
          <span>#태그</span>
          <img
            src={XIcon}
            alt="x"
            width={22}
            height={24}
          />
        </TagWrapper>
      </Wrapper>
    </Container>
  );
}

export default TagInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
`;

const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  width: 93px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors[ColorTypes.SECONDARY_GRAY_100]};
  border-radius: 26px;
  padding: 6px 12px;

  span {
    ${applyFontStyles(FontTypes.REGULAR16, ColorTypes.SECONDARY_GRAY_800)}
  }
`;
