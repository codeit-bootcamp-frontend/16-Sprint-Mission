import { MouseEvent, CSSProperties, ReactNode } from "react";
import type { CSSInterpolation } from "@emotion/serialize";

// 기본 HTML 버튼 속성 타입
export interface BaseButtonProps {
  id?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  title?: string;
}

// 크기 타입
export type ButtonSize = "sm" | "lg";

// 변형 타입
export type ButtonVariant =
  | "primary"
  | "bottomPrimary"
  | "bannerPrimary"
  | "outlined";

// 모양 타입
export type ButtonShape = "default" | "round";

// 아이콘 위치 타입
export type IconPosition = "left" | "right" | "only";

// 공통 스타일 속성
export interface ButtonStyleProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  fullWidth?: boolean;
  loading?: boolean;
}

// 기본 버튼 Props 타입
export interface ButtonProps extends BaseButtonProps, ButtonStyleProps {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  cssOverride?: CSSInterpolation;
}

// 아이콘 버튼 Props 타입
export interface IconButtonProps extends BaseButtonProps {
  icon: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  cssOverride?: CSSInterpolation;
}

// 버튼 그룹 Props 타입
export interface ButtonGroupProps {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  className?: string;
}

// 스타일 맵 타입
export interface ButtonStylesMap {
  size: Record<ButtonSize, CSSInterpolation>;
  variant: Record<ButtonVariant, CSSInterpolation>;
  shape: Record<ButtonShape, CSSInterpolation>;
}
