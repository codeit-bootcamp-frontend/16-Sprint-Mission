import { Link } from 'react-router-dom';
import Button from '../components/button.js';
import Input from "../components/input";
import Visibility from '../public/login/btn_visibility_on_24px.png';
import GoogleLogo from '../public/login/Component 2.png';
import KakaoLogo from '../public/login/Component 3.png';
import HeaderLogo from '../public/login/logo.png';
import './register.css';

function Register() {
  return (
    <div className="wrapper">
      <div className='container'>
        <header>
          <img src={HeaderLogo} alt="로그인 페이지 판다마켓 로고" />
        </header>
        <main>
          <label className='label'>
            이메일
            <Input />
          </label>
          <label className='label'>
            닉네임
            <Input />
          </label>
          <label className='label'>
            비밀번호
            <Input slot={Visibility} slotAlt='비밀번호 보이기 토글 버튼' />
          </label>
          <label className='label'>
            비밀번호 확인
            <Input slot={Visibility} slotAlt='비밀번호 보이기 토글 버튼' />
          </label>
          <Button>회원가입</Button>
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
