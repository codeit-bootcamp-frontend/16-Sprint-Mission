import { useState } from 'react';
import logoTextImg from '@assets/images/logo-text.png';
import logoImg from '@assets/images/logo.png';
import styles from '@styles/Header.module.css';
import { Link, Outlet } from 'react-router-dom';
import HeaderAuth from './HeaderAuth';
import Navigations from './Navigations';

function Header() {
  const [isLoggedIn] = useState(!!sessionStorage.getItem('loggedIn'));

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link aria-label="판다마켓 메인으로 이동" to="/">
            <picture>
              <source media="(max-width: 767px)" srcSet={logoTextImg} />
              <img src={logoImg} alt="판다마켓로고" />
            </picture>
          </Link>
          {isLoggedIn && <Navigations />}
          <HeaderAuth isLoggedIn={isLoggedIn} />
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
