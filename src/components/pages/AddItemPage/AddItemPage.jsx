import styled from 'styled-components';
import { useState } from 'react';

import InputField from '../../UI/InputField';
import ImageUpload from '../../UI/ImageUpload';
import TagInput from '../../UI/Taginput';
import useFormatNumber from '../../../hooks/useFormatNumber';
import { ColorTypes } from '../../../styles/theme';

function AddItemPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, handlePriceChange] = useFormatNumber('');
  const [tags, setTags] = useState([]);

  const isValid = name.trim() && description.trim() && price.trim() && tags.length > 0;

  return (
    <Container>
      <HeaderSection>
        <h3>상품 등록하기</h3>
        <StButton
          type="submit"
          disabled={isValid}
        >
          등록
        </StButton>
      </HeaderSection>

      <FormSection>
        <ImageUpload />

        <InputField
          label="상품명"
          type="text"
          placeholder="상품명을 입력해주세요"
          isTextArea={false}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          label="상품 소개"
          type="text"
          placeholder="상품 소개를 입력해주세요"
          isTextArea={true}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputField
          label="판매 가격"
          type="text"
          placeholder="판매 가격을 입력해주세요"
          isTextArea={false}
          value={price}
          onChange={handlePriceChange}
        />
        <TagInput
          tags={tags}
          setTags={setTags}
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
  margin: 30px auto 60px;

  @media (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing.tablet};
  }

  @media (min-width: 1024px) {
    max-width: 1200px;
    padding: 0 ${({ theme }) => theme.spacing.desktop};
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StButton = styled.button`
  width: 74px;
  height: 42px;
  background-color: ${({ theme }) => theme.colors[ColorTypes.SECONDARY_GRAY_400]};

  &:disabled {
    background-color: ${({ theme }) => theme.colors[ColorTypes.PRIMARY_100]};
  }
`;

const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1024px) {
    gap: 32px;
  }
`;
