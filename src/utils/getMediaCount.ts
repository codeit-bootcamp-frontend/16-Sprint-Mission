//미디어쿼리 변화에 따라 콘텐츠의 개수를 조정하기 위한 유틸리티 함수입니다.

import useMediaQuery from '../hooks/useMediaQuery';

const BestProductsCounts = {
  mobile: 1,
  tablet: 2,
  desktop: 4,
};
const AllProductsCounts = {
  mobile: 4,
  tablet: 6,
  desktop: 10,
};

// useMediaQuery 훅을 사용하여 현재 화면 크기에 따라 베스트 상품과 전체 상품의 개수를 반환합니다.
export default function getMediaCount() {
  const breakpoint = useMediaQuery();

  return {
    bestProductsCount: BestProductsCounts[breakpoint],
    allProductsCount: AllProductsCounts[breakpoint],
  };
}
