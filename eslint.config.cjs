// eslint.config.cjs

const globals = require('globals');

module.exports = [
  {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'next/core-web-vitals',
    ],
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          project: './tsconfig.json',
          sourceType: 'module',
          ecmaVersion: 'latest',
          ecmaFeatures: { jsx: true },
        },
      },
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'import', 'prettier'],
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    rules: {
      // var 금지
      'no-var': 'warn',
      // 불필요한 세미콜론 사용 시 에러 표시
      'no-extra-semi': 'error',
      // jsx 파일 확장자 .jx, .jsx, .ts, .tsx 허용
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      // react hooks의 의존성배열이 충분하지 않을 때 경고 표시
      'react-hooks/exhaustive-deps': ['warn'],
      // 컴포넌트 이름은 PascalCase로
      'react/jsx-pascal-case': 'warn',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react/react-in-jsx-scope': 'off',
      // import 정렬 규칙 (가독성, 일관성 위해)
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
              pattern: '@src/**', // alias 사용 시 경로 맞게 변경
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      semi: ['error', 'never'],
    },
  },
];
