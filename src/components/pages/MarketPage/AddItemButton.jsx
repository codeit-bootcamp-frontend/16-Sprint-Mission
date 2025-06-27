import { Link } from 'react-router-dom';
import styled from 'styled-components';

function AddItemButton() {
  return (
    <div>
      <Link to="/additem">
        <StyledButton>
          <div>상품 등록하기</div>
        </StyledButton>
      </Link>
    </div>
  );
}

export default AddItemButton;

const StyledButton = styled.button`
  width: 133px;
  height: 42px;
`;
