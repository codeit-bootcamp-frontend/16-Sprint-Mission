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

function Pagination() {
  return (
    <PaginationContainer>
      <PaginationButton>&lt;</PaginationButton>
      <PaginationButton>1</PaginationButton>
      <PaginationButton>2</PaginationButton>
      <PaginationButton>3</PaginationButton>
      <PaginationButton>4</PaginationButton>
      <PaginationButton>5</PaginationButton>
      <PaginationButton>&gt;</PaginationButton>
    </PaginationContainer>
  );
}
export default Pagination;
