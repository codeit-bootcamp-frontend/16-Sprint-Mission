import { css } from "@emotion/react";
import styled from "@emotion/styled/macro";
import { mq } from "../../styles/mixins";
import { Link } from "react-router-dom";
import { theme } from "@styles/theme";

export interface ButtonStyleProps {
  variant?: keyof typeof ButtonStyles;
  size?: keyof typeof ButtonSize;
  round?: boolean;
}

export const ButtonStyles = {
  primary: css`
    color: #fff;
    background-color: ${theme.btn.primary};

    &:hover {
      background-color: ${theme.btn.hover};
    }

    &:active {
      background-color: ${theme.btn.click};
    }

    &:disabled {
      background-color: ${theme.btn.disabled};
    }
  `,
  white: css`
    border: 1px solid ${theme.colors.primaryColor};
    color: ${theme.colors.primaryColor};
    background-color: ${theme.colors.white};
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
  ${props.variant ? ButtonStyles[props.variant] : ButtonStyles["primary"]};
  border-radius: ${props.round ? "40px" : "8px"};
`;

export const ButtonStyle = styled.button<ButtonStyleProps>`
  ${(props) => ButtonBaseStyle(props)}
`;

export const LinkStyle = styled(Link, {
  shouldForwardProp: (prop) => prop !== "round",
})<ButtonStyleProps>`
  ${(props) => ButtonBaseStyle(props)}
`;
