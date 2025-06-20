import styled from "styled-components";
import searchIcon from "../assets/searchIcon.png";
const SearchInputWrapper = styled.div`
  position: relative;
`;
const SearchInputStyled = styled.input`
  width: 288px;
  height: 42px;
  border: 0;
  background-color: #f3f4f6;
  border-radius: 12px;
  padding-left: 34px;
  &:active {
    outline: 0;
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
