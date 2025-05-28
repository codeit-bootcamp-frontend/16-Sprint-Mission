import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import useScrollToTop from "./hooks/useScrollToTop";

function App() {
  useScrollToTop();

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
