import { createGlobalStyle } from 'styled-components';

import { applyFontStyles } from './mixins';
import { ColorTypes, FontTypes } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: Pretendard, 'Noto Sans KR', sans-serif;
    ${applyFontStyles(FontTypes.BOLD20, ColorTypes.SECONDARY_GRAY_900)} 
    word-break: keep-all;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  ul, ol {
    list-style: none; 
  }

  img, svg {
    display: block; /* 인라인 요소의 하단 여백 제거 */
    max-width: 100%; /* 부모 너비에 맞춰 크기 조정 */
    height: auto; /* 이미지 비율 유지 */
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit; 
    line-height: inherit;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
