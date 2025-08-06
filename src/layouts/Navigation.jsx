import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LoginButton from '../components/LoginButton';
import Logo from '../components/Logo';
import Profile from '../components/Profile';
import { useAuth } from '../context/AuthProvider';
import { NAV_LIST } from '../data/navListsData';

const StyledNavigation = styled.nav`
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.gray200};
  background-color: #fff;
  z-index: 100;
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
    max-width: ${({ $isLandingPage }) => ($isLandingPage ? 1024 : 1520)}px;
    margin: 0 auto;
  }
`;

const StyledNavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  flex-grow: 1;
  height: 48px;
  padding-left: 8px;
  list-style: none;

  & > li {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray600};
  }
`;

const Navigation = ({ isLandingPage }) => {
  const { user, isAuthenticated } = useAuth();

  const navList = (
    <StyledNavList>
      {!isLandingPage &&
        NAV_LIST.map((e) => {
          return (
            <li key={e.id}>
              <Link to={e.link}>{e.name}</Link>
            </li>
          );
        })}
    </StyledNavList>
  );

  return (
    <StyledNavigation>
      <NavWrapper $isLandingPage={isLandingPage}>
        <Logo isClickable={true} />
        {!isLandingPage && navList}
        {isAuthenticated ? (
          <Profile user={user} />
        ) : (
          <LoginButton>로그인</LoginButton>
        )}
      </NavWrapper>
    </StyledNavigation>
  );
};

export default Navigation;
