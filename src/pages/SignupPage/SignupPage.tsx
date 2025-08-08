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
  nickname: string;
  password: string;
  passwordConfirm: string;
}

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isValid, touchedFields },
  } = useForm<FormDataType>({ mode: "onBlur" });

  const handleSubmitFormData: SubmitHandler<FormDataType> = (data) => {
    console.log(data);
  };

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
          {/* 최초 렌더링시에는 입력할 때 리렌더링이 발생하지 않음. */}
          {/* watch 때문에 불필요한 리렌더링 발생 :: watch는 실시간으로 값을 추적하기 때문에 리렌더링이 발생할 수밖에 없는거 같다. 웬만해선 안쓰는게 좋을 듯... */}
          {/* getValues는 리렌더링이 발생하지 않고, 실시간으로 값을 추적하지는 못하지만, 실행될 시점에 저장되어 있는 값을 가져옴. */}
          <AuthFormInput
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              pattern: {
                value: /^[0-9a-zA-Z]{8,}$/,
                message: "비밀번호를 8자 이상 입력해주세요.",
              },
              onBlur: () => {
                // validate를 사용했으나, 간헐적으로 무한루프가 일어날 때가 있어서, onBlur로 변경.
                const passwordConfirm = getValues("passwordConfirm");
                if (passwordConfirm) trigger("passwordConfirm");
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
                const password = getValues("password");
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
