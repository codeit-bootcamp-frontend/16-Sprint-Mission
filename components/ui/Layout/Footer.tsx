import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "../../../public/images/ic_facebook.svg";
import InstagramIcon from "../../../public/images/ic_instagram.svg";
import TwitterIcon from "../../../public/images/ic_twitter.svg";
import YoutubeIcon from "../../../public/images/ic_youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200" aria-label="하단 정보">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center max-w-[1120px] my-0 mx-auto py-8 px-4 md:px-6 lg:px-0">
        <div className="w-full md:w-auto pt-9 md:pt-0 text-gray-400 order-3 md:order-1">
          ©codeit - 2025
        </div>

        <div className="flex gap-[30px] order-1 md:order-2">
          <Link href="/" aria-label="개인정보처리방침">
            Privacy Policy
          </Link>
          <Link href="/" aria-label="자주 묻는 질문">
            FAQ
          </Link>
        </div>

        <div
          className="flex gap-3 items-center order-2 md:order-3"
          aria-label="SNS 바로가기"
        >
          <a
            href="https://www.facebook.com/?locale=ko_KR"
            target="_blank"
            aria-label="판다마켓 페이스북 열기"
            title="클릭 시 판다마켓 페이스북으로 이동합니다."
            rel="noopener noreferrer"
          >
            <Image
              src={FacebookIcon}
              width={20}
              height={20}
              alt="페이스북 아이콘"
            />
          </a>
          <a
            href="https://x.com/login?lang=ko"
            target="_blank"
            aria-label="판다마켓 트위터 열기"
            title="클릭 시 판다마켓 트위터로 이동합니다."
            rel="noopener noreferrer"
          >
            <Image
              src={TwitterIcon}
              alt="트위터 아이콘"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.youtube.com/?hl=ko&gl=KR&app=desktop"
            target="_blank"
            aria-label="판다마켓 유튜브 열기"
            title="클릭 시 판다마켓 유튜브로 이동합니다."
            rel="noopener noreferrer"
          >
            <Image
              src={YoutubeIcon}
              alt="유튜브 아이콘"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            aria-label="판다마켓 인스타그램 열기"
            title="클릭 시 판다마켓 인스타그램으로 이동합니다."
            rel="noopener noreferrer"
          >
            <Image
              src={InstagramIcon}
              alt="인스타그램 아이콘"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
