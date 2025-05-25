import styles from "@styles/Header.module.css";
import logoImg from "@assets/images/logo.png";
import logoTextImg from "@assets/images/logo-text.png";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Navigations from "./Navigations";
import HeaderAuth from "./HeaderAuth";

function Header() {
  const [isLogined, setIsLogined] = useState(sessionStorage.getItem("logined"));

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link
            className={styles.nav__logo}
            aria-label="판다마켓 메인으로 이동"
            to="/"
          >
            <picture>
              <source media="(max-width: 767px)" srcSet={logoTextImg} />
              <img src={logoImg} alt="판다마켓로고" />
            </picture>
          </Link>
          {isLogined && <Navigations />}
          <HeaderAuth isLogined={isLogined} />
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
