import "./css/Auth.css";
import "./css/LoginPage.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Label from "../components/Label";
import Textfield from "../components/Textfield";
import logo from "../img/logo.png";
import kakakoIcon from "../img/kakao.png";
import googleIcon from "../img/google.png";
import { useEffect } from "react";
import useLoginStore from "../stores/useLoginStore";
import { LoginFieldName } from "../types/field";

const LoginPage = () => {
  const { email, password, setField, validateField, resetFields } =
    useLoginStore();

  /* 유효성 체크 */
  const updateValidate = (name: string, value: string) => {
    validateField(name as LoginFieldName, value);
  };

  /* 텍스트필드 데이터 세팅과 유효성 체크 */
  const onChangeTextfield = (name: string, value: string) => {
    let trimVal = value.trim();
    setField(name as LoginFieldName, trimVal);
    updateValidate(name, trimVal);
  };

  const isLoginFormValid =
    email.validInfo.isValid && password.validInfo.isValid;

  useEffect(() => {
    resetFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="form__container login__container">
      <form className="form__container__content">
        <Link to="/">
          <img
            src={logo}
            srcSet={`${logo} 198w, ${logo} 396w`}
            sizes={"(min-width: 768px) 396px, 198px"}
            alt="판다마켓 로고"
            className="form__container__logo"
          />
        </Link>

        <div className="form_container__group">
          <Label htmlFor="email">이메일</Label>
          <Textfield
            value={email.value}
            message={email.validInfo.message}
            isValid={email.validInfo.isValid}
            id="email"
            name="email"
            type="email"
            placeholder="입력"
            autoComplete="email"
            onChange={(e) => onChangeTextfield(e.target.name, e.target.value)}
          />
        </div>

        <div className="form_container__group">
          <Label htmlFor="password">비밀번호</Label>
          <Textfield
            value={password.value}
            message={password.validInfo.message}
            isValid={password.validInfo.isValid}
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            autoComplete="off"
            onChange={(e) => onChangeTextfield(e.target.name, e.target.value)}
          />
        </div>

        <Button disabled={!isLoginFormValid}>로그인</Button>
        <div className="form__container__banner">
          간편 로그인하기
          <div className="form__container__banner__icon">
            <img src={kakakoIcon} width="42" alt="카카오아이콘" />
            <img src={googleIcon} width="42" alt="구글아이콘" />
          </div>
        </div>
        <div className="form__container__signup">
          판다마켓이 처음이신가요?
          <Link to="/signup">회원가입</Link>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
