import { Link, NavLink } from "react-router-dom";
import mbLogo from "../assets/mb_logo.svg";
import tbLogo from "../assets/tb_logo.svg";
import userIcon from "../assets/user_icon.svg";
import styles from "./Navbar.module.css";

function getLinkStyle({ isActive}) {
  return{
    color: isActive ? 'var(--blue)' : 'var(--secondary-color-gray600)'
  }
}



function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <span>
          <h1>
            <Link className={styles.logo} to="/">
              <img className={styles.tbLogo} src={tbLogo} alt="로고" />
              <img src={mbLogo} alt="로고" />
            </Link>
          </h1>
          <ul>
            <li>
              <NavLink to="/freeboard" style={getLinkStyle}>자유게시판</NavLink>
            </li>
            <li>
              <NavLink to="/item" style={getLinkStyle}>중고마켓</NavLink>
            </li>
          </ul>
        </span>
        <button aria-label="유저 버튼">
          <img src={userIcon} alt="유저 버튼" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
