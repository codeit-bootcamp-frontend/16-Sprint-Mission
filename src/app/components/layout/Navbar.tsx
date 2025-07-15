"use client";

import Image from "next/image";
import logoLarge from "@/app/ui/image/logo/doit-logo-large.png";
import logoSmall from "@/app/ui/image/logo/doit-logo-small.png";
import useInnerWidth from "../../hooks/getWindowSize";
import Link from "next/link";

const Navbar = () => {
  const isMobile = useInnerWidth() < 768;
  const imgWidth = isMobile ? 71 : 151;
  const imgHeight = 40;

  return (
    <nav
      className="flex items-center h-[60px] px-4 border border-slate-200
      md:px-6
      lg:px-[360px]"
    >
      <Link href="/" className="cursor-pointer">
        <Image
          src={isMobile ? logoSmall : logoLarge}
          alt="사이트 이름 do it이 적혀있는 로고"
          width={imgWidth}
          height={imgHeight}
          style={{ width: imgWidth, height: imgHeight }}
          priority
        />
      </Link>
    </nav>
  );
};

export default Navbar;
