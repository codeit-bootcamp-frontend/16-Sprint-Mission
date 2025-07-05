import styled from "styled-components";
import { Bold16 } from "../style/Font";

// import { logo1 } from "../../images/main-page/logo.svg";

const HeaderLeft_Style = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  gap: 8px;

  height: 100%;
  @media (min-width: 768px) {
    gap: 30px;
  }
`;

const LogoImg = styled.div`
  width: 81px;
  height: 40px;
  background-image: url("./images/main-page/logo.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 468px) {
    background-image: url("./images/main-page/logo.png");
    width: 153px;
    height: 51px;
  }
`;

const ResponsiveBold = styled(Bold16)`
  font-size: 18px;
  color: ${({ active }) => (active ? "#3692FF" : "inherit")};
  cursor: pointer;
`;

function HeaderLeft({ currentLocatiom }) {
  return (
    <HeaderLeft_Style>
      <LogoImg />
      <ResponsiveBold>자유게시판</ResponsiveBold>
      <ResponsiveBold active={currentLocatiom === "/items"}>
        중고마켓
      </ResponsiveBold>
    </HeaderLeft_Style>
  );
}
export default HeaderLeft;
