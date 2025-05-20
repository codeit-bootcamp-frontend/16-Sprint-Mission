import styles from "../styles/Header.module.css";
import logoImg from "../assets/images/logo.png";
import logoTextImg from "../assets/images/logo-text.png";
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link
            className={styles.nav__logo}
            aria-label="판다마켓 메인으로 이동"
            href="./"
          >
            <picture>
              <source media="(max-width: 767px)" srcSet={logoTextImg} />
              <img src={logoImg} alt="판다마켓로고" />
            </picture>
          </Link>

          <Link to="login" className={styles.nav__button}>
            로그인
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
