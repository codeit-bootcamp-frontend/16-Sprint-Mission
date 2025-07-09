import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { applyFontStyles } from '../../../styles/mixins';
import { ColorTypes, FontTypes } from '../../../styles/theme';
import heart from '../../../assets/images/icons/ic_heart.svg';

function ItemCard({ item }) {
  return (
    <StyledLink to={`/items/${item.id}`}>
      <StyledItemCardContainer>
        <StyledItemImage
          src={item?.images[0]}
          alt={item?.name}
        />
        <StyledItemName>{item?.name}</StyledItemName>
        <StyledItemPrice>{item?.price.toLocaleString()}원</StyledItemPrice>

        <StyledLikeCount>
          <StyledLikeIcon
            src={heart}
            alt="좋아요"
          />
          <StyledItemLikes>{item?.favoriteCount.toLocaleString()}</StyledItemLikes>
        </StyledLikeCount>
      </StyledItemCardContainer>
    </StyledLink>
  );
}

export default ItemCard;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledItemCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StyledItemImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 30px;
`;

const StyledItemName = styled.div`
  ${applyFontStyles(FontTypes.MEDIUM14, ColorTypes.SECONDARY_GRAY_800)};
`;

const StyledItemPrice = styled.div`
  ${applyFontStyles(FontTypes.BOLD16, ColorTypes.SECONDARY_GRAY_800)};
`;

const StyledLikeCount = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

const StyledLikeIcon = styled.img`
  width: 14px;
  height: 14px;
`;

const StyledItemLikes = styled.span`
  ${applyFontStyles(FontTypes.MEDIUM12, ColorTypes.SECONDARY_GRAY_800)};
`;
