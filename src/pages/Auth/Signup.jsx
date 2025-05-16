import { Link } from 'react-router-dom';
import './FormAuth.css';
import { useNavigate } from 'react-router';
import { useSetIsLogin } from '../../contexts/LoginStateContext';
import Form from './Form';
import Field from './Field';
import { FIELDS_CONFIG } from '../../constants/fieldsConfig';

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
        <Link to="/" className="form-logo-container">
          <img
            className="form-logo-image"
            src={'./images/Img_logo.png'}
            width={51.76}
          />
          <h1 className="form-logo-text">판다마켓</h1>
        </Link>
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

        <div className="form-social-container">
          <span className="form-social-text">간편 로그인하기</span>
          <a
            className="form-social-link"
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
            className="form-social-link"
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
