import { css } from "@emotion/react";
import { theme } from "@styles/theme";

const BREAKPOINTS = {
  tablet: 1199,
  mobile: 767,
};

type MediaQueryType = { [key in keyof typeof BREAKPOINTS]: string };

export const mq = Object.fromEntries(
  Object.entries(BREAKPOINTS).map(([key, val]) => [
    key,
    `@media (max-width: ${val}px)`,
  ])
) as MediaQueryType;

export const ellipsis = (line: number = 1) => css`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
`;

export const defaultInput = (height: number = 56) => css`
  display: block;
  width: 100%;
  height: ${height}px;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.gray800};
  background: ${theme.colors.gray100};
  border-radius: 12px;
`;
