import logo from '@assets/images/logo-title.png';
import SocialLogin from '@components/SocialLogin';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import EmailField from './EmailField';
import NameField from './NameField';
import PasswordCheckField from './PasswordCheckField';
import PasswordField from './PasswordField';
import styles from './styles/Auth.module.css';
import SubmitButton from './SubmitButton';
import type { FormValues } from './Login';

export interface SignUpValues extends FormValues {
  'user-email': string;
  'user-password': string;
  'user-password-check': string;
  'user-name': string;
}

function SignUp() {
  const toLoginNavigate = useNavigate();
  const methods = useForm<SignUpValues>({ mode: 'all' });

  const onSubmit: SubmitHandler<SignUpValues> = () => {
    toLoginNavigate('/Login');
  };

  return (
    <main className={styles.signUp}>
      <section className={styles.authSection}>
        <div className={styles.logo}>
          <Link aria-label="판다마켓 홈으로 이동" to="/">
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
              <NameField />
              <PasswordField />
              <PasswordCheckField />
              <SubmitButton>회원가입</SubmitButton>
            </fieldset>
            <SocialLogin />
            <div className={styles.loginGuide}>
              이미 회원이신가요?&nbsp;
              <Link aria-label="로그인 페이지로 이동" to="/login">
                로그인
              </Link>
            </div>
          </form>
        </FormProvider>
      </section>
    </main>
  );
}

export default SignUp;
