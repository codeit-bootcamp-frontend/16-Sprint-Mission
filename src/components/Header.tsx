import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { LOGO } from '@/constants/LogoImage';

//네비게이션 아이템 리스트
const navItems = [
  { to: '/board', label: '자유게시판' },
  { to: '/items', label: '중고마켓' },
];
//향후 로그인 상태에 따라 아이콘 및 버튼을 보여줘야 할 수도 있음
export default function Header({ isLoggedin = true }) {
  return (
    <header className={styles['header']}>
      <div className={styles['header__container']}>
        <NavLink to="/" className={styles['header__logo']}>
          <img
            src={LOGO.small}
            srcSet={LOGO.srcSet}
            sizes={LOGO.sizes}
            alt={LOGO.sizes}
            className={styles['header__logo-img']}
          />
        </NavLink>
      </div>
    </header>
  );
}
