import { Link } from 'react-router-dom';
import styles from './LogoHeader.module.css';

const LogoHeader = () => {
  return (
    <Link to="/" className={styles['logo-container']}>
      <img
        className={styles['logo-image']}
        src={'./images/Img_logo.png'}
        width={51.76}
      />
      <h1 className={styles['logo-text']}>판다마켓</h1>
    </Link>
  );
};

export default LogoHeader;
