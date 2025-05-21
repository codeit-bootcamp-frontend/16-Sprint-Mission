import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button.jsx';
import Input from "../components/input.jsx";
import Visibility from '../public/login/btn_visibility_on_24px.png';
import GoogleLogo from '../public/login/Component 2.png';
import KakaoLogo from '../public/login/Component 3.png';
import HeaderLogo from '../public/login/logo.png';
import './register.css';
import inputValidator from '../functions/validator.js';

function Register() {
  const [validate, setValidate] = useState({
    email: {
      state: false,
      message: '',
    },
    pw: {
      state: false,
      message: '',
    },
    nickname: {
      state: false,
      message: '',
    }
  });
  const [pwValid, setPwValid] = useState(false);
  const pwValidate = useRef({ pw: '', pwConfirm: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    pwValidate.current = { ...pwValidate.current, [name]: value };
    if (pwValidate.current.pw !== pwValidate.current.pwConfirm) setPwValid(false);
    else setPwValid(true);
  }

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const validateResult = inputValidator(value, name);
    setValidate((prevValidate) => ({ ...prevValidate, [name]: validateResult }))
  }

  return (
    <div className="wrapper">
      <div className='container'>
        <header>
          <img src={HeaderLogo} alt="로그인 페이지 판다마켓 로고" />
        </header>
        <main className='main'>
          <label className='label'>
            이메일
            <Input name='email' onBlur={handleBlur} />
          </label>
          {!validate.email.state && (
            <div className='error-message-container'>
              <span>{validate.email.message}</span>
            </div>
          )}
          <label className='label'>
            닉네임
            <Input name='nickname' onBlur={handleBlur} />
          </label>
          {!validate.nickname.state && (
            <div className='error-message-container'>
              <span>{validate.nickname.message}</span>
            </div>
          )}
          <label className='label'>
            비밀번호
            <Input
              slot={Visibility}
              slotAlt='비밀번호 보이기 토글 버튼'
              name='pw'
              onBlur={handleBlur}
              onChange={handleChange}
              type='password'
            />
          </label>
          {!validate.pw.state && (
            <div className='error-message-container'>
              <span>{validate.pw.message}</span>
            </div>
          )}
          <label className='label'>
            비밀번호 확인
            <Input
              slot={Visibility}
              slotAlt='비밀번호 보이기 토글 버튼'
              name='pwConfirm'
              onBlur={handleBlur}
              onChange={handleChange}
              type='password'
            />
          </label>
          {!pwValid && (
            <div className='error-message-container'>
              <span>비밀번호가 일치하지 않습니다.</span>
            </div>
          )}
          <Button
            disabled={validate.email.state && validate.pw.state && validate.nickname.state && pwValid ? false : true}
            link='/login'
          >회원가입</Button>
          <section className='easy-login'>
            <span>간편 로그인하기</span>
            <div className='easy-login-logo'>
              <a href='https://www.google.com/'>
                <img src={GoogleLogo} alt="구글 간편 로그인" />
              </a>
              <a href="https://www.kakaocorp.com/page/">
                <img src={KakaoLogo} alt="구글 간편 로그인" />
              </a>
            </div>
          </section>
          <section className='register'>
            <span>이미 회원이신가요?</span>
            <Link to='/login' className='register-link'>로그인</Link>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Register;
