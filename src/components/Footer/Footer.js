import { Link } from "react-router-dom";
import FacebookIcon from "../../assets/images/FacebookIcon.png";
import InstagramIcon from "../../assets/images/InstagramIcon.png";
import XIcon from "../../assets/images/XIcon.png";
import YoutubeIcon from "../../assets/images/YoutubeIcon.png";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copy}>© codeit - {new Date().getFullYear()}</div>

        <div className={styles.links}>
          <Link href="/privacy" className={styles.link}>
            Privacy Policy
          </Link>
          <Link href="/faq" className={styles.link}>
            FAQ
          </Link>
        </div>

        <div className={styles.social}>
          <a href="https://www.facebook.com/" aria-label="Facebook">
            <img
              src={FacebookIcon}
              alt="페이스북 아이콘"
              className={styles.icon}
            />
          </a>
          <a href="https://x.com/" aria-label="X (Twitter)">
            <img src={XIcon} alt="X 아이콘" className={styles.icon} />
          </a>
          <a href="https://www.youtube.com/" aria-label="YouTube">
            <img
              src={YoutubeIcon}
              alt="유튜브 아이콘"
              className={styles.icon}
            />
          </a>
          <a href="https://www.instagram.com/" aria-label="Instagram">
            <img
              src={InstagramIcon}
              alt="인스타그램 아이콘"
              className={styles.icon}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
