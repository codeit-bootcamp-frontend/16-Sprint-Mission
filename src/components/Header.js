/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import iconLogo from "../assets/iconLogo.svg";
import userIcon from "../assets/userIcon.svg";
import styled from "@emotion/styled";
import useViewportWidth from "../hooks/useViewportWidth";
import { useEffect, useState } from "react";
import { BREAK_POINT } from "../style/BreakPoints";

function Header() {
  const width = useViewportWidth();
  const [navLogo, setNavLogo] = useState(logo);
  useEffect(() => {
    if (width > BREAK_POINT.md - 1) {
      setNavLogo(iconLogo);
    }
    if (width < BREAK_POINT.md) {
      setNavLogo(logo);
    }
  }, [width]);

  return (
    <HeaderContainer>
      <InnerContainer>
        <Link to="/items">
          <img src={navLogo} alt="logo" />
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
  justify-content: center;
  margin: 0 auto;
  height: 70px;
  padding: 0 16px;
  max-width: 376px;

  @media (min-width: ${BREAK_POINT.md}px) {
    max-width: 744px;
  }

  @media (min-width: ${BREAK_POINT.lg}px) {
    max-width: 1520px;
  }
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
