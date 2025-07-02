import { css } from 'styled-components';

export const applyFontStyles = (fontType, color = 'secGray900') => css`
  font-size: ${({ theme }) => theme.fonts[fontType].fontSize};
  font-weight: ${({ theme }) => theme.fonts[fontType].fontWeight};
  line-height: ${({ theme }) => theme.fonts[fontType].lineHeight};
  color: ${({ theme }) => theme.colors[color]};
`;

export const applyFlexColumn = (gap = '8px') => css`
  display: flex;
  flex-direction: column;
  gap: ${gap};
`;
