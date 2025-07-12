import { css } from "@emotion/react";
import styled from "@emotion/styled/macro";
import { mq } from "../../styles/mixins";
import { Link } from "react-router-dom";

export interface ButtonStyleProps {
  color?: keyof typeof ButtonColors;
  size?: keyof typeof ButtonSize;
  round?: boolean;
}

export const ButtonColors = {
  primary: css`
    color: #fff;
    background-color: var(--btn-primary);

    &:hover {
      background-color: var(--btn-primary-hover);
    }

    &:active {
      background-color: var(--btn-primary-click);
    }

    &:disabled {
      background-color: var(--btn-disabled);
    }
  `,
  white: css`
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    background-color: var(--white);
  `,
  custom: css``,
};

export const ButtonSize = {
  sm: css`
    min-width: 88px;
    height: 42px;
    font-size: 16px;
  `,
  md: css`
    min-width: 240px;
    height: 48px;
    font-size: 18px;
  `,
  lg: css`
    min-width: 357px;
    height: 56px;
    font-size: 20px;

    ${mq["mobile"]} {
      min-width: 240px;
      height: 48px;
      font-size: 18px;
    }
  `,
  custom: css``,
};

export const ButtonBaseStyle = (props: ButtonStyleProps) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  font-weight: 600;
  transition: 0.2s ease;
  cursor: pointer;

  ${props.size ? ButtonSize[props.size] : ButtonSize["sm"]};
  ${props.color ? ButtonColors[props.color] : ButtonColors["primary"]};
  border-radius: ${props.round ? "40px" : "8px"};
`;

export const ButtonStyle = styled.button<ButtonStyleProps>`
  ${(props) => ButtonBaseStyle(props)}
`;

export const LinkStyle = styled(Link)<ButtonStyleProps>`
  ${(props) => ButtonBaseStyle(props)}
`;
