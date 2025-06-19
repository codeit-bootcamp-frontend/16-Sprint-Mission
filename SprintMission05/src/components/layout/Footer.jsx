import styled from "styled-components";

function Footer({ leftChild, centerChild, rightChild }) {
  return (
    <StyledFooter>
      <StyledContent>
        <div>{leftChild}</div>
        <div>{centerChild}</div>
        <div>{rightChild}</div>
      </StyledContent>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.div`
  background-color: var(--gray-900);
  color: var(--gray-200);
  height: 160px;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  padding: 32px;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 344px;
  padding: 0 16px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 24px;
    max-width: 696px;
  }

  @media (min-width: 1200px) {
    padding: 0 0;
    max-width: 1200px;
  }
`;
