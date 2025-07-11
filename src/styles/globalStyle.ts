import { css } from "@emotion/react";
import { resetStyles } from "./resetStyles";
import { fontStyles } from "./fontStyles";
import { variablesStyles } from "./variablesStyles";

export const globalStyle = css`
  ${variablesStyles}
  ${fontStyles}
  ${resetStyles}
`;
