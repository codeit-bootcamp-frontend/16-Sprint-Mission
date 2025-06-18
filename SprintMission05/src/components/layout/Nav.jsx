import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  color: var(--gray-600);
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  color: ${(props) => (props.active ? "var(--Blue-100)" : "var(--gray-600)")};
  &:hover {
    color: var(--Blue-200);
`;

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 경로
  const pathname = location.pathname;

  return (
    <NavList>
      <img src="/src/assets/Logo.jpg" alt="Logo" />
      <NavItem active={pathname === "/"} onClick={() => navigate("/")}>
        자유게시판
      </NavItem>
      <NavItem
        active={pathname === "/items"}
        onClick={() => navigate("/items")}
      >
        중고마켓
      </NavItem>
    </NavList>
  );
}
export default Nav;
