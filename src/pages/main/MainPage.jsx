/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import MainPageStyle from "./MainPageStyle";
import PageContent from "@/components/layout/PageContent";
import Footer from "@/components/ui/Footer";
import Button from "@/components/ui/Button";
import HomeTopImg from "@/assets/images/Img_home_top.png";
import HomeTopImgSmall from "@/assets/images/Img_home_top_sm.png";
import HomeBottomImg from "@/assets/images/Img_home_bottom.png";
import HomeBottomImgSmall from "@/assets/images/Img_home_bottom_sm.png";
import HomeImg1 from "@/assets/images/Img_home_01.png";
import HomeImg1Small from "@/assets/images/Img_home_01_sm.png";
import HomeImg2 from "@/assets/images/Img_home_02.png";
import HomeImg2Small from "@/assets/images/Img_home_02_sm.png";
import HomeImg3 from "@/assets/images/Img_home_03.png";
import HomeImg3Small from "@/assets/images/Img_home_03_sm.png";
import { BREAKPOINTS } from "@/constants/responsive";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    // <PageContent>
    <>
      <main css={MainPageStyle}>
        <div className="banner banner-hero" aria-label="상단 배너">
          <div className="banner-container">
            <div className="banner-info">
              <h2 className="banner-title">일상의 모든 물건을 거래해 보세요</h2>
              <Button
                onClick={() => navigate("/products")}
                aria-label="상품 페이지로 이동"
                variant="primary"
                size="lg"
              >
                구경하러 가기
              </Button>
            </div>
            <img
              className="banner-img"
              srcSet={`${HomeTopImg} 746w, ${HomeTopImgSmall} 448w`}
              sizes={`(min-width: ${BREAKPOINTS.tablet}) 746px, 448px`}
              loading="eager"
              src="images/Img_home_top.png"
              alt="팬더가 파란 장바구니를 메고 마을 가운데에 서있는 일러스트"
            />
          </div>
        </div>
        <div className="sections">
          <section
            className="section section-hotitem"
            aria-label="인기 상품 확인"
          >
            <div className="section-container">
              <img
                srcSet={`${HomeImg1} 696w, ${HomeImg1Small} 344w`}
                sizes={`(min-width: ${BREAKPOINTS.tablet}) 580px, (min-width: 480px) 696px, 344px`}
                loading="lazy"
                src={HomeImg1}
                alt="두 마리의 팬더가 인기 상품인 초록색 티셔츠를 보고 있는 일러스트"
                className="section-img"
              />
              <div className="section-info">
                <div className="section-label">Hot item</div>
                <h2 className="section-title">인기 상품을 확인해 보세요</h2>
                <p className="section-desc">
                  가장 HOT한 중고거래 물품을
                  <br />
                  판다 마켓에서 확인해 보세요
                </p>
              </div>
            </div>
          </section>
          <section className="section section-search" aria-label="상품 검색">
            <div className="section-container">
              <img
                srcSet={`${HomeImg2} 696w, ${HomeImg2Small} 344w`}
                sizes={`(min-width: ${BREAKPOINTS.tablet}) 580px, (min-width: 480px) 696px, 344px`}
                loading="lazy"
                src={HomeImg2}
                alt="돋보기로 상품들 중 가운데 상품을 확대해서 보는 일러스트"
                className="section-img"
              />
              <div className="section-info">
                <div className="section-label">Search</div>
                <h2 className="section-title">
                  구매를 원하는 상품을 검색하세요
                </h2>
                <p className="section-desc">
                  구매하고 싶은 물품은 검색해서
                  <br />
                  쉽게 찾아보세요
                </p>
              </div>
            </div>
          </section>
          <section className="section section-register" aria-label="상품 등록">
            <div className="section-container">
              <img
                srcSet={`${HomeImg3} 696w, ${HomeImg3Small} 344w`}
                sizes={`(min-width: ${BREAKPOINTS.tablet}) 580px, (min-width: 480px) 696px, 344px`}
                loading="lazy"
                src={HomeImg3}
                alt="아래에 폴더들이 있고, 그 위에 마법봉으로 가운데의 연필꽂이, 공책, 하트 프레임 안경을 가리키는 일러스트"
                className="section-img"
              />
              <div className="section-info">
                <div className="section-label">Register</div>
                <h2 className="section-title">
                  판매를 원하는 상품을 등록하세요
                </h2>
                <p className="section-desc">
                  어떤 물건이든 판매하고 싶은 상품을
                  <br />
                  쉽게 등록하세요
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="banner" aria-label="하단 배너">
          <div className="banner-container">
            <div className="banner-info">
              <h2 className="banner-title">
                믿을 수 있는
                <br />
                판다마켓 중고 거래
              </h2>
            </div>
            <img
              className="banner-img"
              srcSet={`${HomeBottomImg} 746w, ${HomeBottomImgSmall} 448w`}
              sizes={`(min-width: ${BREAKPOINTS.tablet}) 746px, 448px`}
              loading="lazy"
              src={HomeBottomImg}
              alt="팬더 두 마리가 파란 장바구니를 메고 서로 상품 후기를 주고받는 일러스트"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
    // </PageContent>
  );
};

export default MainPage;
