import facebookLogo from "../img/ic_facebook.svg";
import twitterLogo from "../img/ic_twitter.svg";
import youtubeLogo from "../img/ic_youtube.svg";
import instagramLogo from "../img/ic_instagram.svg";
import "./css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
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
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookLogo} alt="페이스북 로고" loading="lazy" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="트위터 로고" loading="lazy" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeLogo} alt="유튜브 로고" loading="lazy" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="인스타그램 로고" loading="lazy" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
