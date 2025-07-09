import { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import Favorite from './Favorite';
import fallbackImg from '../assets/img_default_product.png';
import formatPriceWithCommas from '../utils/formatPriceWithCommas';

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const ProductDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6px;
  width: 100%;

  & > h1 {
    font-size: 0.875em;
    font-weight: 500;
  }

  & > h2 {
    font-size: 1em;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;
`;

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const SkeletonBox = styled.div`
  position: absolute;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.gray200};

  transition: opacity 0.3s ease-in-out;
  ${({ $imageLoaded, $imageError }) =>
    !($imageLoaded || $imageError) &&
    css`
      animation: ${blink} 1.5s infinite ease-in-out;
    `}
`;

const ProductImg = styled.img`
  position: absolute;
  width: 100%;
  border-radius: 20px;
  aspect-ratio: 1/1;
  object-fit: cover;
  vertical-align: bottom;

  transition:
    opacity 0.3s ease-in-out,
    filter 0.3s ease-in-out;
  opacity: ${({ $imageLoaded, $imageError }) =>
    $imageLoaded || $imageError ? 1 : 0};
  filter: ${({ $imageLoaded, $imageError }) =>
    $imageLoaded || $imageError ? 'blur(0px)' : 'blur(4px)'};
`;

const Product = ({ name, price, favoriteCount, images }) => {
  const [currentSrc, setCurrentSrc] = useState(images);
  const [hasError, setHasError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    if (hasError) {
      return;
    }

    setCurrentSrc(fallbackImg);
    setHasError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <ProductWrapper>
      <ImageBox>
        <SkeletonBox $imageLoaded={imageLoaded} $imageError={hasError} />
        <ProductImg
          src={currentSrc}
          width={'100%'}
          height={'auto'}
          onError={handleImageError}
          onLoad={handleImageLoad}
          $imageLoaded={imageLoaded}
          $imageError={hasError}
        />
      </ImageBox>
      <ProductDetailWrapper>
        <h1>{name}</h1>
        <h2>{formatPriceWithCommas(price)}원</h2>
        <Favorite>{favoriteCount}</Favorite>
      </ProductDetailWrapper>
    </ProductWrapper>
  );
};

export default Product;
