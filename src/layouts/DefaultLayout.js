import { Outlet } from "react-router-dom";
import styles from "./DefaultLayout.module.css";
import Navbar from "../components/Navbar/Navbar";

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
