import { createGlobalStyle } from "styled-components";
import List from "../components/layout/List";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import { Link } from "react-router-dom";

function Items() {
  return (
    <>
      <GlobalStyle />
      <Header
        leftChild={
          <Link to="/">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src="/src/assets/Logo.jpg" alt="Logo" /> <Nav />
            </div>
          </Link>
        }
        rightChild={
          <img src="/src/assets/ProfileIcon.jpg" alt="Profile Icon" />
        }
      />
      <List />
    </>
  );
}

export default Items;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;
