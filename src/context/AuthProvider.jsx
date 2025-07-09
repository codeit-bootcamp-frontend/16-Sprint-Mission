import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const dummyUser = { email: 'testUser', nickname: 'testNickname' }; // dummy
    setUser(dummyUser);
  };

  const logout = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setUser({});
  };

  const authContextValue = { user, isAuthenticated: !!user, login, logout };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
