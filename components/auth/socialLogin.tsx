import Image from "next/image";
import Link from "next/link";
import googleImg from "../../public/images/icons/ic_google.svg";
import kakaoImg from "../../public/images/icons/ic_kakao.svg";

/**
 * 소셜 로그인 버튼 UI를 렌더링하는 재사용 가능한 컴포넌트입니다.
 *
 * @note 이미지 파일 경로는 public 디렉터리를 기준으로 합니다.
 *       (예: /img/social/google-img.png)
 */
export default function SocialLogin() {
  return (
    <div className="py-4 px-6 rounded-lg bg-blue-50 flex justify-between items-center gap-2.5">
      <p className="font-medium text-gray-800">간편 로그인하기</p>
      <div className="flex items-center gap-4">
        <Link
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={googleImg} alt="구글 로그인" width={42} height={42} />
        </Link>
        <Link
          href="https://www.kakaocorp.com/page/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={kakaoImg} alt="카카오 로그인" width={42} height={42} />
        </Link>
      </div>
    </div>
  );
}
