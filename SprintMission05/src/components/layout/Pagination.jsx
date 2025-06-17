import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 45px 0;
`;

const PaginationButton = styled.button`
  border: 1px solid #e5e7eb;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 4px;
  background-color: #ffffff;
  color: #6b7280;
  font-size: 16px;
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: #2f80ed;
    color: #f9fafb;
  }
`;

function Pagination({ currentPage, onPageChange, hasNextPage, totalPages }) {
  const PAGES_PER_GROUP = 5; // 한 번에 보여줄 페이지 버튼 수

  // 현재 페이지가 속한 페이지 그룹의 시작 페이지 번호 계산
  const currentGroupStartPage =
    Math.floor((currentPage - 1) / PAGES_PER_GROUP) * PAGES_PER_GROUP + 1;

  // 현재 그룹에 보여줄 페이지 번호들
  const pageNumbersInGroup = [];
  for (let i = 0; i < PAGES_PER_GROUP; i++) {
    const pageNum = currentGroupStartPage + i;
    if (pageNum <= totalPages) {
      // 전체 페이지 수를 초과하지 않도록
      pageNumbersInGroup.push(pageNum);
    }
  }

  const handlePrevGroup = () => {
    // 이전 그룹의 마지막 페이지로 이동
    const prevGroupLastPage = currentGroupStartPage - 1;
    if (prevGroupLastPage >= 1) {
      onPageChange(prevGroupLastPage);
    }
  };

  const handleNextGroup = () => {
    // 다음 그룹의 첫 페이지로 이동
    const nextGroupStartPage = currentGroupStartPage + PAGES_PER_GROUP;
    if (nextGroupStartPage <= totalPages) {
      onPageChange(nextGroupStartPage);
    } else {
      // 다음 그룹의 첫 페이지가 totalPages를 초과하는 경우, totalPages로 이동 (선택 사항)
      // onPageChange(totalPages);
      // 혹은 단순히 더 이상 진행하지 않음
    }
  };

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={handlePrevGroup}
        disabled={currentGroupStartPage === 1} // 첫 그룹의 시작 페이지가 1이면 비활성화
      >
        &lt;
      </PaginationButton>

      {pageNumbersInGroup.map((number) => (
        <PaginationButton
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </PaginationButton>
      ))}

      <PaginationButton
        onClick={handleNextGroup}
        disabled={currentGroupStartPage + PAGES_PER_GROUP > totalPages} // 현재 그룹의 다음 시작 페이지가 totalPages를 초과하면 비활성화
      >
        &gt;
      </PaginationButton>
    </PaginationContainer>
  );
}

export default Pagination;
