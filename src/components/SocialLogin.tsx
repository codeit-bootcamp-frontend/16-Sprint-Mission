import googleIcon from '@assets/icon/login_google.png';
import kakaoIcon from '@assets/icon/login_kakao.png';
import styles from '@pages/Auth/styles/Auth.module.css';

function SocialLogin() {
  return (
    <div className={styles.loginAlert}>
      간편 로그인하기
      <div className={styles.iconContainer}>
        <a
          aria-label="구글로 로그인"
          rel="noopener"
          target="_blank"
          href="https://www.google.com/"
        >
          <img src={googleIcon} alt="구글 아이콘" />
        </a>
        <a
          aria-label="카카오로 로그인"
          rel="noopener"
          target="_blank"
          href="https://www.kakaocorp.com/page/"
        >
          <img src={kakaoIcon} alt="카카오 아이콘" />
        </a>
      </div>
    </div>
  );
}

export default SocialLogin;
