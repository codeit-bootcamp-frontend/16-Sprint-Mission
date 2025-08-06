import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/logo/logo_sm.svg';
import logoTypo from '../assets/logo/logo_typo.svg';

const StyledLogo = styled.img`
  aspect-ratio: 2/1;
  width: 100px;
  vertical-align: bottom;

  @media (min-width: 768px) {
    aspect-ratio: 3/1;
    width: 152px;
  }
`;

const Logo = ({ isClickable = false }) => {
  const result = (
    <picture>
      <source media="(max-width: 767px)" srcSet={logoTypo} />
      <source media="(min-width: 768px)" srcSet={logo} />
      <StyledLogo src={logo} alt="판다마켓 로고 이미지" height={'auto'} />
    </picture>
  );

  return isClickable ? <Link to="/">{result}</Link> : result;
};

export default Logo;
