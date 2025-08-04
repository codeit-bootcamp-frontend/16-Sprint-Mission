import { css, Theme } from "@emotion/react";

export const resetStyles = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    box-sizing: border-box;
    word-break: keep-all;
    outline: none;
  }

  html,
  body {
    font-family: ${theme.font.family};
    color: ${theme.colors.gray700};
    font-size: 16px;
    line-height: 1.4;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul,
  ol {
    list-style: none;
  }

  input,
  textarea {
    border: none;
    outline: none;

    &::placeholder {
      color: ${theme.colors.gray400};
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
