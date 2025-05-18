import styles from "../css/Footer.module.css";
import facebookIcon from "../assets/icon/ic_facebook.png";
import instaIcon from "../assets/icon/ic_instagram.png";
import twitterIcon from "../assets/icon/ic_twitter.png";
import youtubeIcon from "../assets/icon/ic_youtube.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} ${styles.container} container`}>
        <span>©codeit - 2024</span>
        <div>
          <a aria-label="약관으로 이동" href="./privacy">
            Privacy Policy
          </a>
          <a aria-label="FAQ로 이동" href="./faq">
            FAQ
          </a>
        </div>
        <ul className={styles['footer__sns-list']}>
          <li>
            <a
              rel="noopener noreferer"
              aria-label="페이스북으로 이동"
              target="_blank"
              href="https://www.facebook.com/?locale=ko_KR"
            >
              <img src={facebookIcon} alt="페이스북 아이콘" />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferer"
              aria-label="X(구 트위터)로 이동"
              target="_blank"
              href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoia28ifQ%3D%3D%22%7D"
            >
              <img src={twitterIcon} alt="트위터 아이콘" />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferer"
              aria-label="유튜브로 이동"
              target="_blank"
              href="https://www.youtube.com/?hl=ko&gl=KR&app=desktop"
            >
              <img src={youtubeIcon} alt="유튜브 아이콘" />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferer"
              aria-label="인스타그램으로 이동"
              target="_blank"
              href="https://www.instagram.com/"
            >
              <img src={instaIcon} alt="인스타그램 아이콘" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
