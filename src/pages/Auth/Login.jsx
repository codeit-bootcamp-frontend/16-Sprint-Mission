import logo from '@assets/images/logo-title.png';
import SocialLogin from '@components/SocialLogin';
import { FormProvider, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import EmailField from './EmailField';
import PasswordField from './PasswordField';
import styles from './styles/Auth.module.css';
import SubmitButton from './SubmitButton';

function Login() {
  const toItemsNavigation = useNavigate();
  const methods = useForm({ mode: 'all' }); //change,blur될 때 유효성 평가해줘

  function onSubmit(data, e) {
    if (!methods.isValid) {
      sessionStorage.setItem('loggedIn', data['user-email']);
      toItemsNavigation('/items');
    } else {
      e.preventDefault();
    }
  }

  return (
    <main className={styles.login}>
      <section className={styles.authSection}>
        <div className={styles.logo}>
          <Link to="/" aria-label="판다마켓 홈으로 이동">
            <img src={logo} alt="판다마켓 로고" />
          </Link>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className={styles.form}
          >
            <fieldset>
              <EmailField />
              <PasswordField />
              <SubmitButton>로그인</SubmitButton>
            </fieldset>
            <SocialLogin />
            <div className={styles.signUpGuide}>
              판다마켓이 처음이신가요?&nbsp;
              <Link to="/sign_up" aria-label="회원가입 페이지로 이동">
                회원가입
              </Link>
            </div>
          </form>
        </FormProvider>
      </section>
    </main>
  );
}

export default Login;
