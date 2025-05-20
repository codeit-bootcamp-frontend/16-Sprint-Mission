import smLogo from "../assets/logo/logo.svg";
import logo from "../assets/logo/market_logo.svg";

import profile from "../assets/input/default_profile.svg";
import { useScreenSize } from "../utils/useScreenSize";

import styles from "./Nav.module.css";

function Nav() {
  const screenSize = useScreenSize();
  return (
    <div className={styles.nav}>
      <div className={styles.links}>
        <a href="/" className={styles.logo}>
          <img src={screenSize === "sm" ? smLogo : logo} alt="판다마켓 로고" />
        </a>
        <div className={styles.text}>
          <a href="/boards">자유게시판</a>
          <a href="/items">중고마켓</a>
        </div>
      </div>
      <a href="#" className={styles.profile}>
        <img src={profile} alt="프로필" />
      </a>
    </div>
  );
}

export default Nav;
