import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import useScrollToTop from "./hooks/useScrollToTop";
import useIsAuthPage from "./hooks/useIsAuthPage";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  useScrollToTop();
  const isAuth = useIsAuthPage();

  return (
    <AuthProvider>
      {!isAuth && <Header />}
      <Outlet />
    </AuthProvider>
  );
}

export default App;
