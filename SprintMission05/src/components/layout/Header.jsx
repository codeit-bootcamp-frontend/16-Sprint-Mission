import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 344px
  padding: 0 16px 
  border-bottom: 1px solid #dfdfdf;
  
  @media (min-width: 768px) {
    padding: 0 24px;
    max-width: 696px
  }

  @media (min-width: 1200px) {
    padding: 0 0;
    max-width: 1200px
  }
`;

function Header({ leftChild, rightChild }) {
  return (
    <HeaderWrapper>
      <div>{leftChild}</div>
      <div>{rightChild}</div>
    </HeaderWrapper>
  );
}

export default Header;
