import googleIcon from "@/assets/images/ic_google.png";
import kakaoIcon from "@/assets/images/ic_kakao.png";
import SocialLoginButton from "./SocialLoginButton";

const SocialLogin = () => {
  return (
    <div className="flex justify-between items-center my-2 md:my-0 py-4 px-6 rounded-md bg-primary-light text-base text-gray-800">
      간편 로그인하기
      <div className="flex gap-4">
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
