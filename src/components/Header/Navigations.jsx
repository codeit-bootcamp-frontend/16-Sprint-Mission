import { Link, NavLink } from "react-router-dom";
import styles from "@styles/Header.module.css";

function Navigations() {
  return (
    <div className={styles.nav__category}>
        <Link>자유게시판</Link>
        <NavLink to="/items" className={({ isActive }) => (isActive ? `${styles.isActive}` : "")} >
        중고마켓
        </NavLink>
    </div>
  );
}

export default Navigations;
