import logo from '@assets/images/logo-title.png';
import SocialLogin from '@components/SocialLogin';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import EmailField from './EmailField';
import PasswordField from './PasswordField';
import styles from './styles/Auth.module.css';
import SubmitButton from './SubmitButton';
import { FormDataSchema } from './FormInput';
import { zodResolver } from '@hookform/resolvers/zod';
import type z from 'zod';

//기존 유효성 평가 -> VALID_RULES 사용 근데 사라졌으니까
//리졸버 연결해야하는데 조드 스키마랑 여기 페이지의 필드가 일치해야 해서
//  스키마를 새로 만들거나 pick해오는 과정이 필요
const LoginFormSchema = FormDataSchema.pick({
  'user-email': true,
  'user-password': true,
}); //스키마 메서드pick 사용해서 가져오기

type LoginFormData = z.infer<typeof LoginFormSchema>; //스키마를 기반으로 타입으로 다시 만들어줌

function Login() {
  const toItemsNavigation = useNavigate();
  const methods = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
    mode: 'all',
  }); //change,blur될 때 유효성 평가해줘

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    //data는 RHF의 FormValues타입. RHF의 SubmitHandler는 e를 못 받는다
    sessionStorage.setItem('loggedIn', data['user-email']);
    toItemsNavigation('/items');
  };

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
