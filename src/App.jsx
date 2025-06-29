import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import useScrollToTop from "./hooks/useScrollToTop";
import useIsAuthPage from "./hooks/useIsAuthPage";

function App() {
  useScrollToTop();
  const isAuth = useIsAuthPage();

  return (
    <>
      {!isAuth && <Header />}
      <Outlet />
    </>
  );
}

export default App;
