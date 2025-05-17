import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div id="wrap">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
