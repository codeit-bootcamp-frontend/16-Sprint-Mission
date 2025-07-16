import { css } from "@emotion/react";
import { mq } from "@styles/mixins";

export const DropdownListStyle = css`
  width: 139px;
  border: 1px solid var(--gray300);
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
  color: var(--gray500);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--gray100);
  }

  ${mq["mobile"]} {
    padding: 16px 0 12px;
  }
`;
