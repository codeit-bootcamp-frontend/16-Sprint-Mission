import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { LOGO } from '@/constants/LogoImage';
import UserProfile from './UserProfile';
import { useAuthService } from '@/Auth/useAuthService';

//향후 로그인 상태에 따라 아이콘 및 버튼을 보여줘야 할 수도 있음
export default function Header() {
  const { isLoggedIn } = useAuthService(); // 로그인 상태를 가져옵니다.
  //네비게이션 아이템 리스트
  const navItems = [
    { to: '/board', label: '자유게시판' },
    { to: '/items', label: '중고마켓' },
  ];
  return (
    <header className={styles['header']}>
      <div className={styles['header__container']}>
        <div className={styles['header__leftwrap']}>
          {/* 로고 이미지 */}
          <NavLink to="/" className={styles['header__logo']}>
            {/* <img
            src={LOGO.small}
            srcSet={LOGO.srcSet}
            sizes={LOGO.sizes}
            alt={LOGO.sizes}
            className={styles['header__logo-img']}
          /> */}
            <picture>
              <source srcSet={LOGO.typo} media="(max-width: 767px)" />
              <img
                src={LOGO.small}
                alt="판다마켓 로고"
                className={styles['header__logo-img']}
              />
            </picture>
          </NavLink>
          {/* 네비게이션 그룹  */}
          <nav className={styles['header__nav']}>
            {navItems.map(({ to, label }) => (
              <NavLink key={to} to={to} className={styles['header__nav-item']}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
        {/* 로그인 여부에 따라 프로필 컴포넌트| 로그인 & 회원가입  */}
        <div className={styles['header__user']}>
          {/*  */}
          {isLoggedIn ? (
            <UserProfile />
          ) : (
            <>
              <NavLink to="/login" className={styles['header__login']}>
                로그인
              </NavLink>
              <NavLink to="/signup" className={styles['header__signup']}>
                회원가입
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
