import facebookIcon from "@/assets/icons/ic_facebook.svg";
import twitterIcon from "@/assets/icons/ic_twitter.svg";
import youtubeIcon from "@/assets/icons/ic_youtube.svg";
import instagramIcon from "@/assets/icons/ic_instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-background-dark whitespace-nowrap">
      <div
        className="flex flex-wrap items-center gap-y-lg px-md pt-xl pb-[65px]
      md:flex-nowrap md:justify-between md:pb-27
      xl:w-[1110px] mx-auto"
      >
        <div
          className="flex gap-[30px] text-text-light grow basis-[40%]
        md:basis-auto md:grow-0"
        >
          <span>Privacy Policy</span>
          <span>FAQ</span>
        </div>
        <div className="flex gap-[12px] basis-auto">
          <a href="https://www.facebook.com" rel="noopener noreferrer">
            <img className="w-6" src={facebookIcon} alt="페이스북 아이콘" />
          </a>
          <a href="https://twitter.com" rel="noopener noreferrer">
            <img className="w-6" src={twitterIcon} alt="트위터 아이콘" />
          </a>
          <a href="https://www.youtube.com" rel="noopener noreferrer">
            <img className="w-6" src={youtubeIcon} alt="유튜브 아이콘" />
          </a>
          <a href="https://www.instagram.com" rel="noopener noreferrer">
            <img className="w-6" src={instagramIcon} alt="인스타그램 아이콘" />
          </a>
        </div>
        <span
          className="text-text-grey400 basis-[51%]
        md:order-first md:basis-auto"
        >
          ©codeit - 2025
        </span>
      </div>
    </footer>
  );
};

export default Footer;
