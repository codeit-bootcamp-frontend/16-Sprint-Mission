import facebookLogo from "../img/ic_facebook.svg";
import twitterLogo from "../img/ic_twitter.svg";
import youtubeLogo from "../img/ic_youtube.svg";
import instagramLogo from "../img/ic_instagram.svg";
import "./css/Footer.css";
import { Link } from "react-router-dom";
import SnsLink from "./SnsLink";

const Footer = () => {
  const snsLinks = [
    {
      href: "https://www.facebook.com",
      logo: facebookLogo,
      alt: "페이스북 로고",
    },
    {
      href: "https://x.com",
      logo: twitterLogo,
      alt: "트위터 로고",
    },
    {
      href: "https://www.youtube.com",
      logo: youtubeLogo,
      alt: "유튜브 로고",
    },
    {
      href: "https://www.instagram.com",
      logo: instagramLogo,
      alt: "인스타그램 로고",
    },
  ];

  return (
    <footer>
      <div className="footer__content">
        <div className="footer__content__menu">
          <span className="footer__content__copyright">@codeit - 2024</span>
          <div className="footer__content__link">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/faq">FAQ</Link>
          </div>
        </div>

        <div className="footer__content__sns">
          {snsLinks.map((snsLink, index) => (
            <SnsLink
              key={index}
              href={snsLink.href}
              logo={snsLink.logo}
              alt={snsLink.alt}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
