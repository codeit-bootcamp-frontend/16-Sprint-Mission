import { Link } from "react-router-dom";
import icFacebook from "../assets/images/icons/ic_facebook.svg";
import icTwitter from "../assets/images/icons/ic_twitter.svg";
import icYoutube from "../assets/images/icons/ic_youtube.svg";
import icInstagram from "../assets/images/icons/ic_instagram.svg";

const snsImgList = {
  facebook: icFacebook,
  twitter: icTwitter,
  youtube: icYoutube,
  instagram: icInstagram,
};

const Footer = () => {
  return (
    <footer id="footer">
      <div className="inner">
        <p className="footer__copy">©codeit - 2024</p>
        <ul className="footer__menu-list">
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
        <ul className="footer__sns-list">
          <li>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              aria-label="페이스북 홈페이지 새창으로 이동하기"
            >
              <img src={snsImgList["facebook"]} alt="" />
            </Link>
          </li>
          <li>
            <Link
              to="https://x.com/"
              target="_blank"
              aria-label="트위터 홈페이지 새창으로 이동하기"
            >
              <img src={snsImgList["twitter"]} alt="" />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.youtube.com/"
              target="_blank"
              aria-label="유튜브 홈페이지 새창으로 이동하기"
            >
              <img src={snsImgList["youtube"]} alt="" />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              aria-label="인스타그램 홈페이지 새창으로 이동하기"
            >
              <img src={snsImgList["instagram"]} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
