import styled from 'styled-components';
import Button from './Button';

const StyledLinkToItemsButton = styled(Button)`
  width: 240px;
  height: 48px;
  font-size: 1.125em;
`;

const LinkToItemsButton = ({ children }) => {
  return (
    <StyledLinkToItemsButton
      link={'/items'}
      ariaLabel={'중고 마켓 거래 리스트 보러가기'}
      type={'pill'}
    >
      {children}
    </StyledLinkToItemsButton>
  );
};

export default LinkToItemsButton;
