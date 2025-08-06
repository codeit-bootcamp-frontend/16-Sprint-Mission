import googleIcon from "@/assets/icons/ic_google.svg";
import kakaoIcon from "@/assets/icons/ic_kakaotalk.svg";

const SocialLogin = () => {
  return (
    <div className="flex justify-between items-center bg-background-blue w-full h-[74px] rounded-[8px] px-lg py-md text-text-grey800 font-medium my-lg">
      간편 로그인하기
      <div className="flex gap-md">
        <img src={googleIcon} alt="구글 아이콘" />
        <img src={kakaoIcon} alt="카카오 아이콘" />
      </div>
    </div>
  );
};

export default SocialLogin;
