import React from "react";
import Image from "next/image";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import Nav from "@/components/Nav";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header className="sticky left-0 top-0 h-[70px] px-4 md:px-6 lg:px-[12.5rem] z-10 bg-white flex border-b border-[#dfdfdf]">
      <div className="flex items-center py-3 w-full">
        <Link href="/" className="flex items-center gap-2 mr-2">
          <Image
            src="/images/logo-panda.svg"
            alt="판다마켓 로고 이미지"
            width="40"
            height="40"
            className="hidden w-[40px] mr-2 md:inline-block"
          />
          <Image
            src="/images/logo-txt.svg"
            alt="판다마켓 로고 텍스트"
            width="100"
            height="24"
            className="mr-2 md:mr-8"
          />
        </Link>

        <Nav />

        <div className="ml-auto flex">
          {/* <Avatar imgSrc="/images/avatar.png" /> */}
          <Button
            size="sm"
            variant="primary"
            onClick={() => router.push("/login")}
          >
            로그인
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
