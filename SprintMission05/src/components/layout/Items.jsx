import Header from "./Header";
import List from "./List";
import { createGlobalStyle } from "styled-components";

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
      <Header />
      <List />
    </>
  );
}

export default Items;
