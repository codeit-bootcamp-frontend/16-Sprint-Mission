// src/context/AuthContext.tsx
import { useCallback } from 'react';
import { useAuth } from './useAuth';
import AvatarIcon from '@/assets/icon/avatar.png';

// 로그인 및 인증 관련 서비스  커스텀훅
export const useAuthService = () => {
  const { user, setUser } = useAuth();

  /**
   * 로그인 처리 함수
   * 나중에 loginApi(email, password) → user, token등을 받아서 처리
   */
  const login = useCallback(
    async (email: string, password: string) => {
      // TODO: 여기에 API 호출 및 토큰 저장 로직 추가 예정
      console.log('login 요청:', email, password);

      // 임시로 mockUser 정보 설정
      const mockUser = {
        id: '1',
        userName: email.split('@')[0], // 이메일의 '@' 앞부분을 사용자 이름으로 사용
        userAvatar: AvatarIcon,
      };
      //todo: 토큰 저장 등은 이후 추가
      setUser(mockUser);
    },
    [setUser]
  );

  /**
   * 로그아웃 처리 함수
   * 나중에 logoutApi() 호출 + 토큰 제거
   */
  const logout = useCallback(() => {
    console.log('[DEBUG] logout 실행');

    setUser(null);
  }, [setUser]);

  return {
    user,
    isLoggedIn: !!user,
    login,
    logout,
  };
};
