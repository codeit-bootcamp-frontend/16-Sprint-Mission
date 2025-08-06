import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { ColorTypes, FontTypes } from '../../styles/theme';
import { applyFontStyles } from '../../styles/mixins';

import PlusIcon from '../../assets/images/icons/ic_plus.svg';
import XIcon from '../../assets/images/icons/ic_X.svg';

function ImageUpload() {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file) {
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);

      if (previewUrl) {
        setError('*이미지 등록은 최대 1개까지 가능합니다.');
      }
      e.target.value = '';
      return;
    }
  };

  const handleImageRemove = () => {
    setPreviewUrl(null);
    setError('');
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <StyledContainer>
      <label>상품 이미지</label>

      <StyledWrapper>
        <StyledInput
          type="file"
          placeholder="이미지를 추가해주세요"
          accept="image/*"
          id="file-input"
          onChange={handleImageUpload}
        />
        <StyledImageWrapper>
          <StyledLabel htmlFor="file-input">
            <img
              src={PlusIcon}
              alt="plus"
              width={28}
              height={28}
            />
            이미지 등록
          </StyledLabel>
        </StyledImageWrapper>

        {previewUrl && (
          <StyledPreviewImage>
            <StyledXIcon
              src={XIcon}
              alt="x"
              width={20}
              height={20}
              onClick={handleImageRemove}
            />
            <StyledImage
              src={previewUrl}
              alt="샘플이미지"
            />
          </StyledPreviewImage>
        )}
      </StyledWrapper>

      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </StyledContainer>
  );
}

export default ImageUpload;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
`;

const StyledImageWrapper = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  overflow: hidden;
`;

const StyledLabel = styled.label`
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

const StyledPreviewImage = styled.div`
  position: relative;
`;

const StyledImage = styled.img`
  width: 168px;
  height: 168px;
  border-radius: 12px;
`;

const StyledXIcon = styled.img`
  position: absolute;
  top: 14px;
  right: 13px;
`;

const StyledErrorMessage = styled.span`
  ${applyFontStyles(FontTypes.REGULAR16, ColorTypes.ERROR)}
`;
