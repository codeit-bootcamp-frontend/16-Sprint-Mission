import styles from '@styles/Header.module.css';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Navigations() {
  const location = useLocation();
  const isMarketLocation =
    location.pathname.startsWith('/items') ||
    location.pathname.startsWith('/addItem');

  return (
    <div className={styles.navCategory}>
      <Link to={'/'}>자유게시판</Link>
      <NavLink
        to="/items"
        className={() => (isMarketLocation ? `${styles.isActive}` : '')}
      >
        중고마켓
      </NavLink>
    </div>
  );
}

export default Navigations;
