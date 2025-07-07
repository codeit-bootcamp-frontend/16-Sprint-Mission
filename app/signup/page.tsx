import Link from "next/link";
import Image from "next/image";
import logoImg from "../../public/images/logo/logo.svg";
import SignupForm from "../../components/auth/signupForm";
import SocialLogin from "../../components/auth/socialLogin";

export default function SignupPage() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-full gap-10 p-4">
      <Link href="/">
        <Image
          src={logoImg} // public 폴더 기준 경로
          alt="판다마켓 로고"
          priority
          className="w-[198px] h-[66px] md:w-[396px] md:h-[132px]"
        />
      </Link>
      <div className="flex flex-col w-full max-w-2xl gap-6">
        <SignupForm />
        <SocialLogin />
        <div className="text-center text-gray-700 mb-[200px]">
          이미 회원이신가요?{" "}
          <Link href="/login" className="text-blue-500 underline">
            로그인
          </Link>
        </div>
      </div>
    </main>
  );
}
