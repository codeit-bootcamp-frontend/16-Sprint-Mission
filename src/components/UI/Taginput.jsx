import styled from 'styled-components';

import { applyFontStyles } from '../../styles/mixins';
import { ColorTypes, FontTypes } from '../../styles/theme';
import XIcon from '../../assets/images/icons/IC_X.svg';

function TagInput({ tags, setTags }) {
  const handleTagChange = (e) => {
    if (e.key === 'Enter') {
      const newTag = e.target.value.trim();
      if (newTag === '') return;
      if (tags.includes(newTag)) return;
      setTags([...tags, newTag]);
    }
  };

  const handleTagRemove = (removeTag) => {
    setTags(tags.filter((tag) => tag !== removeTag));
  };

  return (
    <Container>
      <label htmlFor="tag">태그</label>
      <Wrapper>
        <input
          id="tag"
          type="text"
          placeholder="태그를 입력해주세요"
          onKeyDown={handleTagChange}
        />
        <TagList>
          {tags.map((tag) => (
            <TagWrapper key={tag}>
              <span>{tag}</span>
              <img
                src={XIcon}
                alt="x"
                width={22}
                height={24}
                onClick={() => handleTagRemove(tag)}
              />
            </TagWrapper>
          ))}
        </TagList>
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

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TagWrapper = styled.div`
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
