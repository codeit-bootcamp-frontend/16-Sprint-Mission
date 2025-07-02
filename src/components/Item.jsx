import styled, { keyframes } from "styled-components";
import tempImage from "../assets/tempImage.png";
import LikeIcon from "../assets/heartIcon.png";
import { useState, useEffect } from "react";
import { formatNumberWithCommas } from "../utils/formatNumberWithCommas";
const ITEM_WIDTH_MAP = {
  1: "100%",
  2: "50%",
  4: "50%",
  6: "33.33%",
  10: "20%",
};
const ItemImgWrapper = styled.div`
  position: relative;
`;
const skeletonPulse = keyframes`
  0% { filter: brightness(1); }
  50% { filter: brightness(0.9); }
  100% { filter: brightness(1); }
`;
const ItemStyle = styled.div`
  position: relative;
  width: ${(props) => ITEM_WIDTH_MAP[props.$isItemCount] || "100%"};
  padding: ${(props) => (props.$bestItemChk ? "0" : "0 4px 32px")};
`;
const ItemImage = styled.img`
  border-radius: 19.46px;
  object-fit: cover;
  width: 100%;
  aspect-ratio: 1 / 1;
`;
const SkeletonOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #eee;
  animation: ${skeletonPulse} 1.5s infinite ease-in-out;
  border-radius: 15px;
  z-index: 1;
  opacity: ${({ $isLoading }) => ($isLoading ? 1 : 0)};
  transition: opacity 0.4s ease;
  pointer-events: none;
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
function Item({ name, desc, price, src, favorite, itemsCount, bestItemsFlag }) {
  const imgSrc = src?.[0];
  const [imgLoadingError, serImgLoadingError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const parsePrice = formatNumberWithCommas(price);
  useEffect(() => {
    serImgLoadingError(false);
    setIsLoading(true);
  }, [imgSrc]);
  const handlerImageErrorChk = () => {
    serImgLoadingError(true);
  };
  return (
    <ItemStyle $isItemCount={itemsCount} $bestItemChk={bestItemsFlag}>
      <ItemImgWrapper>
        <SkeletonOverlay $isLoading={isLoading} />
        <ItemImage
          src={imgLoadingError || !imgSrc ? tempImage : imgSrc}
          alt={desc}
          onError={handlerImageErrorChk}
          loading="lazy"
          onLoad={() => {
            setTimeout(() => {
              setIsLoading(false);
            }, 100);
          }}
        />
      </ItemImgWrapper>

      <ItemInfoWrapper>
        <ItemInfo>{name}</ItemInfo>
        <ItemInfo>{desc}</ItemInfo>
        <PriceInfo>{parsePrice}원</PriceInfo>
        <LikeWrapper>
          <LikeIconImg src={LikeIcon} alt="좋아요 아이콘" />
          {favorite}
        </LikeWrapper>
      </ItemInfoWrapper>
    </ItemStyle>
  );
}
export default Item;
