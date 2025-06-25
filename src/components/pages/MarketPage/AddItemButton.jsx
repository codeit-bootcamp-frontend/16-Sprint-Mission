import { Link } from 'react-router-dom';
import styled from 'styled-components';

function AddItemButton() {
  return (
    <div>
      <Link to="/additem">
        <StButton>
          <div>상품 등록하기</div>
        </StButton>
      </Link>
    </div>
  );
}

export default AddItemButton;

const StButton = styled.button`
  width: 133px;
  height: 42px;
`;
