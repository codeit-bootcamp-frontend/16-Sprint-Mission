import { Link } from 'react-router-dom';
import './FormAuth.css';
import { useNavigate } from 'react-router';
import { useSetIsLogin } from '../../contexts/LoginStateContext';
import Form from '../../components/Form';
import Field from '../../components/Field';
import { FIELDS_CONFIG } from '../../constants/fieldsConfig';
import SocialLogin from '../../components/SocialLogin';
import LogoHeader from '../../components/LogoHeader';

const FIELD_KEYS = ['email', 'password'];

const Login = () => {
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
                fieldConfig={FIELDS_CONFIG.password}
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
          판다마켓이 처음이신가요?{' '}
          <Link
            className="form-hint-link"
            to={'/signup'}
            aria-label="회원가입 버튼"
          >
            회원가입
          </Link>
        </span>
      </main>
    </>
  );
};

export default Login;
