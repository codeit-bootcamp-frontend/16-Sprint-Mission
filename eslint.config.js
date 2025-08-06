// eslint.config.js
import pluginJs from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  // 1. ESLint 기본 권장 규칙
  pluginJs.configs.recommended,

  // 2. Prettier 설정 (ESLint와 Prettier 충돌 방지 및 Prettier 규칙 적용)
  configPrettier,
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }], // Prettier 규칙 위반 시 에러 발생
    },
  },

  // 3. React 관련 설정
  {
    files: ['**/*.{js,jsx}'], // JavaScript 및 JSX 파일에만 적용
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    languageOptions: {
      ecmaVersion: 2021, // ECMAScript 버전 (ES2021)
      sourceType: 'module', // 모듈 사용
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // JSX 지원 활성화
        },
      },
      // 브라우저 및 Node.js 환경 전역 변수 설정
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: 'detect', // React 버전 자동 감지
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // React 17부터 JSX 변환이 자동으로 되므로 제거
      'react/prop-types': 'off', // JavaScript에서도 prop-types 사용 여부에 따라 설정 (여기서는 비활성화)
      'react/jsx-uses-react': 'off', // New JSX Transform 관련 설정
      'react/jsx-key': 'error', // 리스트 렌더링엔 항상 고유한 key 값 사용
      'react/destructuring-assignment': ['error', 'always'], // Props 전달은 비구조화 할당
      'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }], // ignoreRestSiblings: true는 객체 비구조화 할당에서 나머지가 사용되지 않아도 경고하지 않습니다.
      'react/jsx-uses-vars': 'error', // JSX에서 사용되는 변수를 사용된 것으로 간주
      'react/jsx-no-undef': 'error', // 정의되지 않은 JSX 컴포넌트 사용 방지
      'prefer-arrow-callback': 'error', // 콜백 함수는 화살표 함수로
      'func-names': ['error', 'as-needed'], // 필요한 경우에만 함수 이름 허용
    },
  },

  // 4. import/order 플러그인 설정
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@src/**', // 프로젝트 내 alias 설정 (예: @src/components)
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
