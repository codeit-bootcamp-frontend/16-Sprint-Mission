import { css } from "@emotion/react";
import { ReactComponent as HearIcon } from "@assets/images/icons/ic_heart.svg";
import { ProductItemDetailType } from "types/productType";
import styled from "@emotion/styled/macro";
import { mq } from "@styles/mixins";
import { ButtonHTMLAttributes } from "react";
import { theme } from "@styles/theme";

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  Pick<ProductItemDetailType, "favoriteCount" | "isFavorite">;

const FavoriteButton = ({ favoriteCount, isFavorite, ...props }: Props) => {
  return (
    <HeartButton isFavorite={isFavorite} {...props}>
      <HearIcon />
      {favoriteCount}
    </HeartButton>
  );
};

const activeHeartStyle = css`
  color: #ff68cc;
`;

const inactiveHeartStyle = css`
  stroke: ${theme.colors.gray500};
  fill: transparent;
`;

const HeartButton = styled.button<{ isFavorite?: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.gray200};
  padding: 4px 12px;
  gap: 4px;
  font-weight: 500;
  color: ${theme.colors.gray500};
  border-radius: 35px;

  path {
    ${({ isFavorite }) => (isFavorite ? activeHeartStyle : inactiveHeartStyle)}
  }

  svg {
    display: block;

    ${mq["tablet"]} {
      width: 24px;
      height: 24px;
    }
  }
`;

export default FavoriteButton;
