import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: ${({ type }) => {
    if (type === 'square') {
      return '0.5rem';
    } else if (type === 'pill') {
      return '2.5rem';
    } else {
      return '0.5rem';
    }
  }};
  color: ${({ theme }) => theme.colors.gray100};
  background-color: ${({ theme }) => theme.colors.primary100};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary200};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary300};
  }
`;

const Button = ({
  className,
  children,
  link = '',
  ariaLabel,
  type = 'square',
}) => {
  const btn = (
    <StyledButton className={className} type={type}>
      {children}
    </StyledButton>
  );

  return link ? (
    <Link to={link} aria-label={ariaLabel}>
      {btn}
    </Link>
  ) : (
    btn
  );
};

export default Button;
