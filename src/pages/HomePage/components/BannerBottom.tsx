const BannerBottom = () => {
  return (
    <section className='bg-[#CFE5FF] '>
      <div
        className='flex max-w-[1110px] mx-auto overflow-hidden items-center
        gap-[132px] pt-[121px] flex-col
        md:gap-[211px] md:pt-[201px] md:flex-col
        xl:gap-[8px] xl:pt-[143px] xl:flex-row'
      >
        <div
          className='flex flex-col justify-center items-center gap-[18px]
          w-[240px]
          md:w-[520px]
          xl:pb-[60px]'
        >
          <h1
            className='font-pretendard font-bold text-[#374151] break-keep
            text-center text-[32px]/[140%]
            md:text-center md:text-[40px]/[140%]
            xl:text-left xl:text-[40px]/[140%]'
          >
            믿을 수 있는
            <br /> 판다마켓 중고거래
          </h1>
        </div>
        <img src='/images/Img_home_bottom.png' className='min-w-[448px] w-full' />
      </div>
    </section>
  );
};

export default BannerBottom;
