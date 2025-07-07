import Image from "next/image";
import homeImg_01 from "../../public/images/img/Img_home_01.svg";
import homeImg_02 from "../../public/images/img/Img_home_02.svg";
import homeImg_03 from "../../public/images/img/Img_home_03.svg";
import topImg from "../../public/images/img/Img_home_top.svg";
import bottomImg from "../../public/images/img/Img_home_bottom.svg";
import HomeMain from "./home-main";
import Button from "../button";

export default function HomeContent() {
  return (
    <>
      <section
        className="bg-[#CFE5FF] h-[540px] flex flex-col justify-between items-center 
      md:min-w-[744px] md:min-h-[771px] xl:min-h-[540px] xl:flex-row xl:items-end xl:justify-center"
      >
        <div className="flex flex-col items-center justify-center text-center mt-[48px] gap-[18px] md:mt-[84px] md:gap-[24px] xl:items-start xl:text-start xl:mb-[80px]">
          <span className="text-secondary-700 text-[32px] font-bold xl:text-[40px]">
            일상의 모든 물건을
            <br className="md:hidden xl:inline" /> 거래해보세요
          </span>
          <Button
            href={"/"}
            className={
              "cursor-pointer w-[240px] h-[48px] text-[18px] text-semibold text-secondary-50 bg-primary-100 rounded-[40px] md:w-[357px] md:h-[56px] md:text-[20px]"
            }
          >
            구경하러 가기
          </Button>
        </div>
        <Image
          src={topImg}
          alt="판다마켓 구경하러가기"
          className="object-cover w-[448px] h-[204px] md:object-cover md:w-[744px] md:h-[340px]"
        />
      </section>
      <HomeMain
        itemImg={homeImg_01}
        title={"Hot item"}
        subTitle={"인기 상품을"}
        subTitle2={"찾아보세요"}
        content={"가장 HOT한 중고거래 물품을"}
        content2={"판다 마켓에서 확인해 보세요"}
      />
      <HomeMain
        itemImg={homeImg_02}
        title={"Search"}
        subTitle={"구매를 원하는"}
        subTitle2={"상품을 검색하세요"}
        content={"구매하고 싶은 물푼은 검색해서"}
        content2={"쉽게 찾아보세요"}
        reverse={true}
      />
      <HomeMain
        itemImg={homeImg_03}
        title={"Register"}
        subTitle={"판매를 원하는"}
        subTitle2={"상품을 등록하세요"}
        content={"어떤 물품이든 판매하고 싶은 상품을"}
        content2={"쉽게 등록하세요"}
      />
      <section
        className="bg-[#CFE5FF] h-[540px] flex flex-col justify-between items-center 
      md:min-w-[744px] md:min-h-[771px] xl:min-h-[540px] xl:flex-row xl:items-end xl:justify-center"
      >
        <div className="flex flex-col items-center justify-center text-center mt-[48px] gap-[18px] md:mt-[84px] md:gap-[24px] xl:items-start xl:text-start xl:mb-[160px]">
          <span className="text-secondary-700 text-[32px] font-bold xl:text-[40px]">
            믿을 수 있는
            <br /> 판다마켓 중고 거래
          </span>
        </div>
        <Image
          src={bottomImg}
          alt="판다마켓 중고거래"
          className="object-cover w-[448px] md:w-[744px] "
        />
      </section>
    </>
  );
}
