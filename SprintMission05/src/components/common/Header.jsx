import Nav from "../layout/Nav";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px 
  border-bottom: 1px solid #dfdfdf;
  
  @media (min-width: 768px) {
    padding: 0 24px;
  }

  @media (min-width: 1200px) {
    padding: 0 0;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Nav />
      <img src="/src/assets/ProfileIcon.jpg" alt="Profile Icon" />
    </HeaderWrapper>
  );
}

export default Header;
