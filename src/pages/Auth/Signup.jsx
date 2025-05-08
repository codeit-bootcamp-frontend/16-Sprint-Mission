import { Link } from 'react-router-dom';
import './FormAuth.css';
import { validators } from './modules/validators';
import { useFormFields } from '../../hooks/useFormFields';
import Field from './Field';

const Signup = () => {
  const FIELDS = {
    email: validators.email,
    nickname: validators.nickname,
    password: (passwordText) => {
      const passwordVerifyText = values.passwordVerify;
      return validators.password(passwordText, passwordVerifyText);
    },
    passwordVerify: (passwordVerifyText) => {
      const passwordText = values.password;
      return validators.passwordVerify(passwordVerifyText, passwordText);
    },
  };
  const onSubmitRedirectURL = '/login';

  const formDataObject = {
    FIELDS,
    onSubmitRedirectURL,
  };

  const {
    values,
    valids,
    hints,
    isVisibles,
    isSubmitEnabled,
    handleInputChange,
    handlePasswordIconClick,
    handleSubmit,
  } = useFormFields(formDataObject);

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
        <form className="form-container" onSubmit={handleSubmit}>
          <Field
            id={'email'}
            labelText={'이메일'}
            placeholder={'이메일을 입력해주세요'}
            ariaLabel={'이메일 입력 칸'}
            type={'email'}
            autoComplete={'email'}
            value={values['email']}
            valid={valids['email']}
            hint={hints['email']}
            isVisible={isVisibles['email']}
            handleInputChange={handleInputChange}
            handlePasswordIconClick={handlePasswordIconClick}
          />
          <Field
            id={'nickname'}
            labelText={'닉네임'}
            placeholder={'닉네임을 입력해주세요'}
            ariaLabel={'닉네임 입력 칸'}
            value={values['nickname']}
            valid={valids['nickname']}
            hint={hints['nickname']}
            isVisible={isVisibles['nickname']}
            handleInputChange={handleInputChange}
            handlePasswordIconClick={handlePasswordIconClick}
          />
          <Field
            id={'password'}
            labelText={'비밀번호'}
            placeholder={'비밀번호를 입력해주세요'}
            ariaLabel={'비밀번호 입력 칸'}
            type={'password'}
            autoComplete={'current-password'}
            value={values['password']}
            valid={valids['password']}
            hint={hints['password']}
            isVisible={isVisibles['password']}
            handleInputChange={handleInputChange}
            handlePasswordIconClick={handlePasswordIconClick}
          />
          <Field
            id={'passwordVerify'}
            labelText={'비밀번호 확인'}
            placeholder={'비밀번호를 다시 한 번 입력해주세요'}
            ariaLabel={'비밀번호 입력 칸'}
            type={'password'}
            autoComplete={'new-password'}
            value={values['passwordVerify']}
            valid={valids['passwordVerify']}
            hint={hints['passwordVerify']}
            isVisible={isVisibles['passwordVerify']}
            handleInputChange={handleInputChange}
            handlePasswordIconClick={handlePasswordIconClick}
          />
          <button
            id="form-submit"
            className="button-style"
            disabled={!isSubmitEnabled}
          >
            회원가입
          </button>
        </form>
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
          이미 회원이신가요?{' '}
          <Link
            className="form-hint-link"
            to={'/login'}
            aria-label="회원가입 버튼"
          >
            로그인
          </Link>
        </span>
      </main>
    </>
  );
};

export default Signup;
