import { Outlet } from "react-router";
import Header from "./Header";

const Layout = () => {
  return (
    <div id="wrap">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
