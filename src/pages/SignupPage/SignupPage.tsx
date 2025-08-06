/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
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
  nickname: string;
  password: string;
  passwordConfirm: string;
}

const SignupPage = () => {
  const {
    register,
    watch,
    handleSubmit,
    trigger,
    formState: { errors, isValid, touchedFields, dirtyFields },
  } = useForm<FormDataType>({ mode: "onBlur" });

  const password = watch("password");

  const handleSubmitFormData: SubmitHandler<FormDataType> = (data) => {
    console.log(data);
  };

  // 비밀번호 확인 유효성 통과 후, 비밀번호 필드 수정시 비밀번호 확인 재유효성 검사
  // register의 onChange는 값이 비동기로 나중에 변경된 값이 적용되는건지 잘 되지 않음.
  useEffect(() => {
    if (dirtyFields.passwordConfirm) trigger("passwordConfirm");
  }, [password, dirtyFields.passwordConfirm, trigger]);

  return (
    <SignupPageStyle id="wrap">
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

          {/* 닉네임 */}
          <AuthFormInput
            label="닉네임"
            type="text"
            placeholder="닉네임을 입력해주세요."
            {...register("nickname", {
              required: "닉네임을 입력해주세요.",
            })}
            errorMsg={errors.nickname?.message}
            css={css`
              ${getAuthValidStateClassName(
                touchedFields.nickname,
                errors.nickname?.message
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

          {/* 비밀번호 확인 */}
          <AuthFormInput
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 다시 한 번 입력해주세요."
            {...register("passwordConfirm", {
              required: "비밀번호를 입력해주세요.",
              validate: (value) => {
                if (value !== password) return "비밀번호가 일치하지 않습니다.";
                return true;
              },
            })}
            errorMsg={errors.passwordConfirm?.message}
            css={css`
              ${getAuthValidStateClassName(
                touchedFields.passwordConfirm,
                errors.passwordConfirm?.message
              )}
            `}
          />

          <Button
            disabled={!isValid}
            size="lg"
            round
            css={css`
              width: 100%;
            `}
          >
            회원가입
          </Button>
        </AuthForm>
        <AuthSns />
        <AuthGuide
          guideTxt="이미 회원이신가요?"
          linkTxt="로그인"
          linkUrl="/login"
        />
      </AuthContainer>
    </SignupPageStyle>
  );
};

const SignupPageStyle = styled.div`
  padding: 60px 0;

  ${mq["tablet"]} {
    padding: 48px 0;
  }

  ${mq["mobile"]} {
    padding: 24px 0;
  }
`;

export default SignupPage;
