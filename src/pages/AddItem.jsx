import styled from 'styled-components';

function AddItem() {
  return (
    <AddItemWrapper>
      <AddItemHeader>
        <Title>상품 등록하기</Title>
        <AddBtn>등록</AddBtn>
      </AddItemHeader>
    </AddItemWrapper>
  );
}
const AddItemWrapper = styled.div`
  padding: 24px 15px;
`;
const AddItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;
const AddBtn = styled.button`
  width: 74px;
  height: 42px;
  border-radius: 8px;
  color: #fff;
  background-color: #9ca3af;
  border: 0;
  font-size: 16px;
`;
export default AddItem;
