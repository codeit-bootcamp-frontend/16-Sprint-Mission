import styled from "styled-components";
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
const ItemStyle = styled.div`
  width: ${(props) => ITEM_WIDTH_MAP[props.$isItemCount] || "100%"};
  padding: ${(props) => (props.$bestItemChk ? "0" : "0 4px 32px")};
`;
const ItemImage = styled.img`
  // width: ${(props) => (props.$bestItemChk ? "343px" : "100%")};
  // height: ${(props) => (props.$bestItemChk ? "343px" : "auto")};
  border-radius: 19.46px;
  object-fit: cover;
  width: 100%;
  // @media all and (min-width: 768px) {
  //   width: ${(props) => (props.$bestItemChk ? "282px" : "221px")};
  //   height: ${(props) => (props.$bestItemChk ? "282px" : "221px")};
  // }
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
  const parsePrice = formatNumberWithCommas(price);
  useEffect(() => {
    serImgLoadingError(false);
  }, [imgSrc]);
  const handlerImageErrorChk = () => {
    serImgLoadingError(true);
  };
  return (
    <ItemStyle $isItemCount={itemsCount} $bestItemChk={bestItemsFlag}>
      <ItemImage
        src={imgLoadingError || !imgSrc ? tempImage : imgSrc}
        alt={desc}
        onError={handlerImageErrorChk}
      />
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
