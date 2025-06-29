import { NavLink, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { FontTypes, ColorTypes } from '../../styles/theme';
import { applyFontStyles } from '../../styles/mixins';
import logo from '../../assets/images/logo/logo.svg';
import textLogo from '../../assets/images/logo/textlogo.svg';
import profile from '../../assets/images/icons/ic_profile.png';

function Header() {
  const location = useLocation();
  const isMarketActive = location.pathname === '/items' || location.pathname === '/additem';

  return (
    <HeaderContainer>
      <HeaderLeft>
        <Link
          to="/"
          aria-label="홈으로 이동"
        >
          <TextLogo
            src={textLogo}
            alt="마켓로고"
          />
          <Imglogo
            src={logo}
            alt="마켓로고"
          />
        </Link>

        <nav>
          <Ul>
            <Li>
              <StNavLink to="/community">자유게시판</StNavLink>
            </Li>
            <Li>
              <StNavLink
                to="/items"
                $isActive={isMarketActive}
              >
                중고마켓
              </StNavLink>
            </Li>
          </Ul>
        </nav>
      </HeaderLeft>

      <Link to="/login">
        <img
          src={profile}
          alt="로그인"
        />
      </Link>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid #dfdfdf;
  padding: 0 ${({ theme }) => theme.spacing.mobile};

  @media (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing.tablet};
  }

  @media (min-width: 1200px) {
    padding: 0 ${({ theme }) => theme.spacing.desktop};
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
`;

const Li = styled.li`
  ${applyFontStyles(FontTypes.BOLD16, ColorTypes.SECONDARY_GRAY_600)};

  &:hover {
    color: ${({ theme }) => theme.colors[ColorTypes.PRIMARY_100]};
  }
`;

const StNavLink = styled(NavLink)`
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors[ColorTypes.PRIMARY_100] : theme.colors[ColorTypes.SECONDARY_GRAY_600]};

  &.active {
    color: ${({ theme }) => theme.colors[ColorTypes.PRIMARY_100]};
  }
`;

const TextLogo = styled.img`
  width: 81px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Imglogo = styled.img`
  width: 153px;
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;
