import styled from "styled-components";
import searchIcon from "../assets/searchIcon.png";
const SearchInputWrapper = styled.div`
  position: relative;
  width: calc(100% - 42px);
  @media all and (min-width: 768px) {
    width: 242px;
    order: 1;
  }
  @media all and (min-width: 1024px) {
    width: 325px;
  }
`;
const SearchInputStyled = styled.input`
  width: calc(100% - 9px);
  height: 42px;
  border: 0;
  background-color: #f3f4f6;
  border-radius: 12px;
  padding-left: 34px;
  &:active {
    outline: 0;
  }
  @media all and (min-width: 768px) {
    width: 242px;
  }
  @media all and (min-width: 1024px) {
    width: 325px;
  }
`;
const SearchInputLabel = styled.label`
  display: block;
  background-image: url(${searchIcon});
  width: 16px;
  height: 16px;
  position: absolute;
  z-index: 10;
  background-size: cover;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
`;

function SearchInput({ handlerSearchItems }) {
  const onSearchItems = (e) => {
    if (e.key === "Enter") {
      handlerSearchItems(e.target.value);
    }
  };
  return (
    <SearchInputWrapper>
      <SearchInputLabel />
      <SearchInputStyled
        placeholder="검색할 상품을 입력해주세요"
        type="text"
        onKeyDown={(e) => onSearchItems(e)}
      />
    </SearchInputWrapper>
  );
}
export default SearchInput;
