import { useState } from 'react';

import styled from 'styled-components';

import LikeIcon from '../assets/heartIcon.png';
import tempImage from '../assets/tempImage.png';
import { formatNumberWithCommas } from '../utils/formatNumberWithCommas';

function ProductCard({ item }) {
  const imgSrc = item.images?.[0];
  const parsePrice = formatNumberWithCommas(item.price);
  const [errorState, setErrorState] = useState(false);
  const imageErrLoadHandler = () => {
    setErrorState(true);
  };
  return (
    <ItemStyle>
      <ItemImgWrapper>
        <ItemImage
          onError={imageErrLoadHandler}
          src={!imgSrc || errorState ? tempImage : imgSrc}
        />
      </ItemImgWrapper>

      <ItemInfoWrapper>
        <ItemInfo>{item.name}</ItemInfo>
        <ItemInfo>{item.desc}</ItemInfo>
        <PriceInfo>{parsePrice}원</PriceInfo>
        <LikeWrapper>
          <LikeIconImg src={LikeIcon} alt='좋아요 아이콘' />
          {item.favorite}
        </LikeWrapper>
      </ItemInfoWrapper>
    </ItemStyle>
  );
}
const ItemImgWrapper = styled.div`
  position: relative;
`;

const ItemStyle = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
`;
const ItemImage = styled.img`
  border-radius: 19.46px;
  object-fit: cover;
  width: 100%;
  aspect-ratio: 1 / 1;
`;

const ItemInfoWrapper = styled.div`
  padding-top: 10px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const ItemInfo = styled.span`
  display: block;
`;

const PriceInfo = styled.span`
  font-weight: bold;
  display: block;
  font-size: 16px;
`;
const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;
const LikeIconImg = styled.img`
  width: 13.4px;
  height: 11.65px;
`;
export default ProductCard;
