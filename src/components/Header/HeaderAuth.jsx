import userImg from '@assets/icon/ic_user.png';
import styles from '@styles/Header.module.css';
import { Link } from 'react-router-dom';

function HeaderAuth({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn ? (
        <div className={styles.myPage}>
          <img src={userImg} alt="마이페이지 아이콘" />
        </div>
      ) : (
        <Link to="login" className={styles.navButton}>
          로그인
        </Link>
      )}
    </>
  );
}

export default HeaderAuth;
