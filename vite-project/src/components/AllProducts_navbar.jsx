import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;

  @media (min-width: 469px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 469px) {
    flex: 1;
  }
`;

const BottomRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;

  @media (min-width: 469px) {
    margin-left: auto;
    width: auto;
  }
`;

const Title = styled.h4`
  margin: 0;
`;

const SearchInput = styled.input`
  background-color: #f3f4f6;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  width: 100%;

  @media (min-width: 768px) {
    width: 325px;
  }
`;

const UploadButton = styled(Link)`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: #3692ff;
  color: white;
  cursor: pointer;
  margin-top: 8px;
  text-decoration: none;

  @media (min-width: 469px) {
    margin-top: 0;
    margin-left: auto;
  }
`;

const SortSelect = styled.select`
  padding: 8px;
  border-radius: 8px;
  display: none;

  @media (min-width: 469px) {
    display: block;
  }
`;

const SortImage = styled.img`
  display: inline-block;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 3px;

  @media (min-width: 469px) {
    display: none;
  }
`;

function AllProducts_navbar({ sortValue, onSearch, setSortValue }) {
  return (
    <NavContainer>
      <TopRow>
        <Title>전체 상품</Title>
        <UploadButton to="/additem">상품 등록하기</UploadButton>
      </TopRow>

      <BottomRow>
        <SearchInput
          type="text"
          placeholder="검색할 상품을 입력해주세요"
          onChange={(e) => onSearch(e.target.value)}
        />
        <SortSelect
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
        >
          <option value="recent">최신순</option>
          <option value="favorite">좋아요순</option>
        </SortSelect>
        <SortImage
          src="./images/main-page/ic_sort.png"
          alt="정렬 아이콘"
          onClick={() => {
            const next = sortValue === "recent" ? "favorite" : "recent";
            setSortValue(next);
          }}
        />
      </BottomRow>
    </NavContainer>
  );
}

export default AllProducts_navbar;
