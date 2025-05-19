import './root.css';

import navbarLogo from '../public/navbar-button.png';
import heroImg from '../public/Img_home_top.png';
import cardOneImg from '../public/Img_home_01.png';
import cardTwoImg from '../public/Img_home_02.png';
import cardThreeImg from '../public/Img_home_03.png';
import footerImg from '../public/Img_home_bottom.png';
import youtubeIcon from '../public/ic_youtube.png';
import twitterIcon from '../public/ic_twitter.png';
import facebookIcon from '../public/ic_facebook.png';
import instagramIcon from '../public/ic_instagram.png';

function Root() {
  return (
    <>
      <header>
        <nav className='nav'>
          <a href='/' className='navbar-button' type='button'>
            <img src={navbarLogo} alt='내비게이션 바 로고 버튼' />
          </a>
          <button className='login-button'>로그인</button>
        </nav>
      </header>
      <section className='section-with-background'>
        <div className='section-with-innerdiv'>
          <div className='hero-content'>
            <h1 className='hero-content-text'>
              일상의 모든 물건을 거래해보세요
            </h1>
            <a href='/items'>
              <button className='hero-content-button'>
                구경하러 가기
              </button>
            </a>
          </div>
          <img src={heroImg} alt='히어로 섹션 판다마켓 이미지' />
        </div>
      </section>
      <section className='section'>
        <div className='card'>
          <img src={cardOneImg} alt='첫번째 카드 이미지' />
          <div className='card-text'>
            <span>Hot Item</span>
            <h2>인기상품을 확인해보세요</h2>
            <p>가장 HOT한 중고거래 물품을 판다 마켓에서 확인해보세요</p>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='card card-reverse'>
          <img src={cardTwoImg} alt='두번째 카드 이미지' />
          <div className='card-text card-text-reverse'>
            <span>Search</span>
            <h2>구매를 원하는 상품은 검색하세요</h2>
            <p>구매하고 싶은 물품은 검색해서 쉽게 찾아보세요</p>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='card'>
          <img src={cardThreeImg} alt='세번째 카드 이미지' />
          <div className='card-text'>
            <span>Register</span>
            <h2>판매를 원하는 상품을 등록하세요</h2>
            <p>어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요</p>
          </div>
        </div>
      </section>
      <section className='section-with-background'>
        <div className='section-with-innerdiv'>
          <h2 className='footer-text'>믿을 수 있는 판다마켓 중고거래</h2>
          <img src={footerImg} alt='푸터 섹션 판다마켓 이미지' />
        </div>
      </section>
      <footer className='footer-nav'>
        <div className='nav'>
          <span className='footer-nav-text'>©codeit - 2024</span>
          <div className='footer-nav-link-container'>
            <a className='footer-nav-link'>Privacy Policy</a>
            <a className='footer-nav-link'>FAQ</a>
          </div>
          <div className='footer-nav-icon-container'>
            <a><img src={facebookIcon} alt='페이스북 아이콘' /></a>
            <a><img src={twitterIcon} alt='트위터 아이콘' /></a>
            <a><img src={youtubeIcon} alt='유튜브 아이콘' /></a>
            <a><img src={instagramIcon} alt='인스타 아이콘' /></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Root;
