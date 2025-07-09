// TypeScript, React, Tailwind CSS 프로젝트를 위한 통합 린팅 규칙 설정

// ------------------------
// 필요한 플러그인 및 설정 import
// ------------------------
import js from "@eslint/js"; // 기본 JavaScript 규칙
import reactHooks from "eslint-plugin-react-hooks"; // React Hooks 규칙
import reactRefresh from "eslint-plugin-react-refresh"; // React Refresh 기능 지원
import globals from "globals"; // 전역 변수 설정
import tseslint from "typescript-eslint"; // TypeScript 지원
import prettier from "eslint-plugin-prettier"; // Prettier 통합
import react from "eslint-plugin-react"; // React 규칙
import jsxA11y from "eslint-plugin-jsx-a11y"; // 접근성 규칙
import importPlugin from "eslint-plugin-import"; // import/export 규칙
import tailwindcss from "eslint-plugin-tailwindcss"; // Tailwind CSS 규칙

export default tseslint.config(
  // 빌드 결과물 폴더 무시
  { ignores: ["dist"] },
  {
    // TypeScript와 TSX 파일만 린팅 대상으로 지정
    files: ["**/*.{js,jsx,ts,tsx}"], // 기존: ['**/*.{ts,tsx}']

    // ------------------------
    // 언어 및 파서 설정
    // ------------------------
    languageOptions: {
      // TypeScript 파서 사용
      parser: tseslint.parser,
      // 최신 ECMAScript 문법 지원
      ecmaVersion: "latest",
      // ES 모듈 시스템 사용
      sourceType: "module",
      globals: {
        // 브라우저 전역 변수 허용
        ...globals.browser,
        // React를 전역 변수로 설정 (읽기 전용)
        React: "readonly",
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          // JSX 문법 활성화
          jsx: true,
        },
      },
    },

    // ------------------------
    // 프로젝트 설정
    // ------------------------
    settings: {
      // React 설정
      react: {
        // React 버전 자동 감지
        version: "18.2",
        // 새로운 JSX 변환 사용
        runtime: "automatic",
      },
      // import 경로 해석 설정
      "import/resolver": {
        node: {
          // 자동 확장자 처리
          extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
        },
      },
    },

    // ------------------------
    // 사용할 플러그인 설정
    // ------------------------
    plugins: {
      "react-hooks": reactHooks, // React Hooks 규칙
      "react-refresh": reactRefresh, // Fast Refresh 지원
      prettier: prettier, // 코드 포맷팅
      react: react, // React 규칙
      "jsx-a11y": jsxA11y, // 접근성 검사
      import: importPlugin, // import 순서 및 규칙
      tailwindcss: tailwindcss, // Tailwind CSS 규칙
    },

    // ------------------------
    // 상세 린팅 규칙
    // ------------------------
    rules: {
      // JavaScript 추천 규칙 적용
      ...js.configs.recommended.rules,
      // React Hooks 추천 규칙 적용
      ...reactHooks.configs.recommended.rules,

      // React 17+ 이상에서는 React import 불필요
      "react/react-in-jsx-scope": "off",

      // Prettier 규칙 위반시 에러 표시
      "prettier/prettier": "error",

      // 화살표 함수 스타일 제한 해제
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",

      // target="_blank" 사용시 보안 경고 비활성화
      "react/jsx-no-target-blank": "off",

      // Fast Refresh 관련 설정
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // TypeScript 사용하므로 기본 미사용 변수 규칙 비활성화
      "no-unused-vars": "off",

      // TypeScript 미사용 변수 규칙 설정
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^_", // '_'로 시작하는 변수 무시
          argsIgnorePattern: "^_", // '_'로 시작하는 매개변수 무시
          ignoreRestSiblings: true, // 구조분해할당의 나머지 변수 무시
        },
      ],

      // 일치 연산자 강제 (==, != 대신 ===, !== 사용)
      eqeqeq: ["error", "always"],

      // Tailwind CSS 관련 규칙
      "tailwindcss/classnames-order": "warn", // 클래스명 순서 경고
      "tailwindcss/no-custom-classname": "off", // 커스텀 클래스명 허용
    },
  }
);
