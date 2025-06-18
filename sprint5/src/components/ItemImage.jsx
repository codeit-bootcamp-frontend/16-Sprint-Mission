// 상품 fallback 이미지 컴포넌트
import React from "react";
import fallbackImage from "../assets/fallback.png";

function ItemImage({ src, alt }) {
  const validSrc = src && src.trim() !== "" ? src : fallbackImage;

  return (
    <img
      src={validSrc}
      alt={alt || "상품 이미지"}
      className="item-image"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallbackImage;
      }}
    />
  );
}

export default ItemImage;
