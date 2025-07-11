import { css } from "@emotion/react";

export const variablesStyles = css`
  :root {
    // colors
    --primary-color: #3692ff;
    --primary-bg: #cfe5ff;
    --white: #fff;
    --gray50: #f9fafb;
    --gray100: #f3f4f6;
    --gray200: #e5e7eb;
    --gray400: #9ca3af;
    --gray500: #6b7280;
    --gray600: #4b5563;
    --gray700: #374151;
    --gray800: #1f2937;
    --gray900: #111827;
    --error: #f74747;

    --footer-bg: #111827;

    // btn bg color
    --btn-primary: var(--primary-color);
    --btn-hover: #1967d6;
    --btn-click: #1251aa;
    --btn-disabled: #9ca3af;

    // responsive
    --tablet-size: 1199px;
    --mobile-size: 767px;
  }
`;
