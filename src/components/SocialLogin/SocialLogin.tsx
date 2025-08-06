/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import googleIcon from "@/assets/images/ic_google.png";
import kakaoIcon from "@/assets/images/ic_kakao.png";
import SocialLoginButton from "./SocialLoginButton";

const SocialLogin = () => {
  return (
    <div css={SocialLoginStyle}>
      간편 로그인하기
      <div className="social-login-icons">
        <SocialLoginButton
          href="https://www.google.com"
          title="클릭 시 구글 계정으로 로그인 합니다."
          ariaLabel="구글 계정으로 로그인하기"
          imgSrc={googleIcon}
          imgAlt="구글 아이콘"
        />
        <SocialLoginButton
          href="https://www.kakaocorp.com/page"
          title="클릭 시 카카오 계정으로 로그인 합니다."
          ariaLabel="카카오 계정으로 로그인하기"
          imgSrc={kakaoIcon}
          imgAlt="카카오 아이콘"
        />
      </div>
    </div>
  );
};

export default SocialLogin;

const SocialLoginStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  padding: 16px 24px;
  border-radius: var(--border-radius-xs);
  background: var(--background-blue-light);
  font-size: 16px;
  color: var(--gray800);

  .social-login-icons {
    display: flex;
    gap: 1rem;
  }

  @media (min-width: 640px) {
    margin: 0;
  }
`;
