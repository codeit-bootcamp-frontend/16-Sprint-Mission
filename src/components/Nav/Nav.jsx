import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  const activeLinkStyle = ({ isActive }) => {
    return isActive ? { color: "#3692FF" } : undefined;
  };

  return (
    <ul className={styles.nav}>
      <li>
        <NavLink
          to="/board"
          style={activeLinkStyle}
          className={styles["nav-link"]}
        >
          자유게시판
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/items"
          style={activeLinkStyle}
          className={styles["nav-link"]}
        >
          중고마켓
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
