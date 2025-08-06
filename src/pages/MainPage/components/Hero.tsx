import heroImg from "@/assets/img/img_home_top.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="bg-background-blue text-center pt-[48px] mx-auto
    md:pt-[84px]
    xl:pt-[200px]"
    >
      <div className="xl:flex xl:items-center xl:w-[1110px] xl:h-[340px] xl:mx-auto">
        <div
          className="mb-[132px]
      md:mb-[211px]
      xl:mb-0"
        >
          <h2
            className="text-[32px] text-text-grey700 font-bold color mb-4.5
        md:text-[40px] md:mb-6
        xl:text-start xl:mb-8"
          >
            일상의 모든 물건을 <br className="md:hidden" />
            거래해보세요
          </h2>
          <Link to="/items">
            <button
              className="btn primary-btn text-[18px] w-[240px] h-[48px] px-14 py-3 rounded-[40px] leading-none
          md:text-[20px] md:w-[357px] md:h-[56px] md:px-30 md:py-4
          xl:mb-[60px]"
              type="button"
              aria-label="중고마켓 페이지 이동 버튼"
            >
              구경하러 가기
            </button>
          </Link>
        </div>
        <img
          className="w-[100%]"
          src={heroImg}
          alt="메인 화면의 장바구니를 든 판다 이미지"
        />
      </div>
    </section>
  );
};

export default Hero;
