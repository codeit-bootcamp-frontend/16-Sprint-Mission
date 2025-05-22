// src/router/routes.ts
//라우터 경로 정의
import MarketPage from '@/pages/MarketPage';

//라우터 인터페이스 설정
export interface AppRoute {
  path: string;
  element: React.ComponentType;
}
export const routes: AppRoute[] = [
  { path: '/', element: MarketPage },

  // …추가 라우트
];
