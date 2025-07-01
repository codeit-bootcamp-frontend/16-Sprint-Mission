/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import userIcon from "../assets/userIcon.svg";
import styled from "@emotion/styled";

function Header() {
  return (
    <HeaderContainer>
      <InnerContainer>
        <Link to="/items">
          <img src={logo} alt="logo" />
        </Link>
        <div css={category}>
          <Link to="/" css={linkStyle}>
            자유게시판
          </Link>
          <Link to="/" css={linkStyle}>
            중고마켓
          </Link>
        </div>
        <img src={userIcon} alt="userIcon" />
      </InnerContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  border-bottom: 1px solid #dfdfdf;
`;

const InnerContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  height: 70px;
  padding: 0 16px;
  max-width: 1520px;
`;

const category = css`
  display: flex;
  gap: 8px;
  flex: 1;
`;

const linkStyle = css`
  font-size: 16px;
  font-weight: 700;
  color: #4b5563;
  text-decoration: none;
`;
