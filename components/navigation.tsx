"use client";

import img from "../public/images/logo/panda_logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "./button";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <header className="border-b border-[#DFDFDF]">
        <nav className="flex items-center justify-between m-auto max-w-[1120px] h-[70px] px-[16px] md:px-[24px]">
          <div>
            <Link href={"/"} className="flex items-center">
              <Image
                src={img}
                alt="판다마켓 로고"
                className="hidden md:inline me-[10px]"
              />
              <p className="font-rokaf font-bold text-primary-100 text-[25.63px]">
                판다마켓
              </p>
            </Link>
          </div>
          <Button
            href={pathname === "/" ? "/login" : "/"}
            className={
              "cursor-pointer w-[128px] h-[48px] bg-primary-100 px-[23px] py-[12px] text-gray-100 rounded-[8px] font-semibold"
            }
          >
            로그인
          </Button>
        </nav>
      </header>
    </>
  );
}
