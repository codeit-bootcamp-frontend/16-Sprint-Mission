module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "jsx-a11y",
    "prettier",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  settings: {
    react: { version: "detect" },
  },
  rules: {
    // Prettier 문제를 ESLint 에러로 표시
    "prettier/prettier": "error",
    // 필요에 따라 아래에 커스텀 룰 추가
    // 'react/prop-types': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
