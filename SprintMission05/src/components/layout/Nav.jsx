import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  padding: 21px 15px;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  color: #4b5563;
  font-weight: 700;
  font-size: 18px;
`;

function Nav() {
  return (
    <NavList>
      <img src="/src/assets/Logo.jpg" alt="Logo" />
      <NavItem>자유게시판</NavItem>
      <NavItem>중고마켓</NavItem>
    </NavList>
  );
}
export default Nav;
