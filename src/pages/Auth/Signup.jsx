import { Link } from 'react-router-dom';
import './FormAuth.css';
import { useNavigate } from 'react-router';
import { useSetIsLogin } from '../../contexts/LoginStateContext';
import Form from '../../components/Form';
import Field from '../../components/Field';
import { FIELDS_CONFIG } from '../../constants/fieldsConfig';
import SocialLogin from '../../components/SocialLogin';
import LogoHeader from '../../components/LogoHeader';

const FIELD_KEYS = ['email', 'nickname', 'password', 'passwordVerify'];

const Signup = () => {
  const onSubmitNavigate = useNavigate();
  const setIsLogin = useSetIsLogin();

  const handleSubmit = () => {
    onSubmitNavigate('/items');
    setIsLogin(true);
  };

  return (
    <>
      <main className="page-form">
        <LogoHeader />
        <Form fieldKeys={FIELD_KEYS} onSubmit={handleSubmit}>
          {({ isSubmitEnabled, handlers, getFieldState }) => (
            <>
              <Field
                fieldConfig={FIELDS_CONFIG.email}
                handlers={handlers}
                getFieldState={getFieldState}
              />
              <Field
                fieldConfig={FIELDS_CONFIG.nickname}
                handlers={handlers}
                getFieldState={getFieldState}
              />
              <Field
                fieldConfig={FIELDS_CONFIG.password}
                handlers={handlers}
                getFieldState={getFieldState}
              />
              <Field
                fieldConfig={FIELDS_CONFIG.passwordVerify}
                handlers={handlers}
                getFieldState={getFieldState}
              />
              <button
                id="form-submit"
                className="button-style"
                disabled={!isSubmitEnabled}
              >
                로그인
              </button>
            </>
          )}
        </Form>
        <SocialLogin />
        <span className="form-hint">
          이미 판다마켓 회원이신가요?{' '}
          <Link
            className="form-hint-link"
            to={'/login'}
            aria-label="로그인 버튼"
          >
            로그인
          </Link>
        </span>
      </main>
    </>
  );
};

export default Signup;
