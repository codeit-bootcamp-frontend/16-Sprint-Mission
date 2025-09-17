import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import Nav from "@/components/Nav";
import Button from "@/components/ui/Button";
import { useAuthStore } from "@/stores/authStore";
import Dropdown from "@/components/ui/Dropdown";
import { useShallow } from "zustand/shallow";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, clearUser } = useAuthStore(
    useShallow((state) => ({ user: state.user, clearUser: state.clearUser }))
  );

  const logout = async () => {
    try {
      clearUser();
      setIsDropdownOpen(false);
    } catch (err) {
      alert(`로그아웃에 실패했습니다. ${err}`);
    }
  };

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

        <div className="relative ml-auto flex">
          {user ? (
            <Avatar
              imgSrc="/images/avatar.png"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            />
          ) : (
            <Button
              size="sm"
              variant="primary"
              onClick={() => router.push("/login")}
            >
              로그인
            </Button>
          )}
          <Dropdown
            items={["로그아웃"]}
            onClick={logout}
            isDropdownOpen={isDropdownOpen}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
