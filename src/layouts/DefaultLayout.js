import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.js";
import "./DefaultLayout.css"


function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default DefaultLayout;
