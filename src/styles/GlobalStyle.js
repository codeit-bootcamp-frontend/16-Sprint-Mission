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
    display: flex;
    align-items: center;
    justify-content: center;
    ${applyFontStyles(FontTypes.SEMIBOLD16, ColorTypes.SECONDARY_WHITE)};
    background-color: ${({ theme }) => theme.colors[ColorTypes.PRIMARY_100]};
    border-radius: 8px;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      background-color: ${ColorTypes.PRIMARY_200};
    }
  }

  label {
    ${applyFontStyles(FontTypes.BOLD18, ColorTypes.SECONDARY_GRAY_800)}
  }

  input, textarea {
    ${applyFontStyles(FontTypes.REGULAR16, ColorTypes.SECONDARY_GRAY_800)}
    background-color: ${({ theme }) => theme.colors[ColorTypes.SECONDARY_GRAY_100]};
    border-radius: 12px;
    padding: 16px 24px 14px;

    &::placeholder {
      ${applyFontStyles(FontTypes.REGULAR16, ColorTypes.SECONDARY_GRAY_400)}
    }
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default GlobalStyle;
