/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      /* CSS Reset */
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html,
      body {
        width: 100%;
        height: 100%;
        font-family: "Noto Sans KR", sans-serif;
        background-color: #fff;
        color: #1f2937;
        font-size: 14px;
        font-weight: 500;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      ul,
      ol {
        list-style: none;
      }

      button {
        border: none;
        background: none;
        cursor: pointer;
      }

      img {
        max-width: 100%;
        display: block;
        border-radius: 16px;
        object-fit: cover;
      }
    `}
  />
);

export default GlobalStyle;
