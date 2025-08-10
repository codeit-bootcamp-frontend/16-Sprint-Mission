import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-slate200 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <Link href="/" className="inline-flex items-center h-[60px]">
          <Image
            src="/images/Logo.svg"
            width={151}
            height={40}
            alt="do it 로고"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
