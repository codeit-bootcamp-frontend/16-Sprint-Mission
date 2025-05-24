// src/router/index.tsx
// 라우터를 조합해서 렌더링하는 컴포넌트

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';

export default function AppRouter() {
  return (
    <Routes>
      {/* {라우터 배열에서 경로를 탐색함} */}
      {routes.map(({ path, element: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      {/* 매칭되는 경로 없으면 루트로 리다이렉트 */}
      {/* todo: 매칭되는 경로가 없다면 notFound 페이지로 이동 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
