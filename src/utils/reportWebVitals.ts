// src/reportWebVitals.ts
/* Web Vitals”라는 핵심 퍼포먼스 지표(CLS, FID, LCP 등)를 측정해서, 원하는 콜백 함수로 넘겨주는 유틸 함수
  - CLS(Cumulative Layout Shift): 레이아웃이 얼마나 흔들리는지
  - FID(First Input Delay): 첫 사용자 입력 반응 속도
  - LCP(Largest Contentful Paint): 화면 주요 콘텐츠가 렌더링되는 시간

  동적 임포트
  - web-vitals 모듈을 필요할 때만(import('web-vitals')) 불러와 번들 크기를 줄여 줍니다.

  콜백 전달
  - 측정된 값을 매개변수로 넘겨주는 콜백 함수(onPerfEntry)를 통해 “로그 찍기”나 “분석 서버에 보내기” 같은 처리를 할 수 있어요.
*/

// ① 웹 바이탈 리포트 핸들러 타입 가져오기
import type { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  // ② typeof 검사로 “함수” 여부를 확인
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // ③ 동적 import
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // ④ 각 측정 함수에 onPerfEntry 콜백 전달
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
