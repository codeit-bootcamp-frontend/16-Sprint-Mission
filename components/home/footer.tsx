import Link from "next/link";
import Image from "next/image";
import facebookImg from "../../public/images/icons/ic_facebook.svg";
import twitterImg from "../../public/images/icons/ic_twitter.svg";
import youtubeImg from "../../public/images/icons/ic_youtube.svg";
import instagramImg from "../../public/images/icons/ic_instagram.svg";

export default function Footer() {
  return (
    <footer
      className="bg-gray-900 pt-[32px]
    pb-[30px]
    md:pb-[109px]"
    >
      <nav
        className="flex flex-row flex-wrap-reverse  gap-y-[60px] justify-between max-w-[1420px] w-full mx-auto
      px-[32px]
      md:px-[104px]
      xl:px-[200px]
      "
      >
        <span
          className="text-gray-400
          basis-full
          md:basis-auto
        "
        >
          @codeit - 2024
        </span>
        <div className="text-gray-400 flex flex-row gap-[30px]">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">FAQ</Link>
        </div>
        <div className="flex flex-row gap-[12px]">
          <Link href={"https://www.facebook.com/?locale=ko_KR"}>
            <Image src={facebookImg} alt="페이스북" />
          </Link>
          <Link href={"https://x.com/?lang=ko"}>
            <Image src={twitterImg} alt="트위터" />
          </Link>
          <Link href={"https://www.youtube.com/"}>
            <Image src={youtubeImg} alt="유튜브" />
          </Link>
          <Link href={"https://www.instagram.com/"}>
            <Image src={instagramImg} alt="인스타그램" />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
