import { useEffect, useState } from 'react';
import { useMemo } from 'react';

import styled from 'styled-components';

import closeIcon from '../assets/closeBtn.png';
import uploadIcon from '../assets/imageUpload.svg';
import Tag from '../components/Tag';
import { formatNumberWithCommas } from '../utils/formatNumberWithCommas';

function AddItem() {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (imagePreview) URL.revokeObjectURL(imagePreview);

    if (file?.type.startsWith('image/')) {
      const objectUrl = URL.createObjectURL(file);
      setImageFile(file);
      setImagePreview(objectUrl);
    } else {
      setImageFile(null);
      setImagePreview('');
      if (file) alert('이미지 파일만 선택해주세요.');
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview('');
  };
  const parsePriceHandler = e => {
    const inputValue = e.target.value;
    // 숫자 이외의 문자는 제거
    const onlyNumbers = inputValue.replace(/[^\d]/g, '');
    // 숫자가 없으면 빈 값 처리
    if (onlyNumbers === '') {
      setPrice('');
      return;
    }

    // 쉼표 포맷 적용
    const formatted = formatNumberWithCommas(onlyNumbers);
    setPrice(formatted);
  };

  const addTag = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newTag = e.target.value.trim();
      if (!newTag || tags.includes(newTag)) return (e.target.value = '');
      setTags(prev => [...prev, newTag]);
      e.target.value = '';
    }
  };

  const removeTag = index => {
    setTags(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isFormValid) {
      console.log({ name, description, price, tags, imageFile });
    }
  };
  const isFormValid = useMemo(() => {
    return name && description && price && tags.length > 0;
  }, [name, description, price, tags]);
  return (
    <AddItemContainer>
      <StForm onSubmit={handleSubmit}>
        <Header>
          <Title>상품 등록하기</Title>
          <SubmitButton type='submit' disabled={!isFormValid}>
            등록
          </SubmitButton>
        </Header>

        <Field>
          <Label>상품 이미지</Label>
          <FileInputGroup>
            <FileLabel htmlFor='image-upload'>
              파일 첨부
              <img src={uploadIcon} alt='업로드 아이콘' />
            </FileLabel>
            <HiddenInput
              id='image-upload'
              type='file'
              accept='image/*'
              onChange={handleImageChange}
            />

            {imagePreview && (
              <Preview>
                <PreviewImage src={imagePreview} alt='미리보기' />
                <CloseButton src={closeIcon} alt='닫기' onClick={removeImage} />
                <WarningText>
                  * 이미지 등록은 최대 1개까지 가능합니다.
                </WarningText>
              </Preview>
            )}
          </FileInputGroup>
        </Field>

        <Field>
          <Label>상품명</Label>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='상품명을 입력해주세요'
          />
        </Field>

        <Field>
          <Label>상품소개</Label>
          <Textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder='상품 소개를 입력해주세요'
          />
        </Field>

        <Field>
          <Label>판매가격</Label>
          <Input
            type='text'
            value={price}
            onChange={parsePriceHandler}
            placeholder='가격을 입력하세요'
          />
        </Field>

        <Field>
          <Label>태그</Label>
          <Input
            onKeyUp={addTag}
            placeholder='태그를 입력 후 Enter를 눌러주세요'
          />
          <TagList>
            {tags.map((tag, i) => (
              <Tag key={i} id={i} deleteTagHandler={removeTag}>
                {tag}
              </Tag>
            ))}
          </TagList>
        </Field>
      </StForm>
    </AddItemContainer>
  );
}

const AddItemContainer = styled.div`
  padding: 24px 15px;
  max-width: 1200px;
  margin: 0 auto;
`;
const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;
const SubmitButton = styled.button`
  width: 74px;
  height: 42px;
  border-radius: 8px;
  background-color: #3692ff;
  color: #fff;
  font-size: 16px;
  border: none;
  &:disabled {
    background-color: #9ca3af;
  }
`;
const Field = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled(Title)`
  font-size: 18px;
  margin-bottom: 16px;
`;
const Input = styled.input`
  height: 56px;
  padding-left: 24px;
  border-radius: 12px;
  background-color: #f3f4f6;
  &::placeholder {
    color: #9ca3af;
  }
`;
const Textarea = styled.textarea`
  height: 282px;
  padding: 16px 24px;
  border-radius: 12px;
  background-color: #f3f4f6;
  resize: none;
  border: none;
  &::placeholder {
    color: #9ca3af;
  }
`;
const FileInputGroup = styled.div`
  display: flex;
  gap: 10px;
`;
const FileLabel = styled.label`
  width: 168px;
  height: 168px;
  background-color: #f3f4f6;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0;
  flex-shrink: 0;
  &:hover {
    background-color: rgb(233, 233, 233);
  }
`;
const HiddenInput = styled.input`
  display: none;
`;
const Preview = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const PreviewImage = styled.img`
  width: 168px;
  height: 168px;
  border-radius: 12px;
  object-fit: cover;
  aspect-ratio: 1 / 1;
`;
const CloseButton = styled.img`
  position: absolute;
  right: 0;
  width: 22px;
  height: 24px;
  cursor: pointer;
`;
const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 14px;
`;
const WarningText = styled.span`
  color: #f74747;
  font-size: 12px;
`;

export default AddItem;
