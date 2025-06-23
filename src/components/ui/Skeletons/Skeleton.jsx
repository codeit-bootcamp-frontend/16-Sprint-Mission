/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Skeleton = () => {
  return <div css={SkeletonStyle}></div>;
};

export default Skeleton;

const SkeletonStyle = css`
  background-color: var(--gray-300, #e0e0e0);
  width: 100%;
  height: 100%;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;
