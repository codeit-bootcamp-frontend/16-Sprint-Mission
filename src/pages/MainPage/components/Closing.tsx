import closingImg from "@/assets/img/img_home_bottom.png";

const Closing = () => {
  return (
    <section className="bg-background-blue">
      <div className="xl:flex xl:justify-center xl:items-center xl:gap-10 xl:w-[1110px] xl:pt-36 xl:mx-auto">
        <div
          className="text-[32px] text-text-grey700 text-center font-bold color py-30
        md:text-[40px] md:py-50
        xl:text-start xl:py-0 xl:pb-15"
        >
          믿을 수 있는
          <br />
          판다마켓 중고 거래
        </div>
        <img
          className="w-[100%]
        xl:w-[746px] xl:h-[397px]"
          src={closingImg}
          alt="판다가 리뷰와 별점을 남기는 이미지"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Closing;
