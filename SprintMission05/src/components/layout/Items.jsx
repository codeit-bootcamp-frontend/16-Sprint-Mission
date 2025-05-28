import Header from "./Header";
import Main from "./Main";
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
      <Main />
    </>
  );
}

export default Items;
