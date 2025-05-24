import React, { createContext, useContext, useState } from 'react';
// src/context/AuthContext.tsx
// 사용자 인증 정보를 관리하는 컨텍스트

//유저 정보 인터페이스 정의
export interface User {
  id: string;
  nickname: string;
  avatarUrl: string;
}
// AuthContextType 인터페이스 정의
interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}
// AuthContext 생성
const AuthContext = createContext<AuthContextType | null>(null);

// AuthProvider 컴포넌트 정의
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
