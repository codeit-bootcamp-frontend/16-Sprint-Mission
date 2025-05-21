import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button.jsx';
import Input from "../components/input.jsx";
import inputValidator from '../functions/validator.js';
import Visibility from '../public/login/btn_visibility_on_24px.png';
import GoogleLogo from '../public/login/Component 2.png';
import KakaoLogo from '../public/login/Component 3.png';
import HeaderLogo from '../public/login/logo.png';
import './login.css';

function Login() {
  const [login, setLogin] = useState({ email: "", pw: "" });
  const [validate, setValidate] = useState({
    email: {
      state: false,
      message: '',
    },
    pw: {
      state: false,
      message: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({ ...prevLogin, [name]: value }))
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
            <Input onChange={handleChange} name='email' onBlur={handleBlur} />
          </label>
          {!validate.email.state && (
            <div className='error-message-container'>
              <span>{validate.email.message}</span>
            </div>
          )}
          <label className='label'>
            비밀번호
            <Input
              slot={Visibility}
              slotAlt='비밀번호 보이기 토글 버튼'
              onChange={handleChange}
              type='password'
              name='pw'
              onBlur={handleBlur}
            />
          </label>
          {!validate.pw.state && (
            <div className='error-message-container'>
              <span>{validate.pw.message}</span>
            </div>
          )}
          <Button disabled={validate.pw.state && validate.email.state ? false : true} link='/items'>로그인</Button>
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
            <span>판다마켓이 처음이신가요?</span>
            <Link to='/register' className='register-link'>회원가입</Link>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Login;
