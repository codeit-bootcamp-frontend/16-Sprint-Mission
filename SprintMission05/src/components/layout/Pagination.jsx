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
  &.active {
    background-color: #2f80ed;
    color: #f9fafb;
  }
`;

function Pagination({ currentPage, onPageChange, hasNextPage, totalPages }) {
  const PAGES_PER_GROUP = 5;

  const currentGroupStartPage =
    Math.floor((currentPage - 1) / PAGES_PER_GROUP) * PAGES_PER_GROUP + 1;

  const pageNumbersInGroup = [];
  for (let i = 0; i < PAGES_PER_GROUP; i++) {
    const pageNum = currentGroupStartPage + i;
    if (pageNum <= totalPages) {
      pageNumbersInGroup.push(pageNum);
    }
  }

  const handlePrevGroup = () => {
    const prevGroupLastPage = currentGroupStartPage - 1;
    if (prevGroupLastPage >= 1) {
      onPageChange(prevGroupLastPage);
    }
  };

  const handleNextGroup = () => {
    const nextGroupStartPage = currentGroupStartPage + PAGES_PER_GROUP;
    if (nextGroupStartPage <= totalPages) {
      onPageChange(nextGroupStartPage);
    }
  };

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={handlePrevGroup}
        disabled={currentGroupStartPage === 1}
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
        disabled={currentGroupStartPage + PAGES_PER_GROUP > totalPages}
      >
        &gt;
      </PaginationButton>
    </PaginationContainer>
  );
}

export default Pagination;
