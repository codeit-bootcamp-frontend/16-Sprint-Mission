import styled from 'styled-components';
import LoginButton from '../components/LoginButton';
import Logo from '../components/Logo';

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

const Navigation = ({ isLandingPage }) => {
  return (
    <StyledNavigation>
      <NavWrapper>
        <Logo isClickable={true} />
        {!isLandingPage && 'nav_list'}
        <LoginButton>로그인</LoginButton>
      </NavWrapper>
    </StyledNavigation>
  );
};

export default Navigation;
