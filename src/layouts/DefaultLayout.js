import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar.js";
import styles from "./DefaultLayout.module.css"


function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}

export default DefaultLayout;
