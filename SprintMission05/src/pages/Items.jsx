import Header from "../components/common/Header";
import { createGlobalStyle } from "styled-components";
import List from "../components/layout/List";

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
