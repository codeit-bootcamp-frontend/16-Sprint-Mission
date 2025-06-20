import styled from 'styled-components';

import { applyFontStyles } from '../../../styles/mixins';
import { ColorTypes, FontTypes } from '../../../styles/theme';
import heart from '../../../assets/images/icons/ic_heart.svg';

function ItemCard({ item }) {
  return (
    <ItemCardContainer>
      <ItemImage
        src={item?.images[0]}
        alt={item?.name}
      />
      <ItemName>{item?.name}</ItemName>
      <ItemPrice>{item?.price.toLocaleString()}원</ItemPrice>

      <LikeCount>
        <LikeIcon
          src={heart}
          alt="좋아요"
        />
        <ItemLikes>{item?.favoriteCount.toLocaleString()}</ItemLikes>
      </LikeCount>
    </ItemCardContainer>
  );
}

export default ItemCard;

const ItemCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ItemImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 30px;
`;

const ItemName = styled.div`
  ${applyFontStyles(FontTypes.MEDIUM14, ColorTypes.SECONDARY_GRAY_800)};
`;

const ItemPrice = styled.div`
  ${applyFontStyles(FontTypes.BOLD16, ColorTypes.SECONDARY_GRAY_800)};
`;

const LikeCount = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

const LikeIcon = styled.img`
  width: 14px;
  height: 14px;
`;

const ItemLikes = styled.span`
  ${applyFontStyles(FontTypes.MEDIUM12, ColorTypes.SECONDARY_GRAY_800)};
`;
