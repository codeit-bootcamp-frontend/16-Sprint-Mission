import styles from "../styles/Header.module.css";
import logoImg from "../assets/images/logo.png";
import logoTextImg from "../assets/images/logo-text.png";
import userImg from "../assets/icon/ic_user.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [isLogined, setIsLogined] = useState();

  useEffect(() => {
    setIsLogined(sessionStorage.getItem("logined"));
  }, []);

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
          {isLogined ? (
            <div className={styles.nav__category}>
              <Link>자유게시판</Link>
              <NavLink to="/items" className={({ isActive }) => isActive ? `${styles.isActive}` : "" } >
                중고마켓
              </NavLink>
            </div>
          ) : null}
          {isLogined ? (
            <div className={styles[`nav__my-page`]}>
              <img src={userImg} alt="마이페이지 아이콘" />
            </div>
          ) : (
            <Link to="login" className={styles.nav__button}> 로그인 </Link>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
