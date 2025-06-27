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
    <StyledHeaderContainer>
      <StyledHeaderLeft>
        <Link
          to="/"
          aria-label="홈으로 이동"
        >
          <StyledTextLogo
            src={textLogo}
            alt="마켓로고"
          />
          <StyledImglogo
            src={logo}
            alt="마켓로고"
          />
        </Link>

        <nav>
          <StyledUl>
            <StyledLi>
              <StyledNavLink to="/community">자유게시판</StyledNavLink>
            </StyledLi>
            <StyledLi>
              <StyledNavLink
                to="/items"
                $isActive={isMarketActive}
              >
                중고마켓
              </StyledNavLink>
            </StyledLi>
          </StyledUl>
        </nav>
      </StyledHeaderLeft>

      <Link to="/login">
        <img
          src={profile}
          alt="로그인"
        />
      </Link>
    </StyledHeaderContainer>
  );
}

export default Header;

const StyledHeaderContainer = styled.header`
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

const StyledHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
`;

const StyledLi = styled.li`
  ${applyFontStyles(FontTypes.BOLD16, ColorTypes.SECONDARY_GRAY_600)};

  &:hover {
    color: ${({ theme }) => theme.colors[ColorTypes.PRIMARY_100]};
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors[ColorTypes.PRIMARY_100] : theme.colors[ColorTypes.SECONDARY_GRAY_600]};

  &.active {
    color: ${({ theme }) => theme.colors[ColorTypes.PRIMARY_100]};
  }
`;

const StyledTextLogo = styled.img`
  width: 81px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledImglogo = styled.img`
  width: 153px;
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;
