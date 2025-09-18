import type { NextConfig } from 'next';
import type { RuleSetRule } from 'webpack';

const nextConfig: NextConfig = {
  webpack(config, options) {
    const { isServer: _isServer } = options;

    // 기존 svg loader 찾기 (타입 단언 추가)
    const fileLoaderRule = (config.module.rules as RuleSetRule[]).find(
      (rule) => rule.test instanceof RegExp && rule.test.test('.svg'),
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // SVG를 React 컴포넌트로 처리하는 로더 추가
    (config.module.rules as RuleSetRule[]).push({
      test: /\.svg$/i,
      issuer: { and: [/\.(ts|tsx|js|jsx|md|mdx)$/] },
      use: [{ loader: '@svgr/webpack' }],
    });

    return config;
  },
};

export default nextConfig;
