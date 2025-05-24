//src/context/AuthContext.tsx

// 유저 관련 정보에 대한 타입 정의
export interface User {
  id: string;
  nickname: string;
  avatarUrl: string;
}
// 유저 정보를 Context에서 관리하기 위한 타입 정의
export interface AuthContextType {
  user: User | null; // 현재 로그인된 유저 정보
  setUser: (user: User | null) => void; // 유저 정보를 설정하는 함수
  isLoggedIn: boolean; // 로그인 상태 여부
  setIsLoggedIn: (isLoggedIn: boolean) => void; // 로그인 상태를 설정하는 함수
  logout: () => void; // 로그아웃 함수
}
import React, { createContext, useState, useContext } from 'react';
// 유저 정보를 관리하는 Context 생성
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, isLoggedIn, setIsLoggedIn, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
