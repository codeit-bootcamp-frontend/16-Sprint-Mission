import { keyframes } from "@emotion/react";
import styled from "@emotion/styled/macro";

const SkeletonAnimation = keyframes`
    0% {
      background-position: 100% 0%;
    }
    100% {
      background-position: -10% 0%;
    }
`;
const SkeletonStyled = styled.div`
  width: ${({ width }) => width ?? "100px"};
  height: ${({ height }) => height ?? "100px"};
  background: linear-gradient(45deg, #e5e5e5 40%, #f0f0f0 50%, #e5e5e5 60%);
  background-size: 300% auto;
  background-position: 100% 0%;
  border-radius: ${({ circle }) => (circle ? "50%" : "0")};
  animation: ${SkeletonAnimation} 1.5s infinite linear;
`;

const Skeleton = ({ width, height, circle }) => {
  return <SkeletonStyled width={width} height={height} circle={circle} />;
};

export default Skeleton;
