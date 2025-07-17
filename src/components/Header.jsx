import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import logoImg from '../assets/logo.png';
import moLogoImg from '../assets/mo_logo.png';
import profileImg from '../assets/profileIcon.png';

function Navigation() {
  const location = useLocation();
  return (
    <NavWrap>
      <Logo>
        <a href='/'>
          <picture>
            <source media='(max-width: 768px)' srcSet={moLogoImg} />
            <source media='(min-width: 767px)' srcSet={logoImg} />
            <img src={moLogoImg} alt='판다마켓' aria-hidden='true' />
          </picture>
        </a>
      </Logo>
      <Nav>
        <StyledLink to='/freeboard'>자유게시판</StyledLink>
        <StyledLink to='/items' $isActive={location.pathname === '/addItem'}>
          중고마켓
        </StyledLink>
      </Nav>
      <Profile>
        <a href='#'>
          <img src={profileImg} alt='프로필가기' />
        </a>
      </Profile>
    </NavWrap>
  );
}

const NavWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  height: 70px;
  width: 100%;
  padding: 0 16px;
  border-bottom: 1px solid #dfdfdf;
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
  @media screen and (min-width:768px){
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
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.$isActive ? '#3692ff' : '#4b5563')};
  font-weight: 600;
  font-size: 16px;
  flex-shrink: 0;
  img {
    vertical-align: middle;
  }
`;
export default Navigation;
