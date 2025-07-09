import Link from "next/link";
import Image from "next/image";
import logoImg from "../../public/images/logo/logo.svg";
import LoginForm from "../../components/auth/loginForm";
import SocialLogin from "../../components/auth/socialLogin";

export default function LoginPage() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-full gap-10 p-4">
      <Link href="/">
        <Image
          src={logoImg}
          alt="판다마켓 로고"
          width={396}
          height={112}
          priority
        />
      </Link>
      <div className="flex flex-col w-full max-w-2xl gap-6">
        <LoginForm />
        <SocialLogin />
        <div className="text-center text-gray-700">
          판다마켓이 처음이신가요?{" "}
          <Link href="/signup" className="text-blue-500 underline">
            회원가입
          </Link>
        </div>
      </div>
    </main>
  );
}
