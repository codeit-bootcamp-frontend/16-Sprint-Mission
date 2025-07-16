import "./css/Auth.css";
import "./css/SignupPage.css";
import { Link } from "react-router-dom";
import { FieldName } from "../types/field";
import useAuthStore from "../stores/useAuthStore";
import logo from "../img/logo.png";
import Label from "../components/Label";
import Textfield from "../components/Textfield";
import Button from "../components/Button";
import kakakoIcon from "../img/kakao.png";
import googleIcon from "../img/google.png";
import { useEffect } from "react";

const SignupPage = () => {
  const {
    email,
    password,
    passwordCheck,
    nickname,
    setField,
    validateField,
    resetFields,
  } = useAuthStore();

  /* 유효성 체크 */
  const updateValidate = (name: string, value: string) => {
    validateField(name as FieldName, value);
  };

  /* 텍스트필드 데이터 세팅과 유효성 체크 */
  const onChangeTextfield = (name: string, value: string) => {
    let trimVal = value.trim();
    setField(name as FieldName, trimVal);
    updateValidate(name, trimVal);
  };

  const disableSignupButton = () => {
    return !(
      email.validInfo.isValid &&
      password.validInfo.isValid &&
      passwordCheck.validInfo.isValid &&
      nickname.validInfo.isValid
    );
  };

  useEffect(() => {
    resetFields();
  }, [resetFields]);

  return (
    <section className="form__container signup__container">
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
            onValueChange={onChangeTextfield}
          />
        </div>

        <div className="form_container__group">
          <Label htmlFor="nickname">닉네임</Label>
          <Textfield
            value={nickname.value}
            message={nickname.validInfo.message}
            isValid={nickname.validInfo.isValid}
            id="nickname"
            name="nickname"
            type="text"
            placeholder="입력"
            onValueChange={onChangeTextfield}
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
            onValueChange={onChangeTextfield}
          />
        </div>

        <div className="form_container__group">
          <Label htmlFor="passwordCheck">비밀번호 확인</Label>
          <Textfield
            value={passwordCheck.value}
            message={passwordCheck.validInfo.message}
            isValid={passwordCheck.validInfo.isValid}
            id="passwordCheck"
            name="passwordCheck"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            autoComplete="off"
            onValueChange={onChangeTextfield}
          />
        </div>

        <Button disabled={disableSignupButton()}>회원가입</Button>
        <div className="form__container__banner">
          간편 로그인하기
          <div className="form__container__banner__icon">
            <img src={kakakoIcon} width="42" alt="카카오아이콘" />
            <img src={googleIcon} width="42" alt="구글아이콘" />
          </div>
        </div>
        <div className="form__container__signup">
          이미 회원이신가요?
          <Link to="/login">로그인</Link>
        </div>
      </form>
    </section>
  );
};

export default SignupPage;
