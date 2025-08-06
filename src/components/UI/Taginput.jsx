import styled from 'styled-components';
import { useState } from 'react';

import { applyFontStyles } from '../../styles/mixins';
import { ColorTypes, FontTypes } from '../../styles/theme';
import XIcon from '../../assets/images/icons/IC_X.svg';

function TagInput({ tags, setTags }) {
  const [inputValue, setInputValue] = useState('');

  const handleTagChange = (e) => {
    if (e.key === 'Enter') {
      const trimmed = inputValue.trim();
      if (trimmed === '') return;

      const newTag = `#${trimmed}`;
      if (tags.includes(newTag)) return;

      setTags([...tags, newTag]);
      setInputValue('');
    }
  };

  const handleTagRemove = (removeTag) => {
    setTags(tags.filter((tag) => tag !== removeTag));
  };

  return (
    <StyledContainer>
      <label htmlFor="tag">태그</label>

      <StyledWrapper>
        <input
          id="tag"
          type="text"
          placeholder="태그를 입력해주세요"
          onKeyUp={handleTagChange}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <StyledTagList>
          {tags.map((tag) => (
            <StyledTagWrapper key={tag}>
              <span>{tag}</span>
              <img
                src={XIcon}
                alt="x"
                width={22}
                height={24}
                onClick={() => handleTagRemove(tag)}
              />
            </StyledTagWrapper>
          ))}
        </StyledTagList>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default TagInput;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
`;

export const StyledTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const StyledTagWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  max-width: 93px;
  width: fit-content;
  max-width: 100%;
  height: 36px;
  background-color: ${({ theme }) => theme.colors[ColorTypes.SECONDARY_GRAY_100]};
  border-radius: 26px;
  padding: 6px 12px;

  span {
    ${applyFontStyles(FontTypes.REGULAR16, ColorTypes.SECONDARY_GRAY_800)}
  }
`;
