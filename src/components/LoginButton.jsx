import styled from 'styled-components';

import Button from './Button';

const StyledLoginButton = styled(Button)`
  width: 128px;
  height: 48px;
  font-size: 1em;
`;

const LoginButton = ({ children }) => {
  return (
    <StyledLoginButton
      link={'/login'}
      aria-label={'로그인 버튼'}
      type={'square'}
    >
      {children}
    </StyledLoginButton>
  );
};

export default LoginButton;
