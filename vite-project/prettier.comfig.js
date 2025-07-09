// prettier.config.js

/** @type {import("prettier").Config} */
export default {
  // ------------------------
  // 기본 포맷팅 설정
  // ------------------------

  // 한 줄의 최대 길이 설정 (기본값: 80)
  printWidth: 80,

  // 들여쓰기 시 사용할 공백 수 (기본값: 2)
  tabWidth: 2,

  // 들여쓰기에 탭 문자 사용 여부
  useTabs: false,

  // 문장 끝 세미콜론 사용 여부
  semi: true,

  // ------------------------
  // 따옴표 관련 설정
  // ------------------------

  // 문자열에 작은따옴표 사용 여부
  singleQuote: true,

  // 객체 속성에 따옴표 추가 방식
  quoteProps: "as-needed",

  // JSX에서 작은따옴표 사용 여부
  jsxSingleQuote: true,

  // ------------------------
  // 쉼표 및 괄호 설정
  // ------------------------

  // 후행 쉼표 설정
  trailingComma: "es5",

  // 객체 중괄호 주변 공백 여부
  bracketSpacing: true,

  // JSX 닫는 괄호 줄 위치 설정
  bracketSameLine: false,

  // 화살표 함수 매개변수 괄호 사용 방식
  arrowParens: "always",

  // ------------------------
  // 특수 포맷팅 설정
  // ------------------------

  // 줄 끝 문자 설정
  endOfLine: "lf",

  // 마크다운 줄바꿈 방식
  proseWrap: "always",

  // HTML 공백 처리 방식
  htmlWhitespaceSensitivity: "strict",

  // ------------------------
  // 플러그인 설정
  // ------------------------
};
