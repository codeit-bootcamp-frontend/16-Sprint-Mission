import { Link } from 'react-router-dom';
import SnsList from './SnsList';
import styles from './styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <span>©codeit - 2024</span>
        <div>
          <Link aria-label="약관으로 이동" to="/privacy">
            Privacy Policy
          </Link>
          <Link aria-label="FAQ로 이동" to="/faq">
            FAQ
          </Link>
        </div>
        <ul className={styles.snsList}>
          <SnsList />
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
