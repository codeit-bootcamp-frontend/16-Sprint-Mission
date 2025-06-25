import styled from 'styled-components';

import XIcon from '../../../assets/images/icons/ic_X.svg';
import { applyFontStyles } from '../../../styles/mixins';
import { FontTypes, ColorTypes } from '../../../styles/theme';
import InputField from '../../UI/InputField';
import ImageUpload from '../../UI/ImageUpload';

function AddItemPage() {
  return (
    <Container>
      <HeaderSection>
        <h3>상품 등록하기</h3>
        <button type="submit">상품 등록</button>
      </HeaderSection>

      <FormSection>
        <ImageUpload />
        <InputField
          label="상품 소개"
          type="text"
          isTextArea={true}
        />
        <InputField
          label="판매 가격"
          type="number"
          isTextArea={false}
        />
        <InputField
          label="태그"
          type="text"
          isTextArea={false}
        />
        <img
          src={XIcon}
          alt="x"
          width={22}
          height={24}
        />
      </FormSection>
    </Container>
  );
}

export default AddItemPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
  padding: 0 ${({ theme }) => theme.spacing.mobile};
  margin-top: 30px;

  @media (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing.tablet};
  }

  @media (min-width: 1024px) {
    padding: 0 ${({ theme }) => theme.spacing.desktop};
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1024px) {
    gap: 32px;
  }
`;

const Label = styled.label`
  ${applyFontStyles(FontTypes.BOLD18, ColorTypes.SECONDARY_GRAY_800)}
`;
