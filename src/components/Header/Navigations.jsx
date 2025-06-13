import styles from "@styles/Header.module.css";
import { Link, NavLink } from "react-router-dom";

function Navigations() {
  return (
    <div className={styles.nav__category}>
      <Link>자유게시판</Link>
      <NavLink
        to="/items"
        className={({ isActive }) => (isActive ? `${styles.isActive}` : "")}
      >
        중고마켓
      </NavLink>
    </div>
  );
}

export default Navigations;
