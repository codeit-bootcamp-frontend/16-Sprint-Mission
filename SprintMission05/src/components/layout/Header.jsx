import styled from "styled-components";

function Header({ leftChild, rightChild }) {
  return (
    <StyledHeader>
      <StyledContent>
        <div>{leftChild}</div>
        <div>{rightChild}</div>
      </StyledContent>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  border-bottom: 1px solid #dfdfdf;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 344px;
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 24px;
    max-width: 696px;
  }

  @media (min-width: 1200px) {
    padding: 0 0;
    max-width: 1200px;
  }
`;
