import PlusIcon from '../../assets/images/icons/ic_plus.svg';
import styled from 'styled-components';
import { ColorTypes, FontTypes } from '../../styles/theme';
import { applyFontStyles } from '../../styles/mixins';

function ImageUpload() {
  return (
    <Container>
      <label>상품 이미지</label>
      <Wrapper>
        <StInput
          type="file"
          placeholder="이미지를 추가해주세요"
          accept="image/*"
          id="file-input"
        />
        <StLabel htmlFor="file-input">
          <img
            src={PlusIcon}
            alt="plus"
            width={28}
            height={28}
          />
          이미지 등록
        </StLabel>
      </Wrapper>
    </Container>
  );
}

export default ImageUpload;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Wrapper = styled.div`
  position: relative;
`;

const StInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  overflow: hidden;
`;

const StLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  width: 168px;
  height: 168px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors[ColorTypes.SECONDARY_GRAY_100]};
  ${applyFontStyles(FontTypes.REGULAR16, ColorTypes.SECONDARY_GRAY_400)}
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors[ColorTypes.SECONDARY_GRAY_200]};
  }
`;
