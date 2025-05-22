import styles from './SocialLogin.module.css';

const SocialLogin = () => {
  return (
    <div className={styles['social-container']}>
      <span className={styles['social-text']}>간편 로그인하기</span>
      <a
        className={styles['social-link']}
        href="#"
        aria-label={'구글 아이디로 간편 로그인 버튼'}
      >
        <img
          src={'./images/icon_google.png'}
          width={42}
          alt={'구글 아이디로 간편 로그인'}
        />
      </a>
      <a
        className={styles['social-link']}
        href="#"
        aria-label={'카카오 아이디로 간편 로그인 버튼'}
      >
        <img
          src={'./images/icon_kakao.png'}
          width={42}
          alt={'카카오 아이디로 간편 로그인'}
        />
      </a>
    </div>
  );
};

export default SocialLogin;
