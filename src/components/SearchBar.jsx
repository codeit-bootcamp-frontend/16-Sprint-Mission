import styled from 'styled-components';

import searchIcon from '../assets/icon/ic_search.png';

const SearchBarWrapper = styled.div`
  width: calc(
    100% - 42px - 12px
  ); // 버튼크기 + padding 직접 계산 (변수 사용하는 방식으로 바꾸는 것이 좋아보임)
  position: relative;

  @media (min-width: 768px) {
    max-width: 242px;
    order: 1;
  }

  @media (min-width: 1200px) {
    max-width: 325px;
  }
`;

const StyledSearchBar = styled.input`
  width: 100%;
  height: 42px;
  padding-left: 44px;
  border: none;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray100};
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 9px;
  left: 16px;
  z-index: 10;
  vertical-align: bottom;
`;

const SearchBar = ({ value, onChange: handleChange }) => {
  return (
    <SearchBarWrapper>
      <SearchIcon src={searchIcon} alt="검색 아이콘" width={24} height={24} />
      <StyledSearchBar
        value={value}
        onChange={handleChange}
        placeholder="검색할 상품을 입력해주세요"
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
