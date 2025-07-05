import styled from "styled-components";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import { useLocation } from "react-router-dom";

const Header_Style = styled.div`
  position: fixed;
  height: 70px;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;

  max-width: 1200px;
  margin: 0 auto;

  background-color: white;

  padding: 15px;
`;

function Navbar() {
  const location = useLocation();

  return (
    <section className="Header">
      <Header_Style>
        <HeaderLeft currentLocatiom={location.pathname} />
        <HeaderRight />
      </Header_Style>
    </section>
  );
}
export default Navbar;
