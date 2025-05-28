import Nav from "./Nav";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  border-bottom: 1px solid #dfdfdf;
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
