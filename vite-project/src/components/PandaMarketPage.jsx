import { Link } from "react-router-dom";
import "../css/reset.css";
import "../css/common.css";
import "../css/panda.css";

function PandaMarketPage() {
  return (
    <>
      <section className="header">
        <div className="header_top_container">
          <div className="header_top_box">
            <div className="header_top_logo">
              <Link to="/" aria-label="홈으로 이동">
                <picture className="logo_img">
                  <source
                    media="(max-width: 767px)"
                    srcSet="images/main-page/logo.svg"
                  />
                  <img
                    src="images/main-page/logo.png"
                    alt="로고"
                    className="logo_img"
                  />
                </picture>
              </Link>
            </div>
            <div className="header_top_login">
              <Link to="/login">
                <button className="login_button">로그인</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="header_spacer"></div>

      <section className="banner">
        <div className="header_banner">
          <div className="header_banner_container">
            <div className="header_banner_textbox">
              <h1>
                일상의 모든 물건을
                <br />
                거래해보세요
              </h1>
              <br />
              <Link to="/items" aria-label="상품 페이지로 이동">
                <button className="link_itmes_button">구경하러가기</button>
              </Link>
            </div>
            <div className="header_banner_imgbox">
              <img
                src="images/main-page/head-banner.png"
                className="header_img"
                alt="헤더 배너 이미지"
              />
            </div>
          </div>
        </div>
      </section>

      <article className="all-content">
        <div className="content">
          <div className="content_img_container">
            <img
              src="images/main-page/content_img1.png"
              className="content_img"
              alt="Hot item 이미지"
            />
          </div>
          <div className="content_font_container_left">
            <h2>Hot item</h2>
            <h1>
              인기 상품을
              <br />
              확인해 보세요
            </h1>
            <p>
              가장 HOT한 중고거래 물품을
              <br />
              판다마켓에서 확인해 보세요
            </p>
          </div>
        </div>

        <div className="content">
          <div className="content_font_container_right">
            <h2>Search</h2>
            <h1>
              구매를 원하는
              <br />
              상품을 검색하세요
            </h1>
            <p>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
          <div className="content_img_container">
            <img
              src="images/main-page/content_img2.png"
              className="content_img"
              alt="Search 이미지"
            />
          </div>
        </div>

        <div className="content">
          <div className="content_img_container">
            <img
              src="images/main-page/content_img3.png"
              className="content_img"
              alt="Register 이미지"
            />
          </div>
          <div className="content_font_container_left">
            <h2>Register</h2>
            <h1>
              판매를 원하는
              <br />
              상품을 등록하세요
            </h1>
            <p>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </article>

      <section className="banner">
        <div className="footer_banner">
          <div className="footer_banner_container">
            <div className="footer_banner_textbox">
              <h1>
                믿을 수 있는
                <br />
                판다마켓 중고 거래
              </h1>
              <br />
            </div>
            <div className="footer_banner_imgbox">
              <img
                src="images/main-page/footer_banner.png"
                className="footer_img"
                alt="Footer 배너 이미지"
              />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer">
          <div className="footer_container">
            <div className="footer_codeit">@codeit - 2024</div>
            <div className="footer_PPFAQ">
              <a href="privacy.html">Privacy Policy</a>
              <a href="faq.html">FAQ</a>
            </div>
            <div className="footer_link">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="images/main-page/facebook_logo.svg" alt="Facebook" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="images/main-page/twitter_logo.svg" alt="Twitter" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="images/main-page/youtube_logo.svg" alt="YouTube" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/main-page/instagram_logo.svg"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default PandaMarketPage;
