import { css } from "@emotion/react";
import styled from "@emotion/styled/macro";
import { theme } from "@styles/theme";

export const UserProfileGap = {
  sm: css`
    gap: 8px;
  `,
  md: css`
    gap: 16px;
  `,
};

export const thumbnailSize = {
  sm: css`
    width: 32px;
  `,
  md: css`
    width: 40px;
  `,
};

export const UserProfileFontSize = {
  sm: css`
    font-size: 12px;
  `,
  md: css`
    font-size: 14px;
  `,
};

export const DateMarginTop = {
  sm: css`
    margin-top: 4px;
  `,
  md: css`
    margin-top: 2px;
  `,
};

export const UserProfileBox = styled.div<{ size?: keyof typeof thumbnailSize }>`
  display: flex;
  align-items: center;
  ${({ size }) => size && UserProfileGap[size]};
  ${({ size }) => size && UserProfileFontSize[size]};
  flex: 1;

  .thumbnail {
    ${({ size }) => size && thumbnailSize[size]};
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .username {
    display: block;
    color: ${theme.colors.gray600};
  }

  .date {
    display: block;
    ${({ size }) => size && DateMarginTop[size]}
    color: ${theme.colors.gray400};
  }
`;
