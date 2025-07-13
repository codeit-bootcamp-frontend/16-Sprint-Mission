import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-[60px] py-[10px] bg-white border-b border-b-gray-200">
      <div className="flex items-center md:w-full lg:w-[1200px] lg:mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-img.svg"
            alt="두잇 로고 이미지"
            width="70"
            height="40"
            className="mr-2 h-[40px]"
          />
          <Image
            src="/images/logo-txt.svg"
            alt="do it;"
            width="74"
            height="40"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
