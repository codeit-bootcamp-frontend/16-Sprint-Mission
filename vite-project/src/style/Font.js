import styled, { css } from "styled-components";

export const textStyles = {
  bold16: css`
    font-family: "Pretendard", sans-serif;
    font-weight: 700;
    font-size: 16px;
  `,
  medium14: css`
    font-family: "Pretendard", sans-serif;
    font-weight: 500;
    font-size: 14px;
  `,
};

export const Bold16 = styled.p`
  ${textStyles.bold16}
`;

export const Medium14 = styled.p`
  ${textStyles.medium14}
`;
