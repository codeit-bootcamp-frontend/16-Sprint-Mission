import styled from "styled-components";

function FeatureSection({ leftChild, rightChild, align = "left" }) {
  return (
    <StyledWrapper>
      <StyledContent $align={align}>
        <TextBlock $align={align}>{leftChild}</TextBlock>
        <TextBlock $align={align}>{rightChild}</TextBlock>
      </StyledContent>
    </StyledWrapper>
  );
}

export default FeatureSection;

const StyledWrapper = styled.header`
  border: 1px solid #fcfcfc;
  margin: 138px auto;
  width: 988px;
`;

const StyledContent = styled.div`
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    gap: 64px;
    flex-direction: row;
  }
`;

const TextBlock = styled.div`
  text-align: ${({ $align }) => ($align === "right" ? "right" : "left")};
`;
