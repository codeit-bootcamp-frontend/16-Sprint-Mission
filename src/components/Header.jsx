import styles from "../styles/Header.module.css";
import logoImg from "../assets/images/logo.png";
import logoTextImg from "../assets/images/logo-text.png";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={styles.nav__logo} aria-label="판다마켓 메인으로 이동" href="./">
          <picture>
            <source media="(max-width: 767px)" srcSet={logoTextImg} />
            <img src={logoImg} alt="판다마켓로고" />
          </picture>
        </a>
        <a className={styles.nav__button} href="./login">
          로그인
        </a>
      </nav>
    </header>
  );
}

export default Header;
