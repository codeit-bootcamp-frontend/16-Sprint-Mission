/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Skeleton from "./Skeleton";
import pandaLogoImg from "@/assets/images/logo-panda.svg";

const ImageSkeleton = ({ width, height, src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(null);

  return (
    <div css={ImageSkeletonStyle(width, height)}>
      {!isLoaded && !loadError && <Skeleton />}
      <img
        src={src}
        alt={alt}
        css={ImageStyle(isLoaded)}
        width={width}
        height={height}
        onLoad={() => {
          setIsLoaded(true);
        }}
        onError={(e) => {
          setLoadError(true);
          setIsLoaded(false);
          e.target.onerror = null;
          e.currentTarget.src = pandaLogoImg;
        }}
      />
    </div>
  );
};

export default ImageSkeleton;

const ImageSkeletonStyle = (width, height) => css`
  position: relative;
  width: ${typeof width === "number" ? `${width}px` : width};
  height: ${typeof height === "number" ? `${height}px` : height};
`;

const ImageStyle = (isLoaded) => css`
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${isLoaded ? 1 : 0};
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s;
`;
