import styled from 'styled-components';

import { ColorTypes, FontTypes } from '../../styles/theme';
import { applyFontStyles } from '../../styles/mixins';
import search from '../../assets/images/icons/ic_search.svg';

function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <SearchBarContainer>
      <InputWrapper>
        <StInput
          type="text"
          placeholder="검색할 상품을 입력해주세요"
          onChange={handleChange}
        />
        <StSearchIcon
          src={search}
          alt="검색 아이콘"
        />
      </InputWrapper>
    </SearchBarContainer>
  );
}

export default SearchBar;

const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  min-width: 288px;
  height: 42px;

  @media (min-width: 768px) {
    width: 242px;
    flex-grow: 1;
  }

  @media (min-width: 1024px) {
    width: 325px;
  }
`;

const StInput = styled.input`
  width: 100%;
  border-radius: 12px;
  padding: 9px 0px 9px 44px;
  ${applyFontStyles(FontTypes.REGULAR16, ColorTypes.SECONDARY_GRAY_800)}
  background-color: ${({ theme }) => theme.colors[ColorTypes.SECONDARY_WHITE]};

  &::placeholder {
    ${applyFontStyles(FontTypes.REGULAR16, ColorTypes.SECONDARY_GRAY_400)}
  }
`;

const StSearchIcon = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 9px;
  left: 20px;
`;
