/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { getAuthValidStateClassName } from "../../utils/authUtils";
import getLogo from "../../utils/getLogo";
import AuthSns from "../../components/AuthSns/AuthSns";
import AuthGuide from "../../components/AuthGuide/AuthGuide";
import AuthFormInput from "../../components/AuthFormInput/AuthFormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { css } from "@emotion/react";
import { AuthContainer, AuthForm, AuthLogoImage } from "@styles/formStyles";
import Button from "@components/Button/Button";
import styled from "@emotion/styled/macro";
import { mq } from "@styles/mixins";

interface FormDataType {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
  } = useForm<FormDataType>({ mode: "onBlur" });

  const handleSubmitFormData: SubmitHandler<FormDataType> = (data) => {
    console.log(data);
  };

  return (
    <LoginPageStyle id="wrap">
      <AuthContainer>
        <h1>
          <Link to="/" aria-label="판다마켓 홈으로 이동">
            <AuthLogoImage
              width="396"
              height="132"
              src={getLogo("lg")}
              alt="판다마켓 로고 이미지"
            />
          </Link>
        </h1>
        <AuthForm onSubmit={handleSubmit(handleSubmitFormData)}>
          {/* 이메일 */}
          <AuthFormInput
            label="이메일"
            type="email"
            placeholder="이메일을 입력해주세요."
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                message: "잘못된 이메일 형식입니다.",
              },
            })}
            errorMsg={errors.email?.message}
            css={css`
              ${getAuthValidStateClassName(
                touchedFields.email,
                errors.email?.message
              )}
            `}
          />

          {/* 비밀번호 */}
          <AuthFormInput
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              pattern: {
                value: /^[0-9a-zA-Z]{8}/,
                message: "비밀번호를 8자 이상 입력해주세요.",
              },
            })}
            errorMsg={errors.password?.message}
            css={css`
              ${getAuthValidStateClassName(
                touchedFields.password,
                errors.password?.message
              )}
            `}
          />

          <Button
            size="lg"
            round
            disabled={!isValid}
            css={css`
              width: 100%;
            `}
          >
            로그인
          </Button>
        </AuthForm>
        <AuthSns />
        <AuthGuide
          guideTxt="판다마켓이 처음이신가요?"
          linkTxt="회원가입"
          linkUrl="/signup"
        />
      </AuthContainer>
    </LoginPageStyle>
  );
};

const LoginPageStyle = styled.div`
  padding: 231px 0;

  ${mq["tablet"]} {
    padding: 190px 0;
  }

  ${mq["mobile"]} {
    padding: 80px 0;
  }
`;

export default LoginPage;
