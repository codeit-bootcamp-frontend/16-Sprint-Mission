/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FooterStyle from "./FooterStyle";

const Footer = () => {
  return (
    <footer css={FooterStyle} aria-label="하단 정보">
      <div className="footer-container">
        <div className="copyright">©codeit - 2024</div>
        <div className="footer-menu">
          <a href="privacy.html" aria-label="개인정보처리방침">
            Privacy Policy
          </a>
          <a href="faq.html" aria-label="자주 묻는 질문">
            FAQ
          </a>
        </div>
        <div className="sns" aria-label="SNS 바로가기">
          <a
            href="https://www.facebook.com/?locale=ko_KR"
            target="_blank"
            aria-label="판다마켓 페이스북 열기"
            title="클릭 시 판다마켓 페이스북으로 이동합니다."
            rel="noopener noreferrer"
          >
            <img src="images/ic_facebook.png" alt="페이스북 아이콘" />
          </a>
          <a
            href="https://x.com/login?lang=ko"
            target="_blank"
            aria-label="판다마켓 트위터 열기"
            title="클릭 시 판다마켓 트위터로 이동합니다."
            rel="noopener noreferrer"
          >
            <img src="images/ic_twitter.png" alt="트위터 아이콘" />
          </a>
          <a
            href="https://www.youtube.com/?hl=ko&gl=KR&app=desktop"
            target="_blank"
            aria-label="판다마켓 유튜브 열기"
            title="클릭 시 판다마켓 유튜브로 이동합니다."
            rel="noopener noreferrer"
          >
            <img src="images/ic_youtube.png" alt="유튜브 아이콘" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            aria-label="판다마켓 인스타그램 열기"
            title="클릭 시 판다마켓 인스타그램으로 이동합니다."
            rel="noopener noreferrer"
          >
            <img src="images/ic_instagram.png" alt="인스타그램 아이콘" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
