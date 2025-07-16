import Button from "../components/Button";
import Label from "../components/Label";
import Textfield from "../components/Textfield";
import logo from "../img/logo.png";
import kakakoIcon from "../img/kakao.png";
import googleIcon from "../img/google.png";
import "./css/Auth.css";
import "./css/LoginPage.css";

const LoginPage = () => {
  return (
    <section className="form__container login__container">
      <form className="form__container__content">
        <a href="/">
          <img
            src={logo}
            alt="판다마켓 로고"
            className="form__container__logo"
            width="396"
          />
        </a>

        <div className="form_container__group">
          <Label htmlFor="email">이메일</Label>
          <Textfield
            id="email"
            name="email"
            type="email"
            placeholder="입력"
            autoComplete="email"
          />
        </div>

        <div className="form_container__group">
          <Label htmlFor="password">비밀번호</Label>
          <Textfield
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            autoComplete="off"
          />
        </div>

        <Button disabled={true}>로그인</Button>
        <div className="form__container__banner">
          간편 로그인하기
          <div className="form__container__banner__icon">
            <img src={kakakoIcon} width="42" alt="카카오아이콘" />
            <img src={googleIcon} width="42" alt="구글아이콘" />
          </div>
        </div>
        <div className="form__container__signup">
          판다마켓이 처음이신가요?
          <a href="/signup.html">회원가입</a>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
