module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-scss'],
  rules: {
    // Prettier 포맷팅 충돌 방지
    'prettier/prettier': true,

    // 미디어쿼리 표기법 (e.g. @media (max-width: 600px))
    'media-feature-range-notation': 'prefix',

    // BEM + kebab-case 강제
    'selector-class-pattern': [
      '^[a-z][a-z0-9-]*(?:__[a-z0-9-]+)*(?:--[a-z0-9-]+)*$',
      {
        message:
          '클래스 패턴에는 BEM(block__element--modifier) 또는 kebab-case(user-profile)만을 사용해야 합니다.',
      },
    ],
  },
};
