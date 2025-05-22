import { Link } from 'react-router-dom';
import './Banner.css';
import './Main.css';
import './Cards.css';
import './Card.css';
import './BannerBottom.css';
import './Footer.css';
import Nav from '../../components/Nav';

const HomePage = () => {
  return (
    <>
      <Nav currentSection={''} />
      <main className="page-main">
        <section className="banner">
          <article className="banner-container">
            <div className="banner-context">
              <h2 className="banner-title">일상의 모든 물건을 거래해 보세요</h2>
              <Link to="/items" className="button-style banner-button">
                구경하러 가기
              </Link>
            </div>
            <img
              className="banner-image"
              src="./images/Img_home_top/Img_home_top@1x.png"
              width={746}
              srcSet="./images/Img_home_top/Img_home_top@0.5x.png 373w, ./images/Img_home_top/Img_home_top@1x.png   746w, ./images/Img_home_top/Img_home_top@1.5x.png 1119w, ./images/Img_home_top/Img_home_top@2x.png   1492w"
              sizes="(min-width: 768px) 746px,(min-width: 375px) 447px"
              alt="판다마켓 중고거래"
              title="판다마켓 중고거래"
            ></img>
          </article>
        </section>
        <section className="page-cards">
          <article className={'card-container'}>
            <img
              className="card-image"
              src={'./images/Img_home_01/Img_home_01@1x.png'}
              width="344"
            ></img>
            <div className={`card-context`}>
              <h3 className="card-context-tag">Hot item</h3>
              <h2 className="card-context-title">
                {'인기 상품을 확인해 보세요'}
              </h2>
              <p className="card-context-subtitle">
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </article>
          <article className={'card-container reverse'}>
            <img
              className="card-image"
              src={'./images/Img_home_02/Img_home_02@1x.png'}
              width="344"
            ></img>
            <div className={`card-context`}>
              <h3 className="card-context-tag">Search</h3>
              <h2 className="card-context-title">
                구매를 원하는 상품을 검색하세요
              </h2>
              <p className="card-context-subtitle">
                구매하고 싶은 물품을 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
          </article>
          <article className={'card-container'}>
            <img
              className="card-image"
              src={'./images/Img_home_03/Img_home_03@1x.png'}
              width="344"
            ></img>
            <div className={`card-context`}>
              <h3 className="card-context-tag">Register</h3>
              <h2 className="card-context-title">
                판매를 원하는 상품을 등록하세요
              </h2>
              <p className="card-context-subtitle">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </article>
        </section>
        <section id="banner-bottom" className="banner">
          <article className="banner-container">
            <div className="banner-context">
              <h2 className="banner-title">
                믿을 수 있는
                <br />
                판다마켓 중고 거래
              </h2>
            </div>
            <img
              className="banner-image"
              src="./images/Img_home_bottom/Img_home_bottom@1x.png"
              width={746}
            ></img>
          </article>
        </section>
      </main>
      <footer className="page-footer">
        <div className="footer-container">
          <span className="footer-corporation">@codeit - 2024</span>
          <div className="footer-link">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div className="footer-social">
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer-social-image"
                src="./images/ic_facebook.png"
                width={18}
              />
            </a>
            <a
              href="https://x.com/?lang=ko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer-social-image"
                src="./images/ic_twitter.png"
                width={18}
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer-social-image"
                src="./images/ic_youtube.png"
                width={18}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer-social-image"
                src="./images/ic_instagram.png"
                width={18}
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
