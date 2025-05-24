/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const activeLinkStyle = ({ isActive }) => {
    return isActive ? { color: "#3692FF" } : undefined;
  };

  return (
    <ul css={NavStyle}>
      <li>
        <NavLink to="/board" style={activeLinkStyle} css={NavLinkStyle}>
          자유게시판
        </NavLink>
      </li>
      <li>
        <NavLink to="/items" style={activeLinkStyle} css={NavLinkStyle}>
          중고마켓
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;

const NavStyle = css`
  display: flex;
`;

const NavLinkStyle = css`
  padding: 14px 8px;
  font-size: 16px;
  font-weight: 700;
  color: var(--gray600);

  @media (min-width: 600px) {
    padding: 14px 20px;
    font-size: 18px;
  }
`;
