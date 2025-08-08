import { css, Theme } from "@emotion/react";
import { resetStyles } from "./resetStyles";
import { fontStyles } from "./fontStyles";

export const globalStyle = (theme: Theme) => css`
  ${fontStyles}
  ${resetStyles(theme)}
`;
