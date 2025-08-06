import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import InputField from '../../UI/InputField';
import ImageUpload from '../../UI/ImageUpload';
import TagInput from '../../UI/Taginput';
import useFormatNumber from '../../../hooks/useFormatNumber';
import { postProduct } from '../../../api/api';
import { ColorTypes } from '../../../styles/theme';

function AddItemPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, handlePriceChange] = useFormatNumber('');
  const [tags, setTags] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = name.trim() && description.trim() && price.replace(/,/g, '').length > 0 && tags.length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const productData = {
        name: name.trim(),
        description: description.trim(),
        price: parseInt(price.replace(/,/g, '')),
        tags: tags,
      };

      const response = await postProduct(productData);
      console.log('상품 등록 성공:', response);

      navigate('/items');
    } catch (error) {
      console.error('상품 등록 실패:', error);
      alert('상품 등록에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StyledContainer>
      <StyledHeaderSection>
        <h3>상품 등록하기</h3>
        <StyledButton
          type="button"
          disabled={!isValid || isSubmitting}
          onClick={handleSubmit}
        >
          {isSubmitting ? '등록 중...' : '등록'}
        </StyledButton>
      </StyledHeaderSection>

      <StyledFormSection>
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
      </StyledFormSection>
    </StyledContainer>
  );
}

export default AddItemPage;

const StyledContainer = styled.div`
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

const StyledHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 74px;
  height: 42px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors[ColorTypes.SECONDARY_GRAY_400] : theme.colors[ColorTypes.PRIMARY_100]};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors[ColorTypes.PRIMARY_200]};
  }
`;

const StyledFormSection = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1024px) {
    gap: 32px;
  }
`;
