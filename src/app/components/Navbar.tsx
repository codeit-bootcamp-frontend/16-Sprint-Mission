"use client";

import Image from "next/image";
import logoLarge from "@/app/ui/image/logo/doit-logo-large.png";
import logoSmall from "@/app/ui/image/logo/doit-logo-small.png";
import useInnerWidth from "../hook/getWindowSize";

const Navbar = () => {
  const isMobile = useInnerWidth() < 768;

  return (
    <nav
      className="flex items-center h-[60px] px-4
      md:px-6
      lg:px-[360px]"
    >
      <Image
        src={isMobile ? logoSmall : logoLarge}
        alt="사이트 이름 do it이 적혀있는 로고"
        width={isMobile ? 71 : 151}
        height={40}
        priority
      />
    </nav>
  );
};

export default Navbar;
