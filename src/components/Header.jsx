import styled from "styled-components";
import logoImg from "../assets/logo.png";
import moLogoImg from "../assets/mo_logo.png";
import profileImg from "../assets/profileIcon.png";
import { Link } from "react-router-dom";

const NavWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  height: 70px;
  width: 100%;
  padding: 0 16px;
  border-bottom: 1px solid #dfdfdf;
  a {
    text-decoration: none;
    color: #4b5563;
    font-weight: 600;
    font-size: 16px;
    flex-shrink: 0;
    img {
      vertical-align: middle;
    }
  }
`;
const Nav = styled.div`
  display: flex;
  gap: 30px;
  height: 100%;
  align-items: center;
`;
const Logo = styled.div`
  width: 81px;
  transition: width .1s;
  img {
    width: 100%;
  }
  @media all and (min-width:768px){
    width: 153px;
  }
}  
`;
const Profile = styled.div`
  margin-left: auto;
  width: 40px;
  height: 40px;
  img {
    width: 100%;
  l}
`;

function Navigation() {
  return (
    <NavWrap>
      <Logo>
        <a href="/">
          <picture>
            <source media="(max-width: 768px)" srcSet={moLogoImg} />
            <source media="(min-width: 767px)" srcSet={logoImg} />
            <img src={moLogoImg} alt="판다마켓" aria-hidden="true" />
          </picture>
        </a>
      </Logo>
      <Nav>
        <Link to="/freeboard">자유게시판</Link>
        <Link to="/items">중고마켓</Link>
      </Nav>
      <Profile>
        <a href="#">
          <img src={profileImg} alt="프로필가기" />
        </a>
      </Profile>
    </NavWrap>
  );
}
export default Navigation;
