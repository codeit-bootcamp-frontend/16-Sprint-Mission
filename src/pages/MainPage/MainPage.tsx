import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import introImg1 from "@/assets/img/img_home_01.png";
import introImg2 from "@/assets/img/img_home_02.png";
import introImg3 from "@/assets/img/img_home_03.png";
import Closing from "./components/Closing";
import Footer from "./components/Footer";

const INTRODUCTION_MAP = {
  section1: {
    className: "items-start text-left",
    imgSrc: introImg1,
    keyword: "Hot item",
    title: "인기 상품을\n확인해보세요",
    description: "가장 HOT한 중고거래 물품을\n판다 마켓에서 확인해보세요",
  },
  section2: {
    className: "items-end text-right xl:flex-row-reverse",
    imgSrc: introImg2,
    keyword: "Search",
    title: "구매를 원하는\n상품을 검색하세요",
    description: "구매하고 싶은 물품은 검색해서\n쉽게 찾아보세요",
  },
  section3: {
    className: "items-start text-left",
    imgSrc: introImg3,
    keyword: "Register",
    title: "판매를 원하는\n상품을 등록하세요",
    description: "어떤 물건이든 판매하고 싶은 상품을\n쉽게 등록하세요",
  },
};

const MainPage = () => {
  return (
    <div className="min-w-[375px]">
      <Hero />
      <div
        className="flex flex-col gap-[40px] px-md pt-[52px] pb-[82px]
      md:gap-[52px] md:p-lg md:pb-[56px]
      xl:gap-[138px] xl:py-[138px]"
      >
        <Introduction
          className={INTRODUCTION_MAP.section1.className}
          imgSrc={INTRODUCTION_MAP.section1.imgSrc}
          keyword={INTRODUCTION_MAP.section1.keyword}
          title={INTRODUCTION_MAP.section1.title}
          description={INTRODUCTION_MAP.section1.description}
        />
        <Introduction
          className={INTRODUCTION_MAP.section2.className}
          imgSrc={INTRODUCTION_MAP.section2.imgSrc}
          keyword={INTRODUCTION_MAP.section2.keyword}
          title={INTRODUCTION_MAP.section2.title}
          description={INTRODUCTION_MAP.section2.description}
        />
        <Introduction
          className={INTRODUCTION_MAP.section3.className}
          imgSrc={INTRODUCTION_MAP.section3.imgSrc}
          keyword={INTRODUCTION_MAP.section3.keyword}
          title={INTRODUCTION_MAP.section3.title}
          description={INTRODUCTION_MAP.section3.description}
        />
      </div>
      <Closing />
      <Footer />
    </div>
  );
};

export default MainPage;
