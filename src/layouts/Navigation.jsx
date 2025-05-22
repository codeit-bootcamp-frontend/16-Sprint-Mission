import styled from 'styled-components';
import logoTypo from '../assets/logo/logo_typo.svg';
import logo from '../assets/logo/logo_sm.svg';
import LoginButton from '../components/LoginButton';
import { Link } from 'react-router-dom';

const StyledNavigation = styled.nav`
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.gray200};
  background-color: #fff;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;

  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
  }

  @media (min-width: 1200px) {
    max-width: 1024px;
    margin: 0 auto;
  }
`;

const Logo = styled.img`
  aspect-ratio: 2/1;
  width: 100px;

  @media (min-width: 768px) {
    aspect-ratio: 3/1;
    width: 152px;
  }
`;

const Navigation = ({ isLandingPage }) => {
  return (
    <StyledNavigation>
      <NavWrapper>
        <Link to="/">
          <picture>
            <source media="(max-width: 767px)" srcSet={logoTypo} />
            <source media="(min-width: 768px)" srcSet={logo} />
            <Logo src={logo} alt="판다마켓 로고 이미지" height={'auto'} />
          </picture>
        </Link>
        {!isLandingPage && 'nav_list'}
        <LoginButton>로그인</LoginButton>
      </NavWrapper>
    </StyledNavigation>
  );
};

export default Navigation;
