import { css } from "@emotion/react";
import styled from "@emotion/styled/macro";
import DeleteIcon from "@assets/images/icons/ic_delete.svg";
import { theme } from "@styles/theme";

const TagItemBaseStyle = css`
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 5px 16px;
  font-size: 16px;
  color: ${theme.colors.gray800};
  background: ${theme.colors.gray100};
  border-radius: 26px;

  &::before {
    content: "#";
  }
`;

export const TagItemStyleText = styled.span`
  ${TagItemBaseStyle}
`;

export const TagItemStyleButton = styled.button`
  ${TagItemBaseStyle}
  padding-right: 42px;
  background-image: url(${DeleteIcon});
  background-position: right 12px center;
  background-repeat: no-repeat;
`;
