/** @jsxImportSource @emotion/react */
import MainPageStyle from "./MainPageStyle.ts";
import Footer from "@/components/ui/Footer";
import HomeTopImg from "@/assets/images/Img_home_top.png";
import HomeBottomImg from "@/assets/images/Img_home_bottom.png";
import HomeImg1 from "@/assets/images/Img_home_01.png";
import HomeImg1Small from "@/assets/images/Img_home_01_sm.png";
import HomeImg2 from "@/assets/images/Img_home_02.png";
import HomeImg2Small from "@/assets/images/Img_home_02_sm.png";
import HomeImg3 from "@/assets/images/Img_home_03.png";
import HomeImg3Small from "@/assets/images/Img_home_03_sm.png";
import Banner from "@/components/Banner/Banner.tsx";
import MainSection from "@/components/Section/MainSection.tsx";

const MainPage = () => {
  return (
    <main css={MainPageStyle}>
      <Banner
        title="일상의 모든 물건을 거래해 보세요"
        imgSrc={HomeTopImg}
        imgAlt="팬더가 파란 장바구니를 메고 마을 가운데에 서있는 일러스트"
        ariaLabel="상단 배너"
        linkTo="/products"
      />

      <div className="sections">
        <MainSection
          title="인기 상품을 확인해 보세요"
          label="Hot item"
          ariaLabel="인기 상품 확인"
          description={
            <>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </>
          }
          imgSrc={HomeImg1}
          imgMobileSrc={HomeImg1Small}
        />

        <MainSection
          reverse={true}
          title="구매를 원하는 상품을 검색하세요"
          label="Search"
          ariaLabel="상품 검색"
          description={
            <>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </>
          }
          imgSrc={HomeImg2}
          imgMobileSrc={HomeImg2Small}
        />

        <MainSection
          title="판매를 원하는 상품을 등록하세요"
          label="Register"
          ariaLabel="상품 등록"
          description={
            <>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </>
          }
          imgSrc={HomeImg3}
          imgMobileSrc={HomeImg3Small}
        />
      </div>

      <Banner
        title={
          <>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </>
        }
        imgSrc={HomeBottomImg}
        imgAlt="팬더 두 마리가 파란 장바구니를 메고 서로 상품 후기를 주고받는 일러스트"
        ariaLabel="하단 배너"
        lazyLoading={true}
      />
      <Footer />
    </main>
  );
};

export default MainPage;
