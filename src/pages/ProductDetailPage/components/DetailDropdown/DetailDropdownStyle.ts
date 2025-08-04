import { css } from "@emotion/react";
import { mq } from "@styles/mixins";
import { theme } from "@styles/theme";

export const DropdownListStyle = css`
  width: 139px;
  border: 1px solid ${theme.colors.gray300};
  background: #fff;
  border-radius: 8px;
  z-index: 1;
  overflow: hidden;

  ${mq["mobile"]} {
    width: 102px;
  }
`;

export const DropdownItemStyle = css`
  width: 100%;
  padding: 12px 0 8px;
  color: ${theme.colors.gray500};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.gray100};
  }

  ${mq["mobile"]} {
    padding: 16px 0 12px;
  }
`;
