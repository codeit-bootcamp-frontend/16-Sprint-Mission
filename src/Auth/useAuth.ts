// src/Auth/useAuth.tsx
import React, { createContext, useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

// useAuth 훅 정의
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth는 <AuthProvider> 내부에서만 사용해야 합니다.');
  }
  return context;
};
