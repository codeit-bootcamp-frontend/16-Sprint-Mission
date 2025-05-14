import { createContext, useContext, useState } from 'react';

const LoginStateContext = createContext();

export const LoginStateProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <LoginStateContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginStateContext.Provider>
  );
};

export const useIsLogin = () => {
  const context = useContext(LoginStateContext);
  if (!context) {
    throw new Error('반드시 LoginStateProvider 안에서 사용해야 합니다');
  }
  return context.isLogin;
};

export const useSetIsLogin = () => {
  const context = useContext(LoginStateContext);
  if (!context) {
    throw new Error('반드시 LoginStateProvider 안에서 사용해야 합니다');
  }
  return context.setIsLogin;
};
