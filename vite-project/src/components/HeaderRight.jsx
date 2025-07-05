import styled from "styled-components";

const HeaderRight_Style = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  height: 100%;
`;

const HeaderProfileImg_Style = styled.img`
  width: 40px;
  height: 40px;
  padding: 15px;
`;

function HeaderRight() {
  return (
    <HeaderRight_Style>
      <img src="./images/main-page/Frame 2609463.png" />
    </HeaderRight_Style>
  );
}
export default HeaderRight;
