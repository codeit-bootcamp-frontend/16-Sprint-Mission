import styled from "styled-components";

function HighlightBox({ leftChild, rightChild }) {
  return (
    <StyledHighlightBox>
      <StyledContent>
        <div>{leftChild}</div>
        <div>{rightChild}</div>
      </StyledContent>
    </StyledHighlightBox>
  );
}

export default HighlightBox;

const StyledHighlightBox = styled.header`
  border-bottom: 1px solid #dfdfdf;
  background-color: #cfe5ff;
  width: 100%;
  padding: 200px 0 0;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 140%;
  color: var(--gray-700);
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 344px;
  padding: 0 16px;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0 24px;
    max-width: 696px;
  }

  @media (min-width: 1200px) {
    padding: 0 0;
    max-width: 1200px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
