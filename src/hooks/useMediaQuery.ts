// 쿼리와 화면 크기를 비교하여 브레이크포인트의 일치 여부를 반환하는 커스텀 훅
import { useEffect, useState } from 'react';

// 브레이크포인트 타입을 정의합니다.
export type Breakpoint = 'mobile' | 'tablet' | 'desktop';
// 미디어 쿼리 문자열을 정의합니다.
const MEDIA_QUERIES: Record<Breakpoint, string> = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1200px)',
  desktop: '(min-width: 1201px)',
};

// 현재 화면 크기에 따라 'mobile', 'tablet', 'desktop' 중 하나의 값을 반환하는 함수
function getBreakpoint(): Breakpoint {
  if (window.matchMedia(MEDIA_QUERIES.mobile).matches) return 'mobile';
  if (window.matchMedia(MEDIA_QUERIES.tablet).matches) return 'tablet';
  return 'desktop';
}

// useMediaQuery 훅을 정의합니다.
const useMediaQuery = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  useEffect(() => {
    // 모든 미디에쿼리에 대한 matchMedia 객체를 생성합니다.
    const mediaQueryList = (Object.keys(MEDIA_QUERIES) as Breakpoint[]).map(
      (key) => window.matchMedia(MEDIA_QUERIES[key])
    );

    // 화면 변경시 브레이크포인트을 업데이트하는 함수입니다.
    const handleChange = () => setBreakpoint(getBreakpoint());

    // 각 미디어 쿼리에 대해 이벤트 리스너를 등록합니다.
    mediaQueryList.forEach((mql) => {
      mql.addEventListener('change', handleChange);
    });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      mediaQueryList.forEach((mql) => {
        mql.removeEventListener('change', handleChange);
      });
    };
  }, []);

  return breakpoint;
};

export default useMediaQuery;
