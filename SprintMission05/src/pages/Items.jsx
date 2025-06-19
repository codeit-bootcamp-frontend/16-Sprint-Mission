import { createGlobalStyle } from "styled-components";
import List from "../components/layout/List";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

function Items() {
  return (
    <>
      <GlobalStyle />
      <Header
        leftChild={
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="/src/assets/Logo.jpg" alt="Logo" /> <Nav />
          </div>
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
